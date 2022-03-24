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
import { useHistory, useLocation } from 'react-router-dom';
import { numberWithCommas } from "../../../../../components/helper";
import Pagination from '../../../../../components/Pagination';
import useGetAllProducts from '../../hooks/use-get-all-products';
SelectProductTable.propTypes = {
};

SelectProductTable.defaultProps = {
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


function SelectProductTable({ selected, setSelected }) {

    const [filter, setFilter] = useState({
        size: 9,
        page: 0,
        category: '',
        price: ''
    });
    const { data: response, isLoading } = useGetAllProducts(filter);

    const { enqueueSnackbar } = useSnackbar();


    const handleNumberOfRecords = (e) => {
        const numberInPages = e.target[e.target.selectedIndex].getAttribute('value');
        setFilter({ ...filter, size: numberInPages });
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

    //From Update
    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div className="row">
            <div className="col-md-12">

                <div className="panel panel-default ">
                    <div className="panel-heading"> Products table</div>

                    <div className="panel-body">

                        <div className="table-responsive">
                            <div className="flex justify-between flex-wrap-reverse">

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
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} ></TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Id</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Name</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Category</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Price(K)</TableCell>
                                                <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Quantity(Vnđ)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {response?.content.map((row, index) => {
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
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{row.productName}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{row.categories.categoryName}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{numberWithCommas(row.unitPrice)}</TableCell>
                                                        <TableCell sx={{ fontSize: 12 }} align="left">{numberWithCommas(row.quanlity)}</TableCell>
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
                                        className="dataTables_info w-1/3"
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
                                                className="form-control mt-3"
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
                                            total={response?.totalPages}
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

export default SelectProductTable;