import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div id="home">
      <Carousel>
        <div>
          <img src="../images/banner-01.jpg" alt="img" />
          <p className="legend">Pune</p>
        </div>
        <div>
          <img src="../images/banner-02.jpg" alt="img" />
          <p className="legend">Mumbai</p>
        </div>
        <div>
          <img src="../images/banner-03.jpg" alt="img" />
          <p className="legend">Nashik</p>
        </div>
      </Carousel>

      <div id="property-details" className="second-page">
        <div className="left">
          <img width="340px" height="510px" src="../images/featured.jpg" alt="featured" />
        </div>
        <div className="middle card">
          <div className="top">
            <div className="card-body">
              <h5 className="card-text item-text">| Featured</h5>
              <h1 className="card-title fw-bold apart-heading">
                <div>
                  Best
                  <br /> Apartment &<br /> Sea View
                </div>
              </h1>
            </div>
          </div>
          <div className="bottom">
            <ul>
              <h5 className="card-text item-text">Best Useful Links?</h5>
              <li>
                Get <b>the best Villa</b> website in HTML,CSS
                <br /> & BOOTSTRAP for your business.TemplateMo
                <br /> provides you the best free FREE CSS templates in the
                world.
              </li>
              <li>How does this work?</li>
              <li>Why is this Villa Agency the Best?</li>
            </ul>
          </div>
        </div>
        <div className="right card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div>
                <div className="d-flex my-4">
                  <img src="../images/info-icon-01.png" alt="" />
                  <div>
                    <div className="mx-2">250 m2</div>
                    <div className="mx-2 text-secondary">Total Flat Space</div>
                  </div>
                </div>
                <div></div>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                <div className="d-flex my-4">
                  <img src="../images/info-icon-02.png" alt="" />
                  <div>
                    <div className="mx-2">Contract</div>
                    <div className="mx-2 text-secondary">Contract Ready</div>
                  </div>
                </div>
                <div></div>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                <div className="d-flex my-4">
                  <img src="../images/info-icon-03.png" alt="" />
                  <div>
                    <div className="mx-2">Payment</div>
                    <div className="mx-2 text-secondary">Payment Process</div>
                  </div>
                </div>
                <div></div>
              </div>
            </li>
          </ul>
          <div className="card-footer">
            <div>
              <div className="d-flex my-4">
                <img src="../images/info-icon-04.png" alt="" />
                <div>
                  <div className="mx-2">Safety</div>
                  <div className="mx-2 text-secondary">24/7 Under Control</div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="third_page">
        <div>
          <img
            src="../images/video-bg.jpg"
            className="d-block w-100"
            alt="..."
          />
          <h3 className="third_heading text-light ">
            GET CLOSER VIEW
            <br /> & DIFFERENT FEELING
          </h3>
        </div>
        <div>
          <img src="../images/video-frame.jpg" alt="" className="deal" />
        </div>

        <div className="container-fluid">
          <div className="row cards3">
            <div className="col-md-2 cards2">
              <div className="d-flex cards1">
                <div className="mx-3 item-text fw-bold num">34</div>
                <b className="my-1">
                  buildings
                  <br />
                  finishes now
                </b>
              </div>
            </div>
            <div className="col-md-2 cards2">
              <div className="d-flex cards1">
                <div className="mx-3 item-text fw-bold num">24</div>
                <b className="my-1">
                  awards
                  <br />
                  won 2023
                </b>
              </div>
            </div>
            <div className="col-md-2 cards2">
              <div className="d-flex cards1">
                <div className="mx-3 item-text fw-bold num">12</div>
                <b className="my-1">
                  {" "}
                  years
                  <br />
                  experience
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-deals">
        <div className="deals-top">
          <div className="deal-titles">
            <h2 className="item-text">| Best Deals</h2>
            <h1>
              <b>Find Your Best Deals</b>
            </h1>
            <h1>
              <b>Right Now !</b>
            </h1>
          </div>
          <div className="deal-buttons">
            <button className="btn btn-danger ">Apartment</button>
            <button className="btn btn-dark ">Villa House</button>
            <button className="btn btn-dark ">Penthouse</button>
          </div>
        </div>

        <div className="deals-bottom">
          <div className="deals-left card">
            <ul className="list-group list-group-flush py-2">
              <li className="list-group-item">
                <div className="d-flex justify-content-between py-2">
                  Total Flat Space
                  <p className="mx-4 ">
                    <b>180 m2</b>
                  </p>
                  <div></div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between py-2">
                  Floor No 
                  <p className="mx-4 ">
                    <b>26th</b>
                  </p>
                  <div></div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between py-2">
                  Number of Rooms
                  <p className="mx-4 ">
                    <b>4</b>
                  </p>
                  <div></div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between py-2">
                  Parking Available
                  <p className="mx-4 ">
                    <b>Yes</b>
                  </p>
                  <div></div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex py-2">
                  Payment Process 
                  <p className="mx-4 ">
                    <b>Bank</b>
                  </p>
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="deals-middle my-4">
            <img src="../images/deal-01.jpg" alt="featured" />
          </div>
          <div className="deals-right card">
            <h5 className="px-4 py-3">Extra Info About Property</h5>
            <p className="px-4 py-3" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur similique perspiciatis incidunt necessitatibus quaerat accusamus ea eligendi nisi saepe magni quisquam, consequuntur, eveniet veniam voluptate, distinctio totam autem minus nulla.</p>
            <p className="px-4 py-3" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur similique perspiciatis incidunt necessitatibus quaerat accusamus ea eligendi nisi saepe magni quisquam, consequuntur, eveniet veniam voluptate, distinctio totam autem minus nulla.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
