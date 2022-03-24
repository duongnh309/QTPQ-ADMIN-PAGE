import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Hero from '../../../../../components/headers/Hero';
import Pagination from '../../../../../components/Pagination';
import { increase } from '../../../../User/Checkout/counterSlice';
import CategoriesFilter from '../../components/CategoriesFilter';
import DefaultProduct from '../../components/DefaultProduct';
import SingleChoiceFilter from '../../components/SingleChoiceFilter';
import useCustomerCategories from './use-categories';
import useCustomerProducts from './use-products';
ProductPage.propTypes = {

};

function ProductPage() {
  const dispatch = useDispatch();

  const HandleAddToCart = (product) => {
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
      var cart = JSON.parse(localStorage.getItem('cart'));
      var index = cart.findIndex((newProduct) => { return newProduct.id === product.id });
    } else {
      cart = [];
    }

    if (index >= 0) {
      cart[index].quantity++;
    }
    else {
      cart.push({
        ...product,
        quantity: 1,
      });

    }
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(increase());
  };

  const form = useForm();

  const { register, handleSubmit } = form;


  const [filter, setFilter] = useState({
    size: 9,
    page: 0,
    value: '',
    category: '',
    price: ''
  });
  const { data, isLoading } = useCustomerProducts(filter);


  const handleFilter = (value) => {
    const searchData = value.search;
    const priceRange = value.price || '';
    const newFilter = { ...filter, price: priceRange, category: value.category || '', value: searchData };
    setFilter(newFilter);
  }
  const { data: categories, isLoading: isLoadingCategories } = useCustomerCategories();

  return (
    <div>
      <Hero title="Sản phẩm" />
      <div className="shop-box-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
              <div className="product-categori">
                <div className="search-product">
                  <form onSubmit={handleSubmit(handleFilter)}>
                    <input className="form-control" placeholder="Tên sản phẩm..." type="text" {...register("search")} />
                    <button type="submit" > <i className="fa fa-search" /> </button>
                  </form>
                </div>
                <form onSubmit={form.handleSubmit(handleFilter)}>
                  <SingleChoiceFilter form={form} />
                  {!isLoadingCategories && <CategoriesFilter form={form} categoriesList={categories} />}
                  <div className="filter-price-left">
                    <div className="price-box-slider">
                      <p>
                        <button className="btn hvr-hover" type="submit">Tìm kiếm</button>
                      </p>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
              <div className="right-product-box">
                <div className="product-item-filter row">
                  {/* <div className="col-12 col-sm-8 text-center text-sm-left"> */}
                  <div className="">
                    {/* <div className="toolbar-sorter-right">
                      <span>Sort by </span>
                      <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
                        <option data-display="Select">Nothing</option>
                        <option value={1}>Popularity</option>
                        <option value={2}>High Price → High Price</option>
                        <option value={3}>Low Price → High Price</option>
                        <option value={4}>Best Selling</option>
                      </select>
                    </div> */}
                    <p>Showing all {data?.data.totalElement} results</p>
                  </div>
                </div>
                <DefaultProduct isLoading={isLoading} defaultProduct={data?.data.data} addToCart={HandleAddToCart} />
                <Pagination filter={filter} total={data?.data.totalPage} setFilter={setFilter} />

              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End Shop Page */}
      {/* Start Instagram Feed  */}

    </div>
  );
}

export default ProductPage;