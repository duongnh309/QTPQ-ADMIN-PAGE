import React from 'react';
import { Route, Switch } from 'react-router';
import ProductManagerPage from './pages/DiscountManagerPage';
import ProductDiscount from './pages/ProductDiscount';
import ProductNoDiscount from './pages/ProductNoDiscount';

DiscountManagerFeature.propTypes = {

};

function DiscountManagerFeature(props) {
    const userName = JSON.parse(localStorage.getItem('user')).name;
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Discount Manager</h2>
                            <h5>Welcome {userName} , Love to see you back. </h5>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <Switch>
                            <Route path="/admin/discount" component={ProductManagerPage} exact></Route>
                            <Route path="/admin/discount/product" component={ProductDiscount} exact></Route>
                            <Route path="/admin/discount/products" component={ProductNoDiscount}></Route>
                        </Switch>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default DiscountManagerFeature;