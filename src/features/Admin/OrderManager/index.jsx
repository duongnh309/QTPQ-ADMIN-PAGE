import { nanoid } from 'nanoid';
import React from 'react';
import { Route, Switch } from 'react-router';
import OrdersPage from './pages/OrdersPage';

OrderManegerFeature.propTypes = {

};

function OrderManegerFeature(props) {
    return (
        <div>
            <Switch>
                <Route path="/admin/orders" key={nanoid()} component={OrdersPage} exact></Route>
            </Switch>
        </div>
    );
}

export default OrderManegerFeature;