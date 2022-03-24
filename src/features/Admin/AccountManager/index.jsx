import React from "react";
import AccountManagerPage from "./pages/AccountManagerPage";

AccountManagerFeature.propTypes = {};

function AccountManagerFeature(props) {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Account Manager</h2>
              <h5>Welcome , Love to see you back. </h5>
            </div>
          </div>
          <hr />
          <div>
            <AccountManagerPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountManagerFeature;
