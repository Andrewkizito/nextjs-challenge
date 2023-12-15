interface Policy {
  title: string;
  icon: string;
  description: string;
}

interface BookingData {
  imageSrc: string;
  title: string;
  stylistName: string;
  salonName: string;
  ownerName: string;
  contact: string;
  date: string;
  time: string;
  location: string;
  policies: Policy[];
}

interface Notification {
  type: "personal" | "business";
  title: string;
  timeElapsed: string;
  subtext?: string;
  amount?: number;
  avatar?: string;
  isCharge?: {
    text: string;
  };
  hasActions?: boolean;
}

export type { BookingData, Policy, Notification };
