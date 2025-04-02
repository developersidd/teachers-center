"use client";
import { Download, Ellipsis, Trash } from "lucide-react";
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
  const activeCls = "border-b-4 border-blue-800";
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
                className={`${isActive ? activeCls : ""}  
                 p-4 capitalize text-blue-900 `}
              >
                <Link href={tabPath}>{name}</Link>
              </li>
            );
          })}
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
