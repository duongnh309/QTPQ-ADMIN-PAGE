/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button, Dialog,
  IconButton,
  makeStyles
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DialogContent } from '@mui/material';
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import useGetAllCategories from "../../hooks/use-get-all-categories";
import CreateCategory from "../../pages/CreateCategory";
import UpdateCategory from "../../pages/UpdateCategory";

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

function MainTable(props) {

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [category, setCategory] = useState({});
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("");
  // const { mutate: deleteCategory } = useDeleteCategory();
  // const { mutate: enableCategory } = useEnableCategory();
  const { data, isLoading } = useGetAllCategories();


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // const handleDeleteClick = async (id) => {
  //   await deleteCategory(id);
  //   enqueueSnackbar("Create successfully", { variant: "success" });
  // };

  // const handleEnable = async (id) => {
  //   await enableCategory(id);
  //   enqueueSnackbar("Create successfully", { variant: "success" });
  // };

  return (
    <div>

      {/* /. NAV SIDE  */}
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Category Manager</h2>
              <h5>Welcome to category manager pages. </h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="register">

          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-heading">Category Table</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        handleOpen();
                        setMode("create");
                      }}
                      className="btn icon-btn btn-success"
                    >
                      {" "}
                      <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success " />
                      Create category{" "}
                    </Button>
                    <table
                      className="table table-striped table-bordered table-hover w-3/4"
                      id="dataTables-example"
                    >
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          {/* <th>Status</th>
                          <th>Enable</th>
                          <th>Disable</th> */}
                          <th>Update</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((category) => (
                            <tr className="odd gradeX" key={category.id}>
                              <td>{category.id}</td>
                              <td>{category.name}</td>
                              {/* <td>{category.deleted ? 'disable' : 'enable'}</td>
                              <td>
                                <button
                                  onClick={() => handleEnable(category.id)}
                                  className="btn btn-success"
                                >
                                  Enable
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() => handleDeleteClick(category.id)}
                                  className="btn btn-danger"
                                >
                                  Disable
                                </button>
                              </td> */}
                              <td>
                                <button
                                  onClick={() => {
                                    handleOpen();
                                    setCategory(category);
                                    setMode("update");
                                  }}
                                  className="btn btn-primary"
                                >
                                  <i className="fa fa-pencil"></i> Update
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {/* <PaginationCompnent filter={filter} setFilter={setFilter} /> */}
                  </div>
                </div>
              </div>
              {/*End Advanced Tables */}
            </div>
          </div>
        </div>
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

          <DialogContent>
            <>
              {mode === "create" && <CreateCategory handleClose={handleClose} />}
            </>
          </DialogContent>
          <DialogContent>
            <>
              {mode === "update" && <UpdateCategory handleClose={handleClose} oldCategory={category} />}
            </>
          </DialogContent>
        </Dialog>
        {/* /. PAGE INNER  */}
      </div>
    </div>
  );
}

export default MainTable;
