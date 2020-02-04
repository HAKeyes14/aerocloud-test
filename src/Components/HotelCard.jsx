import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <li>
      <h2>{hotel.name}</h2>
      <p>User rating: {hotel.starRating}</p>
      <section>
        Facilities:
        <ul>
          {hotel.facilities.map(facility => (
            <p>{facility}</p>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default HotelCard;
