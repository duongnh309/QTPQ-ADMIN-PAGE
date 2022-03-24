import { nanoid } from "nanoid";
import React from "react";
import MainTable from "../../components/MainTable";

CategoryManagerPage.propTypes = {};

function CategoryManagerPage(props) {
  return (
    <div>
      <MainTable key={nanoid()} />
    </div>
  );
}

export default CategoryManagerPage;
