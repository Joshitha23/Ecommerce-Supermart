import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="Background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column ">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              Set up your WORLD with US !
            </h5>
            <p class="card-text">
              Modern with tasteful mix of furniture to add style and spunk to
              your world.
            </p>

            <p class="card-text lead fs-2"></p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
