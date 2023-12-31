"use client"
// UI Components
import { IoCalendarOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import CostSummary from "./CostSummary";
import Image from "next/image";
import IconText from "@/components/IconText";
import Policies from "./Policies";

// Fonts
import { Playfair_Display } from "next/font/google";

// Utils
import classNames from "classnames";
import data from "./data";

// Types
import { BookingData } from "@/utils/types";

const font = Playfair_Display({ subsets: ["latin"], weight: "600" });

const BookingDetails = () => {
  const booking_data = data as BookingData;

  return (
    <div className="border-l border-r border-gray-200 min-h-screen max-w-3xl px-0 mx-auto">
      <div className="p-8 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Booking Details.</h3>
        <div className="mt-10 flex items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:mt-7">
          <Image
            src={booking_data.imageSrc}
            alt="logo"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <div>
            <h4 className="text-lg font-semibold">{booking_data.title}</h4>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-16 w-16 rounded-md bg-white-shade flex items-center justify-center border border-gray-200">
                <span
                  className={classNames(
                    "text-gray-800 text-3xl",
                    font.className
                  )}
                >
                  M
                </span>
              </div>
              <div>
                <h4 className="text-gray-800 text-lg font-semibold">
                  {booking_data.stylistName}
                </h4>
                <p className="text-gray-500 font-semibold text-sm">
                  Owned By:{" "}
                  <span className="text-gray-800">
                    {booking_data.ownerName}
                  </span>
                </p>
                <p className="text-gray-500 font-semibold text-sm">
                  Contact:{" "}
                  <span className="text-gray-800">{booking_data.contact}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 flex items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:mt-5">
          <IconText title={booking_data.date} icon={IoCalendarOutline} />
          <div className="flex items-center gap-8">
            <IconText title={booking_data.time} icon={IoTimeOutline} />
            <IconText title={booking_data.location} icon={IoLocationOutline} />
          </div>
        </div>
      </div>
      <Policies policies={booking_data.policies} />
      <CostSummary />
    </div>
  );
};

export default BookingDetails;
