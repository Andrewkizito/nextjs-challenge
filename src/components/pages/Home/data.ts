// Icons
import { IoBan, IoCalendarOutline, IoCardOutline } from "react-icons/io5";

const data = {
  imageSrc: "/profile.png",
  title: "Natural Weave and charcoal black",
  stylistName: "Mie's Stylist Parlor",
  salonName: "Mie's Stylist Parlor",
  ownerName: "Angella Valdez",
  contact: "(276) 496-7367",
  date: "Friday, 20th February 2023",
  time: "10:00 am",
  location: "Chicago",
  policies: [
    {
      title: "Cancellation Policy",
      icon: IoCalendarOutline,
      description:
        "You will not be charged if you cancel or modify this booking at least 48 hours before your original booking start date.",
    },
    {
      title: "No-Show Policy",
      icon: IoBan,
      description:
        "You will be charged 50% of the total booking amount If you don't show up for your appointment.",
    },
    {
      title: "Deposit Policy",
      icon: IoCardOutline,
      description: "A $50 class deposit will be charged upon booking.",
    },
  ],
};

export default data;
