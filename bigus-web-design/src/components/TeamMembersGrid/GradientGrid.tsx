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

// Gradient Grid
export const GradientGrid: React.FC = () => {
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
    <div className="max-w-7xl mx-auto px-6 py-24 bg-purple-50">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-purple-900 mb-4">The Team</h2>
        <p className="text-purple-700">Meet our talented team of professionals</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.name} className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-100">
            <div className="relative w-full h-64 mb-6">
              <img 
                src={member.imageSrc}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%'
                }}
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-light text-purple-900">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </div>
              
              <div className="w-12 h-0.5 bg-purple-200"></div>
              
              <p className="text-purple-800 leading-relaxed text-sm">
                {member.bio}
              </p>
              
              {member.socialLinks && (
                <div className="flex gap-4 pt-2">
                  {member.socialLinks.map((link, i) => (
                    <span
                      key={i}
                      className="text-purple-600 cursor-default"
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
  );
};