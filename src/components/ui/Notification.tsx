// UI Components
import Button from "./Button";
import Image from "next/image";

// Types
import type { Notification } from "@/utils/types";

interface NotificationItemProps {
  active: string;
  item: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  item,
  active,
}) => {
  return (
    <div
      className={`p-5 flex items-center gap-4 border-b border-gray-200 duration-300 relative ${
        item.type === active ? "bg-gray-100" : ""
      }`}
    >
      {item.avatar && (
        <div className="h-[60px] w-[60px] flex items-center justify-center">
          <Image
            src={item.avatar}
            className="rounded-full"
            height={60}
            width={60}
            alt="avatar"
          />
        </div>
      )}
      <div>
        <h3 className="text-xl font-medium max-sm:text-base">{item.title}</h3>
        {(item.subtext || item.isCharge) && (
          <div className="text-gray-600 font-medium flex items-center gap-2 max-sm:text-sm mt-2">
            {item.amount && (
              <>
                <span className="font-semibold">${item.amount}</span>
                <div className="flex flex-col gap-0.5">
                  <div className="bg-gray-600 h-0.5 w-[1px]" />
                  <div className="bg-gray-600 h-0.5 w-[1px]" />
                  <div className="bg-gray-600 h-0.5 w-[1px]" />
                  <div className="bg-gray-600 h-0.5 w-[1px]" />
                </div>
              </>
            )}
            {item.isCharge && (
              <span className="material-symbols-outlined text-primary">
                credit_card
              </span>
            )}
            <p>{item.subtext || item.isCharge?.text}</p>
          </div>
        )}
        {item.hasActions && (
          <div className="flex items-center gap-3 mt-3">
            <Button variant="primary">Review</Button>
            <Button variant="plain">Decline</Button>
          </div>
        )}
        <p className="absolute bottom-4 right-4 font-medium text-gray-500 max-sm:text-sm max-sm:right-2 max-sm:bottom-2">
          {item.timeElapsed}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
