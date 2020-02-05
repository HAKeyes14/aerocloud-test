const { expect } = require("chai");
const { getHotelData } = require("./utils");

describe("getHotelData", () => {
  it("returns an object with keys hotels and count", () => {
    expect(getHotelData()).to.be.an("object");
    expect(getHotelData()).to.have.keys(["hotels", "count"]);
  });
  it("returns all the hotel data when no arguments are passed", () => {
    const expectedData = {
      hotels: [
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
      ],
      count: 3
    };
    expect(getHotelData()).to.eql(expectedData);
  });
  it("returns only the hotels with the specified facilities", () => {
    let expectedData = {
      hotels: [
        {
          name: "hotelone",
          starRating: 5,
          facilities: ["car park", "pool"]
        }
      ],
      count: 1
    };
    expect(getHotelData(["pool"])).to.eql(expectedData);

    expectedData = {
      hotels: [
        {
          name: "hotelone",
          starRating: 5,
          facilities: ["car park", "pool"]
        },
        {
          name: "hoteltwo",
          starRating: 3,
          facilities: ["car park", "gym"]
        }
      ],
      count: 2
    };
    expect(getHotelData(["car park"])).to.eql(expectedData);

    expectedData = { hotels: [], count: 0 };
    expect(getHotelData(["pool", "gym"])).to.eql(expectedData);
  });

  it("returns the hotels sorted by ascending or descending star rating", () => {
    let expectedData = {
      hotels: [
        {
          name: "hoteltwo",
          starRating: 3,
          facilities: ["car park", "gym"]
        },
        {
          name: "hotelthree",
          starRating: 3,
          facilities: []
        },
        {
          name: "hotelone",
          starRating: 5,
          facilities: ["car park", "pool"]
        }
      ],
      count: 3
    };
    expect(getHotelData([], "asc")).to.eql(expectedData);

    expectedData = {
      hotels: [
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
      ],
      count: 3
    };
    expect(getHotelData([], "desc")).to.eql(expectedData);
  });
});
