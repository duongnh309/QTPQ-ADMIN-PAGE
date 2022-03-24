import React from 'react';

CategoriesFilter.propTypes = {

};

function CategoriesFilter({ form, categoriesList }) {
  console.log(categoriesList);
  const { register } = form;
  const categories = categoriesList.map(x =>
    !x.deleted && <li>
      <div className="radio radio-danger">
        <input {...register("category")} id={x.id} value={x.id} type="radio" />
        <label htmlFor="Radios1"> {x.name} </label>
      </div>
    </li>

  )

  return (
    <div className="filter-brand-left">
      <div className="title-left">
        <h3>Loại sản phẩm</h3>
      </div>
      <div className="brand-box">
        <ul>
          {categories}
          <li>
            <div className="radio radio-danger">
              <input {...register("category")} id='default' value='' type="radio" />
              <label htmlFor="Radios1"> Default </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoriesFilter;