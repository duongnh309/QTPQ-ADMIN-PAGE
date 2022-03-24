import React from 'react';
import { numberWithCommas } from '../../../../../components/helper'

SingleChoiceFilter.propTypes = {

};

function SingleChoiceFilter({ form }) {


  const { register } = form;
  return (
    <div className="filter-brand-left">
      <div className="title-left">
        <h3>Giá tiền</h3>
      </div>
      <div className="brand-box">
        <ul>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios1" value="10000000:1000000000" type="radio" />
              <label htmlFor="Radios1"> Trên {numberWithCommas(10000000)} </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios2" value="5000000:10000000" type="radio" />
              <label htmlFor="Radios2"> {numberWithCommas(5000000)} - {numberWithCommas(10000000)}</label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios3" value="2000000:5000000" type="radio" />
              <label htmlFor="Radios3"> {numberWithCommas(2000000)} - {numberWithCommas(5000000)} </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios4" value="800000:2000000" type="radio" />
              <label htmlFor="Radios4"> {numberWithCommas(800000)} - {numberWithCommas(2000000)} </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios5" value="100000:800000" type="radio" />
              <label htmlFor="Radios5"> {numberWithCommas(100000)} - {numberWithCommas(800000)}</label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios5" value="10000:100000" type="radio" />
              <label htmlFor="Radios5"> {numberWithCommas(10000)} - {numberWithCommas(100000)} </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios5" value="" type="radio" />
              <label htmlFor="Radios6">  Mặc định </label>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default SingleChoiceFilter;