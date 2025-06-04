import prod1 from '../assets/products/pr3.png';
import prod2 from '../assets/products/pr2.jpg';
import prod3 from '../assets/products/pr1.jpg';
import { TbExternalLink } from "react-icons/tb";

const products = [
  {
    id: 1,
    name: 'Dr.Napkin Overnight',
    image: prod1,
    description: 'Extra-long, leak-proof pads designed for overnight comfort.',
  },
  {
    id: 2,
    name: 'Dr.Napkin Large',
    image: prod2,
    description: 'Comfortable, reliable protection for your busiest days—designed to move with you.',
  },
  {
    id: 3,
    name: 'Dr.Napkin Teen Pads',
    image: prod3,
    description: 'Slim, fresh daily liners perfect for everyday hygiene.',
  },
];

const whatsappNumber = '919961171005';

export default function ProductList() {
  return (
    <div className="pt-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#258eba]">Our Products</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h4>
              <p className="text-sm font-semibold text-gray-600 mb-4">{product.description}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to order: ${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-black text-black hover:bg-black hover:text-white font-medium py-2 px-4 transition duration-300 mt-auto"
              >
                Place Order <TbExternalLink className='inline-block' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
