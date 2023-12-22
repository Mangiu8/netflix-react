import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NetflixLogo from "../assets/logo.png";
import { Search, PersonCircle, Bell } from "react-bootstrap-icons";

const MyNav = () => {
  return (
    <Navbar expand="lg" variant="dark" className="dark-background">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={NetflixLogo} width="100" height="60" className="d-inline-block align-top" alt="Netflix logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#TVShows">TV Shows</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Nav.Link href="#RecentlyAdded">Recently Added</Nav.Link>
            <Nav.Link href="#MyList">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="me-2" href="#">
              <Search />
            </Nav.Link>
            <Nav.Link className="me-2" href="#">
              KIDS
            </Nav.Link>
            <Nav.Link className="me-2" href="#">
              <Bell />
            </Nav.Link>
            <Nav.Link className="me-2" href="#">
              <PersonCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
