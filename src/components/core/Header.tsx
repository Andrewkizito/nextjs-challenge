"use client";
// UI Components
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

// Utils
import appRoutes from "@/utils/routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="h-24 shadow-sm border-b border-gray-300 flex items-center justify-center fixed w-full z-30 bg-white max-md:h-16">
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
              <li key={route.name}>
                <Link
                  href={route.path}
                  className={`flex flex-col items-center justify-center gap-0.5 duration-300 hover:text-primary ${
                    pathname === route.path ? "text-primary" : "text-gray-500"
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {route.icon}
                  </span>
                  <span className="text-sm font-medium">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <span className="material-symbols-outlined text-2xl md:hidden">menu</span>
        </div>
      </Container>
    </div>
  );
};

export default Header;