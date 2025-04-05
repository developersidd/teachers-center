import { Eye } from "lucide-react";

const ChapterAccessSelect = () => {
  return (
    <div className="flex items-center bg-gray-100   rounded-xl pl-4">
      <Eye />
      <select className=" border-r-16 border-transparent text-gray-900  focus:outline-0 p-3 ">
        <option value="">Access to</option>
        <option value="student-1"> Student 1 </option>
        <option value="student-2"> Student 2 </option>
        <option value="student-3"> Student 3 </option>
      </select>
    </div>
  );
};

export default ChapterAccessSelect;
