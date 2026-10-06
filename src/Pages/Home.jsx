import React from 'react'
import Navbar from '../Components/Navbar'
import { NavLink } from "react-router-dom"
import Footer from '../Components/Footer'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image1 from "../images/HomeSalider2.png";
import Image2 from "../images/HomeSalider1.png";
import Image3 from "../images/HomeSalider3.png";

import AboutImg from "../images/HomeAbout.png";
import Gallery1 from "../images/H1.webp";
import Gallery2 from "../images/H2.webp";
import Gallery3 from "../images/H3.webp";
import Gallery4 from "../images/H4.webp";

const Home = () => {

  const servicesData = [
    {
      title: "Hair Styling",
      description: "Beautiful haircuts, styling and treatments for your perfect look.",
      image: Gallery1,
    },
    {
      title: "Facial & Skincare",
      description: "Refresh your skin with relaxing facials and skincare treatments.",
      image: Gallery2,
    },
    {
      title: "Makeup",
      description: "Get a flawless look for weddings, parties and special occasions.",
      image: Gallery3,
    },
    {
      title: "Nail Care",
      description: "Complete your style with beautiful nails and professional care.",
      image: Gallery4,
    },
  ];

  const whyChooseData = [
    {
      icon: "✦",
      title: "Expert Beauty Professionals",
      description: "Our skilled professionals understand your style and provide beauty services with care and precision.",
    },
    {
      icon: "✧",
      title: "Premium Products",
      description: "We use carefully selected, high-quality beauty products for a safe and beautiful experience.",
    },
    {
      icon: "♡",
      title: "Relaxing Experience",
      description: "Enjoy a calm, comfortable and refreshing salon experience every time you visit us.",
    },
    {
      icon: "❀",
      title: "Personalized Care",
      description: "Every service is tailored to your needs so you always leave feeling confident and beautiful.",
    },
  ];

  const galleryData = [
    { image: Gallery1, title: "Hair Styling" },
    { image: Gallery2, title: "Beauty Makeup" },
    { image: Gallery3, title: "Facial Care" },
  ];

  const testimonialsData = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      review: "The service was amazing and the staff was very professional. I absolutely loved my experience at The Heart Beauty.",
    },
    {
      name: "Neha Verma",
      role: "Happy Client",
      review: "Beautiful salon with a relaxing atmosphere. The makeup and hair styling were exactly what I wanted.",
    },
    {
      name: "Ananya Singh",
      role: "Regular Client",
      review: "I always feel comfortable here. The team understands my requirements and provides excellent service every time.",
    },
  ];
  return (
    <>
      <Navbar />

      <section className="h-[55vh] sm:h-[65vh] lg:h-[76vh] w-full flex items-center justify-center mt-8 lg:mt-20 bg-[var(--bg-primary2)]">
        <div className='w-[96%] sm:w-[98%] rounded-2xl sm:rounded-3xl overflow-hidden'>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <SwiperSlide>
              <img src={Image1} alt="Salon" className="w-full h-full object-cover rounded-3xl" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Image2} alt="Salon" className="w-full h-full object-cover rounded-3xl" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Image3} alt="Salon" className="w-full h-full object-cover rounded-3xl" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>



      {/* hero end */}



      <section className="w-full py-16 sm:py-20 lg:py-12 bg-[var(--bg-primary2)]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-sm tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
              The Heart Beauty
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
              Beauty That Feels Like You
            </h2>

            <p className="mt-3 sm:mt-5 text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-7">
              Discover a place where beauty meets care. Our professional
              team is here to make you feel confident, beautiful and special.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">

            <div className="group text-center p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-[#fff8fa] hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl shadow-sm">
                ✂️
              </div>
              <h3 className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-lg lg:text-xl font-semibold">
                Hair Services
              </h3>
              <p className="mt-2 text-[11px] sm:text-sm text-gray-600 leading-5 sm:leading-6">
                Haircuts, styling, coloring and treatments.
              </p>
            </div>

            <div className="group text-center p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-[#fff8fa] hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl shadow-sm">
                💆
              </div>
              <h3 className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-lg lg:text-xl font-semibold">
                Facial & Spa
              </h3>
              <p className="mt-2 text-[11px] sm:text-sm text-gray-600 leading-5 sm:leading-6">
                Relaxing facials and refreshing spa treatments.
              </p>
            </div>

            <div className="group text-center p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-[#fff8fa] hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl shadow-sm">
                💄
              </div>
              <h3 className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-lg lg:text-xl font-semibold">
                Makeup
              </h3>
              <p className="mt-2 text-[11px] sm:text-sm text-gray-600 leading-5 sm:leading-6">
                Elegant makeup for every special occasion.
              </p>
            </div>

            <div className="group text-center p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-[#fff8fa] hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl shadow-sm">
                💅
              </div>
              <h3 className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-lg lg:text-xl font-semibold">
                Nails & Care
              </h3>
              <p className="mt-2 text-[11px] sm:text-sm text-gray-600 leading-5 sm:leading-6">
                Beautiful nails with professional care.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* About Section */}



      <section className="w-full py-12 sm:py-16 lg:py-20 bg-[var(--bg-primary2)]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

            <div className="w-full flex items-center justify-center">
              <img
                src={AboutImg}
                alt="The Heart Beauty Salon"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] h-[380px] sm:h-[480px] lg:h-[520px] object-cover rounded-[30px]"
              />
            </div>

            <div className="w-full">
              <p className="text-sm sm:text-base tracking-[3px] sm:tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
                About Us
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                Where Beauty Meets Confidence
              </h2>

              <p className="mt-5 sm:mt-6 text-gray-600 leading-7">
                At The Heart Beauty, we believe beauty is more than just
                appearance. It is about feeling confident, comfortable
                and truly yourself.
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                Our experienced professionals provide personalized beauty
                and salon services using quality products and modern
                techniques.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <NavLink
                  to="/about"
                  className="px-6 py-3 rounded-full bg-[var(--bg-primary)] text-white font-medium hover:scale-104 transition-all duration-200"
                >
                  Discover More
                </NavLink>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* Home Services Section */}


      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[var(--bg-primary2)]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-sm tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">Our Services</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">Our Popular Services</h2>
            <p className="mt-3 sm:mt-5 text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-7">Discover our range of beauty and salon services, thoughtfully designed to help you look and feel your best.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
            {servicesData.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-[150px] sm:h-[210px] lg:h-[260px] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-3 sm:p-5 lg:p-6">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-gray-600 leading-5 sm:leading-6">{service.description}</p>
                  <NavLink to="/services" className="inline-block mt-3 sm:mt-5 text-xs sm:text-sm text-[var(--bg-primary)] font-medium hover:opacity-80">Explore Service →</NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink to="/services" className="inline-block px-8 py-3 rounded-full bg-[var(--bg-primary)] text-white font-medium hover:opacity-90 transition-all">
              View All Services
            </NavLink>
          </div>

        </div>
      </section>


      {/* Why Choose Us Section */}


      <section className="w-full py-16 sm:py-20 lg:py-15 bg-[var(--bg-primary2)]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-sm tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
              Beauty Care Made Special
            </h2>

            <p className="mt-3 sm:mt-5 text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-7">
              At The Heart Beauty, we combine professional care, premium products and a relaxing atmosphere to give you an experience you truly deserve.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
            {whyChooseData.map((item, index) => (
              <div
                key={index}
                className="group text-center p-3 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl border border-gray-100 bg-white hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto flex items-center justify-center rounded-full bg-[var(--bg-primary)] text-white text-lg sm:text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="mt-3 sm:mt-5 lg:mt-6 text-sm sm:text-lg lg:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-gray-600 leading-5 sm:leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Gallery Section */}


      <section className="w-full py-16 sm:py-20 lg:py-10 bg-[var(--bg-primary2)]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-sm tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
              Our Gallery
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
              A Glimpse of Beauty
            </h2>

            <p className="mt-3 sm:mt-5 text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-7">
              Explore our beauty transformations, relaxing experiences and beautiful salon moments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className="group relative h-[150px] sm:h-[230px] lg:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="w-full p-3 sm:p-5 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-sm sm:text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink
              to="/gallery"
              className="inline-block px-8 py-3 rounded-full bg-[var(--bg-primary)] text-white font-medium hover:opacity-90 transition-all"
            >
              View Full Gallery
            </NavLink>
          </div>

        </div>
      </section>

      {/* Customer reviews */}

      <section className="w-full py-16 sm:py-20 lg:py-15 bg-[var(--bg-primary2)]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-sm tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-3 sm:mt-5 text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-7">
              We love making our clients feel confident, beautiful and special.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="p-3 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 text-[var(--bg-primary)] text-sm sm:text-lg">
                  ★★★★★
                </div>
                <p className="mt-3 sm:mt-5 text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-7">
                  "{item.review}"
                </p>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-sm text-[var(--bg-primary)]">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default Home