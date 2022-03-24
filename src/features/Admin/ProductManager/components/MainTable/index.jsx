import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  IconButton,
  makeStyles
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import LoupeIcon from "@mui/icons-material/Loupe";
import { DialogContent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { numberWithCommas } from "../../../../../components/helper";
import Pagination from "../../../../../components/Pagination";
import useDeleteProduct from "../../hooks/use-delete-product";
import useGetAllProducts from "../../hooks/use-get-all-products";
import useUnDeleteProduct from "../../hooks/use-undelete-product";
import CreateAProduct from "../../pages/CreateAProduct";
MainTable.propTypes = {};

MainTable.defaultProps = {
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
    color: "white",
    textDecoration: "none",
  },

  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

function MainTable() {
  const [filter, setFilter] = useState({
    size: 9,
    page: 0,
    name: "",
    category: "",
    price: "",
  });

  const { data: response, isLoading } = useGetAllProducts(filter);
  // const { data: categories, isLoading: isLoadCategories } =
  //   useAdminCategories();

  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleSearch = (value) => {
    setFilter({ ...filter, ...value });
  };

  const handleNumberOfRecords = (e) => {
    const numberInPages =
      e.target[e.target.selectedIndex].getAttribute("value");
    setFilter({ ...filter, size: numberInPages });
  };

  const handleClickOpen = (productId) => {
    history.push(`/admin/products/detail?id=${productId}`);
  };
  //Search sp
  const form = useForm();
  const { register, handleSubmit } = form;

  //From Update
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function Row(props) {
    const { row } = props;

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell sx={{ fontSize: 12 }} component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.productName}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.categories.categoryName}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {numberWithCommas(row.unitPrice)}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {numberWithCommas(row.quanlity)}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {numberWithCommas(row.description)}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            <button
              onClick={() => handleClickOpen(row.id)}
              className="btn btn-primary"
            >
              <LoupeIcon sx={{ marginBottom: 0.5 }} /> Detail
            </button>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="panel panel-default ">
          <div className="panel-heading">Product Managers Tables</div>
          <div className="panel-body">
            <div className="table-responsive">
              <div className="flex justify-between flex-wrap-reverse">
                <div className=" ">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleOpen}
                    className="btn icon-btn btn-success bg-red-400"
                  >
                    {" "}
                    <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success" />
                    Create a new product{" "}
                  </Button>
                  <div className="dataTables_length ml-12"></div>
                </div>
                <div className=" flex flex-wrap">
                  <form
                    onSubmit={handleSubmit(handleSearch)}
                    className="shrink-0"
                  ></form>
                </div>
              </div>
              {isLoading ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          ID
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 200,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Name
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 150,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Category
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 150,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Price(K)
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 150,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Quanlity
                        </TableCell>

                        <TableCell
                          sx={{
                            width: 50,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Description
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Update
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {response?.content.map((row) => (
                        <Row key={row.id} row={row} />
                      ))}
                      <Dialog
                        disableBackdropClick
                        disableEscapeKeyDown
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <IconButton
                          className={classes.closeButton}
                          onClick={handleClose}
                        >
                          <Close />
                        </IconButton>

                        <DialogContent sx={{ width: "600px" }}>
                          <>
                            <CreateAProduct closeDialog={handleClose} />
                          </>
                        </DialogContent>
                      </Dialog>
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
                  >
                    <label>
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
                    </label>
                  </div>
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

export default MainTable;
