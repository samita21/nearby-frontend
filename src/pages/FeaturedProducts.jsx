import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

import { getAllItems } from "../api";
import sl from "../components/selector";
import * as actions from "../redux/actions";
import SingleProduct from "../components/SingleProduct";

function FeaturedProducts(props) {
  const { allItems, storeAllProducts } = staticSelector.select(props);

  useEffect(() => {
    (async function getItems() {
      await getAllItems().then((res) => storeAllProducts(res.data));
    })();
  }, []);

  return (
    <div className="feature">
      <Container>
        <h4 className="title">Featured Products</h4>
        <Row className="pt-4">
          {allItems.map((item, key) => (
            <Col key={key} className="pb-4" sm={12} md={3}>
              <SingleProduct detail={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const staticSelector = sl.object({
  allItems: sl.list(
    sl.object({
      _id: sl.string(""),
      name: sl.string(""),
      picture: sl.string(""),
      description: sl.string(""),
      category: sl.string(""),
      price: sl.number(),
    })
  ),

  storeAllProducts: sl.func(),
});

const mapStateToProps = (state) => {
  return {
    allItems: state.allItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeAllProducts: (products) =>
      dispatch(actions.storeAllProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts);
