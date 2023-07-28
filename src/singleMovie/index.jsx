import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../utils/utilities";
import './style.css'
import Navbar from "../navbar";
import { IoIosHeartEmpty } from "react-icons/io";
import Footer from "../footer";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [moviedetail, setMoviedetail] = useState(null);

  useEffect(() => {
    const view = async () => {
      try {
        const viewMovie = await getMovieDetails(movie_id);
        setMoviedetail(viewMovie);
      } catch (error) {
        console.log(error);
      }
    };
    view();
  }, [movie_id]);

  return (
    <>
    <Navbar></Navbar>
      {moviedetail && (
          <div className="movie-details-div">
            <div className="movie-botton">
            <img src={`${IMAGE_BASE_URL}${moviedetail.poster_path}`} alt={moviedetail.title}/>
            <br/>
            <button>Watch Now</button>
            </div>
            <div className="movie-details">
              <h2>{moviedetail.title}</h2><span className="favorite-icon"><IoIosHeartEmpty className="fav-icon"></IoIosHeartEmpty></span>
              <div className="three-divs">
              {/* <p>{moviedetail.overview}</p> */}
              </div>
            </div>
          </div>
          

      )}
      <Footer></Footer>
    </>
  );
};

export default MovieDetails;


{/* <p>{moviedetail.adult}</p>
<img src={`${IMAGE_BASE_URL}${moviedetail.poster_path}`} alt={moviedetail.title} />
<div>{moviedetail.title} </div>
<p>{moviedetail.vote_count}</p>
<p>{moviedetail.vote_count}</p>
<p>{moviedetail.overview}</p>
<button>Watch Now</button> */}
