import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

CartInHeader.propTypes = {

};

function CartInHeader({ closeSide }) {
    const history = useHistory();
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
        var cart = JSON.parse(localStorage.getItem('cart'));
    } else {
        cart = [];
    }
    const totalPrice = cart.reduce((total, { quantity, price }) => total + price * quantity, 0);
    return (
        <div>
            <ul className="cart-list">
                {cart.map((product) => (
                    <li key={product.id + product.size} className="flex justify-around">
                        <NavLink to={`/products/detail?id=${product.id}`} className=""><img src={product.image1} className="cart-thumb" alt="" /></NavLink>
                        <div>
                            <h6><NavLink to={`/products/detail?id=${product.id}`} >{product.name}</NavLink></h6>
                            <p>Size {product.size}</p>
                            <p className="text-end">{product.quantity} - <span className="price">{product.price - product.price / 100 * product.saleOff}</span></p>
                        </div>

                    </li>
                ))}
                <li key={'total'} className="total" >
                    <button className="btn btn-default hvr-hover" onClick={() => {
                        history.push("/checkout/cart");
                        closeSide();
                    }}>Xem giỏ hàng</button>
                    <span className="float-right"><strong>Tổng </strong>: {totalPrice}</span>
                </li>
            </ul>
        </div>
    );
}

export default CartInHeader;