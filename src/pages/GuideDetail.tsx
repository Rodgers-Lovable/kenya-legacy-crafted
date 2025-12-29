import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Clock, Calendar, User, Share2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { COMPANY_NAME } from "@/core/constants/appConstants";
import { getGuideBySlug, getRelatedGuides, getGuideImage } from "@/core/data/guides";
import { useUmami } from "@/hooks/use-umami";

const GuideDetail = () => {
  const { slug } = useParams();
  const { trackGuideRead } = useUmami();
  
  const guide = slug ? getGuideBySlug(slug) : undefined;
  const relatedGuides = guide ? getRelatedGuides(guide.slug, guide.relatedGuides) : [];
  const guideImage = guide ? getGuideImage(guide.id) : "";

  // Track guide read on mount
  useEffect(() => {
    if (guide) {
      trackGuideRead(guide.title, guide.category);
    }
  }, [guide, trackGuideRead]);

  if (!guide) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4 text-foreground">
            Guide Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The guide you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/guides">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: guide.title,
          text: guide.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled or failed");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <Helmet>
        <title>{guide.title} | {COMPANY_NAME}</title>
        <meta name="description" content={guide.excerpt} />
        <meta name="keywords" content={guide.tags.join(", ")} />
        <meta property="og:title" content={`${guide.title} | ${COMPANY_NAME}`} />
        <meta property="og:description" content={guide.excerpt} />
        <meta property="og:image" content={guideImage} />
        <meta
          property="og:url"
          content={`https://karenlegacytoursandsafaris.com/guides/${guide.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href={`https://karenlegacytoursandsafaris.com/guides/${guide.slug}`}
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

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-6">
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
                src={guideImage}
                alt={guide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {/* Introduction */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {guide.content.introduction}
              </p>

              {/* Sections */}
              {guide.content.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.content}
                  </p>
                  
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="pl-4 border-l-2 border-primary/20 space-y-4 mt-4">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="font-semibold text-lg text-foreground mb-2">
                            {subsection.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-muted/50 rounded-lg p-6 mt-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Conclusion
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {guide.content.conclusion}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between py-8 border-t border-border">
              <Button variant="outline" asChild>
                <Link to="/guides">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Guides
                </Link>
              </Button>
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </article>

          {relatedGuides.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold mb-6">
                Related Guides
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedGuides.map((related) => (
                  <Card key={related.id} className="border-border hover:shadow-lg transition-safari">
                    <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                      <img
                        src={getGuideImage(related.id)}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {related.category}
                      </Badge>
                      <CardTitle className="text-lg line-clamp-2">{related.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                      <Button size="sm" asChild>
                        <Link to={`/guides/${related.slug}`}>
                          Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default GuideDetail;
