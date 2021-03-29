import React from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import sl from "../components/selector";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
// IMAGES
import cart from "../img/cart.png";

function TopNav(props) {
  const handleLogOut = () => {
    props.logout();
    props.clearCartProduct();
    localStorage.removeItem("cartedProduct");
    localStorage.removeItem("userData");
  };

  const { userId, cartedProduct } = staticSelector.select(props);

  const getTotalProductInCart = () => {
    return cartedProduct.length;
  };

  return (
    <>
      <div className="top-header">
        <Container className="d-flex justify-content-between">
          <div className="phone">
            <svg width="14" height="14" viewBox="0 0 14 14">
              <defs>
                <clipPath id="clip-path">
                  <rect width="14" height="14" fill="none" />
                </clipPath>
              </defs>
              <g id="phone-call" clipPath="url(#clip-path)">
                <g id="phone-call-2" data-name="phone-call" opacity="0.8">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M14,11.282a2.071,2.071,0,0,0-.635-1.423A5.086,5.086,0,0,0,11.35,8.521a2.254,2.254,0,0,0-2.314.657l0,0-.739.734a11.08,11.08,0,0,1-2.331-1.8L5.89,8.04a11.081,11.081,0,0,1-1.8-2.331l.734-.739,0,0A2.254,2.254,0,0,0,5.48,2.652,5.087,5.087,0,0,0,4.142.638a2.081,2.081,0,0,0-2.888-.1L1.239.548l-.021.02A4.437,4.437,0,0,0,0,3.818,10.385,10.385,0,0,0,3.306,10.7a13.329,13.329,0,0,0,1.311,1.142.547.547,0,0,0,.665-.868,12.246,12.246,0,0,1-1.2-1.047,9.288,9.288,0,0,1-2.985-6.11,3.379,3.379,0,0,1,.887-2.461l0,0a.984.984,0,0,1,1.37.049c1.416,1.468,1.313,2.162.688,2.8L3.029,5.222a.547.547,0,0,0-.111.608,11.051,11.051,0,0,0,2.2,2.984l.072.072a11.049,11.049,0,0,0,2.984,2.2.547.547,0,0,0,.608-.111L9.8,9.959c.642-.626,1.335-.728,2.8.688a.984.984,0,0,1,.05,1.37l0,0a3.368,3.368,0,0,1-2.436.887h-.025a7.091,7.091,0,0,1-2.7-.639.547.547,0,0,0-.433,1A8.068,8.068,0,0,0,10.183,14h.031a4.427,4.427,0,0,0,3.219-1.217l.02-.021.014-.016A2.071,2.071,0,0,0,14,11.282Z"
                    transform="translate(0 -0.002)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            <span className="pl-1">(+977) 123 456 7890</span>
          </div>
          <div className="log">
            {!userId ? (
              <React.Fragment>
                <Link to={"/register"}>
                  <svg
                    className="pr-1"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <defs>
                      <clipPath id="a">
                        <rect className="a" width="14" height="14" />
                      </clipPath>
                    </defs>
                    <g className="b">
                      <g className="c" transform="translate(0)">
                        <g transform="translate(0)">
                          <path
                            className="d"
                            d="M13.965,12a.547.547,0,0,0-1.071.223.571.571,0,0,1-.116.479.556.556,0,0,1-.437.208H1.66a.556.556,0,0,1-.437-.208.571.571,0,0,1-.116-.479A6.042,6.042,0,0,1,6.855,7.435l.145,0,.146,0A6.016,6.016,0,0,1,12,10.105a.547.547,0,1,0,.908-.609A7.113,7.113,0,0,0,9.227,6.7a3.719,3.719,0,1,0-4.451,0A7.113,7.113,0,0,0,.036,12,1.661,1.661,0,0,0,1.66,14H12.341a1.661,1.661,0,0,0,1.624-2ZM4.375,3.719A2.625,2.625,0,1,1,7.133,6.34H6.868A2.628,2.628,0,0,1,4.375,3.719Z"
                            transform="translate(0)"
                            fill="#ffffff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Register
                </Link>
                <Link className="ml-4" to={"/signin"}>
                  <svg
                    className="pr-1"
                    width="15.83"
                    height="13.46"
                    viewBox="0 0 15.83 13.46"
                  >
                    <g
                      id="Icon_ionic-ios-log-in"
                      data-name="Icon ionic-ios-log-in"
                      transform="translate(-3.445 -5.625)"
                    >
                      <path
                        id="Path_87"
                        data-name="Path 87"
                        d="M18.864,5.625H8.157A1.759,1.759,0,0,0,6.4,7.384a.535.535,0,1,0,1.071,0A.69.69,0,0,1,8.157,6.7H18.864a.69.69,0,0,1,.688.688v9.942a.69.69,0,0,1-.688.688H8.157a.69.69,0,0,1-.688-.688.535.535,0,0,0-1.071,0,1.759,1.759,0,0,0,1.759,1.759H18.864a1.759,1.759,0,0,0,1.759-1.759V7.384A1.759,1.759,0,0,0,18.864,5.625Z"
                        transform="translate(-1.347)"
                        fill="#fff"
                      />
                      <path
                        id="Path_88"
                        data-name="Path 88"
                        d="M10.137,17.712a.54.54,0,0,0,0,.757l0,0a.553.553,0,0,0,.375.149.517.517,0,0,0,.379-.157l3.158-3.151a.751.751,0,0,0,0-1.117l-3.235-3.227a.532.532,0,0,0-.379-.157.523.523,0,0,0-.379.157.533.533,0,0,0,0,.757l2.493,2.455H3.981a.535.535,0,0,0,0,1.071h8.588Z"
                        transform="translate(0 -2.367)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  Sign In
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to={"/profile"}>
                  <svg
                    className="pr-1"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <defs>
                      <clipPath id="a">
                        <rect className="a" width="14" height="14" />
                      </clipPath>
                    </defs>
                    <g className="b">
                      <g className="c" transform="translate(0)">
                        <g transform="translate(0)">
                          <path
                            className="d"
                            d="M13.965,12a.547.547,0,0,0-1.071.223.571.571,0,0,1-.116.479.556.556,0,0,1-.437.208H1.66a.556.556,0,0,1-.437-.208.571.571,0,0,1-.116-.479A6.042,6.042,0,0,1,6.855,7.435l.145,0,.146,0A6.016,6.016,0,0,1,12,10.105a.547.547,0,1,0,.908-.609A7.113,7.113,0,0,0,9.227,6.7a3.719,3.719,0,1,0-4.451,0A7.113,7.113,0,0,0,.036,12,1.661,1.661,0,0,0,1.66,14H12.341a1.661,1.661,0,0,0,1.624-2ZM4.375,3.719A2.625,2.625,0,1,1,7.133,6.34H6.868A2.628,2.628,0,0,1,4.375,3.719Z"
                            transform="translate(0)"
                            fill="#ffffff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Profile
                </Link>

                <Link to={"/"} className="ml-4" onClick={handleLogOut}>
                  <svg
                    className="pr-1"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <defs>
                      <clipPath id="a">
                        <rect className="a" width="14" height="14" />
                      </clipPath>
                    </defs>
                    <g className="b">
                      <g className="c" transform="translate(0)">
                        <g transform="translate(0)">
                          <path
                            className="d"
                            d="M13.965,12a.547.547,0,0,0-1.071.223.571.571,0,0,1-.116.479.556.556,0,0,1-.437.208H1.66a.556.556,0,0,1-.437-.208.571.571,0,0,1-.116-.479A6.042,6.042,0,0,1,6.855,7.435l.145,0,.146,0A6.016,6.016,0,0,1,12,10.105a.547.547,0,1,0,.908-.609A7.113,7.113,0,0,0,9.227,6.7a3.719,3.719,0,1,0-4.451,0A7.113,7.113,0,0,0,.036,12,1.661,1.661,0,0,0,1.66,14H12.341a1.661,1.661,0,0,0,1.624-2ZM4.375,3.719A2.625,2.625,0,1,1,7.133,6.34H6.868A2.628,2.628,0,0,1,4.375,3.719Z"
                            transform="translate(0)"
                            fill="#ffffff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Log out
                </Link>
              </React.Fragment>
            )}
          </div>
        </Container>
      </div>
      <div className="logo__wrapper">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="nav__logo">
            <Link to="/">
              <svg width="115" height="63" viewBox="0 0 115 63">
                <text
                  id="CONVENIENCE_STORE"
                  data-name="CONVENIENCE STORE"
                  transform="translate(0 18)"
                  fill="#303030"
                  fontSize="17"
                  fontFamily="Roboto-Black, Roboto"
                  fontWeight="800"
                >
                  <tspan x="0" y="0">
                    CONVENIENCE
                  </tspan>
                  <tspan fill="#fd7d2d" fontSize="36">
                    <tspan x="0" y="35">
                      STORE
                    </tspan>
                  </tspan>
                </text>
              </svg>
            </Link>
          </div>
          <div className="search-bar">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 shadow-none"
              />
              <Button className="shadow-none">Search</Button>
            </Form>
          </div>
          <Link to="/cart" className="cart">
            <img src={cart} alt="" />
            <div className="cart__number">
              <span>{getTotalProductInCart()}</span>
>>>>>>> da03d76b8ced62215aecb89eb9185372988899a3
            </div>
          </Link>
        </Container>
      </div>
    </>
  );
}

const staticSelector = sl.object({
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
  userId: sl.string(""),
});

const mapStateToProps = (state) => {
  return {
    userId: state.userData._id,
    cartedProduct: state.cartedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeUserData: (requestBody) =>
      dispatch(actions.storeUserData(requestBody)),
    clearCartProduct: () => dispatch(actions.clearCartProduct()),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
