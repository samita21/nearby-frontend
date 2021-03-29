import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories, getItemsByCategory } from "../api";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import sl from "../components/selector";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
// COMPONENTS
import SingleProduct from "../components/SingleProduct";

function ProductList(props) {
  const {
    categories,
    itemsByCategory,
    activeCategory,
    storeActiveCategory,
  } = staticSelector.select(props);

  useEffect(() => {
    (async function fetchCategories() {
      await getCategories().then((res) => props.storeCategories(res.data));
    })();
  }, [activeCategory]);

  useEffect(() => {
    (async function fetchCategories() {
      await getItemsByCategory(activeCategory).then((res) =>
        props.storeItemsByCategory(res.data)
      );
    })();
  }, [activeCategory]);

  return (
    <>
      <div className="nav-wrapper">
        <Container>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                {categories.map((category, key) => (
                  <a
                    key={key}
                    className={` ${
                      category.slug === activeCategory ? "font-weight-bold" : ""
                    } btn btn-link cursor-pointer`}
                    onClick={() => storeActiveCategory(category.slug)}
                  >
                    {category.name}
                  </a>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      <div className="product-list">
        <Container>
          <Row className="pt-4">
            {itemsByCategory.map((item, key) => (
              <Col key={key} className="pb-4" sm={12} md={3}>
                <SingleProduct detail={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

const staticSelector = sl.object({
  activeCategory: sl.string("electronics"),
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
  categories: sl.list(
    sl.object({
      _id: sl.string(""),
      name: sl.string(""),
      slug: sl.string(""),
    })
  ),
  storeCategories: sl.func(),
  storeItemsByCategory: sl.func(),
  storeActiveCategory: sl.func(),
});

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
    itemsByCategory: state.itemsByCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeCategories: (categories) =>
      dispatch(actions.storeCategories(categories)),
    storeItemsByCategory: (categorySlug) =>
      dispatch(actions.storeItemsByCategory(categorySlug)),
    storeActiveCategory: (categories) =>
      dispatch(actions.storeActiveCategory(categories)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
