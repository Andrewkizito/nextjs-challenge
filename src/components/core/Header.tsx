"use client";

// Hooks
import { useState } from "react";
import { usePathname } from "next/navigation";

// UI Components
import Backdrop from "../ui/Backdrop";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../ui/NavItem";
import NotificationItem from "../ui/Notification";
import Sidebar from "./Sidebar";

// Utils
import appRoutes from "@/utils/routes";

const Header = () => {
  const pathname = usePathname();
  const [openSidebar, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="h-24 shadow-sm border-b border-gray-300 flex items-center justify-center fixed w-full z-20 bg-white max-md:h-16">
        <Container className="flex items-center justify-between">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <div className="flex items-center gap-14 max-lg:gap-10">
            <div className="flex items-center w-96 border border-gray-300 rounded max-md:hidden max-lg:w-48">
              <div className="h-12 px-5 flex items-center justify-center">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                type="text"
                className="w-full h-full outline-none flex-1 text-base placeholder:text-sm placeholder:text-gray-700 placeholder:font-semibold"
                placeholder="search"
              />
            </div>
            <ul className="flex items-center gap-10 max-md:hidden max-lg:gap-5">
              {appRoutes.map((route) => (
                <li key={route.name} className="relative group">
                  <Link
                    href={route.dropdown ? "#" : route.path}
                    className={`flex flex-col items-center justify-center gap-0.5 duration-300 hover:text-primary ${
                      pathname === route.path ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    <NavItem route={route} />
                  </Link>
                  {route.dropdown && route.path === "/notifications" && (
                    <div className="absolute top-[133%] right-0 border border-gray-200 w-wide h-auto bg-white z-20 opacity-0 invisible translate-y-5 duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                      {route.dropdown.items.map((item, i) => (
                        <NotificationItem
                          isMini
                          key={i}
                          item={item}
                          active=""
                        />
                      ))}
                      <Link href={route.path}>
                        <button className="bg-primary border-none text-gray-800 font-semibold py-3 text-sm w-full bg-opacity-20 duration-300 hover:bg-opacity-50">
                          See All
                        </button>
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <span
              className="material-symbols-outlined text-2xl md:hidden"
              onClick={setOpen.bind(null, true)}
            >
              menu
            </span>
          </div>
        </Container>
      </div>
      <Backdrop open={openSidebar} onClick={setOpen.bind(null, false)} />
      <Sidebar
        open={openSidebar}
        routes={appRoutes}
        activePathname={pathname}
        onClose={setOpen}
      />
    </>
  );
};

export default Header;
