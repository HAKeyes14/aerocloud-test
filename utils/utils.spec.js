const { expect } = require("chai");
const { getHotelData } = require("./utils");

describe("getHotelData", () => {
  it("returns an array", () => {
    expect(getHotelData()).to.be.an("array");
  });
});
