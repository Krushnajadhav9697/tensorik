import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#25292e] py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2
          className="text-4xl font-bold mb-10 text-center text-[#F9FAFB]"
          data-aos="fade-up"
        >
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div
            className="bg-gradient-to-br from-[#25292e] to-[#2C3E50] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://placehold.co/80x80/CBD5E1/4A5568?text=P"
              alt="Student Priya"
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#42A5F5]"
            />
            <p className="text-[#F9FAFB] italic mb-4">
              "Tensorik transformed my understanding of AI. The content is
              practical and the instructors are fantastic!"
            </p>
            <p className="font-semibold text-[#42A5F5]">
              - Priya, Diploma Student
            </p>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-gradient-to-br from-[#25292e] to-[#2C3E50] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://placehold.co/80x80/A0AEC0/4A5568?text=S"
              alt="Student Sai"
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#42A5F5]"
            />
            <p className="text-[#F9FAFB] italic mb-4">
              "The hands-on projects helped me build a strong portfolio. Highly
              recommend for aspiring AI engineers."
            </p>
            <p className="font-semibold text-[#42A5F5]">
              - Sai, BTech 2nd Year
            </p>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-gradient-to-br from-[#25292e] to-[#2C3E50] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="https://placehold.co/80x80/718096/4A5568?text=RK"
              alt="Student Rishika"
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#42A5F5]"
            />
            <p className="text-[#F9FAFB] italic mb-4">
              "The community support is unparalleled. I always get my questions
              answered quickly and thoroughly."
            </p>
            <p className="font-semibold text-[#42A5F5]">- Rishika, Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
