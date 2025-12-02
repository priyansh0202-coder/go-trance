"use client";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { MdClose } from "react-icons/md";
import countryCodes from "../../app/data/countrydata";
import { useRouter, useSearchParams } from "next/navigation";

const FormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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

  const extractNamesFromFullName = (name) => {
    const nameParts = name.trim().split(/\s+/);

    if (nameParts?.length === 1) {
      return { name: nameParts[0], lastname: "" };
    } else {
      const name = nameParts[0];
      const lastname = nameParts.slice(1)?.join(" ") || null;
      return { name, lastname };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const { name, lastname } = extractNamesFromFullName(formData.name);

    try {
      const rawPayload = {
        firstname: name,
        lastname: lastname || null,
        email: formData.email,
        isdcode: formData.countryCode,
        phone: formData.mobile,
        field_city_1: formData.city,
        field_remarks: "Testing remarks",
        medium: window.location.pathname,
        source: window.location.href.replace(/^https?:\/\//, ""),
        campaign: "Russia",
        domain_url: window.location.href || "unknown",
        ...utmParams
      };
      // console.log("Raw Payload BEFORE filtering:", rawPayload);
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

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({
          name: "",
          // lastname: "",
          email: "",
          countryCode: "+91",
          mobile: "",
          city: "",
        });
      }, 1500);
      router.push("/thank-you");
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <MdClose size={24} />
            </button>

            <div className="p-6">
              {!success ? (
                <h2 className="text-2xl font-semibold mb-4">
                  Apply for MBBS in Russia
                </h2>
              ) : null}

              {success ? (
                <div className="text-green-600 text-2xl text-center py-8">
                  <div className="text-green-500 text-[50px] mb-4">
                    &#10004;
                  </div>
                  Form submitted successfully!
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" Name *"
                        className="w-full px-3 py-2 bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        required
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Last Name *"
                        className="w-full px-3 py-2 bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div> */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className="w-full px-3 py-2 bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile
                      </label>
                      <div className="flex">
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
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Mobile *"
                          className="w-full px-3 py-2 bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full px-3 py-2 bg-gray-100 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {error && (
                      <div className="text-red-600 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const LeadFormModalPopup = ({ isOpen, onClose }) => {
  return (
    <Suspense >
      <FormPopup isOpen={isOpen} onClose={onClose} />
    </Suspense>
  );
};

export default LeadFormModalPopup;
// export default LeadFormModalPopup;
