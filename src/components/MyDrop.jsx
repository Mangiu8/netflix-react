import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

const MyDrop = () => {
  const location = useLocation();
  const homeLocation = location.pathname === "/";
  if (homeLocation) {
    return (
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col className="d-flex align-items-center">
            <h3 className="text-light">Home</h3>
            <Dropdown className="ms-5">
              <Dropdown.Toggle variant="secondary" className="btn-sm rounded-0 bg-black border border-2">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-black">
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
                <Dropdown.Item href="#">Romance</Dropdown.Item>
                <Dropdown.Item href="#">Crime</Dropdown.Item>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                <Dropdown.Item href="#">Documentary</Dropdown.Item>
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="dark">
              <Grid />
            </Button>
            <Button variant="dark" className="ms-2">
              <Grid3x3 />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col className="d-flex align-items-center">
            <h3 className="text-light">TV Shows</h3>
            <Dropdown className="ms-5">
              <Dropdown.Toggle variant="secondary" className="btn-sm rounded-0 bg-black border border-2">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-black">
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
                <Dropdown.Item href="#">Romance</Dropdown.Item>
                <Dropdown.Item href="#">Crime</Dropdown.Item>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                <Dropdown.Item href="#">Documentary</Dropdown.Item>
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="dark">
              <Grid />
            </Button>
            <Button variant="dark" className="ms-2">
              <Grid3x3 />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default MyDrop;
