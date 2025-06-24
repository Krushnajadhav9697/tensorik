import React from "react";
import founderImg from "../assets/images/Akshai.png"; // Update path as needed

const FounderSection = () => {
  return (
    <div className="bg-[#2A2F39] py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2
          className="text-4xl font-bold mb-14 text-center text-[#F9FAFB]"
          data-aos="fade-up"
        >
          Meet the Founder
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div
            className="lg:w-7/12 text-left"
            data-aos="fade-up-right"
            data-aos-delay="100"
          >
            <h3 className="text-3xl font-bold text-[#F9FAFB] mb-2">
              Maripi Akshai Naidu
            </h3>
            <p className="text-xl text-[#42A5F5] font-semibold mb-6">
              Founder & CEO
            </p>

            <div className="space-y-5 text-[#A0AEC0] text-lg leading-relaxed">
              <p>
                Akshai Naidu is the founder of Tensorik, with a strong
                foundation in artificial intelligence and full-stack
                development. He is focused on building practical, scalable
                solutions to real-world challenges in education technology.
                Through his experience across technical, design, and leadership
                roles, he brings structure, clarity, and a hands-on approach to
                every project.
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Chief Organizer at CodeZen</strong> – Led community
                  events and hackathons with end-to-end strategic planning.
                </li>
                <li>
                  <strong>Technical Contributor</strong> – Worked on web and AI
                  projects aimed at improving accessibility and user experience.
                </li>
                <li>
                  <strong>Graphic Designer & Digital Marketing Lead</strong> –
                  Built consistent visual identity and marketing presence.
                </li>
                <li>
                  <strong>Hackathon Finalist – IIIT Delhi E-Summit 2025</strong>{" "}
                  – Advanced to Phase 3 with a solution-driven, real-world
                  project.
                </li>
              </ul>
              <p>
                Akshai's multidisciplinary background reflects a strong blend of
                problem-solving, leadership, and execution—anchored in purpose,
                clarity, and innovation.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div
            className="lg:w-5/12 flex justify-center"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <img
              src={founderImg}
              alt="Akshai Naidu, Founder"
              className="w-72 md:w-96 lg:w-[430px] h-auto rounded-2xl border-8 border-[#42A5F5] shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
