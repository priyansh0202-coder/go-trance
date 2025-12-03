"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";
import { mmbsRussiaFaqs } from "../../app/data/faqdata";
import Link from "next/link";

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <div
        onClick={onToggle}
        className="flex justify-between items-center gap-2 text-[14px] sm:text-[16px] font-[550] cursor-pointer"
      >
        <span>{question}</span>
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          {isOpen ? (
            <LuCircleMinus className="w-full h-full" />
          ) : (
            <LuCirclePlus className="w-full h-full" />
          )}
        </div>
      </div>

      {isOpen && (
        <p className="text-[14px] sm:text-[16px] text-gray-900">{answer}</p>
      )}
    </div>
  );
};

// FAQ Component
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:w-[100%]  py-8">
      {/* Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-teal-600">
        MBBS in Russia - Important FAQs
      </h2>

      {/* FAQ List */}
      <div className="flex flex-col gap-2 md:gap-4 divide-y p-3 md:p-0">
        {mmbsRussiaFaqs.map((faq, index) => (
          <Accordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
      <div>
        <span className="  pb-4 ">Read More:</span>
        <ul className="text-[14px] sm:text-[16px]  w-[25%] flex flex-col gap-1   mx-4 ">
          <Link href="https://tajikistanmedi.com/mbbs-in-tajikistan">
            {" "}
            <li className="text-teal-600  hover:underline list-disc">
              MBBS in Tajikistan
            </li>
          </Link>
          <Link href="https://georgiamedi.com/mbbs-in-georgia">
            <li className="text-teal-600  hover:underline list-disc">
              MBBS in Georgia
            </li>
          </Link>
          <Link href="https://uzbekistanmedi.com/mbbs-in-uzbekistan">
            <li className="text-teal-600  hover:underline list-disc">
              MBBS in Uzbekistan
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
