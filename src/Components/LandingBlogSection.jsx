import React from "react";
import { Link } from "react-router-dom";
import womenhealth from "../assets/blogs/womenhealth.jpg";
import biodegradable from "../assets/blogs/biodegradable.jpg";
import femalehygiene from "../assets/blogs/femalehygiene.jpg";

const blogs = [
  {
    title: "The Importance of Hygiene in Feminine Care",
    description:
      "Maintaining hygiene is essential for overall health and well-being. Learn how proper care can prevent infections and discomfort. Our products are designed with health and safety in mind.",
    image: femalehygiene,
    link: "/hygiene",
  },
  {
    title: "Why Choose Biodegradable Sanitary Pads?",
    description:
      "Traditional pads contain plastic that harms the environment. Biodegradable pads are eco-friendly and safe. Here's why making the switch matters more than ever.",
    image: biodegradable,
    link: "/biodegradable",
  },
  {
    title: "How Dr. Napkin Supports Women’s Health",
    description:
      "At Dr. Napkin, we focus on more than just products. We aim to educate, support, and uplift women through awareness and innovation in menstrual care.",
    image: womenhealth,
    link: "/womens-health",
  },
];

const LandingBlogSection = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#258eba]">
        Latest from Our Blog
      </h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Link
            to={blog.link}
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#258eba] mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {blog.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LandingBlogSection;
