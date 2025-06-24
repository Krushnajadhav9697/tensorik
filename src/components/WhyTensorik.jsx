import React from "react";

const data = [
  {
    icon: "✨",
    title: "Real-World Exposure",
    description:
      "Tensorik gives you hands-on exposure via real-world workshops and projects that you can proudly showcase on your resume.",
  },
  {
    icon: "📚",
    title: "AI-Centric Curriculum",
    description:
      "Courses tailored by industry experts to help you master AI with maximum practical impact.",
  },
  {
    icon: "🌐",
    title: "Supportive Community",
    description:
      "Join a growing network of learners and mentors who are with you throughout your AI journey.",
  },
  {
    icon: "🚀",
    title: "Resume-Boosting Projects",
    description:
      "Everything you do at Tensorik builds your portfolio and attracts real job opportunities.",
  },
];

const WhyTensorik = () => {
  return (
    <div className="bg-[#25292e] w-full">
      <header className="text-center pt-24 pb-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#42A5F5] to-[#2196F3] bg-clip-text text-transparent">
          Why Tensorik?
        </h1>
        <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
          Master Artificial Intelligence through practical learning, real-world
          projects, and a supportive community
        </p>
      </header>

      <main>
        <div className="relative max-w-4xl mx-auto px-4 pb-24">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#42A5F5] to-[#2196F3] z-0 rounded-full shadow-[0_0_20px_rgba(66,165,245,0.4)]" />

          {data.map((item, index) => (
            <div
              key={index}
              className={`relative mb-24 ${
                index % 2 === 0 ? "pr-[50%]" : "pl-[50%]"
              }`}
            >
              <div
                className={`bg-gradient-to-br from-[#25292e] to-[#333842] border border-white/10 p-10 rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.4)] max-w-[460px] relative z-10 ${
                  index % 2 === 0 ? "ml-auto" : "mr-auto"
                }`}
              >
                <div className="text-4xl mb-6 text-[#42A5F5] drop-shadow-[0_0_20px_rgba(66,165,245,0.5)]">
                  {item.icon}
                </div>
                <h3 className="text-[1.8rem] font-bold text-[#F9FAFB] mb-4 flex items-center gap-3">
                  {item.title}
                </h3>
                <p className="text-[#A0AEC0] text-[1.15rem] leading-[1.7]">
                  {item.description}
                </p>
              </div>

              {/* Dot */}
              <div
                className={`absolute top-[50px] w-7 h-7 rounded-full bg-[#333842] border-[5px] border-[#42A5F5] z-20 shadow-[0_0_0_0_rgba(66,165,245,0.7)] ${
                  index % 2 === 0 ? "right-[-14px]" : "left-[-14px]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WhyTensorik;
