import React from "react";
import OrdersTable from "../../components/OrdersTable";

OrdersPage.propTypes = {};

function OrdersPage(props) {
  return (
    <div>
      <>
        <div id="page-wrapper">
          <div id="page-inner">
            {/* /. ROW  */}
            <div className="row">
              <div className="col-md-12">
                {/* Advanced Tables */}

                <h2>Orders Manager</h2>
                <h5>Welcome , Love to see you back. </h5>

                <div className="panel panel-default ">
                  <div className="panel-body">
                    <div className="table-responsive">
                      <OrdersTable />
                    </div>
                    {/*End Advanced Tables */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default OrdersPage;
