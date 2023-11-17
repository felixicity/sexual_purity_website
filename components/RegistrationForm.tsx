"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TregisterForm } from "@/utils/types";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const router = useRouter();
  const [showOther, setShowOther] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setError,
  } = useForm<TregisterForm>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: TregisterForm) => {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    // if (!response.ok) {
    //   toast.error("Submission Failed, Try Again!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });

    //   return;
    // }

    // if (responseData.errors) {
    //   const errors = responseData.errors;
    //   if (errors.fullname) {
    //     setError("fullname", {
    //       type: "server",
    //       message: errors.fullname,
    //     });
    //   } else if (errors.email) {
    //     setError("email", {
    //       type: "server",
    //       message: errors.email,
    //     });
    //   } else if (errors.phone) {
    //     setError("phone", {
    //       type: "server",
    //       message: errors.phone,
    //     });
    //   } else {

    if (responseData.errors) {
      toast.error(responseData.errors.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        reset();
      }, 2000);
    }

    if (responseData.success) {
      toast.success("Registration Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTimeout(() => {
        reset();
      }, 2000);

      router.push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("fullname")}
            type="text"
            placeholder="full name"
            id="name"
            className="form_input"
          />
          {errors.fullname && (
            <p className="text-red-500">{`${errors.fullname.message}`}</p>
          )}
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="email"
            id="email"
            className="form_input"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone"
            id="phone"
            className="form_input"
          />
          {errors.phone && (
            <p className="text-red-500">{`${errors.phone.message}`}</p>
          )}
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            {...register("gender")}
            name="gender"
            id="gender"
            className="block w-full border border-black rounded-md mt-2 py-2 px-4"
          >
            <option>-- select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500">{`${errors.gender.message}`}</p>
          )}
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="age"
          >
            Age Range
          </label>
          <select
            {...register("age")}
            name="age"
            id="age"
            className="block w-full border border-black rounded-md mt-2 py-2 px-4"
          >
            <option>-- select --</option>
            <option value="teenager"> 14 - 17 </option>
            <option value="adult">18 & above</option>
          </select>
          {errors.age && (
            <p className="text-red-500">{`${errors.age.message}`}</p>
          )}
        </div>

        <div className="form-data">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="isWatchman"
          >
            Are you a Watchman
          </label>
          <div id="isWatchman">
            <input {...register("isWatchman")} type="radio" value="yes" />
            <span className="mx-2">Yes</span>
            <input
              {...register("isWatchman")}
              type="radio"
              value="no"
              className="ml-2"
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
            id="info"
            {...register("info")}
            className="block w-full border border-black rounded-md mt-2 py-2 px-4"
          >
            <option>-- select -- </option>
            <option value="facebook">Facebook</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="friends">Friends</option>
            <option value="other">Email</option>
          </select>
          {/* <input
            type="text"
            {...register("moreInfo")}
            placeholder="please do tell"
            className="block w-full border border-black rounded-md mt-2 py-2 px-4"
          />*/}
        </div>

        <div className="form-data">
          <input
            type="checkbox"
            id="isAgreement"
            className="accent-lipstick mr-2"
            {...register("isAgreement")}
          />

          <span>checking means you'd love to recieve newsletters from us</span>
        </div>
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-lipstick text-white py-2 px-auto font-bold rounded-xl disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting ..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
