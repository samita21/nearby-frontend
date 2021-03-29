import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";

import { getAllItems, addItem, deleteItem } from "../api";
import sl from "../components/selector";
import * as actions from "../redux/actions";

function AdminPanel(props) {
  const { allItems, storeAllProducts } = staticSelector.select(props);
  let itemCounter = 0;

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [picture, setPicture] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [isAddingProduct, toggleIsAddingProduct] = useState(false);
  const [isDeletingProduct, toggleIsDeletingProduct] = useState(false);

  useEffect(() => {
    (async function getItems() {
      await getAllItems().then((res) => storeAllProducts(res.data));
    })();
  }, []);

  const handleAddProduct = async () => {
    toggleIsAddingProduct(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("picture", picture);

    await addItem(formData).then(async (res) => {
      if (res.data._id) {
        toggleIsAddingProduct(false);
        await getAllItems().then((res) => storeAllProducts(res.data));
      }
    });
  };

  const handleDelete = async (productId) => {
    toggleIsDeletingProduct(true);
    await deleteItem(productId);

    return await getAllItems().then((res) => {
      toggleIsDeletingProduct(false);
      return storeAllProducts(res.data);
    });
  };

  return (
    <div className="admin-panel">
      <Container>
        <div className="admin-panel__add">
          <div className="form-wrapper">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <div className="input-group mt-4 mb-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={(e) => setPicture(e.target.files[0])}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    {picture ? picture.name : "Choose Picture"}
                  </label>
                </div>
              </div>
              <div className="text-center">
                <Button
                  onClick={handleAddProduct}
                  disabled={isAddingProduct || isDeletingProduct}
                >
                  ADD PRODUCT
                  <div
                    className={`loader ml-2 d-none ${
                      isAddingProduct && "d-inline-block"
                    }`}
                  ></div>
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <div className="admin-panel__table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item, key) => {
                itemCounter += 1;

                return (
                  <tr key={key}>
                    <td>{itemCounter}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className="action-wrap">
                        <Link
                          className="mr-4 btn btn-info"
                          to={{ pathname: "/editpost", state: item }}
                        >
                          Edit
                        </Link>
                        <Button
                          variant="danger"
                          disabled={isAddingProduct || isDeletingProduct}
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                          <div
                            className={`loader ml-2 d-none ${
                              isDeletingProduct && "d-inline-block"
                            }`}
                          ></div>
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

const staticSelector = sl.object({
  allItems: sl.list(
    sl.object({
      _id: sl.string(""),
      name: sl.string(""),
      description: sl.string(""),
      price: sl.number(),
      category: sl.string(""),
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
