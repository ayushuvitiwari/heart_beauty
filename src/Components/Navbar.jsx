// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useState } from "react";
// import Logo from "../assets/logo.png";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "About", path: "/about" },
//         { name: "Services", path: "/services" },
//         { name: "Gallery", path: "/gallery" },
//         { name: "Pricing", path: "/pricing" },
//         { name: "Contact", path: "/contact" }
//     ];

//     return (
//         <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
//             <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
//                 <nav className="h-20 flex items-center justify-between">

//                     <NavLink to="/" className="shrink-0">
//                         <img src={Logo} alt="Salon Logo" className="w-14 h-14 object-contain" />
//                     </NavLink>

//                     <div className="hidden lg:flex items-center gap-8">
//                         {navLinks.map((item) => (
//                             <NavLink
//                                 key={item.path}
//                                 to={item.path}
//                                 className={({ isActive }) =>
//                                     `text-[15px] font-medium transition-colors ${
//                                         isActive
//                                             ? "text-[var(--red-primary)]"
//                                             : "text-gray-700 hover:text-[var(--red-primary)]"
//                                     }`
//                                 }
//                             >
//                                 {item.name}
//                             </NavLink>
//                         ))}
//                     </div>

//                     <NavLink
//                         to="/appointment"
//                         className="hidden lg:block px-6 py-3 rounded-full bg-[var(--red-primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
//                     >
//                         Appointment
//                     </NavLink>

//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="lg:hidden text-2xl text-gray-800"
//                     >
//                         {menuOpen ? <FiX /> : <FiMenu />}
//                     </button>
//                 </nav>

//                 {menuOpen && (
//                     <div className="lg:hidden pb-5">
//                         <div className="flex flex-col gap-2">
//                             {navLinks.map((item) => (
//                                 <NavLink
//                                     key={item.path}
//                                     to={item.path}
//                                     onClick={() => setMenuOpen(false)}
//                                     className={({ isActive }) =>
//                                         `px-4 py-3 rounded-lg text-sm font-medium ${
//                                             isActive
//                                                 ? "bg-[var(--red-primary)] text-white"
//                                                 : "text-gray-700 hover:bg-gray-100"
//                                         }`
//                                     }
//                                 >
//                                     {item.name}
//                                 </NavLink>
//                             ))}

//                             <NavLink
//                                 to="/appointment"
//                                 onClick={() => setMenuOpen(false)}
//                                 className="mt-2 px-4 py-3 rounded-lg text-center bg-[var(--red-primary)] text-white text-sm font-semibold"
//                             >
//                                 Appointment
//                             </NavLink>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Navbar;