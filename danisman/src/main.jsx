import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./Components/Dashboard.jsx";
import Header from "./Components/Header.jsx";
import TableHeader from "./Components/TableHeader.jsx";
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
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20 mt-40 mb-10">
        <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
          <Header />
        </div>
        <div className="basis-4/5  h-full mt-5 mr-4  flex flex-col bg-[url('mapZone.png')] rounded-3xl ">
          <App />
        </div>
      </div>
          <Footer />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <div className="p-5 flex flex-col items-center bg-slate-100 rounded-[2rem] h-[90vh] w-[90vw]">
          <div className="w-full pt-2 bg-white rounded-[2rem]">
            <TableHeader />
          </div>
          <div className="flex flex-col h-full w-full bg-slate-100 rounded-[2rem] p-4 ">
            {localToken ? (
              <Dashboard />
            ) : (
              <div className="flex h-full bg-slate-100 ">
                Dashboard ekranına ulaşmak için önce giriş yapın
              </div>
            )}
          </div>
            <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/adana",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Adana />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/osmaniye",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Osmaniye />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/hatay",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Hatay />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/gaziantep",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Gaziantep />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/kilis",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Kilis />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/sanliurfa",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Sanliurfa />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/adiyaman",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Adiyaman />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/kahramanmaras",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Kahramanmaras />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/diyarbakir",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Diyarbakir />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/malatya",
    element: (
      <div>
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-10  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col bg-[url('mapZone.png')] ">
          <div className="flex mt-5 mr-4 basis-10/12  rounded-3xl">
            <App />
            <Malatya />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/iletisim",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-1/5">
          <Header />
        </div>
        <div className="basis-4/5 h-screen mt-5 mr-4  flex flex-col bg-[url('mapZone.png')] rounded-3xl">
          <İletisim />
          <Footer />
        </div>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
