import React from "react";
import { blog1, blog2, blog3 } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaLinks = [
    {
      href: "#",
      src: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
      alt: "Facebook-icon",
    },
    {
      href: "#",
      src: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000",
      alt: "LinkedIn-icon",
    },
  ];

  const navbarLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Media",
      url: "/media",
    },
    {
      title: "News & Articles",
      url: "/news-and-articles",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  const blogPosts = [
    {
      imageSrc: blog1,
      title: "Press Statement Omnifert",
      date: "September 23, 2023",
    },
    {
      imageSrc: blog2,
      title: "Omnifert Press Release Farmers Day 2017",
      date: "October 1, 2023",
    },
    {
      imageSrc: blog3,
      title: "Agriculture And Government",
      date: "September 23, 2023",
    },
  ];

  return (
    <>
      <footer className="bg-[#23471A] text-white">
        <div className="mx-auto w-full max-w-screen-xl p-8 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="w-[300px] h-[378px] flex flex-col">
              <div>
                <Link to={"#"} className="flex items-center mb-6">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Shivam Patel
                  </span>
                </Link>

                <p>
                  OmniFert is a wholly owned indigenous Ghanaian company focusing
                  on improving the crop production of Africa
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl my-6 font-semibold">Follow Us</h2>
                <div className="flex gap-4">
                  {socialMediaLinks.map((link, index) => (
                    <Link key={index} to={link.href}>
                      <img src={link.src} alt={link.alt} width={48} height={48} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h1 className="text-2xl font-bold font-poppins mb-2">Quick Links</h1>

                <div className="">
                  <ul className="flex flex-col font-normal">
                    {navbarLinks.map((link, index) => (
                      <li key={index} className="my-1 font-normal">
                        <Link to={link.url} className="">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-poppins mb-2">Latest Post</h2>
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className="w-[300px] h-[100px] flex items-center rounded-sm mb-4"
                  >
                    <img
                      className="object-cover w-[80px] h-[80px] rounded-sm"
                      src={post.imageSrc}
                      alt="blog"
                    />
                    <div className="ml-4 flex flex-col justify-center">
                      <p className="font-medium text-lg text-white">{post.title}</p>
                      <p className="text-white/70 font-normal uppercase">
                        📅 {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-2xl font-bold font-poppins mb-4">Newsletter</h1>

                <div className="my-8">
                  <input
                    className=" h-16 w-72 rounded-md border-none outline-none text-black p-6 text-lg font-medium"
                    required
                    type="email"
                    placeholder="Enter Email Here ...."
                  />
                </div>

                <button className="border p-3 px-10 text-sm rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-[#009444] border-[#009444] font-bold uppercase">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 border-[#FFF]/10  border-t">
            <p className="mt-8 font-normal">
              Copyright ©2023 OmniFert. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
