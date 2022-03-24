

import { Box, Button, CircularProgress, Dialog, IconButton, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DialogContent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useGetAllDiscount from "../../../ProductManager/hooks/use-get-all-discount";
import CreateDiscount from "../../components/CreateDiscount";
import UpdateDiscount from "../../components/UpdateDiscount";
import LoupeIcon from '@mui/icons-material/Loupe';

DiscountManagerPage.propTypes = {};

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

const MODE = {
  CREATE: "create",
  UPDATE: "update",
};

function DiscountManagerPage(props) {
  const classes = useStyles();



  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.CREATE);
  const [discount, setDiscount] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const history = useHistory();
  const location = useLocation();

  const handleDelete = async (discountId) => {
    // await updateDiscount({ ...discount, quantity: 0 }, {
    //   onSuccess: () => {
    //     // history.replace(`/admin/sizes/${size.id}`);
    //     enqueueSnackbar('Update successfully', { variant: 'success' });
    //     handleClose();
    //   },
    //   onError: (error) => {
    //     enqueueSnackbar(error.message, { variant: 'error' });
    //   }
    // });
  }

  const handleSwitchPage = (discountId) => {
    history.push(`/admin/discount/product?discountId=${discountId}`)
  }

  const handleClickOpen = (selectedDiscount) => {
    setDiscount(selectedDiscount);
    setMode(MODE.UPDATE);
    setOpen(true);
  };

  const handleClose = () => {
    setMode(MODE.CREATE);
    setOpen(false);
  };

  const { data, isLoading } = useGetAllDiscount();
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default ">
            <div className="panel-heading">Discounts Tables</div>
            <div className="panel-body">
              <div className="table-responsive">
                {isLoading ? <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box> :

                  <TableContainer component={Paper}>

                    <Button variant="outlined" color="primary" onClick={handleOpen} className="btn icon-btn btn-success" >  <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success " />
                      Create a new discount </Button>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Id</TableCell>
                          <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Sale off</TableCell>
                          <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Start date</TableCell>
                          <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >End date</TableCell>
                          <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Update discount</TableCell>
                          <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Product list</TableCell>
                          {/* <TableCell sx={{ width: 100, color: 'text.primary', fontSize: 14, fontWeight: 'bold' }} >Delete discount</TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((row) => (
                          <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell sx={{ fontSize: 12 }} align="left">{row.id}</TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">{row.saleOff}</TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">{row.startDate}</TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">{row.endDate}</TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left"><button onClick={() => handleClickOpen(row)} className="btn btn-primary"><i className="fa fa-pencil"></i> Update</button></TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left"><button onClick={() => handleSwitchPage(row.id)} className="btn btn-primary"><LoupeIcon sx={{ marginBottom: 0.5 }} /> View</button></TableCell>
                            {/* <TableCell sx={{ fontSize: 12 }} align="left"><button onClick={() => handleDelete(row.id)} className="btn btn-danger"><i className="fa fa-pencil"></i> Delete</button></TableCell> */}
                          </TableRow>
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

                          <DialogContent sx={{ height: 500 }}>
                            {mode === MODE.UPDATE && discount !== '' && (
                              <>
                                <UpdateDiscount closeDialog={handleClose} discount={discount} />
                              </>

                            )}

                            {mode === MODE.CREATE && (
                              <>
                                <CreateDiscount closeDialog={handleClose} />
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableBody>
                    </Table>
                  </TableContainer>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default DiscountManagerPage;
