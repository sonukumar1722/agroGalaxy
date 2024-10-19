import React, { useState } from "react";
import {
  title,
  symbool,
  Rectangle2,
  Rectangle1,
  Rectangle3,
} from "../assets";

const ContactUs = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setActiveBox(index);
  };

  const handleMouseLeave = () => {
    setActiveBox(null);
  };

  return (
    <div>
      {/* Title image with text "Contact Us" */}
      <div className="relative">
        <img className="w-full h-auto lg:w-screen" src={title} alt="Hero" />
        <div className="absolute top-10 left-0 right-0 text-center text-white font-bold text-2xl md:text-4xl mt-8 md:mt-16">
          Contact Us
        </div>
      </div>

      {/* Container for both the row of boxes and the image */}
      <div>
        {/* Centered row of boxes */}
        <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-20 gap-5 px-5">
          {[1, 2, 3].map((boxIndex) => (
            <div
              key={boxIndex}
              className={`w-full md:w-1/4 p-5 ${activeBox === boxIndex ? "bg-[#43d275]" : "bg-[#F0F4E8]"
                }`}
              onClick={() => handleClick(boxIndex)}
              onMouseEnter={() => handleMouseEnter(boxIndex)}
              onMouseLeave={handleMouseLeave}
              style={{
                transition: "background-color 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                className="relative flex flex-col items-center justify-center"
                style={{ height: "362px", margin: "0 5px" }}
              >
                <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg shadow-red-500">
                  {boxIndex === 1 && (
                    <img src={symbool} alt="Symbol" className="w-12 h-12" />
                  )}
                  {boxIndex === 2 && (
                    <img src={Rectangle2} alt="Symbol" className="w-12 h-12" />
                  )}
                  {boxIndex === 3 && (
                    <img src={Rectangle1} alt="Symbol" className="w-12 h-12" />
                  )}
                </div>
                <p className="font-bold text-lg md:text-xl mt-4 text-[#0D3C00]">
                  {["Email Address", "Phone Number", "Address"][boxIndex - 1]}
                </p>
                <p
                  className="absolute text-[#474747]"
                  style={{
                    height: "300px",
                    width: "227px",
                    top: "261px",
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                >
                  {boxIndex === 1
                    ? "sumanqaj9876@gmail.com"
                    : boxIndex === 2
                      ? "6299974421"
                      : "Bhopal, Sage Suncity Phase-1"}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Image section */}
        <section className="container bg-[#F4F5F0] flex flex-col md:flex-row-reverse justify-center my-28 gap-10 md:gap-20 px-5">
          <div className="flex flex-col justify-center w-full md:w-[530px] text-justify space-y-6">
            <h4 className="text-[#009444] font-semibold border-l-4 pl-5 border-[#A6CE39]">
              Get in Touch
            </h4>
            <h1 className="text-[#0D3C00] text-2xl md:text-4xl font-bold">
              Send Us a Message
            </h1>
            <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0">
              <input
                type="text"
                placeholder="Full Name Here"
                className="pl-8 py-3 w-full sm:w-[900px] mr-10"
              />
              <input
                type="text"
                placeholder="Enter Your Mail"
                className="pl-8 py-3 w-full sm:w-[900px]"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0">
              <input
                type="text"
                placeholder="Subject"
                className="pl-10 py-3 w-full sm:w-[900px]"
              />
            </div>
            <textarea
              placeholder="Write your message here..."
              className="pl-10 py-8 h-40 w-full"
            ></textarea>
            <div className="mt-10">
              <button className="border p-7 px-20 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-[#009444] border-[#009444] font-semibold text-white">
                SEND MESSAGE
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <img
              className="h-[400px] md:h-[839.59px] w-full md:w-[518.39px]"
              src={Rectangle3}
              alt="Agri-video-1"
            />
          </div>
        </section>
      </div>
      <address className="font-bold text-center text-lg md:text-2xl mb-5">
        Madhya Pradesh Bhopal <br />
        Sage Suncity Phase-1
      </address>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.711922385013!2d77.5171148!3d23.180712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4180fcc32be1%3A0x7c7cfa166a2aedd5!2sSAGE%20SUNCITY%20Phase%20-%20I!5e0!3m2!1sen!2sin!4v1717231570556!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
