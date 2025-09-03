import Elephants from "@/assets/images/elephants.jpg";
import Rhinos from "@/assets/images/rhinos.jpg";
import Migration from "@/assets/images/migration.jpg";
import Elephants2 from "@/assets/images/elephants2.jpg";
import Lions from "@/assets/images/lions.jpg";

export interface Destination {
  id: string;
  subtitle?: string;
  name: string;
  slug: string;
  region: string;
  description: string;
  image: string; // Path or imported image asset
  highlights: string[];
  bestMonth?: string; // single recommended best month or short range
  bestMonths?: string[]; // array of best months
  wildlife: string[];
  rating: number;
  safariCount: number;
  activities: string[];
  accommodation: string[];
  uniqueFeatures: string[];
  detailedDescription: string;
}

export const destinations: Destination[] = [
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
    activities: [
      "Game Drives",
      "Hot Air Balloon Safaris",
      "Cultural Visits",
      "Night Game Drives",
    ],
    accommodation: [
      "Luxury Tented Camps",
      "Mid-range Lodges",
      "Budget Camps",
      "Mobile Camps",
    ],
    uniqueFeatures: [
      "Annual Great Migration",
      "Highest concentration of big cats",
      "Maasai cultural interaction",
      "Mara River crossings",
    ],
    detailedDescription:
      "The Maasai Mara National Reserve stands as Kenya's crown jewel, offering unparalleled wildlife experiences in the heart of Africa. This 1,510 square kilometer reserve is renowned worldwide for hosting the spectacular Great Migration, where over 1.5 million wildebeest and 400,000 zebras cross the treacherous Mara River between July and October. The reserve boasts the highest concentration of big cats in Africa, with over 95 species of mammals including all Big Five animals. The landscape features rolling grasslands, acacia woodlands, and the life-giving Mara River ecosystem.",
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
    activities: [
      "Game Drives",
      "Walking Safaris",
      "Bird Watching",
      "Cultural Visits",
      "Photography Tours",
    ],
    accommodation: [
      "Luxury Lodges",
      "Tented Camps",
      "Budget Lodges",
      "Campsites",
    ],
    uniqueFeatures: [
      "Mount Kilimanjaro backdrop",
      "Large elephant herds",
      "Diverse ecosystems",
      "Maasai community interaction",
    ],
    detailedDescription:
      "Amboseli National Park, covering 392 square kilometers, is globally famous for its large elephant herds set against the dramatic backdrop of Mount Kilimanjaro. The park's diverse ecosystems include savannah, wetlands, woodlands, and lakebed, supporting over 80 mammal species and 400 bird species. The underground water from Kilimanjaro's melting snow feeds permanent swamps that attract thousands of elephants, making it one of the best places in Africa to observe these majestic creatures up close. The park offers exceptional photography opportunities with its open plains and stunning mountain views.",
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
    activities: [
      "Game Drives",
      "River Walking",
      "Cultural Visits",
      "Bird Watching",
      "Camel Safaris",
    ],
    accommodation: [
      "Luxury Tented Camps",
      "Mid-range Lodges",
      "Eco-lodges",
      "Budget Camps",
    ],
    uniqueFeatures: [
      "Samburu Special Five",
      "Ewaso Nyiro River ecosystem",
      "Semi-arid landscapes",
      "Authentic cultural experiences",
    ],
    detailedDescription:
      "Samburu National Reserve, together with Buffalo Springs and Shaba reserves, forms a unique 300 square kilometer ecosystem in Kenya's northern frontier. This semi-arid landscape is home to the 'Samburu Special Five' - Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and Beisa oryx - species found nowhere else in Kenya. The life-giving Ewaso Nyiro River attracts diverse wildlife including elephants, lions, leopards, and over 450 bird species. The reserve offers authentic cultural interactions with the Samburu people, known for their distinctive customs and colorful traditional attire.",
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
    activities: [
      "Game Drives",
      "Rock Climbing",
      "River Walks",
      "Bird Watching",
      "Photography",
    ],
    accommodation: [
      "Safari Lodges",
      "Tented Camps",
      "Self-catering Bandas",
      "Campsites",
    ],
    uniqueFeatures: [
      "Red-dusted elephants",
      "Mudanda Rock viewpoint",
      "Galana River ecosystem",
      "Vast untamed wilderness",
    ],
    detailedDescription:
      "Tsavo East National Park, covering 13,747 square kilometers, is one of Kenya's largest and oldest national parks. Famous for its red elephants that dust themselves with the park's iron-rich soil, Tsavo East offers a true wilderness experience with endless horizons and diverse landscapes. The Galana River provides a vital water source, creating an oasis that attracts large herds of elephants, buffalos, and various antelope species. Mudanda Rock serves as a natural water catchment and offers spectacular views over the park's vast plains.",
  },
  {
    id: "tsavo-west",
    name: "Tsavo West National Park",
    subtitle: "Diverse Landscapes",
    slug: "tsavo-west",
    region: "Coast Province",
    description:
      "A park of incredible diversity with volcanic landscapes, natural springs, and the famous Mzima Springs with underwater viewing chamber.",
    image: Rhinos,
    highlights: [
      "Mzima Springs",
      "Volcanic Landscapes",
      "Rhino Sanctuary",
      "Underwater Viewing",
    ],
    bestMonth: "Jun-Oct, Dec-Mar",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb", "Mar"],
    wildlife: ["Black Rhinos", "Elephants", "Lions", "Leopards", "Hippos"],
    rating: 4.5,
    safariCount: 6,
    activities: [
      "Game Drives",
      "Mzima Springs Visit",
      "Cave Exploration",
      "Rock Climbing",
      "Bird Watching",
    ],
    accommodation: [
      "Luxury Lodges",
      "Mid-range Camps",
      "Kilaguni Serena Safari Lodge",
      "Self-catering Options",
    ],
    uniqueFeatures: [
      "Mzima Springs underwater viewing",
      "Volcanic rock formations",
      "Shetani Lava Flow",
      "Ngulia Rhino Sanctuary",
    ],
    detailedDescription:
      "Tsavo West National Park spans 9,065 square kilometers and showcases Kenya's most diverse landscapes. The park features volcanic hills, lava flows, natural springs, and dense vegetation contrasting with its eastern counterpart. Mzima Springs produces 50 million gallons of crystal clear water daily, complete with an underwater viewing chamber for observing hippos and crocodiles. The Ngulia Rhino Sanctuary protects over 70 black rhinos, while the park's varied habitats support over 600 bird species and diverse wildlife.",
  },
  {
    id: "lake-nakuru",
    name: "Lake Nakuru National Park",
    subtitle: "Flamingo Paradise",
    slug: "lake-nakuru",
    region: "Rift Valley",
    description:
      "A bird lover's paradise famous for its flamingos, rhinos, and diverse wildlife in a compact park setting.",
    image: Migration,
    highlights: [
      "Pink Flamingos",
      "White Rhinos",
      "Baboon Cliff",
      "Compact Size",
    ],
    bestMonth: "Jun-Oct, Nov-Dec",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wildlife: ["Flamingos", "White Rhinos", "Lions", "Leopards", "Buffalos"],
    rating: 4.5,
    safariCount: 7,
    activities: [
      "Game Drives",
      "Bird Watching",
      "Scenic Viewpoints",
      "Photography",
      "Nature Walks",
    ],
    accommodation: ["Safari Lodges", "Budget Lodges", "Campsites", "Bandas"],
    uniqueFeatures: [
      "Mass flamingo gatherings",
      "Rhino sanctuary success story",
      "Baboon Cliff viewpoint",
      "Compact size for day trips",
    ],
    detailedDescription:
      "Lake Nakuru National Park encompasses 188 square kilometers of diverse ecosystems centered around the alkaline Lake Nakuru. Famous for hosting up to 2 million flamingos during peak seasons, the park is a UNESCO World Heritage Site and Important Bird Area. The successful rhino conservation program has made it one of the few places to see both black and white rhinos. With over 450 bird species, acacia woodlands, and spectacular viewpoints from Baboon Cliff, it offers excellent wildlife viewing in a compact area perfect for day trips from Nairobi.",
  },
  {
    id: "mount-kenya",
    name: "Mount Kenya National Park",
    subtitle: "Africa's Second Highest Peak",
    slug: "mount-kenya",
    region: "Central Kenya",
    description:
      "A UNESCO World Heritage Site combining mountain climbing adventures with unique high-altitude wildlife and pristine alpine ecosystems.",
    image: Elephants,
    highlights: [
      "Mountain Climbing",
      "Alpine Wildlife",
      "Unique Ecosystems",
      "UNESCO Heritage",
    ],
    bestMonth: "Dec-Mar, Jul-Oct",
    bestMonths: ["Dec", "Jan", "Feb", "Mar", "Jul", "Aug", "Sep", "Oct"],
    wildlife: [
      "Mountain Bongo",
      "Black & White Colobus",
      "Elephants",
      "Buffalo",
      "Sykes Monkeys",
    ],
    rating: 4.3,
    safariCount: 4,
    activities: [
      "Mountain Climbing",
      "Trekking",
      "Wildlife Viewing",
      "Bird Watching",
      "Forest Walks",
    ],
    accommodation: [
      "Mountain Lodges",
      "Alpine Huts",
      "Forest Camps",
      "Self-catering Bandas",
    ],
    uniqueFeatures: [
      "Africa's second highest peak",
      "Unique alpine ecosystems",
      "Mountain bongo antelope",
      "Glacial valleys and lakes",
    ],
    detailedDescription:
      "Mount Kenya National Park protects the region around Mount Kenya, Africa's second highest peak at 5,199 meters. This UNESCO World Heritage Site features diverse ecosystems from montane forest to alpine zones, supporting unique species like the endangered mountain bongo antelope. The park offers world-class trekking and climbing opportunities with multiple routes to Point Lenana (4,985m) and technical climbs to Batian and Nelion peaks. The pristine mountain environment supports over 130 bird species and diverse high-altitude wildlife.",
  },
  {
    id: "nairobi-national-park",
    name: "Nairobi National Park",
    subtitle: "Wilderness at the City's Edge",
    slug: "nairobi-national-park",
    region: "Nairobi",
    description:
      "Kenya's first national park and the world's only wildlife park within a capital city, offering incredible wildlife viewing against Nairobi's skyline.",
    image: Lions,
    highlights: [
      "City Skyline Views",
      "Black Rhinos",
      "Lion Pride",
      "Easy Access",
    ],
    bestMonth: "Jun-Oct, Jan-Mar",
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb", "Mar"],
    wildlife: ["Black Rhinos", "Lions", "Cheetahs", "Giraffes", "Zebras"],
    rating: 4.2,
    safariCount: 8,
    activities: [
      "Game Drives",
      "Animal Orphanage Visit",
      "Nature Walks",
      "Bird Watching",
      "Photography",
    ],
    accommodation: [
      "Day Trip Destination",
      "Nairobi City Hotels",
      "Nearby Safari Camps",
    ],
    uniqueFeatures: [
      "World's only capital city park",
      "Nairobi skyline backdrop",
      "Successful rhino sanctuary",
      "Perfect for short safaris",
    ],
    detailedDescription:
      "Nairobi National Park, established in 1946 as Kenya's first national park, covers 117 square kilometers of pristine savannah just 7 kilometers from Nairobi's city center. This unique park offers the extraordinary experience of viewing wildlife against the backdrop of a modern city skyline. Home to over 100 mammal species including endangered black rhinos, lions, cheetahs, and giraffes, it's perfect for day trips and short safaris. The park also houses the David Sheldrick Elephant Orphanage and serves as an important breeding ground for various species.",
  },
];
