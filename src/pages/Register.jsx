import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { history } from "../history";
import { register } from "../api";
import * as actions from "../redux/actions";

function Register(props) {
  const [email, setEmail] = useState();
  const [password, setPw] = useState();
  const [password2, setPw2] = useState();
  const [isRegistering, toggleIsRegistering] = useState(false);
  const [termsAgree, toggleTermsAgree] = useState(false);

  const handleSubmit = async () => {
    toggleIsRegistering(true);
    await register({ email, password, password2 }).then((res) =>
      handleRegisterSuccess(res)
    );
  };

  const handleRegisterSuccess = (res) => {
    toggleIsRegistering(false);
    props.storeUserData(res.data);
    localStorage.setItem("userData", JSON.stringify(res.data));
    return history.push("/");
  };

  return (
    <>
      <div className="sign-in">
        <Container>
          <div className="sign-in__wrapper">
            <div className="sign-in__card">
              <h1>Create your Account!</h1>
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

                <Form.Group controlId="formBasicPassword" className="pb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPw2(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the term & privacy policy"
                    onChange={(e) => toggleTermsAgree(!termsAgree)}
                  />
                </Form.Group>

                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    disabled={!termsAgree || isRegistering}
                    onClick={handleSubmit}
                  >
                    Create Account
                    <div
                      className={`loader d-none ${
                        isRegistering && "d-inline-block"
                      }`}
                    ></div>
                  </Button>
                </div>

                <div className="py-4 text-center">
                  Already a member? <Link to="/signin">Log In</Link>
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

export default connect(null, mapDispatchToProps)(Register);
