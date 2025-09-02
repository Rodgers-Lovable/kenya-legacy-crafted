import Elephants from '@/assets/images/elephants.jpg';
import Rhinos from '@/assets/images/rhinos.jpg';
import Migration from '@/assets/images/migration.jpg';
import Elephants2 from '@/assets/images/elephants2.jpg';
import Lions from '@/assets/images/lions.jpg';

export const destinations = [
  {
    id: "maasai-mara",
    subtitle: "The Great Migration",
    name: "Maasai Mara National Reserve",
    slug: "maasai-mara",
    region: "Rift Valley",
    description:
      "Home to the Great Migration and incredible wildlife diversity, the Masai Mara is Kenya's most famous safari destination.",
    image: Lions,
    highlights: [
      "Great Migration",
      "Big Five",
      "Maasai Culture",
      "Hot Air Balloons",
    ],
    bestMonth: "Jul-Oct",
    bestMonths: ["Jul", "Aug", "Sep", "Oct"],
    wildlife: ["Lions", "Elephants", "Wildebeest", "Zebras", "Cheetahs"],
    rating: 4.9,
    safariCount: 12,
  },
  {
    id: "amboseli",
    name: "Amboseli National Park",
    subtitle: "Elephant Paradise",
    slug: "amboseli",
    region: "Southern Kenya",
    description:
      "Famous for its large elephant herds and stunning views of Mount Kilimanjaro, Amboseli offers incredible photography opportunities.",
    image: Elephants,
    highlights: [
      "Mount Kilimanjaro Views",
      "Elephant Herds",
      "Photography",
      "Swamplands",
    ],
    bestMonth: "Jun-Oct, Jan-Mar",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
    wildlife: ["Elephants", "Lions", "Cheetahs", "Hippos", "Buffalos"],
    rating: 4.8,
    safariCount: 8,
  },
  {
    id: "samburu",
    name: "Samburu National Reserve",
    subtitle: "Unique Wildlife",
    slug: "samburu",
    region: "Northern Kenya",
    description:
      "A unique ecosystem in Kenya's northern frontier, home to rare species not found elsewhere in the country.",
    image: Rhinos,
    highlights: [
      "Unique Wildlife",
      "Samburu Culture",
      "Ewaso Nyiro River",
      "Desert Landscapes",
    ],
    bestMonth: "Jun-Oct",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Dec", "Jan", "Feb"],
    wildlife: [
      "Grevy's Zebra",
      "Reticulated Giraffe",
      "Somali Ostrich",
      "Gerenuk",
      "Beisa Oryx",
    ],
    rating: 4.7,
    safariCount: 6,
  },
  {
    id: "tsavo-east",
    name: "Tsavo East National Park",
    subtitle: "Wilderness Adventure",
    bestMonth: "May-Oct",
    slug: "tsavo-east",
    region: "Coast Province",
    description:
      "One of Kenya's largest parks, famous for its red elephants and vast wilderness areas perfect for adventure seekers.",
    image: Elephants2,
    highlights: [
      "Red Elephants",
      "Galana River",
      "Mudanda Rock",
      "Vast Wilderness",
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
    wildlife: ["Red Elephants", "Lions", "Leopards", "Rhinos", "Hippos"],
    rating: 4.6,
    safariCount: 5,
  },
  {
    id: "lake-nakuru",
    name: "Lake Nakuru National Park",
    slug: "lake-nakuru",
    region: "Rift Valley",
    description:
      "A bird lover's paradise famous for its flamingos, rhinos, and diverse wildlife in a compact park setting.",
    image: "/api/placeholder/600/400",
    highlights: [
      "Pink Flamingos",
      "White Rhinos",
      "Baboon Cliff",
      "Compact Size",
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wildlife: ["Flamingos", "White Rhinos", "Lions", "Leopards", "Buffalos"],
    rating: 4.5,
    safariCount: 7,
  },
  {
    id: "meru",
    name: "Meru National Park",
    slug: "meru",
    region: "Eastern Kenya",
    description:
      "A hidden gem offering pristine wilderness and the famous Elsa the Lioness connection from 'Born Free'.",
    image: "/api/placeholder/600/400",
    highlights: [
      "Born Free Story",
      "Pristine Wilderness",
      "Tana River",
      "Diverse Ecosystems",
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Feb"],
    wildlife: ["Lions", "Elephants", "Rhinos", "Leopards", "Cheetahs"],
    rating: 4.4,
    safariCount: 4,
  },
];
