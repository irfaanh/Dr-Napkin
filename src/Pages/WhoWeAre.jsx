import storyImg1 from "../assets/images/earth.jpg"; // Replace with actual image paths
import storyImg2 from "../assets/images/promise.jpg";

const sections = [
  {
    title: "Who We Are",
    text: `Welcome to Dr.Napkin, a leading provider of premium menstrual care solutions designed for womens. 
    Committed to excellence and innovation, offering a comprehensive range tailored to meet the diverse needs of our consumers.

    Through rigorous research, cutting-edge technology, and stringent quality control measures, each Dr.Napkin sanitary napkin meets the highest standards of performance, comfort, and reliability.

    Our corporate mission revolves around empowering women by delivering exceptional menstrual care solutions that inspire confidence and support active lifestyles. 
    We take pride in our commitment to corporate excellence, environmental sustainability, and social responsibility, ensuring that our products not only fulfill customer needs but also contribute positively to the communities we serve.`,
    image: storyImg1,
  },
  {
    title: "What We Promise",
    text: `Our commitment to excellence is unwavering. Here's what you can expect from us:

    1. Premium Quality: We promise to deliver sanitary napkins of the highest quality, meticulously crafted using advanced technology and superior materials.

    2. Comfort and Protection: Your comfort and protection are our top priorities. Our products are designed to provide maximum comfort and reliable protection throughout your period.

    3. Innovation: We're dedicated to innovation, constantly striving to improve our products to better meet your needs and expectations.

    4. Environmental Responsibility: We promise to minimize our environmental impact by implementing sustainable practices throughout our manufacturing and distribution processes.

    5. Customer Satisfaction: Your satisfaction is our ultimate goal. We are committed to providing exceptional customer service and support to ensure your complete satisfaction with our products.

    Experience the Dr.Napkin difference – where quality, comfort, and care converge to redefine menstrual care.`,
    image: storyImg2,
  },
];

const WhoWeAre = () => {
  return (
    <section className="text-black py-16 px-6 md:px-16">
        <h2 className="text-center py-4 mb-5 font-bold text-white" style={{backgroundColor:'#258eba'}}>Our Story</h2>
      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 space-y-6">
              <h2 className={`text-2xl md:text-3xl font-bold`} style={{color:'#258eba'}}>
                {section.title}
              </h2>
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="shadow-lg w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
