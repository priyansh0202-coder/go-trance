"use client";
import Image from "next/image";
import React, { useState } from "react";
import { universities } from "../../app/data/universityData";
import LeadFormModalPopup from "../../components/lead-form/LeadFormModalPopup";
import Link from "next/link";

const Universitycard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-black rounded-lg">
        {/* Table Header */}
        <thead className="bg-teal-600 text-white border-b border-black">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-semibold">University Name</th>
            <th className="px-6 py-3 text-left text-lg font-semibold">Details</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr className="odd:bg-gray-100 even:bg-white">
            <td className="px-6 py-4 font-semibold">Tbilisi State Medical University (TSMU)</td>
            <td className="px-6 py-4">
              <p className="font-semibold text-teal-600">Overview:</p>
              <p className="text-gray-700">The oldest and most prestigious medical university in Georgia, established in 1918. Renowned for high academic standards and research.</p>
              <p className="mt-2 font-semibold text-teal-600">Key Points:</p>
              <p className="text-gray-700">NMC & WHO approved, extensive clinical base, diverse international student community.</p>
            </td>
          </tr>

          <tr className="odd:bg-gray-100 even:bg-white">
            <td className="px-6 py-4 font-semibold">Ivane Javakhishvili Tbilisi State University (TSU)</td>
            <td className="px-6 py-4">
              <p className="font-semibold text-teal-600">Overview:</p>
              <p className="text-gray-700">A leading classical university with a highly regarded medical faculty. Offers a European curriculum.</p>
              <p className="mt-2 font-semibold text-teal-600">Key Points:</p>
              <p className="text-gray-700">One of the oldest in the region, strong theoretical & practical training.</p>
            </td>
          </tr>

          <tr className="odd:bg-gray-100 even:bg-white">
            <td className="px-6 py-4 font-semibold">Batumi Shota Rustaveli State University (BSU)</td>
            <td className="px-6 py-4">
              <p className="font-semibold text-teal-600">Overview:</p>
              <p className="text-gray-700">Major educational hub in coastal Batumi, known for modern facilities.</p>
              <p className="mt-2 font-semibold text-teal-600">Key Points:</p>
              <p className="text-gray-700">Affordable fees, beautiful location, focus on clinical skills.</p>
            </td>
          </tr>

          <tr className="odd:bg-gray-100 even:bg-white">
            <td className="px-6 py-4 font-semibold">University of Georgia (UG)</td>
            <td className="px-6 py-4">
              <p className="font-semibold text-teal-600">Overview:</p>
              <p className="text-gray-700">Private university with modern infrastructure and American teaching methodology.</p>
              <p className="mt-2 font-semibold text-teal-600">Key Points:</p>
              <p className="text-gray-700">Modern campus, small groups, high USMLE pass rate.</p>
            </td>
          </tr>

          <tr className="odd:bg-gray-100 even:bg-white">
            <td className="px-6 py-4 font-semibold">Caucasus International University (CIU)</td>
            <td className="px-6 py-4">
              <p className="font-semibold text-teal-600">Overview:</p>
              <p className="text-gray-700">Rapidly growing private university with on-campus teaching hospital.</p>
              <p className="mt-2 font-semibold text-teal-600">Key Points:</p>
              <p className="text-gray-700">Practical training, integrated hospital, modern simulation labs.</p>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  );
};

export default Universitycard;
