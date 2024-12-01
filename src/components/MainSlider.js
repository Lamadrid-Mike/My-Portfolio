import "../styles/MainSlider.scss";
import { useState, useEffect, useRef } from "react";
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
  {
    url: require("../img/slider/image-5.jpg"),
    title: "Website Maintenance",
    description:
      "Ensure your website runs smoothly with our maintenance services. We offer regular updates, security checks, performance optimization",
  },
];

export default function MainSlider() {
  const [currIndex, setCurrIndex] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval.current);
  }, []);

  function prevSlide() {
    setCurrIndex((index) => (index - 1 + images.length) % images.length);
    clearInterval(interval.current);
  }

  function nextSlide() {
    setCurrIndex((index) => (index + 1) % images.length);
    clearInterval(interval.current);
  }

  return (
    <div className="slider__container">
      <button className="slider__btn-prev slider__btn" onClick={prevSlide}>
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
            <button
              className={`learn-more__btn ${
                index === currIndex ? "active" : ""
              }`}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
      <button className="slider__btn-next slider__btn" onClick={nextSlide}>
        <img src={rightBtn} alt="right-btn"></img>
      </button>
    </div>
  );
}
