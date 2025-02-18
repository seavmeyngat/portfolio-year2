"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faDatabase, faCogs } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faJsSquare, faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { FiFigma } from "react-icons/fi";
import { FaDocker } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = require("react-slick").default;

export default function Page() {
  // Slick settings
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // State to control menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu when the hamburger icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hide menu after clicking a menu item
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-black to-gray-500 min-h-screen text-white animate-background">
      {/* Header with Logo on the Left and Menu on the Right */}
      <header className="bg-transparent py-4">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-4xl font-extrabold text-white font-knewave sm:text-3xl md:text-3xl lg:text-5xl">
            <span className="text-yellow-400">NGAT</span>
            <br /> Seavmey
          </div>


          {/* Hamburger Icon (only visible on small screens) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} className="text-3xl text-yellow-400" />
            </button>
          </div>

          {/* Menu Section (only visible when the menu is open) */}
          <ul
            className={`lg:flex lg:space-x-6 lg:text-2xl lg:gap-5 font-knewave ${isMenuOpen ? "absolute top-0 left-0 w-full bg-black text-center py-5 space-y-4 z-10" : "hidden"
              } lg:block`}
          >
            <li><a href="#about" className="hover:text-yellow-400" onClick={handleMenuItemClick}>About Me</a></li>
            <li><a href="#skills" className="hover:text-yellow-400" onClick={handleMenuItemClick}>Skills</a></li>
            <li><a href="#projects" className="hover:text-yellow-400" onClick={handleMenuItemClick}>Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400" onClick={handleMenuItemClick}>Contact</a></li>
          </ul>
        </nav>

      </header>

      {/* About Me Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="rounded-full w-[400px] h-[400px] shadow-[0_0_500px_rgba(192,_192,_192,_0.5),_0_0_700px_rgba(192,_192,_192,_0.5)] p-[25px] bg-white">
              <img
                src="/images/meys.jpg"
                alt="Ngat Seavmey"
                className="w-full h-full object-cover rounded-full float-left mr-8 sm:w-[100px] md:w-[100px] lg:w-[400px]"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-4xl font-semibold font-knewave "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              <motion.span
                className="text-yellow-400"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                I'm Ngat Seavmey
              </motion.span>
              .
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {" "}I’m a Full Stack Developer passionate about building responsive, user-friendly websites and always improving my skills.
              </motion.span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-0 bg-transparent">
        <h1 className="text-4xl font-semibold text-center font-knewave">Skills</h1>
        <Slider {...settings} className="mt-8">
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faCode} className="text-6xl text-yellow-400" />
            <h1>HTML</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faCss3} className="text-6xl text-yellow-400" />
            <h1>CSS</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faReact} className="text-6xl text-yellow-400" />
            <h1>REACT JS</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faJsSquare} className="text-6xl text-yellow-400" />
            <h1>JAVASCRIPT</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faGithub} className="text-6xl text-yellow-400" />
            <h1>GITHUB</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faDatabase} className="text-6xl text-yellow-400" />
            <h1>PGADMIN</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faCogs} className="text-6xl text-yellow-400" />
            <h1>POSTMAN</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FiFigma className="text-6xl text-yellow-400 mx-auto" />
            <h1>FIGMA</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FontAwesomeIcon icon={faReact} className="text-6xl text-yellow-400" />
            <h1>NEXT JS</h1>
          </div>
          <div className="p-2 m-2 text-center">
            <FaDocker className="text-6xl text-yellow-400 mx-auto" />
            <h1>DOCKER</h1>
          </div>
        </Slider>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 bg-transparent">
        <h1 className="text-4xl font-semibold text-center font-knewave">Projects</h1>
        <div className="mt-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, img: "/images/rabbitSchool.png", link: "https://rabbit-school.vercel.app/" },
            { id: 2, img: "/images/minimalblock.png", link: "https://minimal-blog-beryl.vercel.app/" },
            { id: 3, img: "/images/weater.png", link: "https://pp-weather-azure.vercel.app/" },
            { id: 4, img: "/images/FairyTale.png", link: "https://fairy-phi.vercel.app/" },
            { id: 5, img: "/images/Selling-Bicycle.png", link: "https://limsopheak16.github.io/Selling-Bicycle/" },
            { id: 6, img: "/images/Survey.png", link: "https://survey-and-dashboard.vercel.app/" },
          ].map((project) => (
            <div key={project.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={project.img} alt={`Project ${project.id}`} className="w-full h-40 object-cover rounded-lg" />
              <div className="text-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className=" bg-transparent text-center text-white">
        <h1 className="text-4xl font-semibold font-knewave">Contact</h1>
        <div className="mt-8 text-center">
          <p className=" text-[23px]">Email: seavmey.ngat@institute.pse.ngo</p>
          <p className=" text-[23px]">Phone: (+855) 97 843 2206</p>
        </div>
        {/* Footer */}
        <footer className="bg-transparent py-6 text-center">
          <p className="text-[20px]">© 2025 Ngat Seavmey</p>
        </footer>
      </section>
    </div>
  );
}
