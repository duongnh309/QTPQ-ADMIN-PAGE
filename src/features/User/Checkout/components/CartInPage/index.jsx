import React from 'react';
import { useForm } from 'react-hook-form';
import "./styles.css";
import { numberWithCommas } from "../../../../../components/helper";
CartInPage.propTypes = {

};

function CartInPage({ cart, change, remove }) {
    const { register, getValues } = useForm();

    const handle = (id, e) => {
        if (change) {
            change(id, e.target.value);
        }
    }

    const removeAnItem = (id) => {
        if (remove) {
            remove(id);
        }
    }

    const form = useForm({
        defaultValues: {
        }
    });

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="table-main table-responsive">
                    <form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: 200 }}>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                    <th>Gỡ</th>
                                </tr>
                            </thead>
                            <tbody>


                                {cart.map((product) => (
                                    <tr key={product.id} style={{ height: 200 }}>
                                        <td className="thumbnail-img">
                                            <a href="#">
                                                <img className="img-fluid img" src={product.image1} alt="" />
                                            </a>
                                        </td>
                                        <td className="name-pr">
                                            <a href="#">
                                                {product.name}
                                            </a>
                                        </td>
                                        <td className="price-pr">
                                            <p>{numberWithCommas(product.price)}</p>
                                        </td>
                                        {/* <NumberInputFeild /> */}
                                        <td className="quantity-box"><input type="number" size={4} defaultValue={product.quantity} min={0} step={1} className="c-input-text qty text" name="quantity" onChange={handle.bind(this, product.id)} /></td>

                                        <td className="total-pr">
                                            <p>{numberWithCommas(product.price * product.quantity)}</p>
                                        </td>
                                        <td className="remove-pr">
                                            <i className="fas fa-times" onClick={() => removeAnItem(product.id)} />
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CartInPage;