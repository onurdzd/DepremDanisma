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
import Hakkimizda from "./Components/Hakkimizda.jsx";
import Form from "./Components/Destekbasvuru.jsx";

// const [localToken,setLocalToken]=useState("")
// const localTokenCheck = async()=>{
//   await axios
// .get("http://localhost:9000/api/user",{
//   headers: {
//     'Authorization': `${localToken.localToken.localToken?.token}` 
//   }
// })
// .then((res) => {res.data && setLocalToken(JSON.parse(localStorage.getItem("user")))})}
// useEffect(()=>{localTokenCheck()},[])

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-[96vh] w-[80vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] pb-2 ">
          <div className="flex bg-white h-full rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="basis-4/5  h-full mt-3 mr-4  flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl bg-cover">
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
                <Dashboard />
    ),
  },
  {
    path: "/basvuru",
    element: (
      <div className="h-[96vh] w-[80vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem]  pb-2 ">
          <div className="flex bg-white h-full rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="basis-4/5  h-full mt-3 mr-4  flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl bg-cover">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/hakkimizda",
    element: (
      <div className="h-[96vh] w-[80vw]">
        <div className="flex flex-row items-start bg-white rounded-[2rem]  pb-2 ">
          <div className="flex bg-white h-full rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="basis-4/5  h-full mt-3 mr-4  flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl bg-cover">
            <Hakkimizda />
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/adana",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover ">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Adana />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/osmaniye",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover ">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Osmaniye />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/hatay",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-2  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover ">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Hatay />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/gaziantep",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Gaziantep />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/kilis",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Kilis />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/sanliurfa",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover ">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Sanliurfa />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/adiyaman",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover ">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Adiyaman />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/kahramanmaras",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Kahramanmaras />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/diyarbakir",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5  bg-cover">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Diyarbakir />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/malatya",
    element: (
      <div className="h-[96vh] w-[85vw]">
        <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-5  ">
          <div className="flex bg-white h-full  rounded-l-[2rem] flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl mt-3 mr-5 bg-cover">
            <div className="flex mt-2 mr-4 basis-10/12  ">
              <App />
              <Malatya />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/iletisim",
    element: (
      <div className="h-[96vh] w-[80vw]">
        <div className="flex h-[93vh] flex-row items-center bg-white rounded-[2rem]  pt-4 pb-6">
          <div className="flex bg-white h-full rounded-l-[2rem]  flex-col basis-1/5 ">
            <Header />
          </div>
          <div className="basis-4/5  h-full mt-3 mr-4  flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl bg-cover">
            <İletisim />
          </div>
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
