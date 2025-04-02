"use client";
import { Download, Ellipsis, Trash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabsMenu = [
  "students",
  "announcements",
  "materials",
  "homework",
  "attendance",
  "discussion",
];

const TabsMenu = () => {
  const pathname = usePathname();
  console.log(" pathname:", pathname);
  return (
    <nav>
      <div className="border-b border-gray-500 flex items-center justify-between px-5">
        <ul className="flex items-center justify-between  gap-12 ">
          {tabsMenu.map((tab) => (
            <li
              key={tab}
              className={`${
                pathname ===
                  `/all-batches${tab !== "students" ? `/${tab}` : ""}` &&
                "border-b-4 border-blue-800"
              }  p-4 capitalize text-blue-900`}
            >
              <Link href={`/all-batches/${tab !== "students" ? tab : ""}`}>
                {tab}
              </Link>
            </li>
          ))}
          <li className="border size-8 rounded-full flex items-center justify-center bg-white shadow">
            <Ellipsis />
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Trash />
          <Download />
        </div>
      </div>
    </nav>
  );
};

export default TabsMenu;
