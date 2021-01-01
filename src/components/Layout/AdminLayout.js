import React from 'react';
import {Row, Col, Container, Navbar, Button} from 'react-bootstrap'
import Link from 'next/link';

const AdminLayout = (props) => {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Navbar>
         { props.sidebar ? <Container>
          <Row>
            <Col className="sidebar" md={2}>
              <ul>
              <li>
              <Link
                href="/other/admin-page"
                as={process.env.PUBLIC_URL + "/other/admin-page"}
              >
                <a>Home</a>
              </Link>
              </li>
              <li>
              <Link
                href="/other/category"
                as={process.env.PUBLIC_URL + "/other/category"}
              >
                <a>Category</a>
              </Link>
              </li>
                <li>
              <Link
                href="/other/products"
                as={process.env.PUBLIC_URL + "/other/products"}
              >
                <a>Products</a>
              </Link>
              </li>
              <li>
              <Link
                href="/other/orders"
                as={process.env.PUBLIC_URL + "/other/orders"}
              >
                <a>Orders</a>
              </Link>
              </li>
                
                </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", marginTop: 10 }}>
              {props.children}
            </Col>
          </Row>
        </Container>
        :
        props.children
        }
      </>
    );
};

export default AdminLayout;