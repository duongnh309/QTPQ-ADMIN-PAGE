import {
  Box,
  Button,
  CircularProgress, IconButton,
  makeStyles
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Collapse, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { numberWithCommas } from "../../../../../components/helper";
import useGetAllMenu from "../../hooks/use-get-all-menu";



function MenuTable() {
  const [menu, setMenu] = useState("");
  const history = useHistory();

  const { data, isLoading } = useGetAllMenu();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    history.push("/admin/menu/create-page");
  };

  const handleClose = () => {
    setOpen(false);
  };
  //Search sp
  const form = useForm();

  //Xu ly so sp hien thi tren table

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {
                setOpen(!open);
                setMenu(row.id);
              }}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} component="th" scope="row">
            {row.menuName}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.description}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.startDate}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.endDate}
          </TableCell>
          <TableCell sx={{ fontSize: 12 }} align="left">
            {row.status}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>

              <Box sx={{ margin: 1 }}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Product List
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                        align="left"
                      >
                        ID
                      </TableCell>
                      <TableCell
                        sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                        align="left"
                      >
                        Image
                      </TableCell>
                      <TableCell
                        sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                        align="left"
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                        align="left"
                      >
                        Unit price
                      </TableCell>
                      <TableCell
                        sx={{ width: 300, fontSize: 14, fontWeight: "bold" }}
                        align="left"
                      >
                        Quantity
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.products?.map((detail) => (
                      <>
                        <TableRow>
                          <TableCell sx={{ fontSize: 14 }}>
                            {detail?.id}
                          </TableCell>
                          <TableCell
                            sx={{ fontSize: 14 }}
                            component="th"
                            scope="row"
                          >
                            <img
                              className="h-80"
                              src={detail?.imgLink}
                              alt="image1"
                            />
                          </TableCell>
                          <TableCell sx={{ fontSize: 14 }}>
                            {detail?.productName}
                          </TableCell>
                          <TableCell sx={{ fontSize: 14 }}>
                            {numberWithCommas(detail?.unitPrice)}
                          </TableCell>
                          <TableCell sx={{ fontSize: 14 }} align="left">
                            {detail?.quanlity}
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default ">
            <div className="panel-heading">Menu</div>
            {!isLoading && !data ? (
              "There no menus for this user"
            ) : (
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
                        Create a new menu{" "}
                      </Button>
                      <div className="dataTables_length ml-12"></div>
                    </div>
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
                          <TableCell sx={{ width: 100 }} />
                          <TableCell
                            sx={{
                              width: 50,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Menu name
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 200,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Description
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 150,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            Start date
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 150,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            End date
                          </TableCell>
                          <TableCell
                            sx={{
                              width: 150,
                              color: "text.primary",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            State
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data?.map((row) => (
                          <Row key={row.id} row={row} />
                        ))}
                      </TableBody>

                    </Table>
                  </TableContainer>
                )}
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className="dataTables_info"
                      id="dataTables-example_info"
                      role="alert"
                      aria-live="polite"
                      aria-relevant="all"
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*End Advanced Tables */}
        </div>
      </div>
    </div >
  );
}

export default MenuTable;
