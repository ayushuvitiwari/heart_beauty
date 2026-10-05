import React from "react";
import Headers from "../Components/Navbar";
import {
  FaCut,
  FaSpa,
  FaPaintBrush,
  FaHandSparkles,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import Footer from "../Components/Footer";

const Services = () => {

  const services = [
    {
      icon: <FaCut />,
      title: "Hair Services",
      description:
        "Professional haircuts, styling, hair spa, coloring and treatments designed to give your hair a beautiful and healthy look.",
      services: ["Haircut & Styling", "Hair Spa", "Hair Coloring", "Hair Treatment"],
    },
    {
      icon: <FaSpa />,
      title: "Facial & Skin Care",
      description:
        "Relaxing facial and skincare treatments that refresh your skin and bring out its natural glow.",
      services: ["Glow Facial", "Deep Cleansing", "Skin Polishing", "Face Cleanup"],
    },
    {
      icon: <FaPaintBrush />,
      title: "Makeup",
      description:
        "Beautiful makeup looks for parties, special occasions and important moments, created according to your style.",
      services: ["Party Makeup", "Engagement Makeup", "HD Makeup", "Event Makeup"],
    },
    {
      icon: <FaHandSparkles />,
      title: "Nail Care",
      description:
        "Give your hands and nails a polished and elegant look with our professional nail care services.",
      services: ["Manicure", "Pedicure", "Nail Art", "Nail Care"],
    },
    {
      icon: <FaHeart />,
      title: "Bridal Services",
      description:
        "Complete bridal beauty services designed to make your special day even more beautiful and memorable.",
      services: ["Bridal Makeup", "Bridal Hair Styling", "Bridal Facial", "Pre-Bridal Care"],
    },
    {
      icon: <FaLeaf />,
      title: "Spa & Wellness",
      description:
        "Relax your body and mind with our soothing spa and wellness treatments in a peaceful environment.",
      services: ["Body Spa", "Relaxation Massage", "Head Massage", "Body Care"],
    },
  ];

  return (
    <>
      <Headers />

      <main className="w-full bg-[var(--bg-primary2)] mt-15">

        {/* Hero Section */}
        <section className="w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
          <div className="max-w-[1000px] mx-auto text-center">

            <p className="text-sm sm:text-base tracking-[3px] sm:tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
              Our Services
            </p>

            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
              Beauty Care Made For You
            </h1>

            <p className="mt-5 sm:mt-6 max-w-[700px] mx-auto text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base">
              From everyday beauty care to special occasion makeovers,
              The Heart Beauty offers personalized services to help you
              look beautiful and feel confident.
            </p>

          </div>
        </section>

        {/* Services Section */}
        <section className="w-full pb-16 sm:pb-24 lg:pb-28 px-3 sm:px-6">
          <div className="max-w-[1200px] mx-auto">

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">

              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white p-4 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-[#eee5dd] hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg"
                >

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#f5ece0] text-[var(--bg-primary)] flex items-center justify-center text-base sm:text-xl group-hover:bg-[var(--bg-primary)] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 sm:mt-6 text-lg sm:text-2xl font-serif text-gray-900 leading-tight">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 sm:mt-4 text-gray-600 leading-5 sm:leading-7 text-xs sm:text-sm">
                    {service.description}
                  </p>

                  {/* Services List */}
                  <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">

                    {service.services.map((item, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--bg-primary)]"></span>

                        <span>
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-14 sm:py-20 px-4 sm:px-6 bg-[#f5ece0]">
          <div className="max-w-[850px] mx-auto text-center">

            <p className="text-sm tracking-[3px] sm:tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
              Book Your Visit
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
              Ready To Feel Beautiful?
            </h2>

            <p className="mt-5 text-gray-600 leading-6 sm:leading-7 max-w-[650px] mx-auto text-sm sm:text-base">
              Treat yourself to a relaxing beauty experience with our
              professional team. Book your appointment today.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Services;