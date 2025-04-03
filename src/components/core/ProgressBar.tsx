const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="w-full outline-2  rounded-full h-3.5 ">
      <div
        className="bg-black relative top-[1px] left-[1px] h-[12px] rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
