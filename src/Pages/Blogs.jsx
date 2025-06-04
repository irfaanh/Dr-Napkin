import React from "react";
import biodegradable from '../assets/blogs/biodegradable.jpg'
import femalehygiene from '../assets/blogs/femalehygiene.jpg'
import taboos from '../assets/blogs/taboos.jpg'
import womenhealth from '../assets/blogs/womenhealth.jpg'
import infection from '../assets/blogs/infection.jpg'
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "The Importance of Hygiene in Feminine Care",
    description:
      "Maintaining hygiene is essential for overall health and well-being. Learn how proper care can prevent infections and discomfort. Our products are designed with health and safety in mind.",
    image: femalehygiene,
    link:'/hygiene'
  },
  {
    title: "Why Choose Biodegradable Sanitary Pads?",
    description:
      "Traditional pads contain plastic that harms the environment. Biodegradable pads are eco-friendly and safe. Here's why making the switch matters more than ever.",
    image: biodegradable,
    link:'/biodegradable'
  },
  {
    title: "How Dr. Napkin Supports Women’s Health",
    description:
      "At Dr. Napkin, we focus on more than just products. We aim to educate, support, and uplift women through awareness and innovation in menstrual care.",
    image: womenhealth,
    link:'/womens-health'
  },
  {
    title: "Breaking the Period Taboos in India",
    description:
      "Open discussions about menstruation help normalize it. We're actively working to remove the stigma and promote informed, healthy conversations.",
    image: taboos,
    link:'/period-taboos'
  },
  {
    title: "Over 90% Women in India Suffer From Vaginal Infection",
    description:
      "Vaginal infections are alarmingly common among Indian women, yet often go undiagnosed or untreated due to stigma and lack of awareness. Factors such as poor menstrual hygiene, use of synthetic sanitary products, and limited access to healthcare contribute significantly to this issue.",
    image: infection,
    link:'/vaginal-infection'
  },
];



const Blog = () => {
    const navigate = useNavigate()
  return (
    <section className="px-6 md:px-16 py-16 text-white">
      <h2 className="text-center py-4 font-bold text-white mb-10 bg-[#258eba]">Our Latest Blogs</h2>

      <div className="space-y-14">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full p-6 shadow-lg border border-[#258eba] cursor-pointer" onClick={()=>navigate(blog.link)}>
              <h3 className="text-2xl font-semibold mb-3 text-[#258eba]">{blog.title}</h3>
              <p className="text-sm leading-relaxed text-black">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
