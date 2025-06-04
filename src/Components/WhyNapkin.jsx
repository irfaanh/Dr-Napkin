import { GoShieldCheck } from "react-icons/go";
import { FaEarthAmericas } from "react-icons/fa6";
import { WiRaindrop } from "react-icons/wi";
import { CiUnlock } from "react-icons/ci";
import { TbCloudRain } from "react-icons/tb";

const features = [
  {
    icon: <TbCloudRain className="text-6xl mx-auto mb-4" />,
    title: "100% Skin-friendly",
  },
  {
    icon: <GoShieldCheck className="text-6xl mx-auto mb-4" />,
    title: "Rash-free protection",
  },
  {
    icon: <CiUnlock className="text-6xl mx-auto mb-4" />,
    title: "LockFlow Technology",
  },
];

const WhyNapkin = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid gap-8 grid-cols-3 md:grid-cols-3 sm:grid-cols-3 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-6 transition">
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNapkin;
