import React from "react";
import './CardVehicle.css'

function CardVehicle() {
  return (
    <>
      <div className="card m-2 card__Vh">
        <div className="cardVh__Header">
          <h4 className="cardVh__Heading">Registered Vehicles</h4>
        </div>
        <div className="cardVh__Count">
          <h5 className="cardVh__Num">6</h5>
          <i class="fas fa-truck-moving fa-4x"></i>
        </div>
      </div>
    </>
  );
}

export default CardVehicle;
