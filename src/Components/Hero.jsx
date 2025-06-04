import { useEffect, useState } from 'react';
import img1 from '../assets/images/napkinhero.jpg';
import img2 from '../assets/images/napkinhero2.jpg';
import img3 from '../assets/images/napkinhero3.jpg';

const images = [img1, img2, img3];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-start pt-16 min-h-[90vh]">
  <div className="relative w-[90vw] h-[90vh] overflow-hidden mx-auto">
    {/* Carousel */}
    <div className="absolute inset-0">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-opacity-50"></div>
    </div>

    {/* Hero Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:items-start md:text-left px-4 md:px-16 text-white z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Embrace Comfort<br /> with<span className="text-black"> Dr.Napkin</span>
      </h1>
      <p className="text-lg font-semibold md:text-xl max-w-2xl text-black mb-6 drop-shadow-md">
        Designed for women who deserve gentle,
        <br />
        reliable, and hygienic care—every day.
      </p>
      <a
        href="/aboutus"
        className="border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white  text-lg font-semibold shadow-lg transition duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
</div>


  );
}
