import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";



const Contact = () => {
  return (
    <section className="px-8 py-16 md:px-16">
      <h2 className="text-center py-4 font-bold text-white mb-10 bg-[#258eba]">Contact Us</h2>

      <div className="flex flex-wrap gap-10 justify-center items-start pt-8">
        {/* Contact Info */}
        <div className="w-full max-w-md flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#258eba]">Contact Information</h3>
            <p className="text-lg leading-relaxed">
                We'd love to hear from you! Whether you have a question about our products,
                pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6 text-sm">
                <div className="flex items-center gap-2">
                    <FaLocationDot className="text-base text-[#258eba]" />
                    <span>Kozhikode, Kerala 673582</span>
                </div>

                <div className="flex items-center gap-2">
                    <IoMail className="text-base text-[#258eba]" />
                    <a href="mailto:drnapkinpads@gmail.com" className="hover:underline">
                    drnapkinpads@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-base text-[#258eba]" />
                    <a href="tel:+919961171005" className="hover:underline">
                    +91 99611 71005
                    </a>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <form
          className="w-full max-w-md flex flex-col gap-5"
          action="https://formspree.io/f/mgvyvwob"
          method="POST"
        >
            <h3 className="text-2xl md:text-3xl font-bold text-[#258eba]">Contact Us Now</h3>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium ">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-3 border border-[#258eba] text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 border border-[#258eba] text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="p-3 border border-[#258eba] text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium ">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="p-3 border border-[#258eba] text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-transparent text-[#258eba] border border-[#258eba] hover:bg-[#258eba] hover:text-white transition-all px-5 py-2 text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
