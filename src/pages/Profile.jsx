import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../img/profile.png";
import { connect } from "react-redux";

function Profile(props) {
  return (
    <div className="profile">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="profile__img">
              <img src={profileImg} alt="" />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="profile__text">
              <h3>Email: {props.userEmail}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userId: state.userData._id,
    userEmail: state.userData.email,
  };
};

export default connect(mapStateToProps)(Profile);
