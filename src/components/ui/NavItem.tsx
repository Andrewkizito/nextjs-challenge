// Types
import { Route } from "@/utils/routes";

interface NavItemProps {
  route: Route;
}

const NavItem: React.FC<NavItemProps> = ({ route }) => {
  return (
    <>
      <route.icon className="text-2xl" />
      <span className="text-sm font-medium">{route.name}</span>
    </>
  );
};

export default NavItem;
