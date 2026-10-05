import React from "react";
import Header from '../Components/Navbar'
import { FaHeart, FaStar, FaSpa, FaUserCheck } from "react-icons/fa";
import Footer from "../Components/Footer";
import Homeimg from '../images/HomeSalider2.webp'
import About1 from '../images/Mackup-service.jpg'
import G1 from '../images/G1.jpg'
import G2 from '../images/G2.jpg'

const About = () => {
  return (
    <>
      <Header />
      <div className="w-full bg-[#fffaf8] text-[#2b2020] mt-20">

        <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
          <img
            src={Homeimg}
            alt="Heart Beauty"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10 text-center text-white px-5 max-w-3xl">
            <p className="text-sm sm:text-base uppercase tracking-[5px] mb-4">
              Welcome To Heart Beauty
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold">
              Where Beauty Meets Confidence
            </h1>
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/90">
              Discover a place where beauty, care and confidence come together
              to create your perfect beauty experience.
            </p>
          </div>
        </section>

        <section className="w-full py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="relative">
              <img
                src={About1}
                alt="Heart Beauty Salon"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white shadow-xl rounded-2xl px-6 py-5">
                <div className="flex items-center gap-3">
                  <FaHeart className="text-[var(--bg-primary)] text-2xl" />
                  <div>
                    <h3 className="font-semibold text-lg">Heart Beauty</h3>
                    <p className="text-sm text-gray-500">Beauty With Care</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[4px] text-[var(--bg-primary)] font-medium">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                Beauty That Makes You Feel Beautiful
              </h2>

              <p className="mt-6 text-gray-600 leading-7">
                Heart Beauty is a place created for those who believe that
                beauty is more than just appearance. We believe every person
                deserves to feel confident, relaxed and special.
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                From relaxing beauty treatments to professional styling, our
                goal is to provide personalized services with attention to every
                little detail.
              </p>

              <button className="mt-7 px-7 py-3 rounded-full bg-[var(--bg-primary)] text-white font-medium transition duration-300">
                Discover More
              </button>
            </div>

          </div>
        </section>

        <section className="w-full py-16 sm:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-[4px] text-[var(--bg-primary)] font-medium">
                Why Heart Beauty
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
                More Than A Beauty Salon
              </h2>

              <p className="mt-4 text-gray-600">
                We focus on creating a comfortable and beautiful experience
                where you can relax, refresh and feel your best.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">

              <div className="p-5 sm:p-7 rounded-2xl bg-[#fff8f8] text-center">
                <FaHeart className="mx-auto text-3xl text-[var(--bg-primary)]" />
                <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                  Personalized Care
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Services designed according to your individual beauty needs.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-2xl bg-[#fff8f8] text-center">
                <FaStar className="mx-auto text-3xl text-[var(--bg-primary)]" />
                <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                  Premium Quality
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Quality products and professional beauty services.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-2xl bg-[#fff8f8] text-center">
                <FaSpa className="mx-auto text-3xl text-[var(--bg-primary)]" />
                <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                  Relaxing Experience
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  A calm and welcoming environment made for your comfort.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-2xl bg-[#fff8f8] text-center">
                <FaUserCheck className="mx-auto text-3xl text-[var(--bg-primary)]" />
                <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                  Beauty Experts
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Professional care with attention to every detail.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-sm uppercase tracking-[4px] text-[var(--primary)] font-medium">
                Our Philosophy
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
                Your Beauty, Your Confidence
              </h2>

              <p className="mt-6 text-gray-600 leading-7">
                We believe beauty should feel personal. That's why we take time
                to understand your style, preferences and expectations before
                creating a look that feels truly yours.
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                At Heart Beauty, every visit is an opportunity to pause, relax
                and give yourself the care you deserve.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={G1}
                alt="Beauty Service"
                className="w-full h-64 sm:h-80 object-cover rounded-3xl"
              />
              <img
                src={G2}
                alt="Beauty Treatment"
                className="w-full h-64 sm:h-80 object-cover rounded-3xl mt-8"
              />
            </div>

          </div>
        </section>

        <section className="w-full py-16 sm:py-20 bg-[var(--bg-primary2)] text-black">
          <div className="max-w-[800px] mx-auto px-5 text-center">

            <FaHeart className="mx-auto text-3xl mb-5" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
              Ready To Feel Your Best?
            </h2>

            <p className="mt-4 text-black">
              Treat yourself to a beautiful experience at Heart Beauty.
            </p>

          </div>
        </section>

      </div>

      <Footer/>

    </>
  );
};

export default About;