import React from "react";
import taboos from "../assets/blogs/taboos.jpg";

const blog = [
  {
    heading: "The Burden of Silence",
    para: `Menstruation remains one of the most persistent taboos in Indian society. Girls are often branded “impure” and excluded from religious or social activities during their period. These myths reinforce shame, silence, and poor hygiene—leading to health issues and dropped school attendance.`,
  },
  {
    heading: "Dr. Napkin’s Mission to Normalize Menstruation",
    para: `Dr. Napkin is on a mission to normalize menstruation. We conduct community dialogues, invite local leaders, and share factual information in regional languages. By involving both men and women in the conversation, we dismantle harmful stereotypes and promote empathy.`,
  },
  {
    heading: "Raising Voices Through Campaigns",
    para: `Our “Period Positivity” campaign includes social media challenges, school seminars, and collaboration with influencers who speak candidly about their own experiences. Through education and open dialogue, we’re helping a new generation of Indian women embrace their bodies without fear or shame.`,
  },
  {
    heading: "Engaging Men in the Conversation",
    para: `One of the most powerful ways to combat period taboos is by involving men in the discussion. From fathers to brothers to teachers, their awareness and support can transform how menstruation is perceived and accepted in families and communities.`,
  },
  {
    heading: "Education as the Ultimate Weapon",
    para: `Breaking taboos begins in the classroom. By including menstrual health in school curriculums and training teachers to speak openly, we can normalize the topic from an early age—paving the way for confident, informed, and healthy young women.`,
  },
];

const TaboosPage = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white text-black">
      <h1 className="text-center py-4 font-bold text-white mb-10 bg-[#258eba] text-2xl md:text-3xl">
        Breaking the Period Taboos in India
      </h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={taboos}
            alt="Period Taboos"
            className="w-full h-80 md:h-full object-cover shadow-md border-2 border-[#258eba]"
          />
        </div>

        {/* Summary Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-4">
            Period taboos still dominate many Indian households, preventing girls from
            receiving proper care and understanding about menstruation. The stigma leads
            to shame, misinformation, and even school dropouts.
          </p>
          <p className="text-lg leading-relaxed">
            At Dr. Napkin, we’re building a movement to change the narrative—fostering
            open conversations, safe spaces, and inclusive education to break generational
            myths surrounding menstruation.
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

export default TaboosPage;
