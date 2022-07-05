import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <hr />
            <p className="lead mb-4">
              Furniture World is an established and trusted furniture retailer
              that focuses on providing quality furniture to customers at
              affordable prices in short term & long term store location
              formats. We focus on building a strong and consistent store format
              which provides a safe and professional environment for our
              employees and customers. Our policies and procedures have been put
              together to build a store brand and customer environment that is
              consistent and maintained throughout the entire company and all
              store locations. Overstock Furniture & Mattress is committed to
              becoming a leading furniture retailer that provides customers with
              affordable furniture solutions provided by a professional and
              customer orientated staff. Our stores and store team members are
              and will be focused on working together to meet and exceed the
              expectations of our customers. Thank you for visiting our stores
              and we appreciate your business.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 flex justify-content-center">
            <img
              src="/assets/Aboutus.webp"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
