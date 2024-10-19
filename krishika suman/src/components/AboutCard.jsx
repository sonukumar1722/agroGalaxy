import React from 'react'

const AboutCard = ({ title, description, imageUrl, iconUrl }) => {
    return (
        <>
            <div className="w-[394px] h-[499px] m-2 p-4 sm:p-0 relative">
                <div>
                    <img className="w-[355px] h-[250px]" src={imageUrl} alt="service-img" />
                </div>

                <div className="w-[344px] h-[249px] flex flex-col items-center text-center bg-[#F4F5F0] right-5 sm:right-0 absolute bottom-10 rounded-sm">
                    <div className='rounded-full bg-white w-[85px] h-[85px] z-10 absolute -top-[42px]'>
                        <img className="p-6" src={iconUrl} alt="savesoil-icon" />
                    </div>
                    <h2 className="text-[#0D3C00] text-2xl font-bold mt-16">{title}</h2>
                    <p className="text-[#444444] mt-2 px-6">{description}</p>
                </div>
            </div>
        </>
    )
}

export default AboutCard