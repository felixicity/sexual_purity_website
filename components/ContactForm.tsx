import Image from "next/image";
import { BiMailSend, BiSend } from "react-icons/bi";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="flex mt-8 gap-16">
        <div className="w-full hidden lg:flex relative">
          <Image
            src="/james-lee-YpDkIh137ws-unsplash.jpg"
            width={500}
            height={500}
            alt="backer"
            className="w-full"
          ></Image>
          <div className="absolute top-[40%]  text-white ml-8">
            <p className="text-4xl font-bold mb-8">Sexual Purity</p>
            <p className="text-xl">
              {" "}
              We'll love to hear from you. Let's start a conversation{" "}
            </p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-center font-bold text-2xl">Contact Us</p>

          <form className="mt-10 w-full max-w-2xl flex flex-col gap-7">
            <div className="form-field">
              <label
                htmlFor="name"
                className="font-semibold text-base text-gray-700"
              >
                Name:
              </label>
              <input type="text" id="name" className="form_input" required />
            </div>
            <div className="form-field">
              <label
                htmlFor="email"
                className="font-semibold text-base text-gray-700"
              >
                Email:
              </label>
              <input type="email" id="email" className="form_input" required />
            </div>
            <div className="form-field">
              <label
                htmlFor="message"
                className="font-semibold text-base text-gray-700"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="form_textarea"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center bg-lipstick w-[7rem] text-white gap-3 text-xl font-bold rounded-2xl py-1 px-4"
            >
              Send{" "}
              <span>
                <BiSend className="transform -rotate-[35deg]" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
