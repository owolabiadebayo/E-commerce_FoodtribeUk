import React from "react";
import "./Home.css";
import Product from "./Product";
import Product2 from "./Product2";

function Home() {
  return (
    <div className="home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block h-40 w-100"
              src="/img/foodtribe-2.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block h-40 w-100"
              src="/img/Foodtribe.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block h-40 w-100"
              src="/img/fOODTRIBE3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="home__row">
        <Product
          id="11"
          title=""
          price={11.96}
          rating={4}
          image="/img/2.jpg"
          overview=""
        />
        <Product
          id="12"
          title="The Lean Startup: How content Innovation"
          price={21.96}
          rating={5}
          image="/img/1.jpg"
          overview=""
        />
        <Product
          id="13"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/3.jpg"
          overview=""
        />
        <Product
          id="14"
          title="The Lean Startup: How content Innovation"
          price={11.96}
          rating={4}
          image="/img/4.jpg"
          overview=""
        />
      </div>
      <div className="items">
        <Product2
          id="15"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/21.jpg"
          overview=""
        />
        <Product2
          id="16"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/22.jpg"
          overview=""
        />
        <Product2
          id="17"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/23.jpg"
          overview=""
        />
        <Product2
          id="18"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/24.jpg"
          overview=""
        />
        <Product2
          id="19"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/25.jpg"
          overview=""
        />
      </div>
      <div className="home__row">
        <Product
          id="20"
          title="The Lean Startup: How content Innovation"
          price={21.96}
          rating={5}
          image="/img/5.jpg"
          overview=""
        />
        <Product
          id="21"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/6.jpg"
          overview=""
        />
        <Product
          id="22"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/7.jpg"
          overview=""
        />
        <Product
          id="23"
          title="The Lean Startup: How content Innovation"
          price={11.96}
          rating={4}
          image="/img/8.jpg"
          overview=""
        />
      </div>
      <div className="items">
        <Product2
          id="24"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/25.jpg"
          overview=""
        />
        <Product2
          id="25"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/26.jpg"
          overview=""
        />
        <Product2
          id="26"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/27.jpg"
          overview=""
        />
        <Product2
          id="27"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/28.jpg"
          overview=""
        />
        <Product2
          id="28"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/29.jpg"
          overview=""
        />
        <Product2
          id="29"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/30.jpg"
          overview=""
        />
        <Product2
          id="30"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/31.jpg"
          overview=""
        />
        <Product2
          id="31"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/32.jpg"
          overview=""
        />
        <Product2
          id="32"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/33.jpg"
          overview=""
        />
        <Product2
          id="33"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/34.jpg"
          overview=""
        />
        <Product2
          id="34"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/35.jpg"
          overview=""
        />
      </div>
      <div className="home__row">
        <Product
          id="35"
          title=""
          price={11.96}
          rating={4}
          image="/img/36.jpg"
          overview=""
        />
        <Product
          id="36"
          title="The Lean Startup: How content Innovation"
          price={21.96}
          rating={5}
          image="/img/37.jpg"
          overview=""
        />
        <Product
          id="37"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/38.jpg"
          overview=""
        />
        <Product
          id="38"
          title="The Lean Startup: How content Innovation"
          price={11.96}
          rating={4}
          image="/img/39.jpg"
          overview=""
        />
      </div>
      <div className="items">
        <Product2
          id="39"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/40.jpg"
          overview=""
        />
        <Product2
          id="40"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/41.jpg"
          overview=""
        />
        <Product2
          id="41"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/44.jpg"
          overview=""
        />
        <Product2
          id="42"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/20.jpg"
          overview=""
        />
        <Product2
          id="43"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/19.jpg"
          overview=""
        />
        <Product2
          id="44"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/18.jpg"
          overview=""
        />
        <Product2
          id="45"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/17.jpg"
          overview=""
        />
        <Product2
          id="46"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/10.jpg"
          overview=""
        />
        <Product2
          id="47"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/11.jpg"
          overview=""
        />
        <Product2
          id="48"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/12.jpg"
          overview=""
        />
        <Product2
          id="49"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/13.jpg"
          overview=""
        />
        <Product2
          id="50"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/14.jpg"
          overview=""
        />
        <Product2
          id="51"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/15.jpg"
          overview=""
        />
        <Product2
          id="52"
          title="The Lean Startup: How content Innovation"
          price={31.96}
          rating={3}
          image="/img/16.jpg"
          overview=""
        />
      </div>
    </div>
  );
}

export default Home;
