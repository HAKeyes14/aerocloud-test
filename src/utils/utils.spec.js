const { expect } = require("chai");
const { getHotelData, checkArraysEqual } = require("./utils");

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
        },
        {
          name: "hotelfour",
          starRating: 1,
          facilities: ["gym"]
        },
        {
          name: "hotelfive",
          starRating: 3,
          facilities: ["pool", "car park"]
        },
        {
          name: "hotelsix",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelseven",
          starRating: 2,
          facilities: []
        },
        {
          name: "hoteleight",
          starRating: 4,
          facilities: ["gym"]
        },
        {
          name: "hotelnine",
          starRating: 4,
          facilities: ["gym", "pool"]
        },
        {
          name: "hotelten",
          starRating: 3,
          facilities: ["car park"]
        },
        {
          name: "hoteleleven",
          starRating: 3,
          facilities: ["car park", "gym"]
        },
        {
          name: "hoteltwelve",
          starRating: 3,
          facilities: []
        },
        {
          name: "hotelthirteen",
          starRating: 3,
          facilities: []
        },
        {
          name: "hotelfourteen",
          starRating: 1,
          facilities: []
        },
        {
          name: "hotelfifteen",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelsixteen",
          starRating: 4,
          facilities: []
        },
        {
          name: "hotelseventeen",
          starRating: 3,
          facilities: ["gym", "car park"]
        },
        {
          name: "hoteleighteen",
          starRating: 2,
          facilities: ["car park"]
        },
        {
          name: "hotelnineteen",
          starRating: 5,
          facilities: ["pool", "gym"]
        },
        {
          name: "hoteltwenty",
          starRating: 4,
          facilities: ["pool"]
        },
        {
          name: "hoteltwentyone",
          starRating: 3,
          facilities: ["car park", "pool"]
        }
      ],
      count: 21
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
        },

        {
          name: "hotelfive",
          starRating: 3,
          facilities: ["pool", "car park"]
        },
        {
          name: "hotelsix",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },

        {
          name: "hotelnine",
          starRating: 4,
          facilities: ["gym", "pool"]
        },

        {
          name: "hotelfifteen",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },

        {
          name: "hotelnineteen",
          starRating: 5,
          facilities: ["pool", "gym"]
        },
        {
          name: "hoteltwenty",
          starRating: 4,
          facilities: ["pool"]
        },
        {
          name: "hoteltwentyone",
          starRating: 3,
          facilities: ["car park", "pool"]
        }
      ],
      count: 8
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
        },
        {
          name: "hotelfive",
          starRating: 3,
          facilities: ["pool", "car park"]
        },
        {
          name: "hotelsix",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelten",
          starRating: 3,
          facilities: ["car park"]
        },
        {
          name: "hoteleleven",
          starRating: 3,
          facilities: ["car park", "gym"]
        },
        {
          name: "hotelfifteen",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelseventeen",
          starRating: 3,
          facilities: ["gym", "car park"]
        },
        {
          name: "hoteleighteen",
          starRating: 2,
          facilities: ["car park"]
        },
        {
          name: "hoteltwentyone",
          starRating: 3,
          facilities: ["car park", "pool"]
        }
      ],
      count: 10
    };
    expect(getHotelData(["car park"])).to.eql(expectedData);

    expectedData = {
      hotels: [
        {
          name: "hotelsix",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelnine",
          starRating: 4,
          facilities: ["gym", "pool"]
        },
        {
          name: "hotelfifteen",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelnineteen",
          starRating: 5,
          facilities: ["pool", "gym"]
        }
      ],
      count: 4
    };
    expect(getHotelData(["pool", "gym"])).to.eql(expectedData);
  });

  it("returns the hotels sorted by ascending or descending star rating", () => {
    let expectedData = {
      hotels: [
        {
          name: "hotelfour",
          starRating: 1,
          facilities: ["gym"]
        },
        {
          name: "hotelfourteen",
          starRating: 1,
          facilities: []
        },
        {
          name: "hotelseven",
          starRating: 2,
          facilities: []
        },
        {
          name: "hoteleighteen",
          starRating: 2,
          facilities: ["car park"]
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
        },
        {
          name: "hotelfive",
          starRating: 3,
          facilities: ["pool", "car park"]
        },
        {
          name: "hotelten",
          starRating: 3,
          facilities: ["car park"]
        },
        {
          name: "hoteleleven",
          starRating: 3,
          facilities: ["car park", "gym"]
        },
        {
          name: "hoteltwelve",
          starRating: 3,
          facilities: []
        },
        {
          name: "hotelthirteen",
          starRating: 3,
          facilities: []
        },
        {
          name: "hotelseventeen",
          starRating: 3,
          facilities: ["gym", "car park"]
        },
        {
          name: "hoteltwentyone",
          starRating: 3,
          facilities: ["car park", "pool"]
        },
        {
          name: "hoteleight",
          starRating: 4,
          facilities: ["gym"]
        },
        {
          name: "hotelnine",
          starRating: 4,
          facilities: ["gym", "pool"]
        },
        {
          name: "hotelsixteen",
          starRating: 4,
          facilities: []
        },
        {
          name: "hoteltwenty",
          starRating: 4,
          facilities: ["pool"]
        },
        {
          name: "hotelone",
          starRating: 5,
          facilities: ["car park", "pool"]
        },
        {
          name: "hotelsix",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelfifteen",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelnineteen",
          starRating: 5,
          facilities: ["pool", "gym"]
        }
      ],
      count: 21
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
          name: "hotelsix",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelfifteen",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        },
        {
          name: "hotelnineteen",
          starRating: 5,
          facilities: ["pool", "gym"]
        },
        {
          name: "hoteleight",
          starRating: 4,
          facilities: ["gym"]
        },
        {
          name: "hotelnine",
          starRating: 4,
          facilities: ["gym", "pool"]
        },
        {
          name: "hotelsixteen",
          starRating: 4,
          facilities: []
        },
        {
          name: "hoteltwenty",
          starRating: 4,
          facilities: ["pool"]
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
        },
        {
          name: "hotelfive",
          starRating: 3,
          facilities: ["pool", "car park"]
        },
        {
          name: "hotelten",
          starRating: 3,
          facilities: ["car park"]
        },
        {
          name: "hoteleleven",
          starRating: 3,
          facilities: ["car park", "gym"]
        },
        {
          name: "hoteltwelve",
          starRating: 3,
          facilities: []
        },
        {
          name: "hotelthirteen",
          starRating: 3,
          facilities: []
        },
        {
          name: "hotelseventeen",
          starRating: 3,
          facilities: ["gym", "car park"]
        },
        {
          name: "hoteltwentyone",
          starRating: 3,
          facilities: ["car park", "pool"]
        },
        {
          name: "hotelseven",
          starRating: 2,
          facilities: []
        },
        {
          name: "hoteleighteen",
          starRating: 2,
          facilities: ["car park"]
        },
        {
          name: "hotelfour",
          starRating: 1,
          facilities: ["gym"]
        },
        {
          name: "hotelfourteen",
          starRating: 1,
          facilities: []
        }
      ],
      count: 21
    };
    expect(getHotelData([], "desc")).to.eql(expectedData);
  });
  it("returns only the number of hotels specified by the limit", () => {
    const expectedData = {
      hotels: [
        {
          name: "hotelone",
          starRating: 5,
          facilities: ["car park", "pool"]
        }
      ],
      count: 21
    };
    expect(getHotelData([], "desc", 1)).to.eql(expectedData);
  });
  it("returns the specified page of hotels", () => {
    const expectedData = {
      hotels: [
        {
          name: "hotelsix",
          starRating: 5,
          facilities: ["car park", "pool", "gym"]
        }
      ],
      count: 21
    };
    expect(getHotelData([], "desc", 1, 2)).to.eql(expectedData);
  });
});

describe("checkArraysEqual", () => {
  it("returns true when passed 2 empty arrays", () => {
    expect(checkArraysEqual([], [])).to.equal(true);
  });
  it("returns false if the arrays have different lengths", () => {
    expect(checkArraysEqual([1], [1, 2, 3])).to.equal(false);
  });
  it("returns false if the arrays do not contain the same values", () => {
    expect(checkArraysEqual([1, 5, 7, 3], [1, 2, 3, 5])).to.equal(false);
    expect(checkArraysEqual([1, 6, 3, 5, 7], [7, 6, 3, 5, 1])).to.equal(true);
  });
});
