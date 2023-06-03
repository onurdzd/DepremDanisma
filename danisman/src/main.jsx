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

const localToken = JSON.parse(localStorage.getItem("user"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-row items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw]">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-1/5">
          <Header />
          <Footer />
        </div>
        <div className="basis-4/5">
          <App />
        </div>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <div className="flex  items-center bg-slate-100  ">
          <div className="flex fixed  bg-white h-screen flex-col basis-1/5">
            <Header />
            <Footer />
          </div>

          <div className="flex ml-80    bg-slate-100 basis-4/5 ">
            {localToken ? (
              <Dashboard />
            ) : (
              <div className="flex ml-80   bg-slate-100 basis-2/3">
                Dashboard ekranına ulaşmak için önce giriş yapın
              </div>
            )}
          </div>
        </div>
      </>
    ),
  },
  {
    path: "/adana",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw]   ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>

        <div className="flex     bg-slate-100 basis-10/12   ">
          <App />
          <Adana />
        </div>
      </div>
    ),
  },
  {
    path: "/osmaniye",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Osmaniye />
        </div>
      </div>
    ),
  },
  {
    path: "/hatay",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Hatay />
        </div>
      </div>
    ),
  },
  {
    path: "/gaziantep",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Gaziantep />
        </div>
      </div>
    ),
  },
  {
    path: "/kilis",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Kilis />
        </div>
      </div>
    ),
  },
  {
    path: "/sanliurfa",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Sanliurfa />
        </div>
      </div>
    ),
  },
  {
    path: "/adiyaman",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Adiyaman />
        </div>
      </div>
    ),
  },
  {
    path: "/kahramanmaras",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Kahramanmaras />
        </div>
      </div>
    ),
  },
  {
    path: "/diyarbakir",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Diyarbakir />
        </div>
      </div>
    ),
  },
  {
    path: "/malatya",
    element: (
      <div className="flex items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw] ">
        <div className="flex bg-white h-[90vh] rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
          <Footer />
        </div>
        <div className="flex   bg-slate-100 basis-10/12">
          <App />
          <Malatya />
        </div>
      </div>
    ),
  },
  {
    path: "/iletisim",
    element: (
      <div className="h-screen flex flex-col ">
        <Header />
        <div className="flex justify-center h-full">
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
