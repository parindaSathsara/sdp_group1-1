import "./homepage.css";
import image1 from "../images/Image2.png";
import image2 from "../images/Image3.png";
import image3 from "../images/Image4.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const user = false;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 Home">
            <nav className="navbar">
              <div className="topcenter">
                <ul className="toplist">
                  <li className="topListItem">
                    <a>Home</a>
                  </li>
                  <li className="topListItem">
                    <a>About</a>
                  </li>
                  <li className="topListItem">
                    <a>Service</a>
                  </li>
                  <li className="topListItem">
                    <a>Contact</a>
                  </li>
                  <li className="topListItem">
                    <a>Signup</a>
                  </li>
                  <li className="topListItem">
                    <a>Login</a>
                  </li>
                  <li className="topListItem">
                    <a>Admin Dashboard</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-md-12">
            <h1>About Us</h1>
            <p1>
              Pick & GO is a package delivery service provider establish in Sri
              Lanka where they provide goods delivery island wide.<br></br>They
              have several operational service centers at all districts and
              number of staff employed vary according to the general capacity of
              business operations.
            </p1>
          </div>
        </div>

        <div className="container-fluid Services">
          <div className="row">
            <div className="col-md-12" id="slider">
              <h1>Services</h1>
              <div class="col-md-4">
                <img src={image1} alt="images1" />
                <p>Safe and Easy</p>
                <p3>No surge charges and easy to use</p3>
              </div>
              <br></br>
              <div class="col-md-4">
                <img src={image2} alt="images2" />
                <p>Experienced Drivers</p>
                <p3>
                  Our drivers have gone through proper screening <br></br>and
                  training
                </p3>
              </div>
              <br></br>
              <div class="col-md-4">
                <img src={image3} alt="images3" />
                <p>Remote Booking</p>
                <p3>
                  Customer can book a taxi on behalf of <br></br>someone
                </p3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="text-center text-lg-start bg-light text-muted">
        <section
          id="footer"
          class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Pick & Go
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          © 2022 Copyright:
          <a class="text-reset fw-bold" href="#">
            pickandgo.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
