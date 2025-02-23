import React from 'react';
import Image from 'next/image';
import { Calendar, User, Tag, Share2, MessageCircle, ArrowRight, Heart } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  content: {
    text: string;
    callouts?: {
      type: 'quote' | 'highlight' | 'key-point';
      content: string;
      author?: string;
    }[];
  };
}

interface SidebarData {
  categories: { name: string; count: number }[];
  recentPosts: {
    title: string;
    date: string;
    image: string;
  }[];
  tags: string[];
}

export const GlassBlog: React.FC = () => {
  const post: BlogPost = {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Discover the emerging trends that will shape the web development landscape in the coming year.",
    author: {
      name: "Sarah Johnson",
      avatar: "/Woman1.png",
      bio: "Senior Web Developer with 10+ years of experience in full-stack development."
    },
    publishDate: "February 18, 2025",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Web3", "AI", "Design"],
    featuredImage: "/APhone.png",
    content: {
      text: "As we approach 2025, the web development landscape continues to evolve at an unprecedented pace...",
      callouts: [
        {
          type: 'quote',
          content: "The future of web development lies in the seamless integration of AI and human creativity.",
          author: "Sarah Johnson"
        },
        {
          type: 'key-point',
          content: "AI-powered development tools will become mainstream by 2025."
        }
      ]
    }
  };

  const sidebarData: SidebarData = {
    categories: [
      { name: "Web Development", count: 12 },
      { name: "Design", count: 8 },
      { name: "Technology", count: 15 }
    ],
    recentPosts: [
      {
        title: "Understanding Modern CSS Architecture",
        date: "Feb 15, 2025",
        image: "/DigitalDreams.png"
      },
      {
        title: "The Rise of AI in Web Development",
        date: "Feb 12, 2025",
        image: "/Controller.png"
      }
    ],
    tags: ["JavaScript", "React", "CSS", "Web Design", "AI"]
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <div className="text-sm text-blue-300 mb-4 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.publishDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
                <p className="text-xl text-blue-100">{post.excerpt}</p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image 
                src={post.featuredImage} 
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto"
                priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <p className="text-blue-100">{post.content.text}</p>

                {/* Callouts */}
                {post.content.callouts?.map((callout, index) => (
                  <div 
                    key={index}
                    className={`my-8 p-6 rounded-xl backdrop-blur-xl border border-white/20 ${
                      callout.type === 'quote' 
                        ? 'bg-blue-500/10' 
                        : 'bg-purple-500/10'
                    }`}
                  >
                    <p className="text-lg text-white italic mb-2">{callout.content}</p>
                    {callout.author && (
                      <p className="text-sm text-blue-200">— {callout.author}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button className="p-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:border-white/20 transition-all group">
                <Share2 className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
              </button>
              <button className="p-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:border-white/20 transition-all group">
                <Heart className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
              </button>
            </div>

            {/* Comments Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-8">Comments</h3>
                
                {/* Comment Form */}
                <div className="mb-8">
                  <textarea
                    placeholder="Share your thoughts..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-blue-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[100px] mb-4"
                  />
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Post Comment
                  </button>
                </div>
                
                <div className="text-center">
                  <MessageCircle className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                  <p className="text-blue-200">Be the first to comment!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Bio */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-lg"
                    />
                  <div>
                    <h3 className="font-semibold text-white">{post.author.name}</h3>
                    <p className="text-sm text-blue-200">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-blue-200"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02]">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Categories */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {sidebarData.categories.map((category, index) => (
                    <button 
                      key={index}
                      className="flex items-center justify-between w-full p-2 text-blue-200 hover:bg-white/10 rounded-lg transition-colors group"
                    >
                      <span>{category.name}</span>
                      <span className="px-2 py-1 text-sm bg-white/10 rounded-full text-blue-300">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-white mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {sidebarData.recentPosts.map((post, index) => (
                    <button 
                      key={index}
                      className="flex items-center gap-4 w-full hover:bg-white/10 p-2 rounded-lg transition-colors group"
                    >
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-lg"
                        style={{ aspectRatio: '1 / 1' }}
                        />
                      <div className="flex-1 text-left">
                        <h4 className="text-white font-medium line-clamp-2">{post.title}</h4>
                        <p className="text-sm text-blue-200">{post.date}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {sidebarData.tags.map((tag, index) => (
                    <button 
                      key={index}
                      className="px-3 py-1 bg-white/10 text-blue-200 rounded-full hover:bg-blue-500/20 transition-colors border border-white/10"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassBlog;