exports.getHotelData = (facilities, order) => {
  const { hotelData } = require("../data.json");
  let filteredData = hotelData;
  if (facilities) {
    filteredData = hotelData.filter(hotel => {
      return facilities.every(facility => hotel.facilities.includes(facility));
    });
  }
  filteredData.sort((a, b) => {
    if (order === "asc") return b.starRating - a.starRating;
    if (order === "desc") return a.starRating - b.starRating;
  });
  return { hotels: filteredData, count: filteredData.length };
};
