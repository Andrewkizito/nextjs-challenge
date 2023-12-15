"use client";

// Hooks
import React, { useMemo, useState } from "react";

// UI Components
import Dropdown, { type Option } from "@/components/Dropdown";
import NotificationItem from "@/components/Notification";

// Utils
import notifications from "./data";

const NotificationsView = () => {
  const [active, setActive] = useState<string>("personal");

  const options = useMemo(() => {
    const summary: Record<"personal" | "business", number> = {
      personal: 0,
      business: 0,
    };

    for (let i = 0; i < notifications.length; i++) {
      const notification = notifications[i];
      summary[notification.type] += 1;
    }

    const options: Option[] = [
      { title: "Personal", count: summary.personal, color: "bg-primary" },
      { title: "Business", count: summary.business, color: "bg-green-600" },
    ];

    return options;
  }, []);

  return (
    <div className="border-l border-r border-gray-200 min-h-screen max-w-3xl px-0 mx-auto">
      <div className="p-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <Dropdown options={options} active={active} setActive={setActive} />
      </div>
      {notifications.map((item, i) => (
        <NotificationItem key={i} item={item} active={active} />
      ))}
    </div>
  );
};

export default NotificationsView;
