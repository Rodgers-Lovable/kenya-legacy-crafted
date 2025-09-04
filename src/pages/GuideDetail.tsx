import { useParams } from "react-router-dom";
import { Clock, Calendar, User, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "@/core/constants/appConstants";

const GuideDetail = () => {
  const { slug } = useParams();

  const guide = {
    title: "Best Time to Visit Kenya for Safari",
    author: "David Kimani",
    publishDate: "2024-01-15",
    readTime: "12 min read",
    category: "Safari Planning",
    image: "/api/placeholder/1200/600",
    tags: ["Planning", "Weather", "Migration", "Best Time"],
    content: `
    <p>Kenya offers incredible safari experiences year-round, but timing your visit can make the difference between good and extraordinary wildlife encounters.</p>
    
    <h2>Peak Safari Season (July-October)</h2>
    <p>The dry season from July to October is considered the best time for safari in Kenya. During these months, animals congregate around water sources, making wildlife viewing more predictable and rewarding.</p>
    
    <h2>The Great Migration</h2>
    <p>If witnessing the Great Migration is your priority, plan your visit between July and October when millions of wildebeest and zebras cross into Kenya's Masai Mara.</p>
    
    <h2>Month-by-Month Breakdown</h2>
    <p>Each month offers unique advantages for safari experiences in Kenya...</p>
    `,
    relatedGuides: [
      { title: "Great Migration Guide", slug: "great-migration-guide" },
      { title: "Safari Packing List", slug: "safari-packing-list" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{guide.title} | {COMPANY_NAME}</title>
        <meta name="description" content={guide.title} />
        <meta name="keywords" content={guide.title} />
        <meta property="og:title" content={guide.title} />
        <meta property="og:description" content={guide.title} />
        <meta property="og:image" content="/images/seo/gallery.jpg" />
        <meta
          property="og:url"
          content="https://karenlegacytoursandsafaris.com/gallery"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://karenlegacytoursandsafaris.com/gallery"
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <article>
            <header className="mb-8">
              <Badge className="mb-4">{guide.category}</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {guide.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By {guide.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(guide.publishDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{guide.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {guide.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />

            <div className="flex items-center justify-between py-8 border-t border-border">
              <Button variant="outline" asChild>
                <a href="/guides">← Back to Guides</a>
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </article>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold mb-6">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guide.relatedGuides.map((related, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{related.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" asChild>
                      <a href={`/guides/${related.slug}`}>
                        Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GuideDetail;
