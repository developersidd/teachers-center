"use client";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(() => {
    if (pathname?.startsWith("/all-batches")) {
      return true;
    }
    return false;
  });
  return (
    <aside className="w-[80px] fixed top-[83px] left-0 sm:w-[180px] bg-white  h-full hidden sm:block">
      <ul className="flex flex-col gap-4 pt-4 h-[calc(100vh-100px)] ">
        <li className="mb-8">
          <Link
            className="ml-3 flex items-center justify-between"
            href={"/tech"}
          >
            <span> Tech </span>
            <div className="w-7 h-7 mr-3 flex items-center justify-center rounded-full bg-black">
              <ArrowLeft className="text-white" size={22} />
            </div>
          </Link>
        </li>
        <li className="mb-4">
          <Link className="ml-3" href={"/dashboard"}>
            Dashboard
          </Link>
        </li>
        <li className="w-full">
          <button
            className="ml-3 flex items-center gap-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Manage Batch</span>
            {isOpen ? (
              <ChevronUp className="text-gray-500" />
            ) : (
              <ChevronDown className="text-gray-500" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
              isOpen ? "max-h-[350px]" : "max-h-0"
            }`}
          >
            <ul className=" mt-2">
              <li
                className={`${
                  pathname?.startsWith("/all-batches") && "bg-blue-200"
                } p-2 rounded-r `}
              >
                <Link className={`ml-3 `} href={"/all-batches/"}>
                  All Batches
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/resource" && "bg-blue-200"
                } p-2 rounded-r `}
              >
                <Link className="ml-3   rounded-r " href={"/resource"}>
                  Resource
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link className="ml-3" href={"/earnings"}>
            My Earnings
          </Link>
        </li>
        <li>
          <Link className="ml-3" href={"/timetable"}>
            Timetable
          </Link>
        </li>
        <li>
          <Link className="ml-3" href={"/analytics"}>
            Analytics
          </Link>
        </li>

        <li className="mt-auto">
          <Link className="ml-3" href={"/profile"}>
            Manage Profile
          </Link>
        </li>
        <li className="">
          <Link className="ml-3" href={"/settings"}>
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
