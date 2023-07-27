import React, { useState } from "react";
import './style.css';
import { images } from "../helpers/index";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdStar } from "react-icons/io";


const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  const goToPreviousImage = () => {
    // If on the first image, go to the last image
    const newCurrImg = (currImg - 1 + images.length) % images.length;
    setCurrImg(newCurrImg);
  };

  const goToNextImage = () => {
    // If on the last image, go to the first image
    const newCurrImg = (currImg + 1) % images.length;
    setCurrImg(newCurrImg);
  };

  return (
    <>
      <div className="carousel">
        <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
          <div className="left" onClick={goToPreviousImage}>
            <IoIosArrowBack className="left-icon" />
          </div>

          <div className="center">
            <p>{images[currImg].duration}</p>
            <h1 className="center-h1">{images[currImg].title}</h1>
            <p className="center-status">
              <span>
                 {images[currImg].status}
              </span>
              </p>

            <p className="center-rating">
              <span>
                <IoMdStar className="span-icon"></IoMdStar>
              </span>
              {images[currImg].rating}
            </p>

            <p className="center-description">
              <span>
                 {images[currImg].description}
              </span>
            </p>

            <p className="center-staring">
              <span>Staring:   </span>
              {images[currImg].staring}
            </p>

           <div className="center-buttons">
            <button className="watch">Watch Now</button>
            <button className="favorite">Add To Favorite</button>
           </div>
          </div>

          <div className="right" onClick={goToNextImage}>
            <IoIosArrowForward className="right-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;