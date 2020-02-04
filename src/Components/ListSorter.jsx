import React from "react";
import { connect } from "react-redux";
import {
  setOrder,
  addFilter,
  removeFilter,
  clearFilters
} from "../redux/actions";

let ListSorter = ({ dispatch }) => {
  const handleChange = e => {
    if (e.target.checked) {
      dispatch(addFilter(e.target.name));
    } else {
      dispatch(removeFilter(e.target.name));
    }
  };

  const handleClick = () => {
    dispatch(clearFilters());
  };

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
      <label>
        Gym
        <input
          type="checkbox"
          name="gym"
          defaultChecked={false}
          onChange={handleChange}
        />
      </label>
      <label>
        Car Park
        <input
          type="checkbox"
          name="car park"
          defaultChecked={false}
          onChange={handleChange}
        />
      </label>
      <label>
        Pool
        <input
          type="checkbox"
          name="pool"
          defaultChecked={false}
          onChange={handleChange}
        />
      </label>
      <label>
        Restaurant
        <input
          type="checkbox"
          name="restaurant"
          defaultChecked={false}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleClick}>Clear Filters</button>
    </div>
  );
};

ListSorter = connect()(ListSorter);

export default ListSorter;
