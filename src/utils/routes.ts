// Notifications data
import notifications from "@/page-components/Notifications/data";

// Icons
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";

// Types
import { IconType } from "react-icons";

interface Route {
  name: string;
  path: string;
  icon: IconType;
  dropdown?: {
    items: any[];
  };
}

const appRoutes: Route[] = [
  {
    name: "Home",
    path: "/",
    icon: IoHomeOutline,
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: IoCalendarOutline,
  },
  {
    name: "Following",
    path: "/following",
    icon: IoPersonAddOutline,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: VscBellDot,
    dropdown: {
      items: notifications.slice(0, 6),
    },
  },
];

export type { Route };

export default appRoutes;
