import React from 'react';
import { Link } from 'react-router-dom';

// Enhanced About component with props
const MiniHero = ({ imgSrc, title, links }) => {
    return (
        <>
            <div className="relative">
                <img
                    className="w-full md:h-[442px] h-48 object-cover"
                    src={imgSrc}
                    alt="about-hero-img"
                    style={{
                        filter: "brightness(100%) sepia(0%) saturate(#051401)",
                    }}
                />
                {/* Overlay div for filter effect */}
                <div className="absolute inset-0 bg-[#051401] mix-blend-multiply opacity-65"></div>
                {/* Content centered on the image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center mb-12 text-white">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">{title}</h1>
                    <div className="space-x-4 font-semibold text-sm md:text-lg">
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                <Link to={link.href} className="hover:text-blue-500">{link.text}</Link>
                                {index !== links.length - 1 && <span> | | </span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiniHero;
