// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Navigation } from "../components/nav";
// import MyBentoGrid from "../components/bento";
// import { useTheme } from "../themeContext";

// const bentoItems = [
//   {
//     id: 1,
//     width: 5,
//     height: 3,
//     children: (
//       <div className="bg-primary text-primary-content p-4 text-center">
//         Project 1
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     width: 5,
//     height: 3,
//     children: (
//       <div className="bg-secondary text-secondary-content p-4 text-center">
//         About Me
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     width: 10,
//     height: 3,
//     children: (
//       <div className="bg-accent text-accent-content p-4 text-center">
//         Contact
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     width: 5,
//     height: 3,
//     children: (
//       <div className="bg-primary text-primary-content p-4 text-center">
//         Project 1
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     width: 5,
//     height: 3,
//     children: (
//       <div className="bg-primary text-primary-content p-4 text-center">
//         Project 1
//       </div>
//     ),
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const ProjectsPage: React.FC = () => {
//   const { theme } = useTheme();

//   return (
//     <div
//       className={`relative min-h-screen text-base-content flex flex-col ${
//         theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
//       }`}
//     >
//       Include Navigation
//       <Navigation />

//       <motion.div
//         initial="hidden"
//         animate="visible"
//         className="flex-grow flex items-center justify-center p-6 sm:p-12 relative z-10"
//       >
//         <motion.div variants={fadeInUp} className="container mx-auto">
//           {/* Bento Grid */}
//           <MyBentoGrid items={bentoItems} />

//           {/* Pagination Buttons */}
//           <div className="flex items-center justify-center mt-8">
//             <div className="join center">
//               <button className="join-item btn">1</button>
//               <button className="join-item btn btn-active">2</button>
//               <button className="join-item btn">3</button>
//               <button className="join-item btn">4</button>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectsPage;
