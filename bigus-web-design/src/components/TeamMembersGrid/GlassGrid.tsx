import React from 'react';
import { Linkedin, Twitter, Github, Globe } from 'lucide-react';

interface SocialLink {
  type: 'linkedin' | 'twitter' | 'github' | 'website';
}

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'linkedin': return <Linkedin className="w-5 h-5" />;
    case 'twitter': return <Twitter className="w-5 h-5" />;
    case 'github': return <Github className="w-5 h-5" />;
    case 'website': return <Globe className="w-5 h-5" />;
    default: return null;
  }
};

// Glass Grid
export const GlassGrid: React.FC = () => {
    const members = [
      {
        name: "Sarah Johnson",
        role: "Lead Designer",
        imageSrc: "/Woman1.png",
        bio: "Over 10 years of experience in UI/UX design and brand strategy.",
        socialLinks: [
          { type: 'linkedin' },
          { type: 'twitter' }
        ]
      },
      {
        name: "Michael Chen",
        role: "Senior Developer",
        imageSrc: "/Man1.png",
        bio: "Full-stack developer with expertise in React and Node.js.",
        socialLinks: [
          { type: 'github' },
          { type: 'linkedin' }
        ]
      },
      {
        name: "Emily Davis",
        role: "Project Manager",
        imageSrc: "/Woman2.png",
        bio: "Certified PMP with a track record of successful project delivery.",
        socialLinks: [
          { type: 'linkedin' },
          { type: 'website' }
        ]
      }
    ];
  
    return (
      <div className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 pointer-events-none" />
        
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
  
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white">The Team</h2>
            <div className="relative mt-4 h-px max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent">
                <div className="absolute inset-0 animate-shine"></div>
              </div>
            </div>
          </div>
  
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {members.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      <img 
                        src={member.imageSrc}
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center 20%'
                        }}
                        className="transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-blue-300">{member.role}</p>
                      </div>
                    </div>
  
                    <div className="p-6 bg-white/5">
                      <p className="text-gray-300 text-sm mb-4">
                        {member.bio}
                      </p>
  
                      {member.socialLinks && (
                        <div className="flex gap-4">
                          {member.socialLinks.map((link, i) => (
                            <span
                              key={i}
                              className="text-gray-400 cursor-default"
                            >
                              <SocialIcon type={link.type} />
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };