import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, selectProductById } from '../productSlice';
import { Link, useParams } from 'react-router-dom';
import { addToCartAsync, selectItems } from '../../cart/cartSlice';
import { selectLoggedInUser } from '../../auth/authSlice';
import { discountedPrice } from '../../../app/constants';
import MiniHero from '../../../components/MiniHero';
import { default_hero } from '../../../assets';
//TODO: In server data we will color, size, highlights. To each products

const colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
];
const sizes = [
    { name: '10ML', inStock: false },
    { name: '50ML', inStock: true },
    { name: '100ML', inStock: true },
    { name: '250ML', inStock: true },
    { name: '500ML', inStock: true },
    { name: '1ML', inStock: true },
    { name: '2L', inStock: true },
    { name: '5L', inStock: true },
];
const highlights = [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
]

const productData = {
    title: "Acer Aspire Pro 12 | Laptop",
    price: 1200,
    oldPrice: 1500,
    reviews: 500,
    rating: 4.5,
    images: [
        "https://readymadeui.com/images/laptop5.webp",
        "https://readymadeui.com/images/laptop3.webp",
        "https://readymadeui.com/images/laptop4.webp",
        "https://readymadeui.com/images/laptop2.webp"
    ],
    colors: ["black", "gray-300", "gray-100", "blue-400"],
    productInfo: {
        type: "LAPTOP",
        ram: "16 GB",
        ssd: "1000 GB",
        processorType: "INTEL CORE I7-12700H",
        processorSpeed: "2.3 - 4.7 GHz",
        displaySizeInch: "16.0",
        displaySizeCm: "40.64 cm",
        displayType: "OLED, TOUCHSCREEN, 120 Hz",
        displayResolution: "2880x1620"
    },
    reviewsSummary: [
        { rating: 5.0, percentage: 99 },
        { rating: 4.0, percentage: 90 },
        { rating: 3.0, percentage: 80 },
        { rating: 2.0, percentage: 20 },
        { rating: 1.0, percentage: 0 }
    ],
    reviewDetails: [
        {
            name: "John Doe",
            rating: 4.0,
            time: "2 mins ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
            profilePic: "https://readymadeui.com/team-2.webp"
        }
    ]
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

//TODO: Loading UI

export default function ProductDetail() {
    const [selectedSize, setSelectedSize] = useState(sizes[2]);
    const user = useSelector(selectLoggedInUser);
    const items = useSelector(selectItems)
    const product = useSelector(selectProductById);
    const dispatch = useDispatch();
    const params = useParams();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleCart = (e) => {
        e.preventDefault();
        const newItem = { ...product, quantity: 1, user: user.id }
        delete newItem['id'];
        dispatch(addToCartAsync(newItem))
    }

    useEffect(() => {
        dispatch(fetchProductByIdAsync(params.id))
    console.log("product",params.id)
    }, [dispatch, params.id]);

    return (
        <>

            {/* Hero Section */}
            <div>
                <MiniHero
                    imgSrc={default_hero}
                    title="Shop"
                    links={[
                        { href: '#', text: 'Home' },
                        { href: '#', text: 'Shop' }
                    ]}
                />
            </div>
            <div className="bg-white">
                {product && <div className="pt-6">
                    {/* MY PAGE  */}
                    <div className="font-sans bg-white">
                        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                                    <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                                        <img src={product.images[selectedImageIndex]} alt="Product" className="w-4/5 rounded object-cover" />
                                        <button type="button" className="absolute top-4 right-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc" className="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                                                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                                        {product.images.map((image, index) => (
                                            <div key={index} className={`rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer ${selectedImageIndex === index ? 'border-2 border-blue-500' : ''}`}>
                                                <img
                                                    src={image}
                                                    alt={`Product${index}`}
                                                    className={`w-24`}
                                                    onClick={() => handleImageClick(index)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-2">
                                    <h2 className="text-2xl font-extrabold text-[#333]">{product.title}</h2>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <p className="text-[#333] text-3xl font-bold">${discountedPrice(product)}</p>
                                        <p className="text-gray-400 text-lg"><strike>${product.price}</strike> <span className="text-sm ml-1">Tax included</span></p>
                                    </div>

                                    {/* Reviews */}
                                    <div className="mt-6">
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            <div className="flex items-center" >
                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                    <StarIcon
                                                        key={rating}
                                                        className={classNames(
                                                            product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                            'h-6 w-6 mx-[2px]'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ))}
                                                <h4 className="text-[#333] text-base ml-3">{product.reviews} Reviews</h4>
                                            </div>
                                            <p className="sr-only">{product.rating} out of 5 stars</p>
                                            {/* <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a> */}
                                        </div>
                                    </div>

                                    {/* Description and details */}
                                    <div className="mt-8">
                                        <h3 className="sr-only">Description</h3>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">{product.description}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                        <div className="mt-4">
                                            <ul className="list-disc space-y-2 pl-4 text-sm">
                                                {highlights.map((highlight) => (
                                                    <li key={highlight} className="text-gray-400">
                                                        <span className="text-gray-600">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Sizes */}
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                Size guide
                                            </a>
                                        </div>

                                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                                {sizes.map((size) => (
                                                    <RadioGroup.Option
                                                        key={size.name}
                                                        value={size}
                                                        disabled={!size.inStock}
                                                        className={({ active }) =>
                                                            classNames(
                                                                size.inStock
                                                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                                active ? 'ring-2 ring-indigo-500' : '',
                                                                'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                            )
                                                        }
                                                    >
                                                        {({ active, checked }) => (
                                                            <>
                                                                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                                {size.inStock ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active ? 'border' : 'border-2',
                                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                                            'pointer-events-none absolute -inset-px rounded-md'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                    >
                                                                        <svg
                                                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                            viewBox="0 0 100 100"
                                                                            preserveAspectRatio="none"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <div className="mt-10">
                                        <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">{product.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-10">
                                        <Link to="/checkout"><button type="button" className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-semibold rounded">Buy now</button></Link>
                                        <button type="submit" onClick={handleCart} className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-semibold rounded">Add to cart</button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                                <h3 className="text-lg font-bold text-[#333]">Product information</h3>
                                <ul className="mt-6 space-y-6 text-[#333]">
                                    {Object.entries(productData.productInfo).map(([key, value], index) => (
                                        <li key={index} className="text-sm">{key.toUpperCase().replace(/_/g, ' ')} <span className="ml-4 float-right">{value}</span></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="my-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                                <h3 className="text-lg font-bold text-[#333]">Customer Reviews</h3>
                                <div className="flex flex-wrap justify-between gap-4 mt-8">
                                    {productData.reviewsSummary.map((review, index) => (
                                        <div key={index} className="flex gap-2 items-center">
                                            <p className="text-base text-[#333]">{review.rating} <span className="text-sm text-gray-400">out of 5</span></p>
                                            <div className="relative w-24 h-3 rounded-full bg-gray-100">
                                                <div className="absolute inset-0 bg-[#333] rounded-full" style={{ width: `${review.percentage}%` }}></div>
                                            </div>
                                            <p className="text-sm text-gray-400">{review.percentage}%</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    {productData.reviewDetails.map((review, index) => (
                                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start py-6">
                                            <div className="md:col-span-2">
                                                <img src={review.profilePic} alt="profile" className="w-12 rounded-full" />
                                            </div>
                                            <div className="md:col-span-10">
                                                <div className="flex flex-wrap justify-between gap-2 items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <h4 className="font-semibold text-[#333]">{review.name}</h4>
                                                        <span className="text-sm text-gray-400">{review.time}</span>
                                                    </div>
                                                    <div className="flex gap-1 items-center">
                                                        {[...Array(5)].map((_, starIndex) => (
                                                            <svg key={starIndex} className={`w-4 ${starIndex < Math.floor(review.rating) ? 'fill-[#333]' : 'fill-[#CED5D8]'}`} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-gray-500 mt-2">{review.comment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Product info */}
                </div>}
            </div>
        </>
    )
}



{/* Product info */ }
//  <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
//  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
//  </div>

//  {/* Options */}
//  <div className="mt-4 lg:row-span-3 lg:mt-0">
//      <h2 className="sr-only">Product information</h2>
//      <p className="text-3xl line-through tracking-tight text-gray-900">${product.price}</p>
//      <p className="text-3xl tracking-tight text-gray-900">${discountedPrice(product)}</p>

//      {/* Reviews */}
//      <div className="mt-6">
//          <h3 className="sr-only">Reviews</h3>
//          <div className="flex items-center">
//              <div className="flex items-center">
//                  {[0, 1, 2, 3, 4].map((rating) => (
//                      <StarIcon
//                          key={rating}
//                          className={classNames(
//                              product.rating > rating ? 'text-gray-900' : 'text-gray-200',
//                              'h-5 w-5 flex-shrink-0'
//                          )}
//                          aria-hidden="true"
//                      />
//                  ))}
//              </div>
//              <p className="sr-only">{product.rating} out of 5 stars</p>
//              {/* <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
// {reviews.totalCount} reviews
// </a> */}
//          </div>
//      </div>

//      <form className="mt-10">
//          {/* Colors */}
//          <div>
//              <h3 className="text-sm font-medium text-gray-900">Color</h3>

//              <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
//                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
//                  <div className="flex items-center space-x-3">
//                      {colors.map((color) => (
//                          <RadioGroup.Option
//                              key={color.name}
//                              value={color}
//                              className={({ active, checked }) =>
//                                  classNames(
//                                      color.selectedClass,
//                                      active && checked ? 'ring ring-offset-1' : '',
//                                      !active && checked ? 'ring-2' : '',
//                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
//                                  )
//                              }
//                          >
//                              <RadioGroup.Label as="span" className="sr-only">
//                                  {color.name}
//                              </RadioGroup.Label>
//                              <span
//                                  aria-hidden="true"
//                                  className={classNames(
//                                      color.class,
//                                      'h-8 w-8 rounded-full border border-black border-opacity-10'
//                                  )}
//                              />
//                          </RadioGroup.Option>
//                      ))}
//                  </div>
//              </RadioGroup>
//          </div>

//          {/* Sizes */}
//          <div className="mt-10">
//              <div className="flex items-center justify-between">
//                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
//                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                      Size guide
//                  </a>
//              </div>

//              <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
//                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
//                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
//                      {sizes.map((size) => (
//                          <RadioGroup.Option
//                              key={size.name}
//                              value={size}
//                              disabled={!size.inStock}
//                              className={({ active }) =>
//                                  classNames(
//                                      size.inStock
//                                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
//                                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
//                                      active ? 'ring-2 ring-indigo-500' : '',
//                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
//                                  )
//                              }
//                          >
//                              {({ active, checked }) => (
//                                  <>
//                                      <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
//                                      {size.inStock ? (
//                                          <span
//                                              className={classNames(
//                                                  active ? 'border' : 'border-2',
//                                                  checked ? 'border-indigo-500' : 'border-transparent',
//                                                  'pointer-events-none absolute -inset-px rounded-md'
//                                              )}
//                                              aria-hidden="true"
//                                          />
//                                      ) : (
//                                          <span
//                                              aria-hidden="true"
//                                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                          >
//                                              <svg
//                                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                                  viewBox="0 0 100 100"
//                                                  preserveAspectRatio="none"
//                                                  stroke="currentColor"
//                                              >
//                                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
//                                              </svg>
//                                          </span>
//                                      )}
//                                  </>
//                              )}
//                          </RadioGroup.Option>
//                      ))}
//                  </div>
//              </RadioGroup>
//          </div>

//          <button
//              onClick={handleCart}
//              type="submit"
//              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//          >
//              Add to Cart
//          </button>
//      </form>
//  </div>

//  <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//      {/* Description and details */}
//      <div>
//          <h3 className="sr-only">Description</h3>

//          <div className="space-y-6">
//              <p className="text-base text-gray-900">{product.description}</p>
//          </div>
//      </div>

//      <div className="mt-10">
//          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

//          <div className="mt-4">
//              <ul className="list-disc space-y-2 pl-4 text-sm">
//                  {highlights.map((highlight) => (
//                      <li key={highlight} className="text-gray-400">
//                          <span className="text-gray-600">{highlight}</span>
//                      </li>
//                  ))}
//              </ul>
//          </div>
//      </div>

//      <div className="mt-10">
//          <h2 className="text-sm font-medium text-gray-900">Details</h2>

//          <div className="mt-4 space-y-6">
//              <p className="text-sm text-gray-600">{product.description}</p>
//          </div>
//      </div>
//  </div>
// </div>