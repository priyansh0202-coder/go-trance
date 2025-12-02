"use client";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import countryCodes from "@/app/data/countrydata";
const MbbsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    city: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [utmParams, setUtmParams] = useState({
    field_ke_source: "",
    field_ke_medium: "",
    field_ke_campaign: "",
    field_utm_term: "",
    field_utm_content: "",
    // field_utm_term: "",
    // keywords: "",
  });

  useEffect(() => {
    setUtmParams({
      field_ke_source: searchParams.get("field_ke_source") || "",
      field_ke_medium: searchParams.get("field_ke_medium") || "",
      field_ke_campaign: searchParams.get("field_ke_campaign") || "",
      field_utm_term: searchParams.get("field_utm_term") || "",
      field_utm_content: searchParams.get("field_utm_content") || "",
    });
  }, [searchParams]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation check
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.city
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Split fullName into firstname and lastname
      const nameParts = formData.fullName.trim().split(" ");
      const firstname = nameParts[0] || "";
      const lastname =
        nameParts.length > 1 ? nameParts.slice(1).join(" ") : "NA";
      
      const rawPayload = {
        firstname: firstname,
        lastname: lastname,
        email: formData.email,
        isdcode: formData.phoneCode,
        phone: formData.phoneNumber,
        field_city_1: formData.city,
        field_remarks: formData.message || "No additional message",
        medium: window.location.pathname,
        source: window.location.href.replace(/^https?:\/\//, ""),
        campaign: "Russia",
        domain_url: window.location.href,
        ...utmParams
      };

      console.log("Raw Payload BEFORE filtering:", rawPayload);
      // console.log("domain_url value:", rawPayload.domain_url);

      const payload = Object.fromEntries(
        Object.entries(rawPayload).filter(
          ([_, value]) => value != null && value !== ""
        )
      );

      const response = await axios.post(
        "https://api.findcourse.ai/merrito/createMerritoLead",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "secret-key": "eac70228252c443aa3e4e76d8090b8fd",
            "access-key": "b264c4386fe040cc8e96aaa0ee7f033a",
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        phoneCode: "+91",
        phoneNumber: "",
        email: "",
        city: "",
        message: "",
      });
      router.push("/thank-you");

      setTimeout(() => {
        setIsSuccess(false);
      }, 1500);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hidden lg:flex flex-col gap-6 border border-gray-300 rounded-xl p-8 py-6 h-fit sticky top-32 shadow-xl bg-white">
      <h2 className="font-semibold text-xl text-[#1E90FF] text-center mb-1">
        Admission Process For 2025-26 Starting Soon
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name *"
          required
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#1E90FF] outline-none rounded-lg transition-all duration-300 ease-in-out"
        />

        <div className="flex gap-4 w-full">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="px- py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-l-md focus:outline-none w-16"
          >
            {countryCodes?.map((country) => (
              <option key={country.code} value={country.code}>
                ({country.dial_code}) {country.name}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phoneNumber"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number *"
            required
            className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#1E90FF] outline-none rounded-lg w-[80%] transition-all duration-300 ease-in-out"
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          required
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#1E90FF] outline-none rounded-lg transition-all duration-300 ease-in-out"
        />

        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City*"
          required
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#1E90FF] outline-none rounded-lg transition-all duration-300 ease-in-out"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Additional Message"
          rows="4"
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#1E90FF] outline-none rounded-lg transition-all duration-300 ease-in-out"
        ></textarea>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer w-full rounded-md bg-[#1E90FF] font-semibold text-white py-3 mt-3 hover:bg-[#1E90FF] transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

interface FormProps {
  isOpen?: any;
  onClose?: any;
}
const Form = ({ isOpen, onClose }: FormProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MbbsForm isOpen={isOpen} onClose={onClose}  />
    </Suspense>
  );
};
// export default Form;

export default Form;