import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./Components/Dashboard.jsx";
import Header from "./Components/Header.jsx";
import İletisim from "./Components/İletisim.jsx";
import Adana from "./Components/City/Adana.jsx";
import Adiyaman from "./Components/City/Adiyaman.jsx";
import Diyarbakir from "./Components/City/Diyarbakir.jsx";
import Gaziantep from "./Components/City/Gaziantep.jsx";
import Hatay from "./Components/City/Hatay.jsx";
import Kahramanmaras from "./Components/City/Kahramanmaras.jsx";
import Kilis from "./Components/City/Kilis.jsx";
import Malatya from "./Components/City/Malatya.jsx";
import Osmaniye from "./Components/City/Osmaniye.jsx";
import Sanliurfa from "./Components/City/Sanliurfa.jsx";
import Footer from "./Components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col  items-center  bg-slate-100 h-screen w-screen">
        <Header />
        <App />
        <Footer />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div className="h-screen">
        <Header />
        <div className="mt-8 pl-6">
          <Dashboard />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/adana",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Adana />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/osmaniye",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Osmaniye />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/hatay",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Hatay />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/gaziantep",
    element: (
      <div className="h-screen ">
        <Header />
        <Gaziantep />
        <Footer />
      </div>
    ),
  },
  {
    path: "/kilis",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Kilis />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/sanliurfa",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Sanliurfa />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/adiyaman",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Adiyaman />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/kahramanmaras",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Kahramanmaras />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/diyarbakir",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Diyarbakir />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/malatya",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex w-[50vw] mt-8 pl-6 ">
          <Malatya />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/iletisim",
    element: (
      <div className="h-screen">
        <Header />
        <div className="mt-8 pl-6">
          <İletisim />
        </div>
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
