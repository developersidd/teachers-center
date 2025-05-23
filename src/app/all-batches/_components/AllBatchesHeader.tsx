import ProgressBar from "@/components/core/ProgressBar";
import { Laptop } from "lucide-react";
import Image from "next/image";

const AllBatchesHeader = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <select className="bg-white border-r-16 border-transparent text-gray-900   rounded-xl focus:outline-0 p-4 ">
            <option value="chemistry">Course for Chemistry</option>
            <option value="higher-match">Course for Higher Math </option>
            <option value="english">Course for English</option>
            <option value="biology">Course for Biology</option>
          </select>

          <div className="w-[1.5px] h-[50px] bg-gray-500 mx-4" />
          <select className="bg-white border-r-12 border-transparent text-gray-900 text-sm  rounded-xl focus:outline-0 p-3 ">
            <option value="all-batches">All Batches</option>
            <option value="batch-one">Batch One</option>
            <option value="batch-two">Batch Two</option>
            <option value="batch-three">Batch Three</option>
          </select>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-black px-4 py-2 rounded-xl text-white flex items-center gap-2">
            {" "}
            <Laptop /> <span>Take Class</span>{" "}
          </button>
          <div className="flex items-center">
            <Image
              className="size-10 rounded-full"
              src="/assets/images/women-teacher.png"
              alt="women-teacher"
              width={50}
              height={50}
            />
            <button className="relative -left-3 shadow bg-white flex items-center gap-5 py-[7px] pl-14 pr-6 rounded-xl">
              <Image
                width={50}
                height={50}
                src="/assets/images/teacher.png"
                alt="teacher"
                className="size-10 rounded-full absolute -top-[.7px] -left-1"
              />
              <h5>Add TA</h5>
            </button>
          </div>
        </div>
      </div>
      <div className="my-6 pr-3.5">
        <ProgressBar value={50} />
      </div>
    </header>
  );
};

export default AllBatchesHeader;
