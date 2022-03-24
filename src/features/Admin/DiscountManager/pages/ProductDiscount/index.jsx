import { Box, Button, CircularProgress, makeStyles } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import queryString from "query-string";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import Pagination from '../../../../../components/Pagination';
import useGetAllProductById from '../../hooks/use-get-all-product-by-id';
import useGetDiscountById from '../../hooks/use-get-discount-byId';
import useRemoveDiscount from '../../hooks/use-remove-discount';
import LoupeIcon from '@mui/icons-material/Loupe';
import useAdminCategories from '../../../ProductManager/hooks/use-get-categories';
import { numberWithCommas } from "../../../../../components/helper"
ProductDiscount.propTypes = {
};

ProductDiscount.defaultProps = {
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



function ProductDiscount() {
    const location = useLocation();
    const param = queryString.parse(location.search);

    const [filter, setFilter] = useState({
        size: 9,
        page: 0,
        value: '',
        category: '',
        price: '',
        discountId: param.discountId
    });
    const history = useHistory();

    const { data: response, isLoading } = useGetAllProductById(filter);
    const { data: discount, isLoading: isLoadingDiscount } = useGetDiscountById(param.discountId);
    const { data: categories, isLoading: isLoadCategories } = useAdminCategories();
    const { mutate: removeDiscount } = useRemoveDiscount(param.discountId);

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

    const handleClickOpen = (productId) => {
        history.push(`/admin/products/detail?id=${productId}`);
    };

    const handleApplyProduct = () => {
        history.push(`/admin/discount/products?id=${param.discountId}`);
    }

    const handleDelete = async (productId, discountId) => {
        await removeDiscount({ productId, discountId: parseInt(discountId) });
    }

    //Search sp
    const form = useForm();
    const { register, handleSubmit } = form;

    //From Update
    const classes = useStyles();

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
                                        className="btn icon-btn btn-success"
                                        onClick={handleApplyProduct}
                                    >
                                        {" "}
                                        <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success " />
                                        Apply more product{" "}
                                    </Button>
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
                                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Id</TableCell>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Name</TableCell>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Category</TableCell>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Price(Vnđ)</TableCell>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Retail(Vnđ)</TableCell>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Sale off(%)</TableCell>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Detail</TableCell>
                                                <TableCell sx={{ width: 150, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Remove</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {response?.data.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell sx={{ fontSize: 12 }} align="left">{row.id}</TableCell>
                                                    <TableCell sx={{ fontSize: 12 }} align="left">{row.name}</TableCell>
                                                    <TableCell sx={{ fontSize: 12 }} align="left">{row.categoryName}</TableCell>
                                                    <TableCell sx={{ fontSize: 12 }} align="left">{numberWithCommas(row.price)}</TableCell>
                                                    <TableCell sx={{ fontSize: 12 }} align="left">{numberWithCommas(row.retail)}</TableCell>
                                                    <TableCell sx={{ fontSize: 12 }} align="left">{row.saleOff}</TableCell>
                                                    <TableCell sx={{ fontSize: 12 }} align="left"><button onClick={() => handleClickOpen(row.id)} className="btn btn-primary"><LoupeIcon sx={{ marginBottom: 0.5 }} /> View</button></TableCell>
                                                    <TableCell sx={{ fontSize: 12 }} align="left"><button onClick={() => handleDelete(row.id, param.discountId)} className="btn btn-danger"> Remove</button></TableCell>
                                                </TableRow>
                                            ))}
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
        </div >
    );
}

export default ProductDiscount;