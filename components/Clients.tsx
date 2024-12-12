"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section className="py-32">
      <div className="flex items-center justify-center">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            <h1 className="heading" id="testimonials">
              Kind words from
              <span className="text-purple"> satisfied clients</span>
            </h1>
          </div>
        </button>
      </div>

      <div className="w-full h-full my-10">
        <h2 className="text-center md:tracking-wider text-sm md:text-m lg:text-xl">
          At EcoHaven Ventures, we are privileged to partner with a diverse
          array of clients across multiple industries, helping them achieve
          their sustainability and cybersecurity goals.{" "}
          <span className="text-purple">
            Our collaborative approach ensures that each client's unique needs
            are met with customized solutions.
          </span>
        </h2>

        {/* Usnetwork Limited Company Section */}
        <div className="my-10 px-4 md:px-20">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mt-10 rounded-lg shadow-lg">
          <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            USNetwork Limited <span className="text-purple">Company</span>
          </h3>
          <p className="mt-4 lg:text-xl lg:font-normal font-light text-sm line">
            USNetwork, a leader in the Information and Communications sector, has trusted EcoHaven Ventures to enhance its IT consulting capabilities with a strong focus on sustainable practices and robust cybersecurity. By integrating cutting-edge technology with environmentally conscious strategies, we have helped them navigate the complexities of the digital landscape while maintaining a commitment to sustainability.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-40">
              <motion.img
                src={company.img}
                alt={company.name}
                className="w-32 md:w-40 lg:w-48 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open('https://usnetwork.io/', '_blank', 'noopener,noreferrer')}
              />
              </div>
          </React.Fragment>
        ))}
      </div>
        <div className="flex flex-col items-center">
          <div
            className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
