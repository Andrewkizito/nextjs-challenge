// Types
import type { Notification } from "@/utils/types";

const notifications: Notification[] = [
  {
    title: "Mie's beauty parlour accepted your booking req...",
    subtext: "For June 20th, 2023",
    amount: 500,
    type: "business",
    avatar: "/eclipse.png",
    timeElapsed: "5m",
    unread: true,
  },
  {
    title: "Deposit sent to Jane's beauty Parlour for medium short braids.",
    subtext: "For June 20th, 2023",
    amount: 50,
    type: "business",
    timeElapsed: "10m",
    unread: true,
  },
  {
    title: "Rebecca Wright  sent you a message.",
    subtext: "Hey are you available to do these conrows for me.....",
    type: "personal",
    avatar: "/user.jpeg",
    timeElapsed: "20m",
    unread: true,
  },
  {
    title: "You have cancelled your Natural glam look appointment.",
    type: "business",
    isCharge: {
      text: "$70 Charged",
    },
    timeElapsed: "30m",
  },
  {
    title: "Samantha accepted your booking request",
    subtext: "For June 20th, 2023",
    amount: 500,
    type: "business",
    avatar: "/user-2.png",
    timeElapsed: "1h",
  },
  {
    title: "Mie's beauty parlour accepted your booking req...",
    type: "business",
    avatar: "/eclipse.png",
    hasActions: true,
    timeElapsed: "1h 30m",
  },
  {
    title: "Rebecca Wright  sent you a message.",
    subtext: "Hey are you available to do these conrows for me.....",
    type: "personal",
    avatar: "/user.jpeg",
    timeElapsed: "1h 45m",
  },
];

export default notifications;
