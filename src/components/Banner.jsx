import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import makeup from "../assets/makeup-banner.jpg";
import skincare from "../assets/skincare.jpg";
import fragnance from "../assets/fragnance.jpg";

const slides = [
  {
    id: 1,
    title: "Elevate Your Beauty",
    subtitle: "Discover premium skincare essentials",
    image:skincare,
  },
  {
    id: 2,
    title: "Makeup That Defines You",
    subtitle: "Explore bold and elegant looks",
    image:makeup,
  },
  {
    id: 3,
    title: "Fragrance Collection",
    subtitle: "Luxury scents for every moment",
    image:fragnance,
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner relative w-full overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="max-w-7xl mx-auto absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white">
            <h1 className="text-cream text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-cream text-lg md:text-xl mb-6">
              {slide.subtitle}
            </p>

            <Link
              to="/category/skincare"
              className="bg-velvet-crimson text-cream px-6 py-3 rounded-md font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}