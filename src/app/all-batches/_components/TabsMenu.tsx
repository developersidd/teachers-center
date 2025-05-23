"use client";
import { CircleEllipsis, Download, Trash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabsMenu = [
  { name: "students", path: "" },
  { name: "announcements", path: "/announcements" },
  { name: "materials", path: "/materials" },
  { name: "homework", path: "/homework" },

  { name: "attendance", path: "/attendance" },
  { name: "discussion", path: "/discussion" },
];

const TabsMenu = () => {
  const pathname = usePathname();
  console.log(" pathname:", pathname);
  return (
    <nav>
      <div className="border-b border-gray-500 flex items-center justify-between px-5">
        <ul className="flex items-center justify-between  gap-12 ">
          {tabsMenu.map(({ name, path }) => {
            const tabPath = `/all-batches${path}`;
            const isActive =
              name === "students"
                ? pathname === tabPath
                : pathname.startsWith(tabPath);
            return (
              <li
                key={name}
                className={`${isActive ? "border-blue-800" : "border-gray-50"}  
                 px-4 py-3.5 capitalize text-blue-900 border-b-4`}
              >
                <Link href={tabPath}>{name}</Link>
              </li>
            );
          })}
          <li className="">
            <CircleEllipsis />
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
