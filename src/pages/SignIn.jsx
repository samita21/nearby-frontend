import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { history } from "../history";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { login } from "../api";

function SignIn(props) {
  const [email, setEmail] = useState();
  const [password, setPw] = useState();
  const [isLogging, toggleIsLogging] = useState(false);

  const handleSubmit = async () => {
    toggleIsLogging(true);
    await login({ email, password }).then((res) => handleLoginSuccess(res));
  };

  const handleLoginSuccess = (res) => {
    toggleIsLogging(false);
    props.storeUserData(res.data);
    localStorage.setItem("userData", JSON.stringify(res.data));

    if (res.data._id === "5f4de3497e7c738d43075c3c") {
      return history.push("/adminpanel");
    }

    return history.push("/");
  };

  return (
    <>
      <div className="sign-in">
        <Container>
          <div className="sign-in__wrapper">
            <div className="sign-in__card">
              <h1>Log in to your Account !</h1>
              <Form>
                <Form.Group controlId="formBasicEmail" className="pb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="pb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPw(e.target.value)}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    disabled={isLogging}
                    onClick={handleSubmit}
                  >
                    Submit
                    <div
                      className={`loader ml-2 d-none ${
                        isLogging && "d-inline-block"
                      }`}
                    ></div>
                  </Button>
                </div>
                <div className="py-4 text-center">
                  Don't have account? <Link to="/register">Create Account</Link>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    storeUserData: (requestBody) =>
      dispatch(actions.storeUserData(requestBody)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
