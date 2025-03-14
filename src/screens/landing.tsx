import { Link } from "react-router-dom";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/contact/ContactUs";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { feedback } from "../data/data";

const Landing = () => {
  return (
    <div
      className="w-[100%] h-[100vh] absolute inset-0 "
      style={{
        backgroundImage: `url(${"/landingBackground.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
          }}
          className="title mt-[200px] ml-15"
        >
          <h1 className="h1-size font-bold text-gray-800 mb-5">
            Your Health, Our Priority
          </h1>
          <p className="p-size text-gray-700 max-w-2xl leading-7">
            Book your clinic appointments effortlessly. With a few clicks,
            schedule, manage, and view your appointments anytime, anywhere.
          </p>
          <div className="flex justify-center w-[100%] mt-10 -ml-7.5">
            <Link
              to="/create-appointment"
              className="font-[500] p-4 bg-blue-600 hover:bg-blue-700 text-blue-100 hover:text-white rounded-2xl
              outline-2 outline-blue-50 transitions duration-300 shadow-[0_0_24px_rgba(0,0,0,0.25)] hover:shadow-[0_0_29px_rgba(29,78,216,0.7)] hover:-translate-y-1.5 mb-5"
            >
              Book an Appointment
            </Link>
          </div>
        </motion.div>
        <div
          className="hidden lg:block w-[500px] h-[730px]"
          style={{
            backgroundImage: `url(${"/doctor.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <Features />
      <AnimatedTestimonials testimonials={feedback} autoplay={true}/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Landing;
