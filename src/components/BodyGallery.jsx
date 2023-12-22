import { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";

class BodyGallery extends Component {
  state = {
    movies: [],
    error: null,
    loading: true,
  };

  componentDidMount() {
    this.moviesFetch();
  }

  async moviesFetch() {
    try {
      const url = `http://www.omdbapi.com/?s=${this.props.searchValue}&apikey=1e3cafc1`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Errore HTTP. Stato ${response.status}`);
      }

      const data = await response.json();

      const myMovies = data.Search.slice(0, 6);
      this.setState({ movies: myMovies, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
      console.error("Errore ", error);
    }
  }

  render() {
    const { movies, error, loading } = this.state;
    return (
      <div className="dark-background">
        <h5 className="my-4 text-light text-start ms-2">The best film with {this.props.searchValue}</h5>
        <Row className="g-1 text-light">
          {error && (
            <Alert variant="warning">
              <Alert.Heading>Oh no! Something went wrong...</Alert.Heading>
              <p>{error}</p>
              <p className="mb-0">Please try again later or contact us if the problem persists.</p>
            </Alert>
          )}
          {loading ? (
            <>
              <Col xs={12}>
                <div style={{ backgroundColor: "#333", width: "100%", height: "100px" }}></div>
              </Col>
            </>
          ) : (
            movies.map((movie) => (
              <Col className="hover-zoom" lg="2" xs={6} md={4} key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                  style={{ width: "400px", height: "200px", objectFit: "cover" }}
                />
              </Col>
            ))
          )}
        </Row>
      </div>
    );
  }
}

export default BodyGallery;
