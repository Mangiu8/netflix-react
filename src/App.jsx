import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyDrop from "./components/MyDrop";
import Myfooter from "./components/MyFooter";
import TvShow from "./components/TvShow";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHome from "./components/MyHome";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <div className="App dark-background">
      <BrowserRouter>
        <Container fluid className="dark-background">
          <MyNav />
          <MyDrop />
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/tvshow" element={<TvShow />} />
            <Route path="/moviedetails/:MovieID" element={<MovieDetails />} />
          </Routes>
          <Myfooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
