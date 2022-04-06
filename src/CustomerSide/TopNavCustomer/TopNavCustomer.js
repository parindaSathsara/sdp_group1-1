import React from "react";
import "./TopNavCustomer.css";
import { getAuth } from 'firebase/auth';

function TopNavCustomer() {

  const auth = getAuth();

  return (
    <>
      <div className="topbar topnavBarCustomer">
      <div className="topbarWrapper">
          
          <div className="topseprator">
            <div className="navslog">
              <span> Hello {sessionStorage.getItem("displayName")} !</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default TopNavCustomer;
