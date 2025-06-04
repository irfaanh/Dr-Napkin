import React from "react";
import infection from "../assets/blogs/infection.jpg";

const blog = [
  {
    heading: "Understanding the Widespread Issue",
    para: `Vaginal infections—such as yeast infections, bacterial vaginosis, and UTIs—affect over nine out of ten women in India during their lifetime. Despite how common these infections are, they often remain undiagnosed or untreated due to social embarrassment, misinformation, and limited access to medical care. Breaking this silence is essential for early detection and prevention.`,
  },
  {
    heading: "Poor Menstrual Hygiene: A Silent Trigger",
    para: `The frequent use of low-quality or scented sanitary products, infrequent changing of pads, and improper cleaning habits all contribute significantly to vaginal infections. Many women are unaware that staying in a single pad for too long—especially in humid Indian climates—can create a breeding ground for bacteria. Education around proper menstrual hygiene must become a priority.`,
  },
  {
    heading: "Social Stigma and Lack of Awareness",
    para: `In many regions of India, menstruation is still considered taboo, which restricts open conversations and education on vaginal health. As a result, many women and girls suffer in silence, believing discomfort or odor is “normal.” Empowering communities through awareness campaigns and accessible education can dramatically improve health outcomes.`,
  },
  {
    heading: "Dr. Napkin’s Commitment to Safer Periods",
    para: `At Dr. Napkin, we’re not just selling sanitary pads—we're reshaping menstrual care. Our products are dermatologically tested, made from hypoallergenic materials, and designed to promote airflow, which helps minimize the risk of infection. We also organize free workshops and health camps that teach best practices, like using 100% cotton underwear, changing pads every 4–6 hours, and maintaining personal hygiene—even outside of menstruation.`,
  },
];

const InfectionPage = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white text-black">
      <h1 className="text-center py-4 font-bold text-white mb-10 bg-[#258eba]">
        Over 90% Women in India Suffer From Vaginal Infection
      </h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={infection}
            alt="Vaginal Infection"
            className="w-full h-80 md:h-full object-cover shadow-md border-2 border-[#258eba]"
          />
        </div>

        {/* Summary Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-4">
            Vaginal infections are alarmingly common among Indian women, yet often go
            unnoticed or untreated due to stigma and lack of awareness. Factors like
            poor menstrual hygiene, tight synthetic clothing, and lack of access to
            proper education and care all contribute significantly.
          </p>
          <p className="text-lg leading-relaxed">
            At Dr. Napkin, we believe in proactive care through breathable, safe, and
            hypoallergenic sanitary products, supported by free workshops and health
            education drives across India.
          </p>
        </div>
      </div>

      {/* Blog Topics */}
      <div className="space-y-12">
        {blog.map((item, index) => (
          <div key={index} className="">
            <h3 className="text-xl font-semibold text-[#258eba] text- mb-3">
              {item.heading}
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfectionPage;
