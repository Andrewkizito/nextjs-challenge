// UI Components
import Link from "next/link";

// Types
import { Route } from "@/utils/routes";

interface SidebarProps {
  open: boolean;
  routes: Route[];
  activePathname: string;
}

const Sidebar: React.FC<SidebarProps> = ({ routes, open, activePathname }) => {
  return (
    <div
      className={`fixed bg-white w-64 h-full duration-500 p-5 z-30 right-0 ${
        open ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <ul className="flex flex-col gap-4 items-start">
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              href={route.path}
              className={`flex items-center gap-2 duration-300 hover:text-primary ${
                activePathname === route.path ? "text-primary" : "text-gray-500"
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
  );
};

export default Sidebar;
