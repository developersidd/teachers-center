"use client";
import { Download, PlusCircle, Trash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const materialsTabsMenu = ["content", "course-details", "revision"];

const MaterialsTabsMenu = () => {
  const pathname = usePathname();
  console.log(" deep pathname:", pathname);
  return (
    <nav>
      <div className="border-b border-gray-500 flex items-center justify-between px-5">
        <ul className="flex items-center justify-between  gap-12 ">
          {materialsTabsMenu.map((tab) => (
            <li
              key={tab}
              className={`${
                pathname ===
                  `/all-batches/materials${
                    tab !== "content" ? `/${tab}` : ""
                  }` && "border-b-4 border-black"
              }  p-4 capitalize text-black`}
            >
              <Link
                href={`/all-batches/materials${tab !== "content" ? `/${tab}` : ""}`}
              >
                {tab}
              </Link>
            </li>
          ))}
          <li className="border size-8 rounded-full flex items-center justify-center bg-white shadow">
            <PlusCircle />
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

export default MaterialsTabsMenu;
