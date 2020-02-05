import React, { Component } from "react";
import { getHotelData, checkArraysEqual } from "../utils/utils";
import HotelCard from "./HotelCard";
import { connect } from "react-redux";
import PageSelector from "./PageSelector";

class HotelsList extends Component {
  state = {
    hotels: [],
    count: 0,
    isLoading: true,
    p: 1,
    limit: 5
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

  handlePageClick = direction => {
    this.setState(currentState => {
      return { p: currentState.p + direction };
    });
  };

  handleLimitChange = event => {
    this.setState({ limit: event.target.value, p: 1 });
  };

  render() {
    const { hotels, count, isLoading, p, limit } = this.state;
    return isLoading ? (
      <p>Loading...</p>
    ) : count ? (
      <>
        <PageSelector
          handlePageClick={this.handlePageClick}
          handleLimitChange={this.handleLimitChange}
          p={p}
          limit={limit}
          count={count}
        />
        <ul>
          {hotels.map((hotel, i) => (
            <HotelCard hotel={hotel} key={i} />
          ))}
        </ul>
        <PageSelector
          handlePageClick={this.handlePageClick}
          handleLimitChange={this.handleLimitChange}
          p={p}
          limit={limit}
          count={count}
        />
      </>
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
