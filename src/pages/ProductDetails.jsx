import React from "react";
import sl from "../components/selector";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
// IMAGES
import master from "../img/master.png";
import visa from "../img/visa.png";
import cash from "../img/visa.png";
import esewa from "../img/esewa.png";

// COMPONENTS
import { history } from "../history";
import { BASE_URL } from "../constants";
import SingleProduct from "../components/SingleProduct";

function ProductDetails(props) {
  const { userId, itemsByCategory, selectedProduct } = staticSelector.select(
    props
  );

  const handleCheckout = () => {
    if (userId) {
      return history.push("/checkout");
    }

    return history.push("/signin");
  };

  return (
    <>
      <div className="product-details">
        <Container>
          <div className="product-details__top">
            <Row>
              <Col sm={12} md={6}>
                <div className="product-details__img">
                  <img src={`${BASE_URL}${selectedProduct.picture}`} alt="" />
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="product-details__pricing">
                  <p>{selectedProduct.name}</p>
                  <div className="price">
                    <h4>${selectedProduct.price}</h4>
                    <button onClick={handleCheckout}>Add to cart</button>
                  </div>
                  <br />
                  <span>
                    Anywhere Inside Ring-road: Rs. 100 Outside Rind-road: Rs.
                    200
                  </span>
                </div>
                <div className="payment">
                  <span>payment:</span>
                  <div className="cards">
                    <img src={cash} alt="" />
                    <img src={master} alt="" />
                    <img src={visa} alt="" />
                    <img src={esewa} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="product-details__description">
            <h1 className="title">Description</h1>
            <p>{selectedProduct.description}</p>
            <div className="product-details__description__img">
              <img src={`${BASE_URL}${selectedProduct.picture}`} alt="" />
            </div>
          </div>
          <div className="related-products">
            <h3 className="title">Related Products</h3>
            <Row className="pt-4">
              {itemsByCategory.map((item, key) => {
                return (
                  item._id !== selectedProduct._id && (
                    <Col key={key} className="pb-4" sm={12} md={3}>
                      <SingleProduct detail={item} />
                    </Col>
                  )
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

const staticSelector = sl.object({
  userId: sl.string(""),
  selectedProduct: sl.object({
    _id: sl.string(""),
    name: sl.string(""),
    picture: sl.string(""),
    description: sl.string(""),
    category: sl.string(""),
    price: sl.number(),
  }),
  itemsByCategory: sl.list(
    sl.object({
      _id: sl.string(""),
      name: sl.string(""),
      picture: sl.string(""),
      description: sl.string(""),
      category: sl.string(""),
      price: sl.number(),
    })
  ),
});

const mapStateToProps = (state) => {
  return {
    userId: state.userData._id,
    itemsByCategory: state.itemsByCategory,
    selectedProduct: state.selectedProduct,
  };
};

export default connect(mapStateToProps)(ProductDetails);
