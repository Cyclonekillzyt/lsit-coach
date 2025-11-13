
const ProgressBar = () => {
  return (
    <div className=" flex  flex-row text-2xl font-bold w-[70%] space-x-10   justify-center items-center ">
      <p>Level 2</p>
        <progress className="progress w-[60%] flex-1 h-5 " value="70" max="100"></progress> 
      <p>Level 3</p>
    </div>
  );
}

export default ProgressBar