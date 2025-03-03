import "../styles/MainSlider.scss";
import { useState, useEffect, useRef } from "react";
import leftBtn from "../icons/left-btn.svg";
import rightBtn from "../icons/right-btn.svg";
import Modal from "./Modal";

const services = [
  {
    url: require("../img/slider/image-1.jpg"),
    title: "Digital Menu",
    description:
      "Digital restaurant menu: interactive, easy-to-navigate, and visually engaging for a modern dining experience.",
    modal: {
      title: "🚀Bring Your Vision to Life!",
      para: "I create custom digital menus that enhance your restaurant, bar, or café's experience, making ordering simple and engaging.",
      services: [
        "-Custom Designs – Stylish menus that match your brand.",
        "-Mobile & Tablet Friendly – Easy access on any device.",
        "-Quick Updates – Change items and prices anytime.",
        "-QR Code Integration – Instant access for customers.",
      ],
    },
  },
  {
    url: require("../img/slider/image-2.jpg"),
    title: "Web Hosting",
    description:
      "Web hosting: reliable, secure, and high-performance solutions to keep your website running smoothly",
    modal: {
      title: "🚀Fast and secure hosting!",
      para: "I provide reliable web hosting solutions to keep your website running smoothly. Whether you're launching a new site or need better hosting.",
      services: [
        "-Fast Load Times – Optimized for speed and performance.",
        "-99.9% Uptime – Your website stays online, always.",
        "-Secure & Backed Up – Protection and regular backups included.",
        "-Scalable Solutions – Hosting that grows with your business.",
      ],
    },
  },

  {
    url: require("../img/slider/image-3.jpg"),
    title: "Custom websites",
    description:
      "Custom websites: bespoke designs, intuitive navigation, and optimal performance for a standout digital experience.",
    modal: {
      title: "🎨Unique, Professional, and Built for You!",
      para: "I create custom websites tailored to your business needs. Whether you need a simple site or a full-featured platform, I deliver high-quality solutions.",
      services: [
        "-Custom Designs – Built to match your brand and vision.",
        "-Mobile-Friendly – Looks great on all devices.",
        "-SEO Optimized – Helps you rank higher on Google.",
        "-Fast & Secure – Speed and security guaranteed.",
      ],
    },
  },
  {
    url: require("../img/slider/image-5.jpg"),
    title: "Website Maintenance",
    description:
      "Ensure your website runs smoothly with our maintenance services. We offer regular updates, security checks, performance optimization",
    modal: {
      title: "😎Keep Your Website Running Smoothly!",
      para: "I provide reliable website maintenance to ensure your site stays updated, secure, and performing at its best. I can teach you how to manage your site.",
      services: [
        "-Regular Updates – Keeps your site secure updated.",
        "-Performance Optimization – Faster load times.",
        "-Security Monitoring – Protection against threats.",
        "-Backup & Recovery – Regular backups.",
      ],
    },
  },
];

export default function MainSlider() {
  const [currIndex, setCurrIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval.current);
  }, []);

  function prevSlide() {
    setCurrIndex((index) => (index - 1 + services.length) % services.length);
    clearInterval(interval.current);
  }

  function nextSlide() {
    setCurrIndex((index) => (index + 1) % services.length);
    clearInterval(interval.current);
  }

  function toggleModal() {
    setModal((state) => (state = !state));
  }

  function learnMoreBtn() {
    clearInterval(interval.current);
    toggleModal();
    let btns = Array.from(document.querySelectorAll(".slider__btn"));
    btns.forEach((btn) => {
      btn.style.display = "none";
    });
  }

  function showNextBtns() {
    toggleModal();
    let btns = Array.from(document.querySelectorAll(".slider__btn"));
    btns.forEach((btn) => {
      btn.style.display = "";
    });
  }

  return (
    <div className="slider__container">
      <button className="slider__btn-prev slider__btn" onClick={prevSlide}>
        <img src={leftBtn} alt="left-btn"></img>
      </button>
      {services.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${img.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            {modal ? (
              <Modal
                modalObj={services[index].modal}
                onShowBtn={showNextBtns}
              />
            ) : null}
          </div>
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
              onClick={learnMoreBtn}
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
