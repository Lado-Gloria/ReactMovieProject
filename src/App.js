// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Carousel from './carousel';
import MovieList from './components/Movies';

// import MovieList from './components/Movies';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MovieList></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
