import React from 'react'
import { NavLink } from 'react-router-dom'
import AppointmentBg from "../images/HomeSalider2.webp";

const FooterTop = () => {
    return (
        <>
            {/*  Book Appointment */}

            <section
                className="w-full py-16 sm:py-20 lg:py-24 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${AppointmentBg})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <p className="text-sm tracking-[4px] uppercase text-white/80 font-medium">
                        Your Beauty Journey
                    </p>

                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
                        Ready to Feel Beautiful?
                    </h2>

                    <p className="mt-5 max-w-[650px] mx-auto text-white/85 leading-7">
                        Treat yourself to a relaxing beauty experience with our professional team. Book your appointment and let us take care of the rest.
                    </p>

                    <NavLink
                        to="/appointment"
                        className="inline-block mt-8 px-8 py-3.5 rounded-full bg-white text-[var(--bg-primary)] font-semibold hover:bg-gray-100 transition-all"
                    >
                        Book Your Appointment
                    </NavLink>

                </div>
            </section>

        </>
    )
}

export default FooterTop