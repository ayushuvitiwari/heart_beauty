import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Headers from "../Components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! Your message has been sent.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };



  return (
    <>
      <Headers />
      <main className="w-full bg-[var(--bg-primary2)]">

        {/* Hero Section */}
        <section className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
          <div className="max-w-[900px] mx-auto text-center">

            <p className="text-sm sm:text-base tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
              Let's Talk About Your Beauty
            </h1>

            <p className="mt-6 max-w-[650px] mx-auto text-gray-600 leading-7 text-sm sm:text-base">
              Have a question or want to book an appointment?
              We'd love to hear from you. Get in touch with The Heart Beauty.
            </p>

          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full pb-20 sm:pb-24 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

              {/* Contact Information */}
              <div className="bg-[#f5ece0] rounded-2xl p-7 sm:p-10">

                <p className="text-sm tracking-[3px] uppercase text-[var(--bg-primary)] font-medium">
                  Get In Touch
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-serif text-gray-900">
                  We'd Love To Hear From You
                </h2>

                <p className="mt-5 text-gray-600 leading-7">
                  Whether you want to know more about our services or
                  schedule your next beauty appointment, feel free to
                  contact us.
                </p>

                <div className="mt-8 space-y-6">

                  <div className="flex items-start gap-4">
                    <div className="min-w-11 h-11 rounded-full bg-[var(--bg-primary)] text-white flex items-center justify-center">
                      <FaPhoneAlt />
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900">
                        Phone
                      </h3>

                      <p className="mt-1 text-gray-600 text-sm">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="min-w-11 h-11 rounded-full bg-[var(--bg-primary)] text-white flex items-center justify-center">
                      <FaEnvelope />
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900">
                        Email
                      </h3>

                      <p className="mt-1 text-gray-600 text-sm">
                        hello@theheartbeauty.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="min-w-11 h-11 rounded-full bg-[var(--bg-primary)] text-white flex items-center justify-center">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900">
                        Address
                      </h3>

                      <p className="mt-1 text-gray-600 text-sm leading-6">
                        Your Salon Address,<br />
                        Your City, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="min-w-11 h-11 rounded-full bg-[var(--bg-primary)] text-white flex items-center justify-center">
                      <FaClock />
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900">
                        Opening Hours
                      </h3>

                      <p className="mt-1 text-gray-600 text-sm leading-6">
                        Monday - Saturday: 10:00 AM - 8:00 PM
                        <br />
                        Sunday: 11:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm border border-[#eee5dd]">

                <p className="text-sm tracking-[3px] uppercase text-[var(--bg-primary)] font-medium">
                  Send A Message
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-serif text-gray-900">
                  Get In Touch
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[var(--bg-primary)] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[var(--bg-primary)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[var(--bg-primary)] transition-all"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none resize-none focus:border-[var(--bg-primary)] transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[var(--bg-primary)] text-white font-medium hover:scale-105 transition-all duration-200"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>

        {/* Map Section */}
        <section className="w-full pb-20 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">

            <section className="w-full pb-20 px-4 sm:px-6">
              <div className="max-w-[1200px] mx-auto">

                <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[400px] bg-[#f5ece0]">

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.465094086563!2d73.02279977472998!3d21.60679306767562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0231f18cf83b9%3A0x9112b4fbd6f36560!2sThe%20heart%20beauty%20salon!5e0!3m2!1sen!2sin!4v1791213665883!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="The Heart Beauty Salon Location"
                  />

                </div>

              </div>
            </section>


          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Contact
