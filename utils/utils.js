exports.getHotelData = facilities => {
  const { hotelData } = require("../data.json");
  if (facilities) {
    const filteredData = hotelData.filter(hotel => {
      return facilities.every(facility => hotel.facilities.includes(facility));
    });
    return filteredData;
  }
  return hotelData;
};
