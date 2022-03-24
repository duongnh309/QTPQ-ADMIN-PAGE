import { Box, CircularProgress } from "@material-ui/core";
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
import Pagination from "../../../../../components/Pagination";
import useGetAllAccount from "../../hooks/useGetAllAccount";
import useUpdateAccount from "../../hooks/useUpdateAccount";

AccountManagerPage.propTypes = {};

function AccountManagerPage(props) {
  const form = useForm();
  const { handleSubmit, register } = form;

  const { mutate: updateAccount } = useUpdateAccount();
  const { enqueueSnackbar } = useSnackbar();

  const handleUpdate = async (customerId, active) => {
    await updateAccount(
      { customerId, active },
      {
        onSuccess: () => {
          enqueueSnackbar("Update successfully", { variant: "success" });
        },
        onError: (error) => {
          enqueueSnackbar(error.message, { variant: "error" });
        },
      }
    );
  };

  const { data: response, isLoading } = useGetAllAccount();
  console.log(response, "Data Accounttttttt");
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="panel panel-default ">
          <div className="panel-heading">Seller Accounts</div>

          <div className="panel-body">
            <div className="table-responsive">
              <div className="flex justify-between flex-wrap-reverse">
                <div className=" flex flex-wrap">
                  <form className="shrink-0">
                    <div className="dataTables_filter"></div>
                  </form>
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
                          Id
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          User name
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Name
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Phone
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Email
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Partner
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Menu
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Edit
                        </TableCell>
                        <TableCell
                          sx={{
                            width: 100,
                            color: "text.primary",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Delete
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {response?.data.map((row) => {
                        return (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              {row.id}
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              {row.username}
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              {row.name}
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              {row.phone}
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              {row.mail}
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              {row.partner.name}
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              {row.menu.menuName}
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              <button
                                onClick={() => handleUpdate(row.id, true)}
                                className="btn btn-primary w-40"
                              >
                                {" "}
                                Edit
                              </button>
                            </TableCell>
                            <TableCell sx={{ fontSize: 12 }} align="left">
                              <button
                                onClick={() => handleUpdate(row.id, false)}
                                className="btn btn-danger"
                              >
                                {" "}
                                Delete
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </div>
          </div>
        </div>
        {/*End Advanced Tables */}
      </div>
    </div>
  );
}

export default AccountManagerPage;
