import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Github, Globe } from 'lucide-react';

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'linkedin': return <Linkedin className="w-5 h-5" />;
    case 'twitter': return <Twitter className="w-5 h-5" />;
    case 'github': return <Github className="w-5 h-5" />;
    case 'website': return <Globe className="w-5 h-5" />;
    default: return null;
  }
};

// Minimal Grid
export const MinimalGrid: React.FC = () => {
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
      <div className="py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">The Team</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {members.map((member) => (
              <div key={member.name} className="group">
                <div className="relative w-full h-64 mb-6 overflow-hidden">
                <Image 
                  src={member.imageSrc}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 20%'
                  }}
                />
                  <div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-yellow-400/0 transition-colors duration-500"></div>
                </div>
  
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-yellow-600">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                  
                  {member.socialLinks && (
                    <div className="flex gap-4 pt-2">
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
            ))}
          </div>
        </div>
      </div>
    );
  };