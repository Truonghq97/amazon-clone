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
          title="Apple iPhone XR, 64GB, White - Fully Unlocked (Renewed)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61U15mbXKNL._AC_UY218_.jpg"
        />
        <Product
          id="123456"
          title="Apple iPhone 11 Pro (64GB, Space Gray) [Locked] + Carrier Subscription"
          price={284.10}
          rating={5}
          image="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="Apple iPhone 11, 128GB, Black - Fully Unlocked (Renewed)"
          price={699.97}
          rating={5}
          image="https://m.media-amazon.com/images/I/51GUjMAFDbL._AC_UY218_.jpg"
        />
        <Product
          id="123456"
          title="Apple iPhone XS Max, 64GB, Silver - Fully Unlocked (Renewed)"
          price={529.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61hBc3oHjyL._AC_UY218_.jpg"
        />
        <Product
          id="123456"
          title="Apple iPhone 11 Pro, 64GB, Space Gray - Fully Unlocked (Renewed)"
          price={819.97}
          rating={5}
          image="https://m.media-amazon.com/images/I/41wDuEW9iZL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="Apple iPhone 7, 128GB, Rose Gold - For AT&T / T-Mobile (Renewed)"
          price={239.97}
          rating={5}
          image="https://m.media-amazon.com/images/I/61VwZLSaSOL._AC_UY218_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
