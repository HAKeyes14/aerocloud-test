import React from "react";
import { connect } from "react-redux";
import { setOrder } from "../redux/actions";

let ListSorter = ({ dispatch }) => {
  return (
    <div>
      <label>
        Sort by:{" "}
        <select
          onChange={e => {
            e.preventDefault();
            dispatch(setOrder(e.target.value));
          }}
        >
          <option value={"desc"}>Highest Rated</option>
          <option value={"asc"}>Lowest Rated</option>
        </select>
      </label>
    </div>
  );
};

ListSorter = connect()(ListSorter);

export default ListSorter;
