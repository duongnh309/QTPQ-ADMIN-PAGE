import React from "react";
import { Route, Switch } from "react-router";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import CreateAProduct from "./pages/CreateAProduct";
import ProductManagerPage from "./pages/ProductManagerPage";

ProductManagerFeature.propTypes = {};

function ProductManagerFeature(props) {
  return (
    <div>
      <Switch>
        <Route path="/" component={ProductManagerPage} exact></Route>
        <Route
          path="/admin/products"
          component={ProductManagerPage}
          exact
        ></Route>
        <Route path="/admin/products/create" component={CreateAProduct}></Route>
        <Route
          path="/admin/products/detail"
          component={AdminProductDetailPage}
        ></Route>
      </Switch>
    </div>
  );
}

export default ProductManagerFeature;
