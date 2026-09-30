import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="h-20 flex items-center justify-between overflow-hidden px-1">

                    <NavLink to="/">
                        <img src={Logo} alt="The Heart Beauty" className="w-auto h-20 object-contain hover:scale-110 transition-transform duration-200" />
                    </NavLink>

                    <div className="hidden lg:flex items-center gap-7">
                        <NavLink to="/" className="text-[15px] font-medium text-gray-700 hover:text-[var(--bg-primary)]">Home</NavLink>
                        <NavLink to="/about" className="text-[15px] font-medium text-gray-700 hover:text-[var(--bg-primary)]">About</NavLink>
                        <NavLink to="/services" className="text-[15px] font-medium text-gray-700 hover:text-[var(--bg-primary)]">Services</NavLink>
                        <NavLink to="/gallery" className="text-[15px] font-medium text-gray-700 hover:text-[var(--bg-primary)]">Gallery</NavLink>
                        <NavLink to="/pricing" className="text-[15px] font-medium text-gray-700 hover:text-[var(--bg-primary)]">Pricing</NavLink>
                        <NavLink to="/contact" className="text-[15px] font-medium text-gray-700 hover:text-[var(--bg-primary)]">Contact</NavLink>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-2xl text-gray-800"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="lg:hidden pb-5 bg-white">
                        <NavLink to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700">Home</NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700">About</NavLink>
                        <NavLink to="/services" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700">Services</NavLink>
                        <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700">Gallery</NavLink>
                        <NavLink to="/pricing" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700">Pricing</NavLink>
                        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700">Contact</NavLink>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;