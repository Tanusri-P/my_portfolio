import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "10 Modern CSS Techniques Every Developer Should Know",
      excerpt: "Explore the latest CSS features that will transform your web design workflow and create stunning visual effects with minimal code.",
      image: "https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzYxNjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Oct 15, 2024",
      readTime: "8 min read",
      category: "CSS",
    },
    {
      title: "Building Accessible Web Applications: A Complete Guide",
      excerpt: "Learn best practices for creating inclusive digital experiences that work for everyone, including users with disabilities.",
      image: "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjE2NTA0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Sep 28, 2024",
      readTime: "12 min read",
      category: "Accessibility",
    },
    {
      title: "React Performance Optimization Tips and Tricks",
      excerpt: "Discover practical techniques to make your React applications faster, more efficient, and provide better user experiences.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZ3xlbnwxfHx8fDE3NjE2MjgwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Sep 10, 2024",
      readTime: "10 min read",
      category: "React",
    },
    {
      title: "The Future of Web Design: Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with insights into emerging design trends, technologies, and user experience innovations.",
      image: "https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxNTczODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "Aug 22, 2024",
      readTime: "7 min read",
      category: "Design",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-600 uppercase tracking-wider">Latest Insights</span>
          <h2 className="text-4xl md:text-5xl mt-2 text-gray-900">Blog & Articles</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Thoughts on web development, design, and the latest industry trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white border border-gray-200 hover:border-purple-400 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>

                <Button 
                  variant="ghost" 
                  className="group/btn text-teal-600 hover:text-teal-700 hover:bg-teal-50 px-0"
                >
                  Read More on Medium
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-purple-600/60 text-purple-700 hover:bg-purple-50 hover:border-purple-600 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
