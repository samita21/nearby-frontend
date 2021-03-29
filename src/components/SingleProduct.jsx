import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import sl from "../components/selector";

import { BASE_URL } from "../constants";

<<<<<<< HEAD
function SingleProduct() {
    return (
        <>
            <Link to="/productlist/one">
                <div className="singleProduct">
                    <div className="singleProduct__img">
                        <img src={p1} alt="" />
                    </div>
                    <p>Lenovo P8 Tab3 8 plus</p>
                    <h3>$329.99</h3>
                    <div className="text-center">
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </Link>
        </>
    );
=======
function SingleProduct(props) {
  const { detail, storeSelectedProduct } = staticSelector.select(props);

  return (
    <>
      <Link to="/productlist/one" onClick={() => storeSelectedProduct(detail)}>
        <div className="singleProduct">
          <div className="singleProduct__img">
            <img src={`${BASE_URL}${detail.picture}`} alt="" />
          </div>
          <p>{detail.name}</p>
          <h3>{detail.price}</h3>
        </div>
      </Link>
    </>
  );
>>>>>>> da03d76b8ced62215aecb89eb9185372988899a3
}

const staticSelector = sl.object({
  detail: sl.object({
    _id: sl.string(""),
    name: sl.string(""),
    picture: sl.string(""),
    description: sl.string(""),
    category: sl.string(""),
    price: sl.number(),
  }),
  storeSelectedProduct: sl.func(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    storeSelectedProduct: (product) =>
      dispatch(actions.storeSelectedProduct(product)),
  };
};

export default connect(null, mapDispatchToProps)(SingleProduct);
