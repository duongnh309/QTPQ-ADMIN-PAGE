import React from "react";
import { Route, Switch } from "react-router";

import CreateCategory from "./pages/CreateCategory";
import CategoryManagerPage from "./pages/CategoryManagerPage";

function CategoryManagerFeature() {
  return (
    <div>
      <Switch>
        <Route path="/admin/category/create" component={CreateCategory} />
        <Route path="/admin/category" component={CategoryManagerPage} />
      </Switch>
    </div>
  );
}

export default CategoryManagerFeature;
