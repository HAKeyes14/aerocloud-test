import React, { Component } from "react";

class ListSorter extends Component {
  render() {
    return (
      <div>
        <label>
          Sort by:{" "}
          <select>
            <option value={"desc"}>Highest Rated</option>
            <option value={"asc"}>Lowest Rated</option>
          </select>
        </label>
      </div>
    );
  }
}

export default ListSorter;
