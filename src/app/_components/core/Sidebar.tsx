import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-[80px] fixed top-[83px] left-0 sm:w-[180px] bg-white border-r border-gray-300 h-full hidden sm:block">
      <ul>
        <li>
          <Link href={"/tech"}> Tech </Link>
        </li>
        <li>
          <Link href={"/dashboard"}> Dashboard </Link>
        </li>
        <li>
          <div className="">
            <h3> Manage Batch </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"/all-batches"}> All Batches </Link>
              </li>
              <li>
                <Link href={"/resource"}> Resource </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href={"/earnings"}> My Earnings </Link>
        </li>
        <li>
          <Link href={"/timetable"}> Timetable </Link>
        </li>
        <li>
          <Link href={"/analytics"}> Analytics </Link>
        </li>

        <li className="mt-auto">
          <Link href={"/profile"}> Manage Profile </Link>
        </li>
        <li className="mt-auto">
          <Link href={"/settings"}> Settings </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
