import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TvShows from "./components/TvShows";
import Myfooter from "./components/MyFooter";
import BodyGallery from "./components/BodyGallery";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App dark-background">
      <Container fluid className="dark-background">
        <MyNav />
        <TvShows />
        <BodyGallery searchValue="Joker" />
        <BodyGallery searchValue="Transformers" />
        <BodyGallery searchValue="Iron Man" />
        <BodyGallery searchValue="Barbie" />
        <BodyGallery searchValue="Spider-Man" />
        <BodyGallery searchValue="" />
        <Myfooter />
      </Container>
    </div>
  );
}

export default App;
