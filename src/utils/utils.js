exports.getHotelData = (facilities, order, limit = 50, p = 1) => {
  const { hotelData } = require("../data.json");
  let filteredData = hotelData;
  if (facilities) {
    filteredData = hotelData.filter(hotel => {
      return facilities.every(facility => hotel.facilities.includes(facility));
    });
  }
  filteredData.sort((a, b) => {
    if (order === "asc") return a.starRating - b.starRating;
    if (order === "desc") return b.starRating - a.starRating;
    return 0;
  });
  const limitedData = filteredData.slice(
    limit * (p - 1),
    limit * (p - 1) + limit
  );
  return { hotels: limitedData, count: filteredData.length };
};

exports.checkArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const _arr1 = arr1.concat().sort();
  const _arr2 = arr2.concat().sort();
  for (let i = 0; i < arr1.length; i++) {
    if (_arr1[i] !== _arr2[i]) return false;
  }
  return true;
};
