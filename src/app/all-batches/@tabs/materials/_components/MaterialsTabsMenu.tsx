"use client";
import {
  ArrowDownUp,
  CircleEllipsis,
  FilePen,
  Plus,
  SearchIcon,
  SlidersHorizontal,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const materialsTabsMenu = [
  { name: "content", path: "" },
  { name: "course-details", path: "/course-details" },
  { name: "revision", path: "/revision" },
];

const MaterialsTabsMenu = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="border-b border-gray-300 flex items-center justify-between px-5">
        <ul className="flex items-center justify-between  gap-12 ">
          {materialsTabsMenu.map(({ path, name }) => {
            const tabPath = `/all-batches/materials${path}`;
            const isActive =
              name === "content"
                ? pathname === "/all-batches/materials"
                : pathname.startsWith(tabPath);
            return (
              <li
                key={name}
                className={`${
                  isActive ? " border-black " : "border-gray-50"
                }  px-4 py-3.5 capitalize border-b-4  text-black`}
              >
                <Link href={tabPath}>{name}</Link>
              </li>
            );
          })}

          <li className="flex items-center gap-2 cursor-pointer">
            <div className="bg-black size-6 rounded-full flex items-center justify-center ">
              <Plus size={18} className="text-white" />
            </div>
            <span className="text-sm text-gray-400 italic">
              {" "}
              Add main Folder{" "}
            </span>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="relative border rounded-md flex items-center justify-between px-2 w-[150px] mr-16">
            <SearchIcon size={14} className="absolute top-[3px] left-1" />

            <input
              type="text"
              className="focus:outline-none pl-3 w-full text-sm"
            />
          </div>

          <CircleEllipsis />
          <FilePen />
          <Trash />
          <ArrowDownUp />
          <SlidersHorizontal />
        </div>
      </div>
    </nav>
  );
};

export default MaterialsTabsMenu;
