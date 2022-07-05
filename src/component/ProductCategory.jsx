import React, { useState, setItems } from "react";
import DATA from "../Data";

const ProductCategory = () => {
  const [items, setItems] = useState(DATA);
  const filterItem = (categItem) => {
    const updatedItems = DATA.filter((curElem) => {
      return (curElem.category = categItem);
    });
    setItems(updatedItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">Category</h1>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn-btn-warning"
            onClick={() => filterItem("Seating")}
          >
            Seating
          </button>
          <button className="btn-btn-warning" onClick={() => filterItem("Bed")}>
            Bed
          </button>
          <button
            className="btn-btn-warning"
            onClick={() => filterItem("Table")}
          >
            Table
          </button>
          <button
            className="btn-btn-warning"
            onClick={() => filterItem("Storing")}
          >
            Storage
          </button>
          <button className="btn-btn-warning" onClick={() => setItems(DATA)}>
            All
          </button>
        </div>
      </div>
    </>
  );
};
