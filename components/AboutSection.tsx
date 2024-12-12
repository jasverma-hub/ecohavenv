// import React from 'react';
// import { Meteors } from './ui/Meteors';

// export function AboutSection() {
//   return (
//     <section className='py-20' id='about'>
//       <h1 className='heading text-center my-20'>
//         About <span className='text-purple'>Us</span>
//       </h1>
//       <div className="relative">
//         <div className="w-full flex flex-wrap gap-16 justify-center items-start">
//           {['Our History', 'Our Mission', 'Who we are?'].map((title, index) => (
//             <div
//               key={index}
//               className="relative w-full sm:w-80 md:w-96 lg:w-[350px] flex flex-col overflow-hidden z-10 group transition-transform duration-300 ease-in-out"
//             >
//               {/* Background effect */}
//               <div className="absolute inset-0 bg-[#04071D] rounded-2xl blur-3xl"></div>
              
//               <div className="relative bg-[#04071D] border border-gray-800 px-4 py-6 h-full overflow-hidden rounded-2xl flex flex-col justify-between min-h-[320px] group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-300 ease-in-out">
//                 {/* Meteor effect applied as a pseudo-element */}
//                 <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="h-2 w-2 text-gray-300"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//                     />
//                   </svg>
//                 </div>
//                 <div className="absolute inset-0 z-0 pointer-events-none">
//                   <Meteors number={40} />
//                 </div>
//                 <h1 className="font-bold text-xl text-white mb-4 relative z-10 text-center">
//                   {title}
//                 </h1>
//                 <p className="font-normal text-base mb-4 relative z-10" style={{ color: '#9C9DB0' }}>
//                   {index === 0 && "EcoHaven Ventures stands at the forefront of pioneering sustainable and digital solutions for businesses and governments. We are dedicated to enhancing service delivery and cultivating a thriving ecosystem. Our expertise lies in guiding organizations toward environmentally conscious practices that ensure long-term viability, balance, and robust data security in a rapidly evolving world."}
//                   {index === 1 && "Our mission at EcoHaven Ventures is to advance sustainable development through digital innovation. We guide businesses and governments towards green practices that guarantee long-term viability and ecological balance. Simultaneously, we enhance data security through innovative cybersecurity solutions, protecting crucial information and fortifying organizations against potential digital threats."}
//                   {index === 2 && "EcoHaven Ventures excels in integrating sustainability with digital security. Our expert team is devoted to elevating environmental awareness while safeguarding crucial information and assets. We are committed to balancing economic progress with environmental stewardship, leveraging innovative approaches, and implementing comprehensive data protection measures to foster a sustainable future."}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
