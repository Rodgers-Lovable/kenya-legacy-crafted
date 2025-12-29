import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, Calendar, User, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { guidesContent, getGuideCategories, getGuideImage } from "@/core/data/guides";

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...getGuideCategories()];

  const filteredGuides = guidesContent.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || guide.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredGuides = guidesContent.filter((guide) => guide.featured);

  return (
    <>
      <Helmet>
        <title>
          Karen Legacy Safari Travel Guides | Tips, Packing & Best Time to Visit
        </title>
        <meta
          name="description"
          content="Plan your safari with our travel guides. Learn what to pack, the best time to visit Kenya, and tips for first-time safari travelers."
        />
        <meta
          name="keywords"
          content="Karen Legacy safari guides, safari packing tips, best time for safari, Kenya travel blog"
        />
        <meta
          property="og:title"
          content="Karen Legacy Travel Guides | Tips, Packing & Best Time to Visit"
        />
        <meta property="og:image" content="/images/seo/guides.jpg" />
        <link
          rel="canonical"
          href="https://karenlegacytoursandsafaris.com/guides"
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gradient-sunset flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Travel Guides
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Expert insights and practical tips for planning your perfect Kenya
              safari adventure
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                Find the Perfect Guide
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search guides by topic, destination, or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Featured Guides */}
          {selectedCategory === "all" && searchTerm === "" && (
            <section className="mb-16">
              <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
                Featured Guides
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredGuides.map((guide) => (
                  <Card
                    key={guide.id}
                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-safari"
                  >
                    <div className="aspect-video bg-muted overflow-hidden relative">
                      <img
                        src={getGuideImage(guide.id)}
                        alt={guide.title}
                        className="w-full h-full object-cover hover:scale-105 transition-safari"
                      />
                      <Badge className="absolute top-4 left-4">
                        {guide.category}
                      </Badge>
                    </div>

                    <CardHeader>
                      <CardTitle className="font-display text-xl line-clamp-2">
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {guide.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{guide.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{guide.readTime}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {guide.tags.slice(0, 3).map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button className="w-full" asChild>
                          <Link
                            to={`/guides/${guide.slug}`}
                            className="flex items-center justify-center gap-2"
                          >
                            Read Guide <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* All Guides */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              {selectedCategory === "all" && searchTerm === ""
                ? "All Guides"
                : "Search Results"}
            </h2>

            {filteredGuides.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredGuides.map((guide) => (
                  <Card
                    key={guide.id}
                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-safari"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 aspect-video md:aspect-square bg-muted overflow-hidden">
                        <img
                          src={getGuideImage(guide.id)}
                          alt={guide.title}
                          className="w-full h-full object-cover hover:scale-105 transition-safari"
                        />
                      </div>

                      <div className="md:w-2/3 flex flex-col">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary">{guide.category}</Badge>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(
                                  guide.publishDate
                                ).toLocaleDateString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {guide.readTime}
                              </span>
                            </div>
                          </div>
                          <CardTitle className="font-display text-xl line-clamp-2">
                            {guide.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {guide.excerpt}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1 flex flex-col justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="w-4 h-4" />
                              <span>By {guide.author}</span>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {guide.tags.slice(0, 4).map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2 pt-4">
                            <Button size="sm" className="flex-1" asChild>
                              <Link
                                to={`/guides/${guide.slug}`}
                                className="flex items-center justify-center gap-1"
                              >
                                Read <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  No guides found
                </h3>
                <p className="text-muted-foreground mb-8">
                  Try adjusting your search or browse all categories
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </section>

          {/* Newsletter CTA */}
          <section className="mt-20 text-center bg-gradient-sunset rounded-2xl p-12 text-white">
            <h2 className="font-display text-3xl font-bold mb-4">
              Stay Updated with Safari Tips
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert insights, travel tips, and exclusive safari planning
              guides delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                variant="secondary"
                className="bg-white text-foreground hover:bg-white/90"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Free Kenya Safari Planning Guide included with signup
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Guides;
