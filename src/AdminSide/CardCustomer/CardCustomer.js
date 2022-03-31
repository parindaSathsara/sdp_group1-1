import React from "react";
import './CardCustomer.css'

function CardCustomer() {
  return (
    <>
      <div className="card m-2">
        <div className="cardCx__Header">
          <h4 className="cardCx__Heading">Total Customers</h4>
        </div>
        <div className="cardCx__Count">
          <h5 className="cardCx__Num">2</h5>
          <i class="fas fa-users fa-4x"></i>
        </div>
      </div>
     

    </>
  );
}

export default CardCustomer;
