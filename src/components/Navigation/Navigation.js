import React from 'react';
import {
    Navbar,
    NavDropdown,
    Nav,
    Form,
    FormControl,
    Button,
    InputGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navigation.scss';

export default function Navigation(props) {
    let navigationLinks = (
        <Nav className="mr-auto">
            <LinkContainer to="/login">
                <Nav.Item>Login</Nav.Item>
            </LinkContainer>
            <LinkContainer to="/signup">
                <Nav.Item>Sign up</Nav.Item>
            </LinkContainer>
        </Nav>
    );
    if (props.user) {
        if (props.user.rank === 4) {
            navigationLinks = (
                <Nav className="mr-auto">
                    <LinkContainer to="/admin">
                        <Nav.Item>Admin</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/logout">
                        <Nav.Item>Logout</Nav.Item>
                    </LinkContainer>
                </Nav>
            );
        } else {
            navigationLinks = (
                <nav>
                    <LinkContainer to="/logout">
                        <Nav.Item>Logout</Nav.Item>
                    </LinkContainer>
                </nav>
            );
        }
    }
    return (
        <Navbar bg="secondary" variant="dark" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Codaisseur Academy Calendar </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {navigationLinks}
            </Navbar.Collapse>
        </Navbar>
    );
}
