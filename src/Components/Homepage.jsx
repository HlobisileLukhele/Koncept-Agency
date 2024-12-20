import { useEffect, useState } from 'react';
import Nandi from '../assets/Images/Nandi.png';
import BeadVodka from '../assets/Images/beadvodka-mockup.png';
import Delta from '../assets/Images/Delta-mockup.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';


const Homepage = () => {
  const images = [Nandi, BeadVodka, Delta];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Homepage = () => {
    // Initialize AOS
    useEffect(() => {
      AOS.init();
    }, []);
  }
  

  return (
    <div className="container mx-auto py-10 md:py-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Column */}
        <div className="flex flex-col justify-center items-start space-y-4 text-center md:text-left md:pl-10"
          data-aos="fade-right" data-aos-duration="3500" data-aos-offset="300" data-aos-easing="ease-in-sine"
        >
          <h2 className="text-2xl text-4xl md:text-5xl font-bold text-gray-800 md:pb-2 offer">
            At <span className="title-font offer">Koncept Agency</span>, We Bring Your Ideas To Life
          </h2>
          <p className="text-gray-600 py-4 offer  text-2xl md:text-2xl">
            We are committed to delivering qaulity work for our clients and meeting all their requirements, regardless of project size.
          </p>
          <div className="zoom-in" data-aos="zoom-in">
          {/* CTA Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 transition offer">
              <a href="mailto:hello@konceptagency.co.za" target="_blank" rel="noopener noreferrer">
                GET A FREE QUOTE
              </a>
            </button>
          </div>

          </div>
          
        </div>

        {/* Image Carousel Column */}
        <div className="relative flex items-center justify-center md:mb-20">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out transform ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90'
                }`}
                style={{
                  zIndex: index === currentIndex ? 10 : 0,
                }}
              />
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-4 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
