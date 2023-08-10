// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Carousel from './carousel';
import MovieList from './components/Movies';
import { IoPauseSharp } from 'react-icons/io5';


// import MovieList from './components/Movies';


//create a state to handle the search values 


//call the search endpoint and store the data in the state


//pass the search data to movie list and display


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Navbar setSearchValue={setSearchValue}/> */}
      <Carousel/>
      <br/>
      <br/>
      <br/>
      <MovieList/>
      <Footer/>
    </div>
  );
}

export default App;