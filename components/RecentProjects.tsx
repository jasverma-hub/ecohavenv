"use client";

import React from "react";
import { FaLock, FaShieldAlt, FaBuilding, FaHospitalAlt, FaDatabase, FaUniversity } from "react-icons/fa";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const RecentProjects = () => {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            <h1 className="heading" id="testimonials">
              Our
              <span className="text-purple"> Projects</span>
            </h1>
          </div>
        </button>
      </div>
      <div className="w-full h-full my-10">
      <h2 className="text-center md:tracking-wider text-sm md:text-m lg:text-xl">
          Driving meaningful change through innovative solutions.{" "}
          <span className="text-purple">At EcoHaven Ventures, our projects are milestones in fostering sustainability, innovation, and security.</span>
        </h2>

      {/* NEUROSECDATA Section */}
      <div className="my-10 px-4 md:px-20">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mt-10 rounded-lg shadow-lg">
        <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            Cybersecurity Solutions with <span className="text-purple">NEUROSECDATA</span>
          </h3>
          <p className="mt-4 lg:text-xl lg:font-normal font-light text-sm line">
            EcoHaven Ventures has partnered with NEUROSECDATA to deliver cutting-edge cybersecurity solutions tailored to the specific needs of organizations. Our collaboration ensures comprehensive protection, enabling clients to operate securely in today’s complex digital landscape.
          </p>
      </div>
      </div>

      {/* Key Sectors Section */}
      <div className="mt-12 space-y-8">
        <h3 className="text-2xl font-bold text-purple">Key Sectors Served:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reusable Cards for Each Sector */}
          {sectorData.map((sector) => (
            <Card key={sector.id} className="shadow-lg hover:scale-105 transition-transform">
              <CardHeader className="flex items-center space-x-4">
                <sector.icon size={32} className="text-purple" />
                <h4 className="text-xl leading-[1.6] text-white font-bold">{sector.title}</h4>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-lg leading-[1.6] text-white font-normal">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

const sectorData = [
  {
    id: 1,
    title: "Financial Institutions",
    description:
      "Our cybersecurity solutions safeguard banking systems, ensuring confidentiality, integrity, and availability of financial information.",
    icon: FaLock,
  },
  {
    id: 2,
    title: "Insurance Companies",
    description:
      "We protect sensitive client data with robust cybersecurity strategies, ensuring trust and compliance.",
    icon: FaShieldAlt,
  },
  {
    id: 3,
    title: "Retail Chains",
    description:
      "Our solutions secure point-of-sale systems and customer databases, ensuring operational efficiency and trust.",
    icon: FaBuilding,
  },
  {
    id: 4,
    title: "International Firms",
    description:
      "Protecting corporate data globally while navigating complex international cybersecurity regulations.",
    icon: FaDatabase,
  },
  {
    id: 5,
    title: "Health Organizations",
    description:
      "Ensuring compliance with healthcare data regulations and securing sensitive patient information.",
    icon: FaHospitalAlt,
  },
  {
    id: 6,
    title: "Government firms",
    description:
      "Protecting critical government data from cyber threats and ensuring national security.",
    icon: FaUniversity,
  },
];

export default RecentProjects;
