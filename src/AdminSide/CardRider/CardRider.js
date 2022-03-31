import React from "react";
import './CardRider.css'

function CardRider() {
  return (
    <>
      <div className="card m-2 card__Rd">
        <div className="cardRd__Header">
          <h4 className="cardRd__Heading">Delivery Riders</h4>
        </div>
        <div className="cardRd__Count">
          <h5 className="cardRd__Num">3</h5>
          <i class="fas fa-biking fa-4x"></i>
        </div>
      </div>
    </>
  );
}

export default CardRider;
