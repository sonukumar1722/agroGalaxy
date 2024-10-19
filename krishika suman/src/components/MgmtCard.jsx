import React from 'react';

const MgmtCard = ({ name, position, imageUrl }) => {
    return (
        <div>
            <div className="w-[350px] overflow-hidden m-4 text-center">
                <div className="p-4 flex items-center justify-center">
                    <img className="w-[270px] h-[310px] object-cover rounded-3xl" src={imageUrl} alt={name} />
                </div>

                <div className="flex-grow mb-5 pointer-events-none">
                    <h3 className="text-center uppercase mb-2 tracking-wide text-lg text-[#009444] font-semibold">{name}</h3>
                    <p className="block text-md leading-none font-normal text-[#0D3C00]">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default MgmtCard;
