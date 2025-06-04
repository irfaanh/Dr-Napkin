import React from "react";
import femalehygiene from "../assets/blogs/femalehygiene.jpg";

const blog = [
  {
    heading: "Daily Hygiene Habits Matter",
    para: `Good feminine hygiene starts with consistent daily care. Using pH-balanced cleansers, changing undergarments regularly, and avoiding tight synthetic clothing help maintain a healthy vaginal environment.`,
  },
  {
    heading: "Menstrual Care Must-Haves",
    para: `During periods, it's essential to change pads every 4–6 hours to prevent bacterial buildup and odor. Dr. Napkin pads are designed with breathable top sheets and a super-absorbent core to promote comfort and hygiene.`,
  },
  {
    heading: "Proper Disposal is Key",
    para: `Improper disposal of used sanitary products can lead to environmental and health issues. Always wrap used pads and dispose of them in designated bins. Never flush them down the toilet.`,
  },
  {
    heading: "Recognize Early Signs of Infection",
    para: `Persistent itching, unusual discharge, or strong odor can indicate an infection. It's important to consult a healthcare provider rather than ignore or self-diagnose. Awareness can prevent serious complications.`,
  },
];

const HygienePage = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white text-black">
      <h1 className="text-center py-4 font-bold text-white mb-10 bg-[#258eba] text-2xl md:text-3xl">
        The Importance of Hygiene in Feminine Care
      </h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={femalehygiene}
            alt="Feminine Hygiene"
            className="w-full h-80 md:h-full object-cover shadow-md border-2 border-[#258eba]"
          />
        </div>

        {/* Summary Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-4">
            Feminine hygiene isn’t just a monthly concern—it’s a lifelong practice that
            affects reproductive health, confidence, and quality of life. At Dr. Napkin,
            we’re redefining how women approach menstrual and intimate hygiene.
          </p>
          <p className="text-lg leading-relaxed">
            With carefully crafted products and ongoing education, we help women stay
            informed, protected, and empowered every day of their cycle.
          </p>
        </div>
      </div>

      {/* Blog Topics */}
      <div className="space-y-12">
        {blog.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-[#258eba] mb-3">
              {item.heading}
            </h3>
            <p className="text-base leading-relaxed text-gray-800">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HygienePage;
