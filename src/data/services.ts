import { AirportPickupIcon , CarRentalIcon, TravelPackage } from "../components/ServiceIcons";

export const services = [
  {
    id: 1,
    name: "24 x 7 Pickup",
    description: "Convenient pickup service from airports, railway stations, and bus stands available 24 X 7.",
    image: "/images/airport-image.webp",
    icon: AirportPickupIcon,
  },
  {
    id: 2,
    name: "Car Rental",
    description: "Affordable rental cars for the journey in your mind.",
    location: "KAHIN BHI GADDI LO",
    image: "/images/car-rental.webp",
    icon: CarRentalIcon,
  },
  {
    id: 3,
    name: "Packages",
    description: "Exciting and affordable travel packages for your next adventure.",
    image: "/images/travel-package.png",
    icon: TravelPackage , // Replace with a suitable icon if available
  },
];