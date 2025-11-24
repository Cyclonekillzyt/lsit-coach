import SideBar from "../components/SideBar.jsx";
import Header from "../components/Header.jsx";
import backgroundBottom from "../assets/backgroundBottom.svg";
import backgroundTop from "../assets/backgroundTop.svg";
import { useState } from "react";
import { useExercise } from "../context/ExerciseContext.jsx";

export default function HomePage() {
  const [isLeft, setIsLeft] = useState(true);
 
  return (
    <div className="flex h-screen bg-base">
      <SideBar />
      <div className="flex flex-col w-full px-15">
        <Header />
        <span className="container flex flex-col h-[90vh] my-5  px-2 overflow-hidden">
          <BottomComponent  />
        </span>
      </div>
    </div>
  );
}

const MainBody = () => {
  return (
    <div className=" relative">
      <img src={backgroundTop} className="mr-[6%] -mt-[0.8%] max-w-[93%]" />
      <div className="w-full  rounded-full h-[10%] flex flex-row items-center p-5 gap-10 absolute left-[5%] top-[33%]">
        <div className="p-[3%] rounded-full bg-secondary  "></div>
        <div className="w-[30%] h-20 ">
          <h1 className="text-base">Hello world</h1>
          <p className="text-primary-content overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            in placeat veniam
          </p>
        </div>
      </div>
    </div>
  );
};

const BottomComponent = ({image}) => {
  return (
    <div className="relative">
      <img src={backgroundBottom} className="ml-[6%] -mt-[0.8%] max-w-[93%]" />
      <div className="w-full  rounded-full h-[10%] flex flex-row-reverse items-center p-5 gap-10 absolute right-[5%] top-[33%]">
        
        <img src='../assets//thumbs/default.png' className="p-[3%] rounded-full" />
        <div className="w-[30%] h-20">
          <h1 className="text-base">Hello world</h1>
          <p className="text-primary-content  overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            in placeat veniam
          </p>
        </div>
      </div>
    </div>
  );
};
