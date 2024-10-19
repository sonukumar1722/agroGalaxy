import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../cart/cartSlice';
import { selectLoggedInUser } from '../auth/authSlice';

const navigation = [
  { name: 'Shop', link: '/shop', user: true },
  { name: 'About Us', link: '/about-us', user: true },
  { name: 'Contact Us', link: '/contact-us', user: true },
  { name: 'News & Articles', link: '/news-and-articles', user: true },
  // { name: 'Team', link: '#', user: false },
  { name: 'Admin', link: '/admin', admin: true },
  { name: 'Orders', link: '/admin/orders', admin: true },
]
const userNavigation = [
  { name: 'My Profile', link: '/profile' },
  { name: 'My Orders', link: '/orders' },
  { name: 'Sign out', link: '/logout' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ children }) => {
  const items = useSelector(selectItems);
  const user = useSelector(selectLoggedInUser);

  return (
    <>
      <div className="w-full py-2 md:py-3">
        <Disclosure as="nav" className="bg-white">
          {({ open, close }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img
                          className="h-8 w-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          item[user.role] ? (
                            <Link
                              key={item.name}
                              to={item.link}
                              className={classNames(
                                item.current
                                  ? 'text-black'
                                  : 'text-black hover:border-b-4 hover:duration-200 hover:border-green-700',
                                'px-3 py-2 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          ) : null
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Link to="/cart">
                        <button
                          type="button"
                          className="relative rounded-full p-1 text-black focus:outline-none focus:ring-2 focus:ring-white hover:duration-200 hover:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 hover:ring-offset-gray-800 hover:ring-offset-2"
                        >
                          <span className="absolute -inset-1.5" />
                          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </Link>
                      {items.length > 0 && <span className="inline-flex items-center rounded-md z-[5] mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {items.length}
                      </span>}

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-300 hover:text-black/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    item[user.role] ? (
                      <Link
                        key={item.name}
                        to={item.link}
                        onClick={close}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black/80 hover:bg-gray-200 font-semibold hover:text-black',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : null
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full border-2 border-black/60" src={user.imageUrl} alt="NA" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-black/80 mb-1">{user.name}</div>
                      <div className="text-sm mr-4 font-medium leading-none text-black/80">{user.email}</div>
                    </div>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full hover:bg-gray-400 p-2 text-black/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </Link>
                    {items.length > 0 && <span className="inline-flex items-center rounded-md mb-7 z-[5] -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      {items.length}
                    </span>}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Menu key={item.name}>
                        {({ active }) => (
                          <Link
                            to={item.link}
                            onClick={close}
                            className="block rounded-md px-3 py-2 text-base font-medium text-black/80 hover:bg-gray-200 hover:text-black"
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}

export default Navbar;
