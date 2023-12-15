// UI Components
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

// Utils
import appRoutes from "@/utils/routes";

const Header = () => {
  return (
    <div className="h-24 shadow-sm border-b border-gray-300 flex items-center justify-center fixed w-full z-30 bg-white">
      <Container className="flex items-center justify-between">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <div className="flex items-center gap-14">
          <div className="flex items-center w-96 border border-gray-300 rounded">
            <div className="h-12 px-5 flex items-center justify-center">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              type="text"
              className="w-full h-full outline-none flex-1 text-base placeholder:text-sm placeholder:text-gray-700 placeholder:font-semibold"
              placeholder="search"
            />
          </div>
          <ul className="flex items-center gap-10">
            {appRoutes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  className="flex flex-col items-center justify-center gap-0.5 duration-300 text-gray-400 hover:text-primary"
                >
                  <span className="material-symbols-outlined text-2xl">
                    {route.icon}
                  </span>
                  <span className="text-sm font-medium">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
