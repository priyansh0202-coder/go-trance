import Link from "next/link";
import React from "react";

const SemesterSyllabus = () => {
  const syllabusData = [
    {
      year: "1st Year",
      semesters: [
        {
          name: "Semester 1",
          subjects: [
            "Biology",
            "Anatomy",
            "Latin",
            "Physical Education",
            "Nursing",
          ],
        },
        {
          name: "Semester 2",
          subjects: [
            "Biology",
            "Latin",
            "Nursing",
            "Histology",
            "Anatomy",
          ],
        },
      ],
    },
    {
      year: "2nd Year",
      semesters: [
        {
          name: "Semester 3",
          subjects: [
            "Russian Language",
            "Biology",
            "Anatomy",
            "Biochemistry",
            "Physiology",
          ],
        },
        {
          name: "Semester 4",
          subjects: [
            "Physiology",
            "Microbiology",
            "Immunology",
            "Biochemistry",
          ],
        },
      ],
    },
    {
      year: "3rd Year",
      semesters: [
        {
          name: "Semester 5",
          subjects: [
            "Microbiology",
            "Immunology",
            "Radiology",
            "Surgery",
            "Pharmacology",
            "Internal Medicine",
          ],
        },
        {
          name: "Semester 6",
          subjects: [
            "Surgery",
            "Pharmacology",
            "Ophthalmology",
            "Pediatrics",
            "Psychiatry",
          ],
        },
      ],
    },
    {
      year: "4th Year",
      semesters: [
        {
          name: "Semester 7",
          subjects: [
            "Topo Anatomy",
            "Hygiene",
            "Oncology",
            "Gynecology",
            "Neurology",
          ],
        },
        {
          name: "Semester 8",
          subjects: [
            "Gynecology",
            "Neurology",
            "Ophthalmology",
            "Pediatrics",
            "Psychiatry",
          ],
        },
      ],
    },
    {
      year: "5th Year",
      semesters: [
        {
          name: "Semester 9",
          subjects: [
            "Therapy",
            "Pediatrics",
            "Psychiatry",
            "Ophthalmology",
            "Hospital Surgery",
            "Clinical Anatomy",
            "Dermatology",
          ],
        },
        {
          name: "Semester 10",
          subjects: [
            "Hospital Surgery",
            "Dermatology",
            "Therapy",
            "Obstetrics",
          ],
        },
      ],
    },
    {
      year: "6th Year",
      semesters: [
        {
          name: "Semester 11",
          subjects: [
            "Obstetrics",
            "Gynecology",
            "Therapy",
            "Lab Diagnostics",
            "Surgery",
            "Emergency Medicine",
          ],
        },
        {
          name: "Semester 12",
          subjects: [
            "Gynecology",
          ],
        },
      ],
    },
  ];
  const formatSubjects = (subjects) => {
    return subjects ? subjects : "N/A";
  };

  return (


    <div className="w-full overflow-x-auto mt-6">
      <h2 className="text-[22px] lg:text-[28px] font-bold text-[#1E90FF]">
        MBBS Syllabus in Russia (Year-wise)
      </h2>
      <p className="text-[14px] sm:text-[16px] font-semibold mt-2">
        The detailed syllabus for the MBBS program in Russia typically follows a
        structured curriculum across six years. The syllabus aims to combine
        theoretical and practical knowledge. The year-wise MBBS syllabus is
        outlined below:
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-left bg-white text-sm sm:text-base text-black">
          <tbody>
            {syllabusData.map((yearData, index) => (
              <React.Fragment key={index}>
                {/* Year full row */}
                <tr className="text-black font-semibold ">
                  <td colSpan={2} className="py-4">
                    {yearData.year}
                  </td>
                </tr>

                {/* Semester Row */}
                <tr className="bg-white">
                  {yearData.semesters.map((semester, i) => (
                    <td
                      key={i}
                      className="align-top border border-black w-1/2 "
                    >
                      <h4 className="font-semibold text-center border-b border-black p-2 bg-[#D6EAFF] text-black mb-2">
                        {semester.name}
                      </h4>
                      <ul className="list-disc list-inside p-3 space-y-1 leading-relaxed ">
                        {semester.subjects.map((subject, subIdx) => (
                          <li key={subIdx}>{subject}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                  {/* Fill empty column if only one semester */}
                  {yearData.semesters.length === 1 && (
                    <td className="border border-gray-300" />
                  )}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p className="text-teal-600 px-1 text-sm sm:text-base rounded-md font-bold ">
          <span id="Eligibility" className=" text-black  font-bold">
            Read More:
          </span>{" "}
          <Link
            href="/blog/mbbs-in-russia-syllabus"
            className="cursor-pointer hover:underline"
          >
            Indetailed MBBS Syllabus In Russia                       </Link>
        </p>
      </div>
    </div>

  );
};

export default SemesterSyllabus;
