"use client";  

import React from "react";
import { Github, Mail, Instagram, Linkedin  } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { motion } from "framer-motion";

const socials = [
  {
    icon: <Instagram size={40} />,
    href: "https://www.instagram.com/eduardagmagno/",
    label: "Instagram",
    handle: "@eduardagmagno",
  },
  {
    icon: <Linkedin size={40} />,
    href: "https://www.linkedin.com/in/eduardagmagno",
    label: "Linkdin",
    handle: "@eduardagmagno",
  },  
  {
    icon: <Github size={40} />,
    href: "https://github.com/bellblex",
    label: "Github",
    handle: "bellblex",
  },
  {
    icon: <Mail size={40} />,
    href: "mailto:eduardagmagno@gmail.com",
    label: "Email",
    handle: "eduardagmagno@gmail.com",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContactPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-[#000033] via-[#301934] to-[#0e3d31] flex flex-col">
      <Navigation />

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex-grow flex items-center justify-center p-6 sm:p-12 relative z-10"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-transparent p-10 w-full max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl text-white mb-6">CONTACT ME</h1>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 relative"
          >
            <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l-2 border-gray-500"></div>

            <motion.div variants={fadeInUp} className="space-y-8 pr-8">
              <div className="relative flex justify-center">
                <div className="avatar">
                  <div className="w-64 h-64 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/IMG_7011.jpg"
                      alt="Eduarda Magno"
                      className="object-cover" 
                      style={{ objectPosition: ''}} 
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-white">Eduarda Magno</h2>
                <p className="text-gray-400 text-sm mt-4">
                  I am an 18 year old student, studying in the 2º year of Informatics Engineering and Computer Science at the University of Porto.
                </p>
                <p className="text-gray-400 text-sm mt-4">
                  Contact me for work proposals and any questions you might have!
                </p>
              </div>

              <div className="flex justify-center space-x-8 mt-8">
                {socials.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    className="flex flex-col items-center gap-2 duration-500 group"
                  >
                    <span className="flex items-center justify-center text-lg text-gray-400 group-hover:text-white">
                      {s.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pl-8">
              <form className="space-y-6">
                <input type="text" style={{ display: "none" }} autoComplete="new-password" />

                <div className="space-y-3">
                  <label className="block text-sm text-white">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 text-sm bg-transparent border-b-2 border-gray-500 text-white focus:border-pink-500 outline-none"
                    autoComplete="off"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm text-white">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-transparent text-sm border-b-2 border-gray-500 text-white focus:border-pink-500 outline-none"
                    autoComplete="new-email"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm text-white">Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-4 bg-transparent text-sm border-b-2 border-gray-500 text-white focus:border-pink-500 outline-none"
                    autoComplete="new-subject" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm text-white">Message</label>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-4 text-sm bg-transparent border-b-2 border-gray-500 text-white focus:border-pink-500 outline-none"
                    rows={4}
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 text-sm py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
