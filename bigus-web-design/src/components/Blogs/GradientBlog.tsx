import React from 'react';
import { Calendar, User, Tag, Share2, MessageCircle, ChevronRight, ArrowRight, Heart } from 'lucide-react';

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

export const GradientBlog: React.FC = () => {
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
    featuredImage: "/code.png",
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
        image: "/css.png"
      },
      {
        title: "The Rise of AI in Web Development",
        date: "Feb 12, 2025",
        image: "/ai.png"
      }
    ],
    tags: ["JavaScript", "React", "CSS", "Web Design", "AI"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Article Container */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-1 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 rounded-3xl">
                {/* Article Header */}
                <div className="p-8 border-b border-white/10">
                  <div className="text-sm text-indigo-200 mb-4 flex items-center gap-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author.name}
                    </span>
                    <span className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {post.title}
                  </h1>
                  <p className="text-xl text-indigo-200">{post.excerpt}</p>
                </div>

                {/* Featured Image */}
                <div className="border-b border-white/10">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-indigo-200 mb-8">{post.content.text}</p>

                  {/* Callouts */}
                  {post.content.callouts?.map((callout, index) => (
                    <div 
                      key={index}
                      className={`my-8 p-8 rounded-2xl relative overflow-hidden ${
                        callout.type === 'quote'
                          ? 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20'
                          : 'bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20'
                      }`}
                    >
                      <div className="relative z-10">
                        <p className="text-lg text-white italic mb-2">{callout.content}</p>
                        {callout.author && (
                          <p className="text-sm text-indigo-200">— {callout.author}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Post Actions */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </button>
                      <button className="flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>Like</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-1 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                  Comments
                </h3>
                
                {/* Comment Input */}
                <div className="mb-8">
                  <textarea
                    placeholder="Leave a comment..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px] mb-4"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-[1.02]">
                    Post Comment
                  </button>
                </div>

                <div className="text-center py-8 border-t border-white/10">
                  <MessageCircle className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                  <p className="text-indigo-200">No comments yet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Bio */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-1 rounded-3xl shadow-xl">
              <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-6 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="relative w-16 h-16 rounded-full object-cover"
                      style={{ aspectRatio: '1 / 1' }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{post.author.name}</h3>
                    <p className="text-sm text-indigo-200">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-1 rounded-3xl shadow-xl">
              <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-6 rounded-3xl">
                <h3 className="font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-[1.02]">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-1 rounded-3xl shadow-xl">
              <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-6 rounded-3xl">
                <h3 className="font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {sidebarData.categories.map((category, index) => (
                    <button 
                      key={index}
                      className="flex items-center justify-between w-full p-3 text-indigo-200 hover:bg-white/5 rounded-xl transition-colors group"
                    >
                      <span>{category.name}</span>
                      <span className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-1 rounded-3xl shadow-xl">
              <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-6 rounded-3xl">
                <h3 className="font-semibold text-white mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {sidebarData.recentPosts.map((post, index) => (
                    <button 
                      key={index}
                      className="flex items-center gap-4 w-full p-2 hover:bg-white/5 rounded-xl transition-colors group"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="relative w-16 h-16 object-cover rounded-xl"
                          style={{ aspectRatio: '1 / 1' }}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-white font-medium line-clamp-2">{post.title}</h4>
                        <p className="text-sm text-indigo-200">{post.date}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-indigo-300 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-1 rounded-3xl shadow-xl">
              <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-6 rounded-3xl">
                <h3 className="font-semibold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {sidebarData.tags.map((tag, index) => (
                    <button 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-indigo-200 rounded-full hover:from-purple-500/30 hover:to-pink-500/30 transition-colors"
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

export default GradientBlog;