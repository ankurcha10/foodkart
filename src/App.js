import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ResaurantMenu from "./components/ResaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery") )


const AppLayout = () => {
  const [userName , setUserName] =useState()
  useEffect(()=> {
    const data= {
      name: "Ankur Chaubey"
    }
    setUserName(data.name)
  }, [])
  
  return (
    <Provider store={appStore}> 
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
      <Header />
     <Outlet/>
    </div>
    </userContext.Provider>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>,
    children:[
          
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/restaurant/:resId",
        element: <ResaurantMenu/>
      }
    ]

},

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

