import React, { Component } from "react";
import { getHotelData, checkArraysEqual } from "../utils/utils";
import HotelCard from "./HotelCard";
import { connect } from "react-redux";

class HotelsList extends Component {
  state = {
    hotels: [],
    count: 0,
    isLoading: true
  };

  componentDidMount() {
    const { order, filters } = this.props;
    const { hotels, count } = getHotelData(filters, order);
    this.setState({ hotels, count, isLoading: false });
  }

  componentDidUpdate(prevProps) {
    const { order, filters } = this.props;
    if (
      prevProps.order !== order ||
      !checkArraysEqual(filters, prevProps.filters)
    ) {
      const { hotels, count } = getHotelData(filters, order);
      this.setState({ hotels, count, isLoading: false });
    }
  }

  render() {
    const { hotels, count, isLoading } = this.state;
    return isLoading ? (
      <p>Loading...</p>
    ) : count ? (
      <ul>
        {hotels.map((hotel, i) => (
          <HotelCard hotel={hotel} key={i} />
        ))}
      </ul>
    ) : (
      <p>No hotels matching your criteria.</p>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order,
    filters: state.facilities
  };
};

const HotelList = connect(mapStateToProps)(HotelsList);

export default HotelList;
