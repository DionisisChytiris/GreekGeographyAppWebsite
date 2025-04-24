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
    phone1:"/corfu.png",
    // "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=460&q=80",
    phone2:"/quizMenu.png",
    // "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=460&q=80",
    phone3:"/gianena.png",
    // "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=460&q=80",
  },
  {
    phone1: "/quizMenu.png",
    // "https://images.unsplash.com/photo-1602537765736-74b8a69ff60f?auto=format&fit=crop&w=460&q=80",
    phone2: "/gianena.png",
    // "https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=460&q=80",
    phone3:
    "/corfu.png"
      // "https://images.unsplash.com/photo-1526958977630-bc61b30a2009?auto=format&fit=crop&w=460&q=80",
  },
  {
    phone1:"/gianena.png",
    
      // "https://images.unsplash.com/photo-1495970690360-eec04678a7f7?auto=format&fit=crop&w=460&q=80",
    phone2: "/corfu.png",
    // "https://images.unsplash.com/photo-1494858723852-a49e29b2da87?auto=format&fit=crop&w=460&q=80",
    phone3:"/quizMenu.png",
    
      // "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=460&q=80",
  },
];

const MockPhones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <div>
      {/* Phone Mockups */}
      <div className="relative pt-16 mb-8 flex justify-center items-center overflow-hidden">
        {/* Left Phone */}
        <div className="relative w-48 h-96 -mr-8 transform -rotate-12">
          <div className="absolute inset-0 bg-black rounded-[3rem] p-3">
            <div className="relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
              <img
              // src={screenshots[currentIndex].phone1}
                src="/corfu.png"
                // src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=cover&w=400&h=800&q=80"
                alt="App Screenshot "
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Center Phone (Larger) */}
        <div className="relative w-56 h-[28rem] z-10 transform translate-y-[-2rem]">
          <div className="absolute inset-0 bg-black rounded-[3rem] p-3">
            <div className="relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
              <img
                src={screenshots[currentIndex].phone2}
                // src="/quizMenu.png"
                // src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=cover&w=400&h=800&q=80"
                alt="App Screenshot 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Phone */}
        <div className="relative w-48 h-96 -ml-8 transform rotate-12">
          <div className="absolute inset-0 bg-black rounded-[3rem] p-3">
            <div className="relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
              <img
              // src={screenshots[currentIndex].phone3}
                src="/gianena.png"
                // src="https://images.unsplash.com/photo-1502380747912-e5dff3ae0e0e?auto=format&fit=cover&w=400&h=800&q=80"
                alt="App Screenshot 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Navigation */}
      <div className="flex justify-center items-center mt-8 gap-4 mb-20">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
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
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          aria-label="Next screenshot"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MockPhones;
