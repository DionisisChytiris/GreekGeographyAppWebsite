import React, { useState } from "react";
import {
  Smartphone,
  Map,
  Brain,
  Trophy,
  Star,
  Download,
  Apple,
  Cuboid as Android,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sample images - replace these with your actual image URLs
const screenshots = [
  {
    phone: "/images/img1.jpg",
  },
  {
    phone: "/images/img2.jpg",
  },
  {
    phone: "/images/img3.jpg",
  },
  {
    phone: "/images/img4.jpg",
  },
  {
    phone: "/images/img5.jpg",
  },
  {
    phone: "/images/img6.jpg",
  },
  {
    phone: "/images/img7.jpg",
  },
  {
    phone: "/images/img8.jpg",
  },
  {
    phone: "/images/imh9.jpg",
  },
  {
    phone: "/images/img10.jpg",
  },
  {
    phone: "/images/img11.jpg",
  },
  {
    phone: "/images/img12.jpg",
  },
  {
    phone: "/images/img13.jpg",
  },
  {
    phone: "/images/img14.jpg",
  },
  // {
  //   phone1: "/images/img1.jpg",
  //   phone2: "/images/img1.jpg",
  //   phone3: "/gianena.png",
  // },
  // {
  //   phone1: "/images/img1.jpg",
  //   phone2: "/images/img1.jpg",
  //   phone3: "/corfu.png",
  // },
  // {
  //   phone1: "/gianena.png",
  //   phone2: "/corfu.png",
  //   phone3: "/quizMenu.png",
  // },
];

const MockPhones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // const getImage = (index) => {
  //   const validIndex =
  //     ((index % screenshots.length) + screenshots.length) % screenshots.length;
  //   return screenshots[validIndex].phone;
  // };

  return (
    <div>
      {/* Phone Mockups */}
      <div
        className="relative pt-16 mb-8 flex justify-center items-center overflow-hidden" // Changed overflow-hidden to overflow-x-auto
        style={{
          width: "100%", // Ensure the container has enough space to scroll
        }}
      >
        <div className="sm:flex">
          {/* Left Phone */}
          {screenshots[currentIndex] && (
            <div className="relative w-[12rem] h-[24.75rem] z-0 transform translate-x-12 -translate-y-0 shrink-0 grow-0 basis-auto -rotate-12">
              <div className="absolute inset-0 bg-black rounded-[1.5rem] p-2">
                <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-[0.65rem] bg-black z-0" />
                  <img
                    src={screenshots[currentIndex].phone}
                    // src={getImage(currentIndex)}
                    alt="App Screenshot 2"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Center Phone */}
          {screenshots[currentIndex +1] && (
            <div className="relative w-[13rem] h-[26.75rem] z-10 transform -translate-y-8 shrink-0 grow-0 basis-auto">
              <div className="absolute inset-0 bg-black rounded-[1.5rem] p-2">
                <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-[0.65rem] bg-black z-0" />
                  <img
                    src={screenshots[currentIndex + 1].phone}
                    // src={getImage(currentIndex+1)}
                    alt="App Screenshot 2"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Right Phone */}
          {screenshots[currentIndex +2] && (
            <div className="relative w-[12rem] h-[24.75rem] z-0 transform -translate-x-12 shrink-0 grow-0 basis-auto rotate-12  hidden sm:block">
              <div className="absolute inset-0 bg-black rounded-[1.5rem] p-2">
                <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-[0.65rem] bg-black z-0" />
                  <img
                    src={screenshots[currentIndex+2].phone}
                    // src={getImage(currentIndex+2)}
                    alt="App Screenshot 2"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center mt-8 gap-4 mb-20">
        {currentIndex === 0 ? null : (
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div className="flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
        {screenshots.length > 0 && currentIndex < screenshots.length -1 && (
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MockPhones;
