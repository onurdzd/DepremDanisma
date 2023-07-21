import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./Components/Dashboard.jsx";
import Header from "./Components/Header.jsx";
import İletisim from "./Components/İletisim.jsx";
import Footer from "./Components/Footer.jsx";
import Hakkimizda from "./Components/Hakkimizda.jsx";
import Form from "./Components/Destekbasvuru.jsx";
import GonulluOl from "./Components/GonulluOl.jsx";
import GelenBasvurular from "./Components/GelenBasvurular.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "gelenbasvuru",
    element: <GelenBasvurular />,
  },
  {
    path: "basvuru",
    element: (
      <div className="h-[100vh]  sm:h-[96vh] sm:w-[80vw] ">
        <div className=" md:flex md:flex-row sm:bg-white  bg-[url('/src/assets/mapZone.png')] sm:bg-none sm:rounded-[2rem]  pb-2  ">
          <div
            className="flex  sm
          :h-full sm:rounded-l-[2rem] flex-col basis-1/5 "
          >
            <Header />
          </div>
          <div className="basis-4/5  h-full sm:mt-3 sm:mx-4  flex flex-col sm:bg-[url('/src/assets/mapZone.png')] sm:rounded-3xl bg-cover">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "gonullu",
    element: (
      <div className="h-[100vh] sm:h-[96vh] sm:w-[80vw]">
        <div className=" md:flex md:flex-row sm:bg-white  bg-[url('/src/assets/mapZone.png')] sm:bg-none sm:rounded-[2rem]  pb-2  ">
            <GonulluOl />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "hakkimizda",
    element: (
      <div className="h-[100vh] sm:h-[96vh] sm:w-[80vw]">
            <Hakkimizda />
        <Footer />
      </div>
    ),
  },
  {
    path: "sehirler/:sehir",
    element: (
        <App/>
    ),
  },
  {
    path: "iletisim",
    element: (
      <div className="h-[100vh] sm:h-[96vh] sm:w-[80vw]">
            <İletisim />
        <Footer />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

