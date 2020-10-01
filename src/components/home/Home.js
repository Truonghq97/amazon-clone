import React from "react";

import Product from "../product/Product";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123456"
          title="The learn Startup: How you like that"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_801,204,203,200_.jpg"
        />
        <Product
          id="123456"
          title="The learn Startup: How you like that"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_801,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="The learn Startup: How you like that"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_801,204,203,200_.jpg"
        />
        <Product
          id="123456"
          title="The learn Startup: How you like that"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_801,204,203,200_.jpg"
        />
        <Product
          id="123456"
          title="The learn Startup: How you like that"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_801,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="The learn Startup: How you like that"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_801,204,203,200_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
