import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./redux/actions";

// PAGES
import Home from "./pages/Home";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import AdminPanel from "./pages/AdminPanel";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";

// COMPONENTS
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";

//CONSTANT
import { ADMIN_ID } from "./constants";

function App(props) {
  if (window.performance.navigation.type === 1) {
    if (!props.userId) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const categories = JSON.parse(localStorage.getItem("categories"));
      const activeCategory = JSON.parse(localStorage.getItem("activeCategory"));
      const selectedProduct = JSON.parse(
        localStorage.getItem("selectedProduct")
      );
      const itemsByCategory = JSON.parse(
        localStorage.getItem("itemsByCategory")
      );
      // const cartedProduct = JSON.parse(localStorage.getItem("cartedProduct"));
      props.storeUserData(userData || {});
      props.storeCategories(categories || []);
      props.storeActiveCategory(activeCategory || "electronics");
      props.storeSelectedProduct(selectedProduct || {});
      props.storeItemsByCategory(itemsByCategory || []);
      // props.storeCartedProduct(cartedProduct);
    }
  }

  return (
    <>
      <TopNav />
      <Switch>
        {props.userId === ADMIN_ID ? (
          <Route exact path="/" component={AdminPanel} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        <Route exact path="/" component={Home} />
        <Route exact path="/productlist/:slug" component={ProductDetails} />
        {props.userId === ADMIN_ID && (
          <React.Fragment>
            <Route exact path="/adminpanel" component={AdminPanel} />
            <Route exact path="/editpost" component={EditPost} />
          </React.Fragment>
        )}

        {!props.userId && props.userId !== ADMIN_ID ? (
          <React.Fragment>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/register" component={Register} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/cart" component={Cart} /> */}
          </React.Fragment>
        )}
        <Route exact component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.userData._id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeUserData: (details) => dispatch(actions.storeUserData(details)),
    storeSelectedProduct: (product) =>
      dispatch(actions.storeSelectedProduct(product)),
    storeCartedProduct: (product) =>
      dispatch(actions.storeCartedProduct(product)),
    storeCategories: (categories) =>
      dispatch(actions.storeCategories(categories)),
    storeItemsByCategory: (categorySlug) =>
      dispatch(actions.storeItemsByCategory(categorySlug)),
    storeActiveCategory: (categories) =>
      dispatch(actions.storeActiveCategory(categories)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
