import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    icon: "✨",
    title: "Real-World Exposure",
    description:
      "Tensorik gives you hands-on exposure via real-world workshops and projects that you can proudly showcase on your resume.",
    aosDirection: "fade-right",
    aosDelay: "100",
  },
  {
    icon: "📚",
    title: "AI-Centric Curriculum",
    description:
      "Courses tailored by industry experts to help you master AI with maximum practical impact.",
    aosDirection: "fade-left",
    aosDelay: "200",
  },
  {
    icon: "🌐",
    title: "Supportive Community",
    description:
      "Join a growing network of learners and mentors who are with you throughout your AI journey.",
    aosDirection: "fade-right",
    aosDelay: "300",
  },
  {
    icon: "🚀",
    title: "Resume-Boosting Projects",
    description:
      "Everything you do at Tensorik builds your portfolio and attracts real job opportunities.",
    aosDirection: "fade-left",
    aosDelay: "400",
  },
];

const WhyTensorik = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="bg-[#25292e] w-full relative overflow-hidden py-24">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[270px] bottom-0 w-[4px] bg-gradient-to-b from-[#42A5F5] to-[#2196F3] z-20 shadow-[0_0_30px_rgba(66,165,245,0.6)] pointer-events-none" />

      {/* Header */}
      <header className="text-center mb-20 px-4 relative z-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#42A5F5] to-[#2196F3] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Why Tensorik?
        </h1>
        <p
          className="text-lg text-[#A0AEC0] max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Master Artificial Intelligence through practical learning, real-world
          projects, and a supportive community.
        </p>
      </header>

      {/* Timeline Cards */}
      <main className="relative max-w-4xl mx-auto px-4">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          const alignmentClass = isLeft
            ? "ml-auto -mr-[30px]"
            : "mr-auto -ml-[30px]";
          const hoverTranslate = isLeft
            ? "group-hover:translate-x-[-30px]"
            : "group-hover:translate-x-[30px]";

          return (
            <div
              key={index}
              className={`relative mb-24 ${isLeft ? "pr-[50%]" : "pl-[50%]"}`}
              data-aos={item.aosDirection}
              data-aos-delay={item.aosDelay}
            >
              {/* Card */}
              <div
                className={`group bg-gradient-to-br from-[#25292e] to-[#333842] border border-white/10 p-10 rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.4)] max-w-[460px] relative z-10 overflow-hidden card-with-animated-line
                ${alignmentClass}
                transition-transform duration-300 ease-in-out transform hover:scale-[1.03] ${hoverTranslate}`}
              >
                {/* Top Blue Line */}
                <span className="top-glow-line"></span>

                {/* Icon */}
                <div className="text-6xl mb-6 text-[#42A5F5] drop-shadow-[0_0_25px_rgba(66,165,245,0.6)]">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[1.8rem] font-bold text-[#F9FAFB] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#A0AEC0] text-[1.15rem] leading-[1.7]">
                  {item.description}
                </p>
              </div>

              {/* Dot */}
              <div
                className={`absolute top-[50px] w-7 h-7 rounded-full bg-[#2C2F36] border-[5px] border-[#42A5F5] z-30 transition duration-500 ${
                  isLeft ? "right-[-14px]" : "left-[-14px]"
                } hover:shadow-[0_0_0_12px_rgba(66,165,245,0.2),0_0_25px_rgba(66,165,245,0.6)]`}
              ></div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default WhyTensorik;
