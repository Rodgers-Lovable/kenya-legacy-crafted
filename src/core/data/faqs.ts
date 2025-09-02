export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "planning",
    title: "Safari Planning",
    icon: "Calendar",
    faqs: [
      {
        question: "When is the best time to visit Kenya for a safari?",
        answer: "The best time depends on what you want to see. For the Great Migration in Masai Mara, visit July-October. For general wildlife viewing with fewer crowds, January-March and June-September are ideal. The dry seasons (July-October and January-March) offer excellent game viewing as animals congregate around water sources."
      },
      {
        question: "How long should my first safari be?",
        answer: "For first-time safari-goers, we recommend 5-7 days. This allows you to visit 2-3 parks, adjust to the early morning game drives, and fully immerse yourself in the safari experience without feeling rushed. Shorter 3-4 day safaris are perfect for those with limited time, while 8+ day safaris allow for more comprehensive exploration."
      },
      {
        question: "What's included in your safari packages?",
        answer: "Our safari packages typically include accommodation, all meals, park entry fees, game drives in 4x4 vehicles with pop-up roofs, professional English-speaking guides, and airport transfers. International flights, visas, tips, and personal expenses are usually excluded. Each package clearly lists what's included and excluded."
      },
      {
        question: "Can you customize safari itineraries?",
        answer: "Absolutely! Every safari is tailored to your preferences, budget, and interests. Whether you want luxury lodges or budget camping, specific wildlife experiences, cultural visits, or adventure activities like hot air ballooning, we create personalized itineraries just for you."
      },
      {
        question: "How far in advance should I book my safari?",
        answer: "We recommend booking 3-6 months in advance, especially for peak season (July-October) and specific accommodations. However, we can often accommodate last-minute bookings within 2-4 weeks, subject to availability. Earlier booking ensures better accommodation choices and rates."
      },
      {
        question: "What type of accommodation options do you offer?",
        answer: "We offer a full range from luxury safari lodges and tented camps to mid-range lodges and budget camping. Options include permanent lodges, mobile camps, treehouses, and eco-camps. All accommodations are carefully selected for location, comfort, and authentic safari experience."
      }
    ]
  },
  {
    id: "travel",
    title: "Travel & Visas", 
    icon: "Plane",
    faqs: [
      {
        question: "Do I need a visa to visit Kenya?",
        answer: "Most visitors need a visa to enter Kenya. Citizens of most countries can apply for an eVisa online before travel or get a visa on arrival. The tourist visa costs USD $51 and is valid for 90 days. We recommend applying for the eVisa in advance to avoid queues at the airport."
      },
      {
        question: "What vaccinations do I need for Kenya?",
        answer: "Yellow fever vaccination is required if you're coming from a yellow fever endemic area. We recommend consulting your doctor or travel clinic 4-6 weeks before travel. Common recommendations include hepatitis A & B, typhoid, and malaria prophylaxis. Ensure routine vaccinations are up to date."
      },
      {
        question: "What should I pack for a safari?",
        answer: "Pack light, neutral-colored clothing (khaki, brown, green), comfortable walking shoes, hat, sunscreen, insect repellent, binoculars, camera with extra batteries/memory cards, and a light jacket for early morning drives. We provide a comprehensive packing list upon booking."
      },
      {
        question: "How do I get to Kenya?",
        answer: "Jomo Kenyatta International Airport (NBO) in Nairobi is Kenya's main international airport. Major airlines offer direct flights from Europe, Middle East, Asia, and connecting flights from Americas. We can arrange airport transfers and domestic flights to safari destinations."
      },
      {
        question: "What's the local currency and payment methods?",
        answer: "The Kenyan Shilling (KES) is the local currency. US Dollars are widely accepted in tourist areas. Credit cards are accepted in most lodges and urban areas. We recommend carrying some cash for tips, local purchases, and areas with limited card facilities."
      },
      {
        question: "Do I need international driving permit?",
        answer: "If you plan to drive yourself, an International Driving Permit is required along with your home country license. However, we strongly recommend using our professional guides who know the terrain, wildlife behavior, and park regulations for the best and safest safari experience."
      }
    ]
  },
  {
    id: "safety",
    title: "Safety & Health",
    icon: "Shield", 
    faqs: [
      {
        question: "Is it safe to go on safari in Kenya?",
        answer: "Yes, Kenya is generally very safe for safari tourism. We work with experienced guides who prioritize safety, use well-maintained vehicles, and follow strict safety protocols. Wildlife encounters are conducted from vehicles at safe distances. Our guides are trained in first aid and emergency procedures."
      },
      {
        question: "What about malaria risk?",
        answer: "Some safari areas have malaria risk, particularly in lower altitude regions. We recommend consulting your doctor about malaria prophylaxis. Use insect repellent, wear long sleeves in the evening, and sleep under nets (provided in all accommodations). Most safari camps are in low-risk areas."
      },
      {
        question: "What if I have dietary restrictions?",
        answer: "We accommodate all dietary requirements including vegetarian, vegan, gluten-free, kosher, and halal meals. Please inform us of any allergies or restrictions when booking. Most lodges and camps are experienced in catering to various dietary needs with advance notice."
      },
      {
        question: "Is travel insurance necessary?",
        answer: "We highly recommend comprehensive travel insurance covering medical expenses, evacuation, trip cancellation, and personal belongings. Ensure it covers adventure activities and wildlife safaris. Some policies include coverage for camera equipment, which is valuable for safari photography."
      },
      {
        question: "What medical facilities are available?",
        answer: "Major towns have hospitals and clinics. Safari lodges have basic first aid facilities and communication for emergency evacuation if needed. We maintain partnerships with medical evacuation services. Comprehensive travel insurance with medical evacuation coverage is highly recommended."
      },
      {
        question: "Are there any age restrictions for safaris?",
        answer: "Most safari activities are suitable for all ages. Some lodges have minimum age requirements for certain activities (e.g., walking safaris, night drives). We design family-friendly itineraries with age-appropriate activities. Special arrangements can be made for elderly travelers or those with mobility issues."
      }
    ]
  },
  {
    id: "wildlife",
    title: "Wildlife & Photography",
    icon: "Camera",
    faqs: [
      {
        question: "Will I see the Big Five?",
        answer: "While we can't guarantee specific wildlife sightings (animals are wild and free), Kenya offers excellent opportunities to see all Big Five animals. Masai Mara, Amboseli, and Tsavo parks have good populations of lions, leopards, elephants, buffalos, and rhinos. Our experienced guides know the best spots and timing."
      },
      {
        question: "What's the best camera equipment for safari?",
        answer: "A DSLR or mirrorless camera with a telephoto lens (70-300mm minimum) is ideal. Bring extra batteries, memory cards, and a dust-proof bag. Many guests get excellent shots with modern smartphones too. We can arrange specialized photography safaris with professional guidance for serious photographers."
      },
      {
        question: "Can I get close to the animals?",
        answer: "All wildlife viewing is done from vehicles at respectful distances for both animal welfare and visitor safety. Our guides are skilled at positioning vehicles for optimal viewing and photography while following strict park regulations. Walking safaris are available in designated areas with armed rangers."
      },
      {
        question: "What animals will I see besides the Big Five?",
        answer: "Kenya is home to incredible diversity: giraffes, zebras, cheetahs, hippos, crocodiles, hyenas, wildebeest, gazelles, impalas, warthogs, and over 1,000 bird species. Each park has unique species - Samburu has special northern species like Grevy's zebras and reticulated giraffes."
      },
      {
        question: "When is the best time for wildlife photography?",
        answer: "Golden hours (early morning and late afternoon) provide the best lighting for photography. Animals are also more active during these cooler times. Our guides understand photography needs and will position vehicles for optimal shots while respecting wildlife and park rules."
      },
      {
        question: "Can I share photos on social media during the safari?",
        answer: "Yes, many lodges and camps now offer WiFi, though it may be limited. We encourage sharing your amazing experiences! However, please be mindful of data usage and enjoy being present in the moment. Some remote locations may have limited connectivity."
      }
    ]
  },
  {
    id: "booking",
    title: "Booking & Payments",
    icon: "DollarSign",
    faqs: [
      {
        question: "How do I book a safari?",
        answer: "You can book through our website, WhatsApp, or contact form. We'll create a personalized itinerary based on your preferences and send a detailed quote. A 30% deposit secures your booking, with the balance due 60 days before travel. We accept bank transfers and major credit cards."
      },
      {
        question: "What's your cancellation policy?",
        answer: "Cancellations more than 60 days before departure: 10% of total cost. 31-60 days: 25%. 15-30 days: 50%. Less than 15 days: 75%. Within 7 days or no-show: 100%. We recommend travel insurance to protect against unforeseen circumstances. Force majeure events are handled case by case."
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes! We offer attractive group rates for 6+ people. Family discounts apply for children under 12. The more people in your group, the lower the per-person cost due to shared vehicle and guide costs. Contact us for custom group pricing."
      },
      {
        question: "Can I pay in Kenyan Shillings?",
        answer: "Yes, we accept payments in Kenyan Shillings (KES), US Dollars, Euros, and British Pounds. All our prices are displayed in KES with current exchange rates. Local payment can be made via M-Pesa, bank transfer, or cash for Kenyan residents."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards (Visa, MasterCard, American Express), bank transfers, PayPal, and mobile money (M-Pesa for local clients). Payment plans can be arranged for longer or more expensive safaris. All transactions are secure and protected."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No hidden costs! Our quotes clearly itemize all inclusions and exclusions. Optional extras like balloon safaris, cultural visits, or premium accommodations are clearly priced separately. Tips for guides and camp staff are at your discretion and not included in package prices."
      }
    ]
  },
  {
    id: "logistics",
    title: "Safari Logistics",
    icon: "MapPin", 
    faqs: [
      {
        question: "What type of vehicles do you use?",
        answer: "We use specially modified 4x4 Toyota Land Cruisers and Land Rovers with pop-up roofs for excellent game viewing and photography. Vehicles have comfortable seating, charging ports, cooler boxes, and first aid kits. Each vehicle accommodates maximum 6-7 guests for optimal viewing."
      },
      {
        question: "How early do game drives start?",
        answer: "Morning game drives typically start between 6:00-6:30 AM to catch animals at their most active. Afternoon drives usually begin around 3:30-4:00 PM. Full-day drives with picnic lunch allow for extended exploration. Schedule varies by season and location."
      },
      {
        question: "What happens if it rains during my safari?",
        answer: "Kenya's weather is generally favorable year-round. Light rain rarely stops game drives as animals continue their activities and the landscape becomes lush and beautiful. Our vehicles have rain covers, and alternative indoor activities can be arranged if needed."
      },
      {
        question: "Can I charge my devices during the safari?",
        answer: "Most lodges and camps have electricity and charging facilities. Our safari vehicles are equipped with 12V charging ports and some have USB ports. Solar power is common in remote camps. Bring a universal adapter and consider portable power banks for extended field trips."
      },
      {
        question: "What about bathroom facilities during long game drives?",
        answer: "Strategic stops are planned at visitor centers, lodges, or designated areas with facilities. For emergencies in remote areas, guides are experienced in finding appropriate spots while maintaining privacy and environmental respect. Full-day drives include lunch stops at facilities."
      },
      {
        question: "How physically demanding are safaris?",
        answer: "Game drive safaris are not physically demanding as you're seated in vehicles most of the time. Walking safaris and cultural visits involve moderate walking. We can adapt itineraries for guests with mobility limitations. Most activities are suitable for all fitness levels."
      }
    ]
  }
];

export const quickStats = [
  { icon: "Users", label: "Happy Guests", value: "2,500+" },
  { icon: "MapPin", label: "Destinations", value: "12+" }, 
  { icon: "Shield", label: "Safety Record", value: "100%" },
  { icon: "Camera", label: "Wildlife Species", value: "500+" }
];