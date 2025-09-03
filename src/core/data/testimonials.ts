export interface Testimonial {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  safari: string;
  verified: boolean;
  photos?: number;
  avatar?: string;
}

export interface PlatformRating {
  name: string;
  rating: number;
  reviews: number;
  badge: string;
  url?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    date: "November 2023",
    rating: 5,
    title: "Absolutely Magical Experience",
    content: "Our 7-day Masai Mara and Amboseli safari exceeded every expectation. Joseph, our guide, was incredible - his knowledge of wildlife behavior helped us witness a leopard hunt and the famous river crossing. The accommodations were luxurious yet authentic. This trip changed our lives!",
    safari: "7-Day Masai Mara & Amboseli Luxury Safari",
    verified: true,
    photos: 12
  },
  {
    id: 2,
    name: "David & Emma Chen",
    location: "London, UK", 
    date: "August 2023",
    rating: 5,
    title: "Perfect Family Safari",
    content: "Traveled with our two teenagers and couldn't have asked for a better experience. The itinerary was perfectly paced, guides were patient with endless questions, and seeing our kids' faces during their first elephant encounter was priceless. Already planning our return trip!",
    safari: "5-Day Family Adventure Safari",
    verified: true,
    photos: 28
  },
  {
    id: 3,
    name: "Michael Torres",
    location: "Barcelona, Spain",
    date: "February 2024", 
    rating: 5,
    title: "Photography Paradise",
    content: "As a professional photographer, I had high expectations. The specialized photography hides and perfectly timed game drives resulted in shots I never imagined possible. The golden hour positioning was masterful. Worth every euro!",
    safari: "10-Day Photography Master Safari",
    verified: true,
    photos: 156
  },
  {
    id: 4,
    name: "Jennifer & Mark Wilson",
    location: "Sydney, Australia",
    date: "October 2023",
    rating: 5,
    title: "Honeymoon Dreams Come True", 
    content: "Our honeymoon safari was pure magic. Private vehicle, romantic bush dinners, and incredible wildlife sightings. The hot air balloon ride over the Mara at sunrise was the highlight. Karen Legacy Tours made our dreams come true.",
    safari: "Romantic Couples Safari",
    verified: true,
    photos: 34
  },
  {
    id: 5,
    name: "Thomas Mueller",
    location: "Munich, Germany",
    date: "July 2023",
    rating: 5,
    title: "Migration Spectacular",
    content: "Witnessed the Great Migration at its peak! Thousands of wildebeest crossing the Mara River while crocodiles waited below. Our guide positioned us perfectly for the action. Unbelievable experience that I'll never forget.",
    safari: "Migration Special Safari", 
    verified: true,
    photos: 89
  },
  {
    id: 6,
    name: "Lisa & Robert Kim",
    location: "Seoul, South Korea",
    date: "December 2023",
    rating: 5,
    title: "Cultural Immersion at Its Best",
    content: "Beyond amazing wildlife, the cultural experiences with the Maasai community were deeply moving. We learned traditional dances, participated in ceremonies, and gained profound insights into their way of life. Truly transformative.",
    safari: "Cultural & Wildlife Safari",
    verified: true,
    photos: 67
  },
  {
    id: 7,
    name: "Antonio & Maria Rodriguez",
    location: "Madrid, Spain",
    date: "September 2023",
    rating: 5,
    title: "Adventure of a Lifetime",
    content: "From the moment we landed in Nairobi, everything was perfectly organized. Our guide Samuel was like having a wildlife encyclopedia with legs! We saw all Big Five plus countless other species. The balloon safari was breathtaking.",
    safari: "6-Day Big Five Adventure",
    verified: true,
    photos: 45
  },
  {
    id: 8, 
    name: "Rachel & James Cooper",
    location: "Toronto, Canada",
    date: "March 2024",
    rating: 5,
    title: "Exceeded All Expectations",
    content: "We're seasoned travelers but Kenya was something special. The diversity of landscapes from savannah to lakes to mountains kept us amazed. Our accommodations at each location were stunning. Professional service throughout.",
    safari: "8-Day Grand Kenya Safari",
    verified: true,
    photos: 78
  },
  {
    id: 9,
    name: "Sophie Laurent", 
    location: "Paris, France",
    date: "January 2024",
    rating: 5,
    title: "Solo Travel Paradise",
    content: "As a solo female traveler, I felt completely safe and welcomed. The group dynamics were perfect, and I made lifelong friends. Seeing a pride of lions with cubs was the highlight of my trip. Magnifique!",
    safari: "5-Day Solo Traveler Safari",
    verified: true,
    photos: 23
  },
  {
    id: 10,
    name: "Benjamin & Grace Taylor",
    location: "Edinburgh, Scotland", 
    date: "June 2023",
    rating: 5,
    title: "Wildlife Photography Dream",
    content: "The specialized photography vehicle with beanbags and charging ports was brilliant! Our guide knew exactly where and when to position us for the best shots. Captured images that now hang in our gallery at home.",
    safari: "Photography Specialist Safari",
    verified: true,
    photos: 234
  },
  {
    id: 11,
    name: "Yuki & Hiroshi Tanaka",
    location: "Tokyo, Japan",
    date: "April 2024",
    rating: 5,
    title: "Incredible Cultural Exchange", 
    content: "The combination of wildlife and cultural experiences was perfect. Learning from the Maasai elders about traditional medicine and their relationship with wildlife added deep meaning to every animal sighting.",
    safari: "Cultural Heritage & Wildlife Safari",
    verified: true,
    photos: 56
  },
  {
    id: 12,
    name: "Carlos & Isabella Santos",
    location: "São Paulo, Brazil",
    date: "August 2023",
    rating: 5,
    title: "Family Bonding at Its Best",
    content: "Our three generations - grandparents, parents, and kids - all found something to love. The pace was perfect for grandma and grandpa, while the kids were thrilled with every game drive. Memories to last forever.",
    safari: "Multi-Generation Family Safari",
    verified: true,
    photos: 89
  }
];

export const platformRatings: PlatformRating[] = [
  {
    name: "TripAdvisor",
    rating: 4.9,
    reviews: 312,
    badge: "Certificate of Excellence",
    url: "https://tripadvisor.com"
  },
  {
    name: "Google Reviews", 
    rating: 4.8,
    reviews: 267,
    badge: "Top Rated",
    url: "https://google.com/reviews"
  },
  {
    name: "SafariBookings",
    rating: 4.9, 
    reviews: 189,
    badge: "Preferred Partner",
    url: "https://safaribookings.com"
  },
  {
    name: "Trustpilot",
    rating: 4.7,
    reviews: 79, 
    badge: "Excellent Rating",
    url: "https://trustpilot.com"
  }
];

export const trustStats = {
  totalReviews: 847,
  averageRating: 4.9,
  fiveStars: 94,
  fourStars: 5, 
  threeStars: 1,
  happyTravelers: 2500,
  safetyRecord: 100,
  industryAwards: 15
};
