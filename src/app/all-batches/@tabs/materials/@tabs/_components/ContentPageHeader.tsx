import Checkbox from "@/components/custom/Checkbox";
import { ArrowLeft, ChevronRight, Eye, Info } from "lucide-react";
const ContentPageHeader = () => {
  return (
    <div className="mt-5 px-5 flex  justify-between">
      <div className="flex items-center gap-4">
        <div className="w-7 h-7 mr-3 flex items-center justify-center rounded-full bg-black">
          <ArrowLeft className="text-white" size={22} />
        </div>
        <h3 className="underline font-medium text-lg"> Chapter 1 </h3>
        <ChevronRight />
        <h3 className="underline font-medium text-lg"> Chapter 1.1 </h3>
        <ChevronRight />
        <div className="pl-5 pr-9 py-3 rounded-xl bg-gray-100 max-w-max flex items-center gap-2">
          <Checkbox
            id="chapter-1"
            label={<span className="ml-2 font-bold text-lg "> Chapter 1 </span>}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 ">
        <Info />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 ">
            <div className="flex items-center bg-gray-100   rounded-xl pl-4">
              <Eye />
              <select className=" border-r-16 border-transparent text-gray-900  focus:outline-0 p-3 ">
                <option value="">Access to</option>
                <option value="student-1"> Student 1 </option>
                <option value="student-2"> Student 2 </option>
                <option value="student-3"> Student 3 </option>
              </select>
            </div>
            <select className="bg-gray-100 border-r-12 border-transparent text-gray-900 text-sm  rounded-xl focus:outline-0 p-3 ">
              <option value="">Actions</option>
              <option value="add">Add</option>
              <option value="remove">Remove</option>
              <option value="update">Update</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPageHeader;
