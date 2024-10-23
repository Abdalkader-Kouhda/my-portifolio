import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/public/images/icons/logo.svg";
import '../index.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div id="navbar" className="z-50 sticky top-0 w-full flex justify-between items-center bg-secondary m-0 p-3">
            <img className="logo mx-3 h-8 md:h-10" src={logo} alt="Eng. Abd Logo" />
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (
                        <FaBars className="h-6 w-6" />
                    )}
                </button>
            </div>
            <ul
                className={`transform transition-height-opacity-transform duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 "
                    } md:opacity-100 flex flex-col md:flex-row list-none absolute md:relative top-full left-0 w-full md:w-auto bg-secondary md:bg-transparent items-center md:items-center md:static md:p-0 p-5 md:space-x-0 space-y-5 md:space-y-0`}
            >
                <li>
                    <a
                        href="#about"
                        className="text-md p-2 px-3 mx-2 text-white rounded-lg hover:bg-accent hover:text-black"
                        onClick={closeMenu}
                    >
                        About
                    </a>
                </li>
                <li> <a
                    href="#services"
                    className="text-md p-2 px-3 mx-2 text-white rounded-lg hover:bg-accent hover:text-black"
                    onClick={closeMenu}
                >
                    Services
                </a>
                </li>
                <li> <a
                    href="#projects"
                    className="text-md p-2 px-3 mx-2 text-white rounded-lg hover:bg-accent hover:text-black"
                    onClick={closeMenu}
                >
                    Projects
                </a>
                </li>

                <li> <a
                    href="#awards"
                    className="text-md p-2 px-3 mx-2 text-white rounded-lg hover:bg-accent hover:text-black"
                    onClick={closeMenu}
                >
                    Awards & Courses
                </a></li>
                <li>
                    <a
                        href="#contact"
                        className="text-md p-2 px-3 mx-2 text-white rounded-lg hover:bg-accent hover:text-black"
                        onClick={closeMenu}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
