import notifications from "@/page-components/Notifications/data";

interface Route {
  name: string;
  path: string;
  icon: string;
  dropdown?: {
    items: any[];
  };
}

const appRoutes: Route[] = [
  {
    name: "Home",
    path: "/",
    icon: "home",
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: "calendar_month",
  },
  {
    name: "Following",
    path: "/following",
    icon: "person_add",
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: "notifications_unread",
    dropdown: {
      items: notifications.slice(0,6),
    },
  },
];

export type { Route };

export default appRoutes;
