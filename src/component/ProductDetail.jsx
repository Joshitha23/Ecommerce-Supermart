import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  {
  }
  let proid = useParams();
  const proDetail = DATA.filter((x) => {
    return x.id === parseInt(proid.id);
  });
  const product = proDetail[0];
  console.log(product);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };
  // return <div></div>;
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={product.img}
              alt={product.title}
              height="400px"
              width="300px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="display-5 fw-bold">{product.tittle}</h2>

            <h3 className="my-4">Rs {product.price}/-</h3>
            <p className="my-4"> {product.rating}</p>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
