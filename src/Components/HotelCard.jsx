import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <li>
      <h3>{hotel.name}</h3>
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
