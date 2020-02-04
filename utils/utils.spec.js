const { expect } = require("chai");
const { getHotelData } = require("./utils");

describe("getHotelData", () => {
  it("returns an array", () => {
    expect(getHotelData()).to.be.an("array");
  });
  it("returns all the hotel data when no arguments are passed", () => {
    const expectedData = [
      {
        name: "hotelone",
        starRating: 5,
        facilities: ["car park", "pool"]
      },
      {
        name: "hoteltwo",
        starRating: 3,
        facilities: ["car park", "gym"]
      },
      {
        name: "hotelthree",
        starRating: 3,
        facilities: []
      }
    ];
    expect(getHotelData()).to.eql(expectedData);
  });
});
