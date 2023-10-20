"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    info: "",
    moreInfo: "",
    isWatchman: "",
    isAgreement: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    name,
    email,
    phone,
    gender,
    age,
    info,
    moreInfo,
    isWatchman,
    isAgreement,
  } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      age: "",
      info: "",
      moreInfo: "",
      isWatchman: "",
      isAgreement: true,
    });

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success("Registration Successful!", {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-sm flex flex-col gap-7 mx-auto"
      >
        <ToastContainer />
        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="full name"
            id="name"
            name="name"
            className="form_input"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            className="form_input"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="phone"
          >
            Phone{" "}
          </label>
          <input
            type="tel"
            placeholder="Phone"
            id="phone"
            name="phone"
            className="form_input"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div className="form-data">
          <label className="font-semibold text-base text-gray-700" htmlFor="">
            Gender
          </label>
          <select
            onChange={handleChange}
            name="gender"
            id="gender"
            className="block w-full border border-black rounded-md mt-2 py-2 px-4"
            value={formData.gender}
          >
            <option>-- select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="age"
          >
            Age Range
          </label>
          <select
            onChange={handleChange}
            name="age"
            id="age"
            className="block w-full border border-black rounded-md mt-2 py-2 px-4"
            value={formData.age}
          >
            <option>-- select --</option>
            <option value="teenager"> 14 - 17 </option>
            <option value="adult">18 & above</option>
          </select>
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="isWatchman"
          >
            Are you a Watchman
          </label>
          <div id="isWatchman">
            <input
              type="radio"
              value="yes"
              name="isWatchman"
              onChange={handleChange}
            />
            <span className="mx-2">Yes</span>
            <input
              type="radio"
              value="no"
              name="isWatchman"
              className="ml-2"
              onChange={handleChange}
            />
            <span className="mx-2">No</span>
          </div>
        </div>
        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="info"
          >
            How did you get to know about sexual purtiy 4.0
          </label>
          <select
            name="info"
            id="info"
            onChange={handleChange}
            value={formData.info}
            className="block w-full border border-black rounded-md mt-2 py-2 px-4"
          >
            <option>-- select -- </option>
            <option value="facebook">Facebook</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="friends">Friends</option>
            <option value="other">Other</option>
          </select>
          {formData.info == "other" && (
            <input
              type="text"
              name="moreInfo"
              onChange={handleChange}
              value={formData.moreInfo}
              placeholder="please do tell"
              className="block w-full border border-black rounded-md mt-2 py-2 px-4"
            />
          )}
        </div>

        <div className="form-data">
          <input
            type="checkbox"
            name="isAgreement"
            id="isAgreement"
            className="accent-lipstick mr-2"
            onChange={handleChange}
            checked={formData.isAgreement}
          />
          <span>checking means you'd love to recieve newsletters from us</span>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className={
            isSubmitting
              ? "bg-lipstick text-white py-2 px-auto font-bold rounded-xl hover:cursor-wait"
              : "bg-gray-400 text-white py-2 px-auto font-bold rounded-xl hover:cursor-not-allowed"
          }
        >
          {isSubmitting ? "Submitting ..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default Form;
