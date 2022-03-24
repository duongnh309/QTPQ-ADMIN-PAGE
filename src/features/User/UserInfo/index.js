import React from "react";
import { Route, Switch } from "react-router";
import UserInforPage from "./pages/UserInforPage";

UserInfoFeature.propTypes = {};

function UserInfoFeature(props) {
  return (
    <div>
      <Switch>
        <Route path="/user/detail" component={UserInforPage} exact />
      </Switch>
    </div>
  );
}

export default UserInfoFeature;
