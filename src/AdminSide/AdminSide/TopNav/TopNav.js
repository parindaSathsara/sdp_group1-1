import React from "react";
import "./TopNav.css";

function TopNav() {
  return (
    <>
      <div className="topbar">
      <div className="topbarWrapper">
          
          <div className="topseprator">
            <div className="navslog">
              <span> Everything at Your Door step. </span>
            </div>
          </div>

          <div className="topLeft">
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="topAvatar"
              />
              <div>
              <span className="username__Top">Waidya Sewwandi</span>
              </div>
              <div className="post_nav">
              <span className="Post_Top">( Manager) </span>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
