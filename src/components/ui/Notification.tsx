// UI Components
import { IoCardOutline } from "react-icons/io5";
import Button from "./Button";
import Image from "next/image";

// Types
import type { Notification } from "@/utils/types";

interface NotificationItemProps {
  active: string;
  item: Notification;
  isMini?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  item,
  isMini,
}) => {
  return (
    <div
      className={`p-5 flex items-center gap-4 border-b border-gray-200 duration-300 relative ${
        item.unread ? "bg-gray-100" : ""
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
        <h3
          className={`font-medium max-sm:text-base ${
            isMini ? "text-base" : "text-xl"
          }`}
        >
          {item.title}
        </h3>
        {(item.subtext || item.isCharge) && (
          <div
            className={`text-gray-600 font-medium flex items-center gap-2 max-sm:text-sm ${
              isMini ? "text-sm mt-1" : "mt-1"
            }`}
          >
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
              <IoCardOutline className="text-2xl text-primary" />
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
        <p
          className={`absolute bottom-4 right-4 font-medium text-gray-500 max-sm:text-sm max-sm:right-2 max-sm:bottom-2 ${
            isMini && "text-sm"
          }`}
        >
          {item.timeElapsed}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
