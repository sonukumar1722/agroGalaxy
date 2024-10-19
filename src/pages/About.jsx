import React from "react";
import {
  certificate1_img,
  highlight_img,
  leaf1_icon,
  leaf2_icon,
  leaf3_icon,
  leaf_png,
  main_about,
  mgmt_person1_img,
  savesoil_icon,
  service1_img,
  service2_img,
  vector1_icon,
  vector2_icon,
  vector3_icon,
  vector4_icon,
  vector5_icon,
} from "../assets";
import MiniHero from "../components/MiniHero";
import MgmtCard from "../components/MgmtCard";
import AboutCard from "../components/AboutCard";
import GetInTouch from "../components/GetInTouch";

const ObjectiveCard = ({ iconUrl, title, description }) => {
  return (
    <div>
      <div className={`lg:w-[400px] h-[225px] p-3 flex justify-between`}>
        <div className="sm:w-[78px] sm:h-[80px] w-12 h-12 bg-[#A6CE39] flex justify-center items-center rounded-lg">
          <img className="object-cover p-2 sm:p-0" src={iconUrl} alt="Agri-Icon-1" width={50} height={50} />
        </div>

        <div className="w-5/6 ml-4 md:w-[267px]">
          <h2 className="text-[#0D3C00] text-2xl font-bold mb-4">{title}</h2>
          <p className="text-[#444444] text-base text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const aboutProps = {
    imgSrc: main_about,
    title: "About Us",
    links: [
      { href: "#", text: "Home" },
      { href: "#", text: "About Us" },
    ],
  };

  const objectiveCardsData = [
    {
      title: "Revolutionizing Agricultural Support",
      description:
        "Develop a state-of-the art fertilizer blending facility in Ghana to serve the landlocked countries of Burkina Faso, Mali, and Niger.",
      iconUrl: vector1_icon,
    },
    {
      title: "Supplying Quality Fertilizers to Farmers",
      description:
        "Provide high quality fertilizer at the right time and right price to smallholder and commercial farmers in Ghana, Burkina Faso, Mali, and Niger",
      iconUrl: vector2_icon,
    },
    {
      title: "Enhancing Agriculture",
      description:
        "Improve agriculture productivity, incomes and employment opportunities in the aforementioned countries.",
      iconUrl: vector3_icon,
    },
    {
      title: "Building Efficient Agriculture Links",
      description:
        "Establish efficient agriculture industry linkages in the aforementioned countries.",
      iconUrl: vector4_icon,
    },
    {
      title: "Creating Farms",
      description:
        "Establish commercial farms to supply produce to meet gaps in Ghana’s local yield as well as for export.",
      iconUrl: vector5_icon,
    },
  ];

  const mgmtCardsData = [
    { name: "Michael Zormelo", position: "Group Chief Executive Officer" },
    { name: "PAMELA ZORMELO (MRS.)", position: "Group Managing Director" },
    {
      name: "DOREEN ANKUMAH (MRS.)",
      position: "Group HR & Administrative Manager",
    },
    { name: "SAMUEL TWUMASI ANKRAH", position: "Production Manager" },
    { name: "PAUL PYPERS YAW DONKOR", position: "Deputy Manager - HSE" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div>
        <MiniHero
          imgSrc={main_about}
          title="About Us"
          links={[
            { href: "#", text: "Home" },
            { href: "#", text: "About Us" },
          ]}
        />
      </div>

      {/* Who we server */}
      <section className="my-20 m-5 md:mx-28">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col w-full md:w-[426px] space-y-6">
              <h4 className="text-[#009444] font-semibold border-l-4 pl-5 border-[#A6CE39]">
                What we Do
              </h4>
              <h1 className="text-[#0D3C00] text-4xl font-bold">Who We Are</h1>
            </div>
            <p className="w-full mt-4 md:mt-0 md:w-[784px] text-[#444444] text-base text-justify">
              OmniFert, sprung out of Omni Energy Ltd, which has been a leading
              provider of Engineering and Value Added Oilfield Support Services
              in the Oil and Gas industry for over 10 years. At OmniFert, we
              transform chemicals for a sustainable future. We combine economic
              success with environmental protection and social responsibility.
              Our locally based state-of-the art fertilizer-blending facility is
              unique in the industry and is a result of the premium we place on
              improving the crop production of Africa.
              <br />
              OmniFert’s approach is not only about providing affordable and
              quality fertilizers to farmers, but focused on providing the right
              specifications of fertilizer according to the soil and crop types.
              By doing this, our company demonstrates its commitment to
              improving agricultural productivity, incomes and employment
              opportunities in Ghana as well as other West African countries.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:space-x-8">
            <AboutCard
              title={"Vision"}
              description={
                "Become the dominant indigenous manufacturer and distributor of eco-friendly fertilizers and agro inputs in Africa."
              }
              imageUrl={service1_img}
              iconUrl={savesoil_icon}
            />

            <AboutCard
              title={"Mission"}
              description={"Replenishing the earth and ensuring food security."}
              imageUrl={service2_img}
              iconUrl={savesoil_icon}
            />
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="p-4 py-12 md:p-28 bg-[#F4F5F0]">
        <div>
          <div className="text-center mb-12">
            <h4 className="text-[#009444] font-semibold border-l-4 pl-5">
              What We Do
            </h4>
            <h1 className="text-[#0D3C00] text-4xl font-bold mt-4">
              Our Objectives
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-start space-y-4">
          {objectiveCardsData.map((cardData, index) => (
            <ObjectiveCard
              key={index}
              title={cardData.title}
              description={cardData.description}
              iconUrl={cardData.iconUrl}
            />
          ))}
        </div>
      </section>

      {/* Our Management */}
      <section className="p-28">
        <div className="text-center mb-4">
          <h4 className="text-[#009444] font-semibold pl-5">Meet Out Team</h4>
          <h1 className="text-[#0D3C00] text-4xl font-bold mt-4">
            Our Management
          </h1>
        </div>

        <div className="flex flex-wrap-reverse justify-center items-center">
          {mgmtCardsData.map((card, index) => (
            <MgmtCard
              key={index}
              name={card.name}
              position={card.position}
              imageUrl={mgmt_person1_img}
            />
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="lg:px-28 p-4 py-16 bg-[#0D3C00] relative">
        <img
          className="absolute right-3 -top-[260px] hidden md:flex -z-10"
          src={leaf1_icon}
          alt="Leaf Icon"
        />
        <img
          className="absolute left-5 top-0"
          src={leaf2_icon}
          alt="Leaf Icon"
        />
        <div>
          <div className="text-center mb-4">
            <h4 className="text-[#6A961F] font-semibold pl-5">
              Our Certificates
            </h4>
            <h1 className="text-white text-4xl font-bold mt-4">
              Our ISO Certificates
            </h1>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-around mt-10">
            <img src={certificate1_img} alt="Certificate" />
            <img src={certificate1_img} alt="Certificate" />
            <img src={certificate1_img} alt="Certificate" />
          </div>
        </div>
        <img
          className="absolute right-20 bottom-0"
          src={leaf3_icon}
          alt="Leaf Icon"
        />
      </section>

      {/* Get in touch Section */}
      <GetInTouch />
    </>
  );
};

export default About;
