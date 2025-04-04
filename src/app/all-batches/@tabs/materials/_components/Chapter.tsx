import Checkbox from "@/components/custom/Checkbox";
import { ChevronUp, Eye, FileText, Folder, Info } from "lucide-react";
import ChapterActions from "./ChapterActions";
import ChapterMetadata from "./ChapterMetaDeta";

const Chapter = () => {
  return (
    <div className="mt-[10px] ml-10 border-t border-l border-gray-300 ">
      <div className=" border-b border-gray-300">
        <div className="h-[220px] border-b border-gray-300 flex ">
          <div className="h-full  w-full relative">
            {/* Chapter Header */}
            <div className="pt-5 px-5 flex  justify-between ">
              <div className="flex items-center gap-6">
                <Checkbox id="chapter-1.1" />
                <Folder className="" size={50} />
                <div className="flex items-end gap-3">
                  <h3 className="underline decoration-2 font-extrabold text-lg">
                    Chapter 1.1
                  </h3>
                  <ChevronUp size={30} />
                </div>
              </div>
              {/* Chapter actions */}
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
            {/* Chapter footer */}
            <div className=" absolute bottom-3 right-3 text-sm">
              <strong className="font-bold italic">Visible to:</strong>{" "}
              <span className="">
                Batch 1, Batch 2, Batch 3. For both online & physical students
              </span>
            </div>
          </div>
          {/* Chapter Details */}
          <ChapterMetadata />
        </div>

        <div>
          <div className="py-5 px-5 flex  justify-between ">
            <div className="flex items-center gap-4">
              <Checkbox id="chapter-2" />
              <FileText className="" size={50} />
              <h3 className="-mt-2.5 font-extrabold text-lg">
                Chapter 2 revision notes.pdf
              </h3>
            </div>
            {/* Chapter actions */}
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
        </div>
      </div>
      <ChapterActions />
    </div>
  );
};

export default Chapter;
