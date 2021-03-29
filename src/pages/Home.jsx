import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
// IMAGES
import heroBg from "../img/heroBg.png";
import cheap from "../img/cheap.png";
import hour from "../img/hour.png";
import money from "../img/money.png";
import payment from "../img/payment.png";

// COMPONENTS
import ProductList from "./ProductList";
import FeaturedProducts from "../pages/FeaturedProducts";

import f1 from "../img/f1.png";
import f2 from "../img/f2.png";
import f3 from "../img/f3.png";
import f4 from "../img/f4.png";
import f5 from "../img/f5.png";

function Home(props) {
    return (
        <>
            <div className="hero">
                <Container className="mb-5">
                    <div className="hero__bg">
                        <img src={heroBg} alt="" />
                    </div>
                    <div className="hero__card">
                        <div className="card">
                            <Row>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={cheap} alt="" />
                                        <div className="pl-3">
                                            <p>Cheap Shipping</p>
                                            <span>Very low price</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={money} alt="" />
                                        <div className="pl-3">
                                            <p>100% Money Back</p>
                                            <span>30 days money back</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={hour} alt="" />
                                        <div className="pl-3">
                                            <p>Help Center</p>
                                            <span>24/7 Support System</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={3}>
                                    <div className="card__item">
                                        <img src={payment} alt="" />
                                        <div className="pl-3">
                                            <p>Payment Method</p>
                                            <span>Secure payment</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
                <ProductList />
            </div>
            {props.userId && (
                <div className="feature">
                    <FeaturedProducts />
                </div>
            )}
            <div className="my-5 feature">
                <div className="container">
                    <div className="title">
                        <h2 className="mb-4">Selected Products</h2>
                        <p>Trending Item</p>
                    </div>
                    <div className="feature__wrapper">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 feature__right-img">
                                <img src={f1} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="feature-head-img">
                                    <img src={f2} alt="" />
                                </div>
                                <div className="feature__item d-flex mt-5">
                                    <div className="">
                                        <img src={f3} alt="" />
                                    </div>
                                    <div className="">
                                        <img src={f4} alt="" />
                                    </div>
                                    <div className="">
                                        <img src={f5} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        userId: state.userData._id,
    };
};

export default connect(mapStateToProps)(Home);
