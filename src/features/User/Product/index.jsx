import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';

ProductsFeature.propTypes = {

};

function ProductsFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path="/products/detail" component={ProductDetailPage} exact />
                <Route path={match.path} component={ProductPage} />
            </Switch>

        </div>
    );
}

export default ProductsFeature;