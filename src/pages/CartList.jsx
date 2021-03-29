import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartList() {
    return (
        <div className="cart-list">
            <Container>
                <div className="cart-list__table">
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
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Link to="/checkout">
                                            <Button
                                                className="mr-4"
                                                variant="info"
                                            >
                                                Checkout
                                            </Button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Link to="/checkout">
                                            <Button
                                                className="mr-4"
                                                variant="info"
                                            >
                                                Checkout
                                            </Button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Link to="/checkout">
                                            <Button
                                                className="mr-4"
                                                variant="info"
                                            >
                                                Checkout
                                            </Button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rice</td>
                                <td>Rd 2000</td>
                                <td>
                                    <div className="action-wrap">
                                        <Link to="/checkout">
                                            <Button
                                                className="mr-4"
                                                variant="info"
                                            >
                                                Checkout
                                            </Button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default CartList;
