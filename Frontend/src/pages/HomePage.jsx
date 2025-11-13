import SideBar from "../components/SideBar.jsx";
import Header from "../components/Header.jsx";
import { useState } from "react";

export default function HomePage() {
  const [isLeft, setIsLeft] = useState(false);

  return (
    <div className="flex min-h-screen bg-base">
      <SideBar />
      <div className="flex flex-col w-full px-15">
        <Header />
        <main className="container flex flex-col h-[90vh] my-5  px-2 overflow-auto">
          <div className="w-full border rounded-full rounded- h-[10%] flex items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary"></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex flex-row-reverse items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary "></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary"></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex flex-row-reverse items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary "></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary"></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex flex-row-reverse items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary "></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary"></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex flex-row-reverse items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary "></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary"></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex flex-row-reverse items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary "></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary"></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
          <div className="w-full border rounded-full rounded- h-[10%] flex flex-row-reverse items-center p-5 gap-10">
            <div className="size-15 rounded-full bg-secondary "></div>
            <div className="w-[40%] h-15 bg-amber-400"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
