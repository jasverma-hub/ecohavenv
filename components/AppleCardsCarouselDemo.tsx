"use client";
import React from "react";
import Image from 'next/image';
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className='py-20'> 
    <div className="flex items-center justify-center">
      <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          <h1 className='heading' id='services'>
                Services we{' '}
                <span className='text-purple'>provide</span>
              </h1>
          </div>
        </button>
        </div>
      <div className="w-full h-full my-10"> 
        <h2 className="text-center md:tracking-wider text-sm md:text-m lg:text-xl">
          EcoHaven Ventures operates across a diverse range of verticals, offering tailored strategies to meet the unique needs of each sector. Through collaborative partnerships and innovative approaches, <span className="text-purple">EcoHaven Ventures empowers clients to embrace sustainability and security as core principles, driving positive impact and lasting change.</span>
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};  

const DummyContent = ({ description, details, imageSrc }: { description: string; details: string; imageSrc: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description}
        </span>{" "}
        {details}
      </p>
      <Image
        src={imageSrc}
        alt="Content Image"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full rounded-lg shadow-md mx-auto object-contain transition-transform duration-300 hover:scale-105 hover:shadow-lg mt-6"
      />
    </div>
  );
};

const data = [
  {
    category: "Customized Cybersecurity Solutions:",
    title: " Implementing tailored security measures for sensitive data protection across banks, insurance, retail, healthcare, and government sectors.",
    src: "/cybersecurity.jpg",
    content: (
      <DummyContent
        description="We provide tailored cybersecurity solutions to protect sensitive data across critical sectors such as banking, insurance, retail, healthcare, and government."
        details="Our services include advanced encryption, multi-factor authentication, and real-time threat monitoring, ensuring compliance with industry standards and safeguarding against cyber threats. By partnering with us, organizations can confidently secure their operations and maintain the highest levels of data protection."
        imageSrc="/cybersecurity.jpg"
      />
    ),
  },
  {
    category: "Urban Planning:",
    title: "Design cities that prioritize green spaces, reduce carbon footprints, and enhance residents' quality of life through sustainable solutions.",
    src: "/urban.jpg",
    content: (
      <DummyContent
        description="Our urban planning services focus on creating sustainable cities that prioritize green spaces and quality of life."
        details="We help develop infrastructure that reduces carbon footprints, optimizes energy use, and fosters community well-being."
        imageSrc="/urban.jpg"
      />
    ),
  },
  {
    category: "Climate Change Mitigation:",
    title: "Develop strategies to cut greenhouse gas emissions and enhance resilience against climate impacts for a sustainable future.",
    src: "/climate.jpg",
    content: (
      <DummyContent
        description="We design strategies for climate change mitigation and resilience."
        details="Our approach includes reducing greenhouse gas emissions and developing adaptive measures for sustainable communities."
        imageSrc="/climate.jpg"
      />
    ),
  },
  {
    category: "Eco-Tourism Development:",
    title: "Create sustainable tourism models that benefit local communities and safeguard natural habitats, promoting environmental and cultural preservation.",
    src: "/ecot.jpg",
    content: (
      <DummyContent
        description="We support eco-tourism initiatives to promote sustainability and cultural preservation."
        details="Our models benefit local communities and ensure the protection of natural habitats and resources."
        imageSrc="/ecot.jpg"
      />
    ),
  },
  {
    category: "Rural Empowerment:",
    title: "Support rural communities by adopting sustainable agricultural practices and developing eco-friendly enterprises to boost local economies.",
    src: "/man.jpg",
    content: (
      <DummyContent
        description="We empower rural communities through sustainable agriculture and eco-friendly enterprises."
        details="Our projects aim to enhance local economies and improve livelihoods while preserving the environment."
        imageSrc="/man.jpg"
      />
    ),
  },
  {
    category: "Artisanal Craftsmanship:",
    title: "Promote traditional crafts using sustainable materials and ethical production methods to preserve heritage and support artisans.",
    src: "/pottery.jpg",
    content: (
      <DummyContent
        description="We promote artisanal craftsmanship by supporting traditional crafts."
        details="Our focus is on sustainable materials and ethical production methods to preserve heritage and empower artisans."
        imageSrc="/pottery.jpg"
      />
    ),
  },
];
