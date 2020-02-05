import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setOrder,
  addFilter,
  removeFilter,
  clearFilters
} from "../redux/actions";

class ListSorter extends Component {
  state = {
    gym: false,
    carPark: false,
    pool: false,
    restaurant: false
  };

  handleChange = e => {
    const { dispatch } = this.props;
    if (e.target.checked) {
      this.setState({ [e.target.value]: true });
      dispatch(addFilter(e.target.name));
    } else {
      this.setState({ [e.target.value]: false });
      dispatch(removeFilter(e.target.name));
    }
  };

  handleClick = () => {
    const { dispatch } = this.props;
    this.setState({
      gym: false,
      pool: false,
      restaurant: false,
      carPark: false
    });
    dispatch(clearFilters());
  };
  render() {
    const { dispatch } = this.props;
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
            checked={this.state.gym}
            onChange={this.handleChange}
            value="gym"
          />
        </label>
        <label>
          Car Park
          <input
            type="checkbox"
            name="car park"
            checked={this.state.carPark}
            onChange={this.handleChange}
            value="carPark"
          />
        </label>
        <label>
          Pool
          <input
            type="checkbox"
            name="pool"
            checked={this.state.pool}
            onChange={this.handleChange}
            value="pool"
          />
        </label>
        <label>
          Restaurant
          <input
            type="checkbox"
            name="restaurant"
            checked={this.state.restaurant}
            onChange={this.handleChange}
            value="restaurant"
          />
        </label>
        <button onClick={this.handleClick}>Clear Filters</button>
      </div>
    );
  }
}

ListSorter = connect()(ListSorter);

export default ListSorter;
