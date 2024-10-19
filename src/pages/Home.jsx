import React from 'react';
import { about10, blog1, blog2, blog3, hero_img, highlight_img, leaf1, leaf_png, video_img } from '../assets';
import GetInTouch from '../components/GetInTouch';

const Home = () => {

    const products = [
        { imgSrc: hero_img, title: 'Suman Kumar', price: '50', rating: '☆ ☆ ☆ ☆ ☆' },
        { imgSrc: video_img, title: 'Another Product', price: '60', rating: '☆ ☆ ☆ ☆ ☆' },
        { imgSrc: hero_img, title: 'Third Product', price: '70', rating: '☆ ☆ ☆ ☆ ☆' },
        { imgSrc: video_img, title: 'Fourth Product', price: '80', rating: '☆ ☆ ☆ ☆ ☆' },
        { imgSrc: hero_img, title: 'Suman Kumar', price: '50', rating: '☆ ☆ ☆ ☆ ☆' },
        { imgSrc: video_img, title: 'Another Product', price: '60', rating: '☆ ☆ ☆ ☆ ☆' },
        { imgSrc: hero_img, title: 'Third Product', price: '70', rating: '☆ ☆ ☆ ☆ ☆' },
        { imgSrc: video_img, title: 'Fourth Product', price: '80', rating: '☆ ☆ ☆ ☆ ☆' },
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const year = currentDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    const blogPosts = [
        {
            id: 1,
            title: "Connecting with farmers to improve livelihoods",
            date: "23 Sep 2023",
            comments: 0,
            imageUrl: blog1,
        },
        {
            id: 2,
            title: "The Changing Effects of the Environment on Agriculture",
            date: "23 Sep 2023",
            comments: 0,
            imageUrl: blog2,
        },
        {
            id: 3,
            title: "Agriculture, Trade & Regulatory Standards in Ghana",
            date: "23 Sep 2023",
            comments: 0,
            imageUrl: blog3,
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className='relative mx-auto'>
                <div>
                    <img className='w-full md:h-screen object-cover' src={hero_img} alt="Hero" />
                </div>

                {/* Mobile View */}
                <div className='absolute top-[25%] sm:top-[40%] left-0 w-4/6 sm:w-1/2 lg:hidden text-white ml-5'>
                    <p className='font-bold text-4xl leading-none'>Fertilizers for the future</p>
                    <p className='tracking-wide font-extralight text-md text-white/70'>Soils Testing o Crop Cultivation o Agricultural Progress</p>
                </div>

                {/* Desktop View */}
                <div className='absolute top-[20%] left-0 w-1/2 ml-28 text-white font-poppins hidden lg:block'>
                    <p className='font-bold text-[100px] leading-none'>Fertilizers for the future</p>
                    <p className='tracking-wide font-extralight text-2xl text-white/70'>Soils Testing o Crop Cultivation o Agricultural Progress</p>
                    <div className='mt-10 space-x-8'>
                        <button className='border p-5 px-10 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-[#009444] border-[#009444]'>Explore Garden 🡺</button>
                        <button className='border p-5 px-10 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-[#009444] border-[#009444]'>Learn More 🡺</button>
                    </div>
                </div>
            </div>

            {/* About Shivam ( Title ) */}
            <section className='container flex justify-center items-center mb-16 md:my-20 gap-20 mx-auto'>
                <div className="flex flex-col md:flex-row items-center p-8">
                    <div className='flex flex-col w-full mb-5 md:mb-0 md:w-[530px] text-justify justify-center space-y-6'>
                        <h4 className="text-[#009444] font-semibold border-l-4 pl-5 border-[#A6CE39]">About Shivam Patel</h4>
                        <h1 className="text-[#0D3C00] text-4xl font-bold">Improve the crop production of India</h1>
                        <p className="border-l-4 pl-5 border-[#A6CE39]">OmniFert is a wholly owned indigenous Ghanaian company focusing on improving the crop production of Africa by providing affordable fertilizers to farmers, establishing commercial sized farms to produce crops such as cassava, millet, sorghum, maize, soya, etc. to bridge the gaps in the local supply as well as conduct soil tests on farms so as to accurately determine the fertilizer needs specific to each farm.</p>
                        <button className='border w-1/2 md:w-1/3 p-3 md:p-5 px-10  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-[#009444] border-[#009444] font-semibold text-white'>Learn More </button>
                    </div>
                    <div className=''>
                        <img className="w-full h-full object-cover" src={about10} alt="Agri-img-1" />
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className='bg-[#F4F5F0] mx-auto'>
                <div className='container bg-[#F4F5F0] flex flex-col lg:flex-row-reverse justify-center my-28 gap-20 p-8 mx-auto'>
                <div className='flex flex-col justify-center w-full md:w-[530px] md:text-justify space-y-6'>
                    <h4 className="text-[#009444] font-semibold border-l-4 pl-5 border-[#A6CE39]">What we Do</h4>
                    <h1 className="text-[#0D3C00] text-4xl font-bold">We Are Different From Other To Provide Services</h1>
                    <p className="border-l-4 pl-5 text-justify border-[#A6CE39]">We transform chemicals for a sustainable future by combining economic success with environmental protection and social responsibility. We focus on improving crop production by providing affordable and quality fertilizers to farmers, focusing on providing the right specifications of fertilizer according to the soil and crop types. Our state-of-the-art fertilizer-blending facility is unique within the industry. Committed to improving agricultural productivity, incomes, and employment opportunities in Ghana as well as other West African countries. </p>
                </div>
                <div>
                    <img className="w-full h-full object-cover" src={video_img} alt="Agri-video-1" />
                </div>
                </div>
            </section>

            {/* Popular Choices and Products */}
            <section className="container my-28 mx-auto">
                <div>
                    <div className="text-center mb-12">
                        <h4 className="text-[#009444] font-semibold pl-5">Popular Choices</h4>
                        <h1 className="text-[#0D3C00] text-4xl font-bold mt-4">Popular Products</h1>
                    </div>

                    <div className="flex justify-center gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {products.map((product, index) => (
                                <div key={index} className="w-[300px] md:w-[270px]">
                                    <div className="text-[#009444] text-center object-contain border rounded-2xl overflow-hidden">
                                        <img className="w-full h-[260px] object-cover" src={product.imgSrc} alt={`Product-${index}`} />
                                        <div className="py-5 space-y-2">
                                            <h4 className="text-[#0D3C00] font-bold">{product.title}</h4>
                                            <h4>₹ {product.price}</h4>
                                            <p className='font-bold'>{product.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Centered Button Below Products */}
                    <div className="flex justify-center items-center mt-10">
                        <button className='border p-5 px-10 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-[#009444] border-[#009444] font-semibold text-white'>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Latest News & Blog */}
            <section className="py-28 bg-[#F4F5F0] mx-auto">
                <div className="text-center mb-12">
                    <h4 className="text-[#009444] font-semibold border-l-4 md:pl-5">Latest News & Blog</h4>
                    <h1 className="text-[#0D3C00] text-4xl font-bold mt-4">Popular Articles and Tips</h1>
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 px-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="w-full sm:w-[370px]">
                            <img src={post.imageUrl} alt={`blog-img-${post.id}`} />
                            <div className="space-y-3 mt-6">
                                <h4 className="text-[#009444] font-semibold border-l-4 pl-5 border-[#009444]">Articles</h4>
                                <h2 className="text-[#0D3C00] text-2xl font-semibold">{post.title}</h2>
                                <div className="flex gap-10">
                                    <p>📅 {post.date}</p>
                                    <p>📩 {post.comments} Comments</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Get in touch */}
            <GetInTouch />
        </>
    );
};

export default Home;
