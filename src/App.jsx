import React, { useEffect } from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Shop from './features/product/components/Shop';
import PageNotFound from "./pages/404";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Navbar from './features/navbar/Navbar';
import ProductDetailPage from './pages/ProductDetailPage';
// import AdminHome from './pages/AdminHome';
// import AdminProductDetailPage from './pages/AdminProductDetailPage';
// import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
// import AdminProductFormPage from './pages/AdminProductFormPage';
// import AdminOrdersPage from './pages/AdminOrdersPage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Footer from './features/footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Navbar />
        <Home />
        <Footer />
      </Protected>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Protected>
        <Navbar />
        <About />
        <Footer />
      </Protected>
    ),
  }, 
  {
    path: "/contact-us",
    element: (
      <Protected>
        <Navbar />
        <ContactUs />
        <Footer />
      </Protected>
    ),
  },
  {
    path: "/shop",
    element: (
      <Protected>
        <Navbar />
        <Shop />
        <Footer />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <Navbar />
        <CartPage />
        <Footer />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Navbar />
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <Navbar />
        <ProductDetailPage />
        <Footer />
      </Protected>
    ),
  },
  // {
  //   path: "/admin",
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminHome></AdminHome>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: "/admin/product-detail/:id",
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminProductDetailPage></AdminProductDetailPage>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: "/admin/product-form",
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminProductFormPage></AdminProductFormPage>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: "/admin/orders",
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminOrdersPage></AdminOrdersPage>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: "/admin/product-form/edit/:id",
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminProductFormPage></AdminProductFormPage>
  //     </ProtectedAdmin>
  //   ),
  // },

  {
    path: "/order-success/:id",
    element: <OrderSuccessPage />,
  },
  {
    path: "/orders",
    element: <UserOrdersPage />,
    // we will add page later now using component directly
  },
  {
    path: "/profile",
    element: <UserProfilePage />,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);



function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user])
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* Link must be inside the Provider */}
    </div>
  );
}

export default App;
