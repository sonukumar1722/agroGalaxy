import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProductsAsync, fetchAllProductsByFiltersAsync, fetchBrandsAsync, fetchCategoriesAsync, fetchProductByIdAsync, selectAllProducts, selectBrands, selectCategories, selectProductById, selectTotalItems } from '../productSlice';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Link, useParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../../app/constants';
import Pagination from '../../common/Pagination';
import { addToCartAsync } from '../../cart/cartSlice';
import { selectLoggedInUser } from '../../auth/authSlice';

const sortOptions = [
  // { name: 'Most Popular', thumbnail: '#', current: true },
  // { name: 'Newest', thumbnail: '#', current: false }, 
  { name: 'Best Rating', sort: 'rating', order: 'desc', current: false },
  { name: 'Price: Low to High', sort: 'price', order: 'asc', current: false },
  { name: 'Price: High to Low', sort: 'price', order: 'desc', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Shop() {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector(selectAllProducts);
  const brands = useSelector(selectBrands);
  const categories = useSelector(selectCategories);
  const totalItems = useSelector(selectTotalItems);
  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: categories.data,
    },
    {
      id: 'brand',
      name: 'Brands',
      options: brands.data,
    },
  ]
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [FiltersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleFilter = (e, section, option) => {
    const newFilter = { ...filter };
    // TODO : on server it will support multiple categories
    if (e.target.checked) {
      if (newFilter[section.id]) {
        newFilter[section.id].push(option.value);
      } else {
        newFilter[section.id] = [option.value];
      }
    } else {
      const index = newFilter[section.id].findIndex(el => el === option.value);
      newFilter[section.id].splice(index, 1);
    }
    setFilter(newFilter);
  }

  const handleSort = (e, option) => {
    const sort = { _sort: option.sort, _order: option.order };
    console.log({ sort });
    setSort(sort);
  }

  const handlePage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE }
    dispatch(fetchAllProductsByFiltersAsync({ filter, sort, pagination }));
    //TODO: server will filter deleted products
  }, [dispatch, filter, sort, page])

  useEffect(() => {
    setPage(1);
  }, [totalItems, sort])

  useEffect(() => {
    dispatch(fetchBrandsAsync());
    dispatch(fetchCategoriesAsync());
  }, [])

  return (
    <div>
      <div>

        <div className="bg-white">
          <div>
            {/* Mobile filter dialog  */}
            <Filter handleFilter={handleFilter} filters={filters} FiltersOpen={FiltersOpen} setFiltersOpen={setFiltersOpen}></Filter>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 mt-10">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h1>

                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                              {({ active }) => (
                                <p
                                  // thumbnail={option.thumbnail}
                                  onClick={e => handleSort(e, option)}
                                  className={classNames(
                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  {option.name}
                                </p>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                    <span className="sr-only">View grid</span>
                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6"
                    onClick={() => setFiltersOpen(true)}
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>
                {/* Product grid */}
                <div>
                  {/* This is our products list */}
                  <ProductGrid products={products}></ProductGrid>
                </div>
                {/* Product grid end */}
              </section>

              {/* Section of product and filtors ends */}
              <Pagination page={page} totalItems={totalItems} setPage={setPage} handlePage={handlePage}></Pagination>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}


function Filter({ FiltersOpen, setFiltersOpen, handleFilter, filters }) {
  return (
    <Transition.Root show={FiltersOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={setFiltersOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">


                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange={e => handleFilter(e, section, option)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function ProductGrid({ products }) {

  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector(selectLoggedInUser);
  const [productId, setProductId] = useState(null);

  const handleCart = (product) => (e) => {
    e.preventDefault();
    const newItem = { ...product, quantity: 1, user: user.id };
    delete newItem['id'];
    dispatch(addToCartAsync(newItem));
  };

  const handleSetProductId = (id) => (e) => {
    e.preventDefault();
    setProductId(id);
    // console.log("Product ID set to:", id);
  };

  useEffect(() => {
    if (params.id) {
      dispatch(fetchProductByIdAsync(params.id));
    }
    // console.log("Product ID:", productId);
  }, [dispatch, params.id, productId]);

  return (
    <>
      {/* Products Section */}
      <section className="-mb-16">
        {/* Products */}
        <div className="min-h-screen flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
            {products && products.map((product) => (
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <Link key={product.id} to={`/product-detail/${product.id}`}>
                  <img className="pb-4 object-cover rounded-t-lg" src={product.thumbnail} alt={product.title} />
                </Link>
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.title}</h5>
                  <div className="flex items-center mt-2.5 mb-3">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse font-bold text-yellow-400">☆ ☆ ☆ ☆ ☆</div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">₹ {product.price}</span>
                    <button
                      onClick={(e) => { handleCart(product)(e); handleSetProductId(product.id)(e); }}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      {/* Nevigation */}
      {/* <div className="flex justify-center items-center mt-10 space-x-2">
          <div className="w-14 h-14 text-white flex justify-center items-center bg-[#009444] rounded-full">
            <span className="p-4 font-semibold text-lg">1</span>
          </div>

          <div className="w-14 h-14 text-[#185062] flex justify-center items-center border-2 hover:border-none hover:text-white hover:bg-[#009444] border-[#F1F1F1] rounded-full">
            <span className="p-4 font-semibold text-lg">2</span>
          </div>

          <div className="w-14 h-14 text-[#185062] flex justify-center items-center border-2 hover:border-none hover:text-white hover:bg-[#009444] border-[#F1F1F1] rounded-full">
            <span className="p-4 font-semibold text-lg">3</span>
          </div>

          <div className="w-14 h-14 text-[#185062] flex justify-center items-center border-2 hover:border-none hover:text-white hover:bg-[#009444] border-[#F1F1F1] rounded-full">
            <span className="p-4 font-semibold text-lg">➜</span>
          </div>
        </div> */}




      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products && products.map((product) => (
              <Link to={`/product-detail/${product.id}`}>
                <div key={product.id} className="group relative border-solid border-2 p-1.5 border-gray-200">
                  <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <div thumbnail={product.thumbnail}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                        </div>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500"><StarIcon className="w-6 h-6 inline" /><span className="align-bottom">{product.rating}</span></p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">${Math.round(product.price * (1 - product.discountPercentage / 100))}</p>
                      <p className="text-sm font-medium line-through text-gray-400">${product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

