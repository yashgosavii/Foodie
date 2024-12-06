import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
// import About from "./components/About";
// import AboutClass from "./components/AboutClass";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/AboutClass")); 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />,
      },
      {
        path : "/about",
        element : <Suspense fallback={<Shimmer/>}><About/></Suspense>,
      },
      {
        path : "/contact",
        element : <Contact />,
      },
      {
        path : "/cart",
        element : <Cart />
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu />
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      }
    ],
    errorElement : <Error />
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);