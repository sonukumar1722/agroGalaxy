import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ productName, price, rating, imageUrl }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <Link to="/product">
                <img className="pb-4 rounded-t-lg" src={imageUrl} alt={productName} />
            </Link>
            <div className="px-5 pb-5">
                <Link to="/product">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{productName}</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-3">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse font-bold text-yellow-400">☆ ☆ ☆ ☆ ☆</div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">{rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">₹ {price}</span>
                    <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
