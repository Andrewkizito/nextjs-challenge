interface Route {
  name: string;
  path: string;
  icon: string;
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
  },
];

export type { Route }

export default appRoutes;
