import React from 'react';
import Image from 'next/image';
import { Calendar, User, Tag, Share2, MessageCircle, ArrowRight } from 'lucide-react';

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

export const MinimalBlog: React.FC = () => {
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
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-2 flex items-center gap-4">
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <p className="text-xl text-gray-600">{post.excerpt}</p>
            </div>

            {/* Featured Image */}
            <div className="relative mb-8 rounded-lg overflow-hidden h-[400px]">
              <Image 
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <p className="text-gray-600">{post.content.text}</p>

              {/* Callouts */}
              {post.content.callouts?.map((callout, index) => (
                <div 
                  key={index}
                  className={`my-8 p-6 rounded-lg ${
                    callout.type === 'quote' 
                      ? 'bg-gray-50 border-l-4 border-gray-900' 
                      : 'bg-yellow-50 border border-yellow-200'
                  }`}
                >
                  <p className="text-lg text-gray-800 italic mb-2">{callout.content}</p>
                  {callout.author && (
                    <p className="text-sm text-gray-600">— {callout.author}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 my-8">
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors group">
                <Share2 className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
              </button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors group">
                <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Comments</h3>
              
              {/* Comment Form */}
              <div className="mb-8">
                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] mb-4"
                />
                <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Post Comment
                </button>
              </div>

              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Be the first to comment!</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Bio */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image 
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                  <p className="text-sm text-gray-600">{post.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Subscribe to our Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
                <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {sidebarData.categories.map((category, index) => (
                  <button 
                    key={index}
                    className="flex items-center justify-between w-full p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-400">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {sidebarData.recentPosts.map((post, index) => (
                  <button 
                    key={index}
                    className="flex items-center gap-4 w-full hover:bg-gray-50 p-2 rounded-lg transition-colors group"
                  >
                    <div className="relative w-16 h-16">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-gray-900 font-medium line-clamp-2">{post.title}</h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {sidebarData.tags.map((tag, index) => (
                  <button 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
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
  );
};

export default MinimalBlog;