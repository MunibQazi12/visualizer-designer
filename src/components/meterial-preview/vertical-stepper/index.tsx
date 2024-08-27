const VerticalStepper = () => {
  return (
    <div className="relative mt-9">
      <div className="h-[135px] bg-white w-[3px] absolute top-0 left-0 right-0 mx-auto"></div>
      <div className="flex flex-col gap-2 items-center relative z-10 w-[18px]">
        <div className="w-3 h-3 rounded-full bg-green-500 p-[3px]"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-green-500 p-1">
          <span className="bg-white w-full h-full rounded-full block"></span>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-400 p-[3px]">
          <span className="bg-white w-full h-full rounded-full block"></span>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-400 p-[3px]">
          <span className="bg-white w-full h-full rounded-full block"></span>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-400 p-[3px]">
          <span className="bg-white w-full h-full rounded-full block"></span>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-400 p-[3px]">
          <span className="bg-white w-full h-full rounded-full block"></span>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-400 p-[3px]">
          <span className="bg-white w-full h-full rounded-full block"></span>
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
