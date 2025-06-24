import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1A1D20] to-[#25292e] text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Unlock Your Potential with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42A5F5] to-[#2196F3]">
              Cutting-Edge AI
            </span>
          </h1>
          <p
            className="text-lg md:text-xl mb-8 opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Tensorik offers comprehensive courses, practical workshops, and a
            vibrant community to help you master Artificial Intelligence.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link
              to="/coming-soon"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md flex items-center justify-center space-x-2 transition duration-300 transform hover:scale-105"
            >
              <span>Explore Courses</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <a
              href="#workshop"
              className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-full shadow-md flex items-center justify-center space-x-2 transition duration-300 transform hover:scale-105"
            >
              <span>Register for Workshop</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="md:w-1/2 flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <img
            src="https://placehold.co/600x400/2C3E50/A0AEC0?text=AI+Learning+Illustration"
            alt="AI learning illustration"
            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Background SVG Blur Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="15" fill="url(#gradientCircle)" />
          <circle cx="80" cy="60" r="25" fill="url(#gradientCircle)" />
          <rect
            x="10"
            y="70"
            width="10"
            height="10"
            fill="url(#gradientRect)"
            rx="3"
            ry="3"
          />
          <defs>
            <linearGradient id="gradientCircle" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#42A5F5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2196F3" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradientRect" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#42A5F5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2196F3" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
