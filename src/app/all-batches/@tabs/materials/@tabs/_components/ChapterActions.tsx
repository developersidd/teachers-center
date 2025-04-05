import {
  ClipboardPaste,
  FileType,
  FileUp,
  FolderPlus,
  FolderUp,
} from "lucide-react";
const ChapterActions = () => {
  return (
    <div className="flex gap-18 py-7 pl-10">
      <button className="flex items-center gap-2 px-8 py-5  border border-dashed rounded-xl">
        <FolderPlus className="h-5 w-5" />
        Add Folder
      </button>
      <button className="cursor-pointer flex items-center gap-2 px-8 py-5  border border-dashed rounded-xl">
        <FileUp className="h-5 w-5" />
        Upload File
      </button>
      <button className="cursor-pointer flex items-center gap-2 px-8 py-5  border border-dashed rounded-xl">
        <FolderUp className="h-5 w-5" />
        Upload Folder
      </button>
      <button className="cursor-pointer flex items-center gap-2 px-8 py-5  border border-dashed rounded-xl">
        <FileType className="h-5 w-5" />
        Add Text
      </button>
      <button className="cursor-pointer flex items-center gap-2 px-8 py-5  border border-dashed rounded-xl">
        <ClipboardPaste className="h-5 w-5" />
        Paste
      </button>
    </div>
  );
};

export default ChapterActions;
