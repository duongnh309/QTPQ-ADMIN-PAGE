import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import { Button, Checkbox } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSnackbar } from 'notistack';
import queryString from "query-string";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import Pagination from '../../../../../components/Pagination';
import useAdminCategories from '../../../ProductManager/hooks/use-get-categories';
import useAddDiscountToProductList from '../../hooks/use-add-discount-to-products';
import useGetAllProduct from '../../hooks/use-get-all-product-without-id';
import useGetDiscountById from '../../hooks/use-get-discount-byId';
import { numberWithCommas } from "../../../../../components/helper"
ProductNoDiscount.propTypes = {
};

ProductNoDiscount.defaultProps = {
    products: [],
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    },

    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
    },

}));

const MODE = {
    CREATE: 'create',
    UPDATE: 'update',
};


function ProductNoDiscount() {
    const location = useLocation();
    const param = queryString.parse(location.search);

    const [filter, setFilter] = useState({
        size: 9,
        page: 0,
        category: '',
        price: ''
    });

    const { enqueueSnackbar } = useSnackbar();
    const { data: response, isLoading } = useGetAllProduct(filter);
    const { data: discount, isLoading: isLoadingDiscount } = useGetDiscountById(param.id);
    const { data: categories, isLoading: isLoadCategories } = useAdminCategories();
    const { mutate: addToProductList } = useAddDiscountToProductList();

    const [selected, setSelected] = React.useState([]);
    const history = useHistory();

    const handleSearch = (value) => {
        setFilter({ ...filter, ...value });
    };

    const handleNumberOfRecords = (e) => {
        const numberInPages = e.target[e.target.selectedIndex].getAttribute('value');
        setFilter({ ...filter, size: numberInPages });
    }

    const handlePrice = (e) => {
        const price = e.target[e.target.selectedIndex].getAttribute('value');
        const newFilter = { ...filter, price };
        setFilter(newFilter);
    }

    const handleConfirm = async () => {
        await addToProductList({ productId: selected, discountId: param.id });
        enqueueSnackbar('Update successfully', { variant: 'success' });
        history.goBack();
    }

    const handleCancel = () => {
        history.goBack();
    }
    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    //Search sp
    const form = useForm();
    const { register, handleSubmit } = form;

    //From Update
    const classes = useStyles();
    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div className="row">
            <div className="col-md-12">

                <div className="panel panel-default ">
                    <div className="panel-heading"> Sale off: {discount?.saleOff} | From: {discount?.startDate} to: {discount?.endDate}</div>

                    <div className="panel-body">

                        <div className="table-responsive">
                            <div className="flex justify-between flex-wrap-reverse">
                                <div className=" ">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className="btn icon-btn btn-success w-40"
                                        onClick={handleConfirm}
                                    >
                                        Confirm
                                    </Button>
                                    <button
                                        variant="outlined"
                                        className="btn btn-danger ml-20 w-40"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
                                    <div className="dataTables_length ml-12">

                                    </div>
                                </div>
                                <div className=" flex flex-wrap">
                                    <form
                                        onSubmit={handleSubmit(handleSearch)}
                                        className="shrink-0"
                                    >
                                        <div
                                            id="dataTables-example_filter"
                                            className="dataTables_filter"
                                        >
                                            <label>
                                                <select
                                                    name="records"
                                                    aria-controls="dataTables-example"
                                                    className="form-control input-sm col-sm-4"
                                                    {...register("category")}
                                                >
                                                    {categories?.map(x => <option value={x.id}>{x.name}</option>)}
                                                </select>
                                            </label>
                                            <label
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginLeft: "2em",
                                                }}
                                            >
                                                Search:
                                                <input
                                                    type="search"
                                                    className="form-control input-sm"
                                                    aria-controls="dataTables-example"
                                                    {...register("name")}
                                                />
                                            </label>
                                        </div>
                                    </form>

                                    <div
                                        onChange={handlePrice}
                                        className="dataTables_filter ml-12"
                                    >
                                        <label>
                                            <span className="pt-2">Price:</span>
                                            <select
                                                name="records"
                                                aria-controls="dataTables-example"
                                                className="form-control input-sm col-sm-4"
                                            >
                                                <option value="10000000:1000000000">Greater than {numberWithCommas(10000000)}</option>
                                                <option value="5000000:10000000" selected>
                                                    {numberWithCommas(5000000)} to {numberWithCommas(10000000)}
                                                </option>
                                                <option value="2000000:5000000">{numberWithCommas(2000000)} to {numberWithCommas(5000000)}</option>
                                                <option value="800000:2000000">{numberWithCommas(800000)} to {numberWithCommas(2000000)}</option>
                                                <option value="100000:800000">{numberWithCommas(100000)} to {numberWithCommas(800000)}</option>
                                                <option value="10000:100000">{numberWithCommas(10000)} to {numberWithCommas(100000)}</option>
                                                <option value="">Default</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {isLoading ? (
                                <Box sx={{ display: "flex" }}>
                                    <CircularProgress />
                                </Box>
                            ) : (
                                <TableContainer component={Paper}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3>Discount manager</h3>
                                        </div>
                                    </div>
                                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} ></TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Id</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Name</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Category</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Price(Vnđ)</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Retail(Vnđ)</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Discount(%)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {response?.data.map((row, index) => {
                                                return (
                                                    <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.id)}
                                                        role="checkbox"
                                                        aria-checked={isSelected(row.id)}
                                                        tabIndex={-1}
                                                        key={row.id}
                                                        selected={isSelected(row.id)}
                                                    >
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                                color="primary"
                                                                checked={isSelected(row.id)}
                                                                inputProps={{
                                                                    'aria-labelledby': `enhanced-table-checkbox-${index}`,
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{row.id}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{row.name}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{row.categoryName}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{numberWithCommas(row.price)}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{numberWithCommas(row.retail)}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{row.saleOff}</TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}

                            <div className="row">
                                <div className="col-sm-6">
                                    <div
                                        className="dataTables_info w-1/5"
                                        id="dataTables-example_info"
                                        role="alert"
                                        aria-live="polite"
                                        aria-relevant="all"
                                    ><label>
                                            <span className="mt-2">Records per page:</span>

                                            <select
                                                onChange={handleNumberOfRecords}
                                                name="records"
                                                aria-controls="dataTables-example"
                                                className="form-control input-sm"
                                            >
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                        </label></div>
                                </div>
                                <div className="col-sm-6">

                                    <div
                                        className="dataTables_paginate paging_simple_numbers"
                                        id="dataTables-example_paginate"
                                    >
                                        <Pagination
                                            filter={filter}
                                            setFilter={setFilter}
                                            total={response?.totalPage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Advanced Tables */}
            </div>
        </div>
    );
}

export default ProductNoDiscount;