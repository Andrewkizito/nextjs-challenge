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
  policies: Policy[]
}

export type { BookingData };
