import Header from "../components/Header";
import { FullHeader } from "../components/Header";

const ExercisePreviewPage = () => {
  return (
    <div className="flex flex-col p-5 ">
      <FullHeader/>
      <main className="w-full flex gap-5  h-[90vh] my-5  px-2 mt-20 ">
        <div className="flex glass flex-col  w-[70%]">
          <div className="card w-full h-[20%] z-0 hover:h-[30%] bg-accent hover:mb-10 -mt-10"></div>
          <div className="card w-full h-[20%] z-1 hover:h-[30%] bg-primary hover:mb-10  -mt-10"></div>
          <div className="card w-full h-[20%] z-2 hover:h-[30%] -mt-10 bg-accent hover:mb-10 "></div>
          <div className="card w-full h-[20%] z-3 hover:h-[30%] bg-primary hover:mb-10  -mt-10"></div>
          <div className="card w-full h-[20%] z-4 hover:h-[30%] bg-accent hover:mb-10 -mt-10"></div>
          <div className="card w-full h-[20%] z-5 hover:h-[30%] bg-primary hover:mb-10  -mt-10"></div>
        </div>
        <div className="flex glass flex-col  w-[30%]">
          <div className="card w-full h-[20%] z-0 hover:h-[30%] bg-accent hover:mb-10 -mt-10"></div>
          <div className="card w-full h-[20%] z-1 hover:h-[30%] bg-primary hover:mb-10  -mt-10"></div>
          <div className="card w-full h-[20%] z-2 hover:h-[30%] -mt-10 bg-accent hover:mb-10 "></div>
          <div className="card w-full h-[20%] z-3 hover:h-[30%] bg-primary hover:mb-10  -mt-10"></div>
          <div className="card w-full h-[20%] z-4 hover:h-[30%] bg-accent hover:mb-10 -mt-10"></div>
          <div className="card w-full h-[20%] z-5 hover:h-[30%] bg-primary hover:mb-10  -mt-10"></div>
        </div>
      </main>
    </div>
  );
};

export default ExercisePreviewPage;
