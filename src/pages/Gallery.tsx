import { useState } from "react";
import {
  Camera,
  Play,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroGallery from "@/assets/hero-gallery.jpg";
import SafariBuilderModal from "@/components/SafariBuilderModal";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "@/core/constants/appConstants";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Photos", count: 156 },
    { id: "wildlife", name: "Wildlife", count: 89 },
    { id: "landscapes", name: "Landscapes", count: 34 },
    { id: "cultural", name: "Cultural", count: 21 },
    { id: "guests", name: "Happy Guests", count: 12 },
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Lion Pride in Masai Mara",
      category: "wildlife",
      description:
        "A magnificent pride of lions resting under the African sun during the golden hour.",
      location: "Masai Mara National Reserve",
      photographer: "Joseph Kimani, Senior Guide",
    },
    {
      id: 2,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Great Migration River Crossing",
      category: "wildlife",
      description:
        "Thousands of wildebeest brave the crocodile-filled Mara River during the annual migration.",
      location: "Mara River",
      photographer: "Safari Guest",
    },
    {
      id: 3,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Mount Kilimanjaro at Dawn",
      category: "landscapes",
      description:
        "The majestic snow-capped peak of Kilimanjaro rising above the clouds at sunrise.",
      location: "Amboseli National Park",
      photographer: "Michael Wanjiku, Photography Guide",
    },
    {
      id: 4,
      type: "video",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Elephant Herd at Watering Hole",
      category: "wildlife",
      description:
        "A peaceful moment as elephants gather at the watering hole during the dry season.",
      location: "Amboseli National Park",
      duration: "2:34",
    },
    {
      id: 5,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Maasai Traditional Dance",
      category: "cultural",
      description:
        "Maasai warriors perform their traditional jumping dance in colorful traditional attire.",
      location: "Maasai Village",
      photographer: "Cultural Experience Guide",
    },
    {
      id: 6,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Leopard in Acacia Tree",
      category: "wildlife",
      description:
        "A stunning leopard resting on the branches of an acacia tree with its kill.",
      location: "Samburu National Reserve",
      photographer: "David Kimeu, Expert Tracker",
    },
    {
      id: 7,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Rift Valley Escarpment",
      category: "landscapes",
      description:
        "The dramatic cliffs and valleys of the Great Rift Valley stretch to the horizon.",
      location: "Great Rift Valley",
      photographer: "Scenic Flight Captain",
    },
    {
      id: 8,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Happy Honeymooners",
      category: "guests",
      description:
        "A romantic couple enjoying sundowners with the African sunset in the background.",
      location: "Private Camp",
      photographer: "Camp Manager",
    },
    {
      id: 9,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Cheetah on the Hunt",
      category: "wildlife",
      description:
        "The world's fastest land animal in its natural hunting pose in the grasslands.",
      location: "Masai Mara",
      photographer: "Wildlife Specialist Guide",
    },
    {
      id: 10,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Balloon Safari at Sunrise",
      category: "landscapes",
      description:
        "Hot air balloons drifting over the endless Mara plains at first light.",
      location: "Masai Mara",
      photographer: "Balloon Pilot",
    },
    {
      id: 11,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Family Adventure",
      category: "guests",
      description:
        "A family of four discovering the wonders of African wildlife together.",
      location: "Amboseli National Park",
      photographer: "Family Safari Guide",
    },
    {
      id: 12,
      type: "image",
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Samburu Traditional Homes",
      category: "cultural",
      description:
        "Traditional Samburu manyattas (homes) nestled in the arid landscape.",
      location: "Samburu County",
      photographer: "Cultural Guide",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const currentItem = filteredItems[currentImageIndex];

  return (
    <>
      <Helmet>
        <title>Gallery | {COMPANY_NAME}</title>
        <meta
          name="description"
          content="Explore our Kenya safari photo gallery featuring breathtaking wildlife, landscapes, and safari moments from Maasai Mara, Amboseli, Tsavo, Samburu, and beyond."
        />
        <meta
          name="keywords"
          content="Kenya safari gallery, safari photos, Maasai Mara photography, Kenya wildlife images, safari pictures, travel photography Kenya"
        />
        <meta property="og:title" content="Kenya Safari Photo Gallery | Wildlife & Travel Photography" />
        <meta
          property="og:description"
          content="Browse our stunning safari gallery showcasing wildlife encounters, landscapes, and unforgettable moments from safaris across Kenya."
        />
        <meta property="og:image" content="/images/seo/gallery.jpg" />
        <meta property="og:url" content="https://karenlegacytoursandsafaris.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://karenlegacytoursandsafaris.com/gallery" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section
          className="py-20 bg-cover bg-center bg-no-repeat text-white relative"
          style={{ backgroundImage: `url(${heroGallery})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="font-display text-hero mb-6">
                  Photo & Video Gallery
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Experience Kenya's breathtaking beauty through the lens of our
                  expert guides and happy guests
                </p>
                <div className="flex items-center justify-center gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold">156</div>
                    <div className="text-sm opacity-80">Photos & Videos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-sm opacity-80">Destinations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-80">Wildlife Species</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative aspect-square rounded-card overflow-hidden cursor-pointer hover:shadow-safari-floating transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image/Video Thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br from-safari-sand to-safari-ochre/20 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-safari-ochre/50" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    {item.type === "video" ? (
                      <div className="flex flex-col items-center">
                        <Play className="w-12 h-12 text-white mb-2" />
                        <span className="text-white text-sm">
                          {item.duration}
                        </span>
                      </div>
                    ) : (
                      <Camera className="w-12 h-12 text-white" />
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/90 text-safari-charcoal"
                    >
                      {categories.find((c) => c.id === item.category)?.name}
                    </Badge>
                  </div>

                  {/* Type Indicator */}
                  {item.type === "video" && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-black/70 rounded-full p-1">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Photos
              </Button>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-black border-0">
            {currentItem && (
              <div className="relative w-full h-full">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={() => setLightboxOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Arrows */}
                {filteredItems.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-8 h-8" />
                    </Button>
                  </>
                )}

                {/* Image/Video Content */}
                <div className="flex items-center justify-center min-h-[70vh]">
                  <div className="w-full max-w-4xl bg-gradient-to-br from-safari-sand to-safari-ochre/20 flex items-center justify-center rounded-card mx-4">
                    <Camera className="w-32 h-32 text-safari-ochre/50" />
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white p-6">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-semibold mb-2">
                      {currentItem.title}
                    </h3>
                    <p className="text-white/90 mb-3">
                      {currentItem.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-white/70">Location: </span>
                        <span>{currentItem.location}</span>
                      </div>
                      {currentItem.photographer && (
                        <div>
                          <span className="text-white/70">Photo by: </span>
                          <span>{currentItem.photographer}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-white/70">
                        {currentImageIndex + 1} of {filteredItems.length}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white/30 hover:bg-white/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-sunset text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl mb-4">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Every photo tells a story. Let us help you create yours in the
              wilds of Kenya.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <SafariBuilderModal>
                <Button size="lg" variant="secondary">
                  Plan My Safari
                </Button>
              </SafariBuilderModal>

              <Button
                size="lg"
                variant="outline"
                className="text-white bg-white/30 border-white/30 hover:bg-white/10"
              >
                <a href="/safaris">View Safari Packages</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
