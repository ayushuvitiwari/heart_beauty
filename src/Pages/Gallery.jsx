import React from 'react'
import Headers from '../Components/Navbar'
import {
  FaInstagram,
  FaHeart,
} from "react-icons/fa";




import GalleryImg1 from "../images/G1.jpg";
import GalleryImg2 from "../images/G2.jpg";
import GalleryImg3 from "../images/G3.jpg";
import GalleryImg4 from "../images/G4.jpg";
import GalleryImg5 from "../images/G5.jpg";
import GalleryImg6 from "../images/Hair-Service-2.jpg";
import GalleryImg7 from "../images/Hair-services.jpg";
import GalleryImg8 from "../images/HomeAbout.webp";
import Footer from '../Components/Footer';



const Gallery = () => {


  const galleryImages = [
    { image: GalleryImg1, title: "Hair Styling" },
    { image: GalleryImg2, title: "Beauty Care" },
    { image: GalleryImg3, title: "Makeup" },
    { image: GalleryImg4, title: "Bridal Look" },
    { image: GalleryImg5, title: "Skin Care" },
    { image: GalleryImg6, title: "Nail Care" },
    { image: GalleryImg7, title: "Salon Experience" },
    { image: GalleryImg8, title: "Bridal Beauty" },
  ];

  return (
    <>
      <Headers />
      <main className="w-full bg-[var(--bg-primary2)]">

      {/* Hero Section */}
      <section className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto text-center">

          <p className="text-sm sm:text-base tracking-[4px] uppercase text-[var(--bg-primary)] font-medium">
            Our Gallery
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
            A Glimpse of Beauty
          </h1>

          <p className="mt-6 max-w-[680px] mx-auto text-gray-600 leading-7 text-sm sm:text-base">
            Explore some of our beauty transformations, elegant looks and
            memorable salon experiences at The Heart Beauty.
          </p>

        </div>
      </section>

      {/* Gallery */}
      <section className="w-full pb-20 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white aspect-[3/4]"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-end">

                  <div className="w-full p-4 sm:p-5 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-serif text-lg sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="text-white/80 text-xs mt-1">
                          The Heart Beauty
                        </p>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <FaHeart className="text-sm" />
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Instagram CTA */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#f5ece0]">
        <div className="max-w-[800px] mx-auto text-center">

          <div className="mx-auto w-14 h-14 rounded-full bg-[var(--bg-primary)] text-white flex items-center justify-center text-xl">
            <FaInstagram />
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
            Follow Our Beauty Journey
          </h2>

          <p className="mt-4 text-gray-600 leading-7 max-w-[600px] mx-auto">
            Follow us on Instagram to discover our latest looks,
            beauty tips, transformations and salon updates.
          </p>

          <a
            href="https://www.instagram.com/_the_heart_beauty_/"
            target="_blank"
            className="inline-block mt-7 px-7 py-3 rounded-full bg-[var(--bg-primary)] text-white font-medium hover:scale-105 transition-all duration-200"
          >
            Follow Us
          </a>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  )
}

export default Gallery