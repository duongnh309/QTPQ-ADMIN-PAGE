import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import OrderHistory from './pages/OrderHistory';
import ShoppingCart from './pages/ShoppingCart';

CheckoutFeature.propTypes = {

};

function CheckoutFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path="/checkout" exact render={() => {
                    return <Redirect to="/products" />
                }} />
                <Route path="/checkout/cart" component={ShoppingCart} />
                <Route path="/checkout/history" exact render={() => {
                    return <OrderHistory />
                }} />
                <Route path="/checkout/history/detail" exact render={() => {
                    return <OrderHistory />
                }} />

                {/* <Route path="/checkout/cart" component={ShoppingCart} />
                <Route path="/checkout/history" key={nanoid()} component={OrderHistory} />
                <Route path="/checkout/history/detail" key={nanoid()} component={OrderHistory} /> */}

            </Switch>
        </div>
    );
}

export default CheckoutFeature;