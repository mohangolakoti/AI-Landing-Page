import React from "react";
import Spline from "@splinetool/react-spline";
import Nav from "./components/Nav";
import { discord, social } from "./constants";


const App = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden h-[100vh]">
      <Nav/>
      <div className="flex mx-10 bg-slate-200 rounded-3xl p-2 h-full">
        <div className="w-4/12 mt-12 ml-10 flex flex-col gap-10 text-lg font-medium font-OpenSans">
          <div className="bg-slate-300 p-5 rounded-xl w-11/12">
            <p className="bg-white p-4 rounded-xl uppercase text-base">
              "The rhythm of innovation" or "Pulse-pounding intelligence" to
              emphasize the AI's dynamic and forward-thinking nature.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#5eb3eb] to-[#3598db]  p-5 rounded-xl w-11/12">
          <div className="flex justify-around borde items-center bg-[#3398dc] opacity-90 rounded-xl">
            <p className=" px-4 text-white py-9 text-xl rounded-xl w-1/2 font-Lilita uppercase">
              Please Join On Discord
            </p>
            <img src={discord} alt="discord" className="w-[49px] h-[52px]"/>
            </div>
          </div>
          <div className="bg-[#81f4c3] p-5 rounded-3xl w-11/12">
          <div className=" border border-white px-4 py-4 pt-8 rounded-3xl">
            <p className=" px-4 rounded-xl font-normal text-white">
              PulseAI.com
            </p>
            <p className="px-4 text-3xl text-white">Latest Projects</p>
            <div className="px-4 py-2 gap-1 flex">
            <span className="bg-white px-4 rounded-full py-1 text-white">-</span>
            <span className="bg-white px-4 rounded-full py-1 text-white">-</span>
            <span className="bg-white px-4 rounded-full py-1 text-white">-</span>
            </div>
            </div>
          </div>
        </div>
        <div className="w-8/12 flex flex-col gap-10 ml-10">
        <div className="flex mx-10 font-Montserrat">
          <h2 className="text-5xl font-semibold mt-2">Streamlining Decision-Making with PulseAI.
          <button className="border border-black text-xl font-medium px-8 py-1 mx-4 rounded-full hover:text-[#559adb] hover:transition-colors hover:border-[#559adb]">Get Started</button></h2>
        </div>
        <div className="flex">
        <div className=" w-3/4 mx-10 bg-blue-10 rounded-3xl h-[80vh]">
        <Spline
          scene="https://prod.spline.design/iE1O0Byx3IbAyy5N/scene.splinecode"
          className=""
        />
        </div>
        <div className="flex flex-col gap-10 mt-32 ml-10">
        {social.map((img)=>(
          <div>
            <img src={img} alt="img" className="hover:bg-[#559adb] hover:rounded-full w-[36px]"/>
          </div>

        ))}
        </div>
        </div>
        <div className="right-16 bottom-10 border border-black pl-6 py-2 rounded-full absolute font-Montserrat font-medium text-black">
          Pulse.ai <span className="px-4 py-2 rounded-full bg-white ml-2">&#8599;</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
