import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from './components/Body';
import { createBrowserRouter , RouterProvider ,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
// import Grocery from './components/Grocery';






/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
   


// * Config-driven-UI -> 

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Prince Gupta</strong>
      </p>
    </footer>
  );
};


const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element: <About />,
      },
      {
         path:"/contact",
         element: <Contact />
      },
       {
         path:"/grocery",
         element:(
          <Suspense fallback={<h1>Loading... </h1>}>
            <Grocery />
          </Suspense>
         ) 
      },
      {
         path: "/restaurants/:resId",
         element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRouter} />);
