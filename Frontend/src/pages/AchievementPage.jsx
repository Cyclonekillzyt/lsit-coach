import { FullHeader } from "../components/Header"

const AchievementPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden p-5">
      <FullHeader />
      <div className="flex flex-col gap-5 w-full h-full p-5">
        <div className="glass w-full h-[40%] rounded-4xl"></div>
        <div className="glass w-full h-[50%] rounded-4xl"></div>
      </div>
    </div>
  );
}

export default AchievementPage