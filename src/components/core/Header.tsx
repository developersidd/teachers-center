import { BellRing, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-gray-300 sticky top-0 left-0 right-0 w-full bg-white z-10 ">
      <div className="px-12  mx-auto flex justify-between items-center p-4 ">
        <div>
          <Link href="/" className="text-2xl">
            Teacher&apos;s Center
          </Link>
        </div>
        <nav className="flex justify-between items-center gap-5">
          <ul className="flex gap-8 items-center">
            <li>
              <Link href={"/contact"}>
                <Headset size={20} />
              </Link>
            </li>
            <li>
              <Link href={"/notifications"}>
                <BellRing size={20} />
              </Link>
            </li>
          </ul>
          <div className="w-[1px] h-[50px] bg-black mx-4" />
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full  ">
              <Image
                className=""
                src="/assets/images/teacher.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <h5 className="font-semibold">Sir 1</h5>
              <p>Chemistry | Level 3</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
