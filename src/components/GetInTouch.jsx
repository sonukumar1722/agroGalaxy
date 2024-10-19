import React from 'react'
import { highlight_img, leaf_png } from '../assets'

const GetInTouch = () => {
    return (
        <>
            {/* Get in touch */}
            <div className="relative -mb-1 text-white hidden md:block">
                <img className="w-full h-[313px] object-cover" src={highlight_img} alt="highlight-img" />
                <div className='absolute inset-x-0 top-[18%] flex justify-center items-start pt-10 mx-5'>
                    <div className='w-[213px] h-[128px] flex justify-center items-center'>
                        <img src={leaf_png} width={128} height={128} alt="leaf-png" />
                    </div>
                    <div className='w-[672px] h-[128px] flex flex-col justify-center'>
                        <h1 className='text-4xl font-poppins font-bold'>Get in touch</h1>
                        <p>Let's transform lives and drive the growth of a robust agro-industrial sector in Ghana together!</p>
                    </div>
                    <div className='w-[345px] h-[128px] flex justify-end items-center'>
                        <button className='uppercase font-semibold p-5 px-10 rounded-lg bg-[#009444]'>Get Started</button>
                    </div>
                </div>
            </div>

            <div className="relative text-white block md:hidden -mb-1">
                <img className="w-full h-[425px] object-cover" src={highlight_img} alt="highlight-img" />
                <div className='absolute inset-0 flex flex-col justify-center items-center text-center mx-5 sm:mx-10'>
                    <img src={leaf_png} width={128} height={128} alt="leaf-png" />
                    <h1 className='text-4xl font-poppins font-bold mt-4'>Get in touch</h1>
                    <p className='mt-2'>Let's transform lives and drive the growth of a robust agro-industrial sector in Ghana together!</p>
                    <button className='uppercase font-semibold p-3 px-6 rounded-lg bg-[#009444] mt-4'>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default GetInTouch