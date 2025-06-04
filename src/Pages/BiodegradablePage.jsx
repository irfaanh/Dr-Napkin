import React from "react";
import biodegradable from "../assets/blogs/biodegradable.jpg";

const blog = [
  {
    heading: "Environmental Impact of Traditional Pads",
    para: `Conventional sanitary pads often contain plastic components that can take hundreds of years to decompose. These plastics accumulate in landfills, release microplastics, and contribute to widespread environmental pollution.`,
  },
  {
    heading: "Sustainable Materials in Biodegradable Pads",
    para: `Dr. Napkin’s biodegradable pads are made using plant-based fibers, compostable wrappers, and naturally derived absorbent cores. These materials break down within months, reducing long-term waste and ecological damage.`,
  },
  {
    heading: "Health Benefits for Sensitive Skin",
    para: `Unlike pads with harsh chemicals and synthetic fragrances, biodegradable alternatives are typically gentler on sensitive skin. Dr. Napkin’s products are dermatologically tested and free from allergens and toxins.`,
  },
  {
    heading: "A Conscious Choice for the Future",
    para: `Choosing biodegradable pads supports not just your body but the planet. By reducing plastic usage and promoting compostable packaging, you're actively contributing to a cleaner, healthier future.`,
  },
];

const BiodegradablePage = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white text-black">
      <h1 className="text-center py-4 font-bold text-white mb-10 bg-[#258eba] text-2xl md:text-3xl">
        Why Choose Biodegradable Sanitary Pads?
      </h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={biodegradable}
            alt="Biodegradable Pads"
            className="w-full h-80 md:h-full object-cover shadow-md border-2 border-[#258eba]"
          />
        </div>

        {/* Summary Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-4">
            Sanitary waste contributes heavily to non-biodegradable pollution in India.
            With millions of plastic-based pads discarded daily, the shift to
            biodegradable solutions is no longer optional—it’s essential.
          </p>
          <p className="text-lg leading-relaxed">
            Dr. Napkin’s eco-conscious products ensure you stay comfortable and
            protected while preserving the environment for future generations.
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

export default BiodegradablePage;
