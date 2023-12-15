// Types
import { Route } from "@/utils/routes";

interface NavItemProps {
  route: Route;
}

const NavItem: React.FC<NavItemProps> = ({ route }) => {
  return (
    <>
      <span className="material-symbols-outlined text-2xl">{route.icon}</span>
      <span className="text-sm font-medium">{route.name}</span>
    </>
  );
};

export default NavItem;
