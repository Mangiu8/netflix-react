import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TvShows from "./components/TvShows";
import Myfooter from "./components/MyFooter";
// import BodyGallery from "./components/BodyGallery";
import { Container } from "react-bootstrap";
import MyCarousel from "./components/MyCarousel";
function App() {
  return (
    <div className="App dark-background">
      <Container fluid className="dark-background">
        <MyNav />
        <TvShows />
        <MyCarousel searchValue="Joker" />
        <MyCarousel searchValue="Transformers" />
        <MyCarousel searchValue="Iron Man" />
        <MyCarousel searchValue="Barbie" />
        <MyCarousel searchValue="Spider-Man" />
        <MyCarousel searchValue="" />
        <Myfooter />
      </Container>
    </div>
  );
}

export default App;
// ho lasciato  attivo il carousel perche lo preferisco ma l'ho creato dopo quindi lascio anche Bodygallery perche' era il progetto iniziale
// anche perche' per fare i carousel mi sono aiutato parecchio online
