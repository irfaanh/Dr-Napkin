import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import superwomen from '../assets/images/faqimg.png';


const faqs = [
  {
    question: "What's puberty?",
    answer: "Puberty happens to everyone! It’s a physical change that happens as you become an adult, usually between the ages of 10-14. As a girl, you’ll know you’re going through puberty when you notice your body going through physical changes like more definition in your waistline, development of breasts, and—of course—your first period",
  },
  {
    question: "What is period?",
    answer: "Your period is the last part of your monthly cycle. Stage 1 has your body building up blood-rich cells, preparing for pregnancy. Stage 2 is ovulation. Stage 3 is the shedding of the blood-rich membrane, also known as your period. Stage 4 is the length of time of your period, which is usually 3-7 days. Then it starts all over again (unless you get pregnant).",
  },
  {
    question: "When will my period last?",
    answer: "Everybody is different, but periods usually start somewhere between the ages of 10-14, and about 50% of girls will start their period by the age of 12. Don’t worry if you start your period earlier or later than your friends—it’s totally normal!",
  },
  {
    question: "How long will my periods last?",
    answer: "Most girls and women find that periods last for about 5-7 days, and that they get their period approximately once a month. After a couple of years of having your period, your body will settle into a pattern that’s unique to you, and you'll be familiar with how many days of bleeding to expect. If you notice that you don’t get your period very often, or if it lasts for longer than 7 days, it might be a good idea to check in with your doctor.",
  },
  {
    question: "How can i get rid of cramps and pain during my period?",
    answer: "Here are some surefire ways to feel better during your period. Try relaxing with a warm bath or hot water bottle – the warmth will ease overall tension and pain. It’s also important to stay active and eat well to help combat that dreaded bloat that many girls face as a symptom of PMS. If you find that nothing is truly helping you feel better, or that the pain is affecting your schoolwork or ability to enjoy activities overall, you can always talk to your gynecologist or doctor about other treatments.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-6 md:p-10 my-10">
      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Left: Title */}
        <div className="w-full md:w-1/3">
            <img className="w-30 md:w-50 mb-4" src={superwomen} alt="" />

          <h2 className="text-2xl md:text-3xl font-bold text-[#258eba]">Frequently Asked Questions</h2>
        </div>

        {/* Right: Accordion */}
        <div className="w-full md:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-400 p-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-50 ${
                  openIndex === index ? 'max-h-96 mt-3' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 ">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
