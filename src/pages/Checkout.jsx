import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

import sl from "../components/selector";
import { BASE_URL } from "../constants";
import * as actions from "../redux/actions";

// IMAGES
import p1 from "../img/p1.png";

function Checkout(props) {
  const {
    cartedProduct,
    selectedProduct,
    storeCartedProduct,
  } = staticSelector.select(props);

  const handleAddToCart = () => {
    storeCartedProduct(selectedProduct);
  };

  return (
    <>
      <div className="checkout">
        <Container>
          <Row>
            <Col sm={12} md={7}>
              <Table striped bordered hover>
                <thead className="text-center">
                  <tr>
                    <th>ITEMS</th>
                    <th>PRICE</th>
                    <th>QUANITY</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="name">
                      <img
                        src={`${BASE_URL}${selectedProduct.picture}`}
                        alt=""
                      />
                      <p>{selectedProduct.name}</p>
                    </td>
                    <td>${selectedProduct.price}</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className="checkout-form">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Full name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Number</Form.Label>
                      <Form.Control type="number" placeholder="Phone number" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <div className="text-center">
                    <Button variant="primary">Proceed To Payment</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

const staticSelector = sl.object({
  selectedProduct: sl.object({
    _id: sl.string(""),
    name: sl.string(""),
    picture: sl.string(""),
    description: sl.string(""),
    category: sl.string(""),
    price: sl.number(),
  }),
  cartedProduct: sl.list(
    sl.object({
      _id: sl.string(""),
      name: sl.string(""),
      picture: sl.string(""),
      description: sl.string(""),
      category: sl.string(""),
      price: sl.number(),
    })
  ),
  storeCartedProduct: sl.func(),
});

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.selectedProduct,
    cartedProduct: state.carteddProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeCartedProduct: (product) =>
      dispatch(actions.storeCartedProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
