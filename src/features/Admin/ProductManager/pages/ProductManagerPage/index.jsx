// import { useSnackbar } from 'notistack';
import React from "react";
// import { useNoti, useStopNoti } from '../../../../NotiHubContext';
import MainTable from "../../components/MainTable";

ProductManagerPage.propTypes = {};

function ProductManagerPage(props) {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Product Manager</h2>
              <h5>Welcome , Love to see you back. </h5>
            </div>
          </div>
          <hr></hr>
          <div className="panel panel-default ">
            <div className="panel-body">
              <div className="table-responsive">
                <MainTable />
              </div>
              {/*End Advanced Tables */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManagerPage;
