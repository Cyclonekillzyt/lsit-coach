import { FullHeader } from "../components/Header"
const ExercisePage = () => {
  return (
    <div className="flex flex-col p-5 h-screen w-full ">
      <FullHeader />
      <div className="flex items-center flex-col w-full h-full ">
        <div className="size-[50%] glass rounded-4xl mt-15">
          <video src="#"></video>
        </div>
        <div className=" w-[30%] h-[25%] glass rounded-4xl mt-15">
          
        </div>
      </div>
    </div>
  );
}

export default ExercisePage