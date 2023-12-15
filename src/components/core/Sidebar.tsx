// UI Components
import Link from "next/link";

// Types
import { Route } from "@/utils/routes";
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  open: boolean;
  routes: Route[];
  activePathname: string;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  routes,
  open,
  activePathname,
  onClose,
}) => {
  return (
    <div
      className={`fixed bg-white w-64 h-full duration-500 p-5 z-30 right-0 ${
        open ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div className="relative">
        <span
          className="material-symbols-outlined absolute right-0 text-2xl text-gray-700"
          onClick={() => onClose(false)}
        >
          close
        </span>
        <ul className="flex flex-col gap-4 items-start">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.path}
                className={`flex items-center gap-2 duration-300 hover:text-primary ${
                  activePathname === route.path
                    ? "text-primary"
                    : "text-gray-500"
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {route.icon}
                </span>
                <span className="text-sm font-medium">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
