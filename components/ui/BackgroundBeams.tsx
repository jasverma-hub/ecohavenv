// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { cn } from "@/utils/cn"

// export const BackgroundBeams = ({ className }: { className?: string }) => {
//   const paths = [
//     "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
//     "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
//     "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
//     "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
//     "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
//     "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
//     "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
//     "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
//     "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
//     "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
//   ]

//   return (
//     <div
//       className={cn(
//         "absolute inset-0 z-0 opacity-70 mix-blend-soft-light",
//         className
//       )}
//     >
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 300 300"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g>
//           {paths.map((path, index) => (
//             <motion.path
//               key={index}
//               d={path}
//               stroke="url(#gradient)"
//               strokeWidth="1.5"
//               fill="none"
//               initial={{ pathLength: 0, opacity: 0 }}
//               animate={{ pathLength: 1, opacity: 1 }}
//               transition={{
//                 pathLength: { type: "spring", duration: 2.5, bounce: 0 },
//                 opacity: { duration: 0.5 },
//               }}
//             />
//           ))}
//         </g>
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#18CCFC" />
//             <stop offset="50%" stopColor="#6344F5" />
//             <stop offset="100%" stopColor="#AE48FF" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   )
// }

