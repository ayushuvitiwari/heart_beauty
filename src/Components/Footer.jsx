import { NavLink } from "react-router-dom";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-950 text-white">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">

                    <div>
                        <h2 className="text-xl sm:text-2xl font-serif">The Heart Beauty</h2>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 leading-6 sm:leading-7">
                            Discover beauty, confidence and relaxation with our professional salon services designed especially for you.
                        </p>

                        <div className="flex items-center gap-2 sm:gap-4 mt-5 sm:mt-6">
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--bg-primary)] transition-all">
                                <FiInstagram />
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--bg-primary)] transition-all">
                                <FiFacebook />
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--bg-primary)] transition-all">
                                <FiYoutube />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>

                        <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-5">
                            <NavLink to="/" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Home</NavLink>
                            <NavLink to="/about" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">About</NavLink>
                            <NavLink to="/services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Services</NavLink>
                            <NavLink to="/gallery" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Gallery</NavLink>
                            <NavLink to="/pricing" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Pricing</NavLink>
                            <NavLink to="/contact" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Contact</NavLink>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">Our Services</h3>

                        <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-5">
                            <NavLink to="/services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Hair Styling</NavLink>
                            <NavLink to="/services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Facial & Skincare</NavLink>
                            <NavLink to="/services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Makeup</NavLink>
                            <NavLink to="/services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Nail Care</NavLink>
                            <NavLink to="/services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all">Spa & Relaxation</NavLink>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">Get In Touch</h3>

                        <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-5 text-xs sm:text-sm text-gray-400">
                            <p>📍 Lucknow, Uttar Pradesh</p>
                            <p>📞 +91 98765 43210</p>
                            <p>✉️ hello@theheartbeauty.com</p>
                            <p>🕐 Mon - Sun: 10:00 AM - 8:00 PM</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                    <p>© 2026 The Heart Beauty. All Rights Reserved.</p>

                    <p>
                        Designed & Developed by{" "}
                        <span className="text-white font-medium">Ayush Tiwari</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;