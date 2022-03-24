import React from "react";

SubNav.propTypes = {};

function SubNav(props) {
  return (
    <div>
      <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 shop-content-right">
        {/* product-item-filter */}
        <div className="product-item-filter row ">
          <div className="col-lg-3">
            <button className="btn hvr-hover">Gentlements</button>
          </div>
          <div className="col-lg-3">
            <button className="btn hvr-hover">Basic Knowledge</button>
          </div>
          <div className="col-lg-3">
            <button className="btn hvr-hover">Style consulting</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubNav;
