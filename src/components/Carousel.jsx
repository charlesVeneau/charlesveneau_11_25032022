import './styles/Carousel.scss';
import { useState } from 'react';

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  } else {
  }
  return (
    <section className="carousel">
      <span
        className="carousel-arrow carousel-arrow-left"
        alt=""
        onClick={previousSlide}
      >
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </span>
      <span
        className="carousel-arrow carousel-arrow-right"
        alt=""
        onClick={nextSlide}
      >
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </span>
      <div className="carousel-slide-indicator">
        {current + 1 + '/' + pictures.length}
      </div>
      {pictures.map((picture, index) => {
        return (
          <div
            className={
              index === current ? 'carousel-slide active' : 'carousel-slide'
            }
            key={index}
          >
            {index === current && (
              <img
                src={picture}
                className="carousel-picture"
                key={index}
                alt=""
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
