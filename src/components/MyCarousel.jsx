import React, { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-bootstrap-icons";

class MyCarousel extends Component {
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
        throw new Error(`HTTP Error. Status ${response.status}`);
      }

      const data = await response.json();

      if (data.Search) {
        const myMovies = data.Search;
        this.setState({ movies: myMovies, loading: false });
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      this.setState({ error: error.message, loading: false });
      console.error("Error: ", error);
    }
  }

  render() {
    const { movies, error, loading } = this.state;

    const slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="dark-background ms-5 me-5">
        <h5 className="my-4 text-light text-start ms-2">The best film with {this.props.searchValue}</h5>
        <Row className="g-0 text-light">
          {error && (
            <Alert variant="warning">
              <Alert.Heading>Oh no! Something went wrong...</Alert.Heading>
              <p>{error}</p>
              <p className="mb-0">Please try again later or contact us if the problem persists.</p>
            </Alert>
          )}
          {loading ? (
            <Col xs={12}>
              <div style={{ backgroundColor: "#333", width: "100%", height: "100px" }}></div>
            </Col>
          ) : (
            <Slider {...slickSettings}>
              {movies.map((movie) => (
                <Col key={movie.imdbID}>
                  {/* <Link to={`/moviedetails/${movie.imdbID}`}> */}
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="img-fluid"
                    style={{ width: "400px", height: "200px" }}
                  />
                  {/* </Link> */}
                  <div className="carousel-caption"></div>
                </Col>
              ))}
            </Slider>
          )}
        </Row>
      </div>
    );
  }
}

export default MyCarousel;
