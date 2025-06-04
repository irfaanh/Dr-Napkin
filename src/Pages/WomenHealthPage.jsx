import React from "react";
import womenhealth from "../assets/blogs/womenhealth.jpg";

const blog = [
  {
    heading: "Beyond Pads: A Holistic Health Approach",
    para: `At Dr. Napkin, our mission goes beyond manufacturing pads. We strive to empower women with knowledge, resources, and support to make informed choices about their menstrual and reproductive health. Every batch of our pads is rigorously tested for safety—we use no harmful dyes or perfumes, only skin-friendly, medical-grade materials.`,
  },
  {
    heading: "Grassroots Education and Outreach",
    para: `We organize workshops in rural and urban communities, teaching proper menstrual hygiene practices, dispelling myths, and distributing free sanitary kits. By collaborating with women’s health NGOs and community health workers, we ensure that girls and women have both access to quality products and the education they deserve.`,
  },
  {
    heading: "24/7 Support and Counseling",
    para: `Our helpline (available 24/7) connects women to trained counselors for any questions—be it about menstrual disorders, contraceptive options, or general wellness. With compassion and confidentiality, we provide support to women who may have no one else to talk to.`,
  },
  {
    heading: "Accessible Healthcare Through Partnerships",
    para: `We partner with local clinics and health centers to offer subsidized health check-ups and screenings. From anemia testing to reproductive health assessments, we believe every woman deserves access to affordable care—regardless of her income or location.`,
  },
];

const WomenHealthPage = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white text-black">
      <h1 className="text-center py-4 font-bold text-white mb-10 bg-[#258eba] text-2xl md:text-3xl">
        How Dr. Napkin Supports Women’s Health
      </h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={womenhealth}
            alt="Women’s Health"
            className="w-full h-80 md:h-full object-cover shadow-md border-2 border-[#258eba]"
          />
        </div>

        {/* Summary Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-4">
            Dr. Napkin is more than just a sanitary pad brand—we’re a movement for
            better women’s health. From safe product design to hands-on education
            and support, we work at every level to make menstrual care accessible,
            dignified, and empowering.
          </p>
          <p className="text-lg leading-relaxed">
            With trusted community partnerships and a commitment to quality, our
            goal is to become a lifelong health ally for every woman we serve.
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
            <p className="text-lg leading-relaxed text-gray-800">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomenHealthPage;
