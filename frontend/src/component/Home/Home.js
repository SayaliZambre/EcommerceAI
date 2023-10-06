import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction"; // Import clearErrors
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const DefaultProduct = {
  name: "Blue Tshirt",
  images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyrh59NZVTffTCPfbvUbKY1MxKjV2WByUqMWqDFxxg6j_DzQ&s" }],
  price: "$3000",
  _id: "abhishekh",
};
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products) || {};

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors()); // Dispatch clearErrors
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      { loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <div className="banner">
            <p>Welcome to ECOMMERCE</p>
            <h1>Find amazing Products Below</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading"> Featured Product </h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
