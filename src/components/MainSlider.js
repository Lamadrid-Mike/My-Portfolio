import "../styles/MainSlider.scss";
import { useState } from "react";
import leftBtn from "../icons/left-btn.svg";
import rightBtn from "../icons/right-btn.svg";

const images = [
  {
    url: require("../img/slider/image-1.jpg"),
    title: "Digital Menu",
    description: "Just an example",
  },
  {
    url: require("../img/slider/image-2.jpg"),
    title: "Web Hosting",
    description: "Just an example",
  },

  {
    url: require("../img/slider/image-3.png"),
    title: "Custom websites",
    description: "Just an example",
  },
];

export default function MainSlider() {
  const [currIndex, setCurrIndex] = useState(0);

  function prevSlide() {
    setCurrIndex((index) => (index - 1 + images.length) % images.length);
  }

  function nextSlide() {
    setCurrIndex((index) => (index + 1) % images.length);
  }

  return (
    <div className="slider__container">
      <button className="slider__btn-prev" onClick={prevSlide}>
        <img src={leftBtn} alt="left-btn"></img>
      </button>
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${img.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="headers__container">
            <h1
              className={`slider__header ${
                index === currIndex ? "active" : ""
              }`}
            >
              {img.title}
            </h1>
            <p
              className={`slider__description ${
                index === currIndex && "active"
              }`}
            >
              {img.description}
            </p>
          </div>
        </div>
      ))}
      <button className="slider__btn-next" onClick={nextSlide}>
        <img src={rightBtn} alt="right-btn"></img>
      </button>
    </div>
  );
}
