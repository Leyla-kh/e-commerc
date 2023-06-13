import "./Slider.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";

export default function Slider() {
  const sliderData = [
    "/image/slider-1.jpg",
    "/image/slider-2.jpg",
    "/image/slider-3.jpg",
    "/image/slider-4.jpg",
    "/image/men-styles-2.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1
    );
  };
  const handleNext = () => {
    setCurrentSlide(
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {sliderData.map((i) => (
          <img src={i} alt="" className="image" />
        ))}
      </div>
      <div className="icons">
        <div className="icon">
          <NavigateBeforeIcon fontSize="large" onClick={handlePrev} />
        </div>
        <div className="icon">
          <NavigateNextIcon fontSize="large" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
