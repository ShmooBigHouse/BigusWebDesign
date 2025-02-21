// components/Footers/LegalFooter.tsx
import React from 'react';
import Link from 'next/link';

interface FooterProps {
  companyName?: string;
  email?: string;
  phone?: {
    office: string;
    cell: string;
  };
  location?: string;
}

const LegalFooter: React.FC<FooterProps> = ({
  companyName = "Edward L. Bigus",
  email = "elbiguspa@gmail.com",
  phone = {
    office: "(913) 888-4520",
    cell: "(913) 221-4520"
  },
  location = "110 S. Cherry Suite 203, Olathe, KS 66061"
}) => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = {
    criminalDefense: {
      title: "Criminal Defense",
      items: ["Felonies", "Misdemeanors", "Traffic", "DUI", "Drug Charges", "Juvenile", "Abuse", "Appeals"]
    },
    domestic: {
      title: "Domestic Law",
      items: ["Divorce", "Paternity", "Child Custody", "Child Support", "Child in Need of Care", "Grandparent's Rights", "Adoption"]
    },
    mediation: {
      title: "Mediation",
      items: ["Core", "Domestic"]
    },
    other: {
      title: "Other Areas",
      items: ["Collections"]
    }
  };
  
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-12">
      <div className="w-full px-4 md:container md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Practice Info */}
          <div>
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white">{companyName}</h3>
              <p className="text-blue-400 mt-2">Attorney at Law</p>
            </div>
            <div className="mt-4 space-y-2">
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block">
                About my practice
              </Link>
              <div className="text-sm text-gray-400 mt-4 space-y-2">
                <p>Licensed in Kansas and Missouri</p>
              </div>
              <div className="text-sm text-gray-400 mt-4 space-y-1">
                <p>Kansas Bar Admission: 1984</p>
                <p>Missouri Bar Admission: 1991</p>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="hidden md:block">
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Practice Areas</h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {/* First Column - Criminal Defense & Mediation */}
              <div className="space-y-2">
                <div>
                  <Link href="/criminal-defense" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {practiceAreas.criminalDefense.title}
                  </Link>
                  <div className="pl-4 text-sm space-y-1 mt-2">
                    {practiceAreas.criminalDefense.items.map((item) => (
                      <div key={item} className="inline-block w-full">
                        <Link 
                          href={`/criminal-defense/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link href="/mediation" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {practiceAreas.mediation.title}
                  </Link>
                  <div className="pl-4 text-sm space-y-1 mt-2">
                    {practiceAreas.mediation.items.map((item) => (
                      <div key={item} className="inline-block w-full">
                        <Link 
                          href={`/mediation/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Column - Domestic Law & Collections */}
              <div className="space-y-2">
                <div>
                  <Link href="/domestic" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {practiceAreas.domestic.title}
                  </Link>
                  <div className="pl-4 text-sm space-y-1 mt-2">
                    {practiceAreas.domestic.items.map((item) => (
                      <div key={item} className="inline-block w-full">
                        <Link 
                          href={`/domestic/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <Link href="/collections" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    Collections
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="h-[76px] border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div className="text-gray-300">
                <p className="mb-1">Office Location:</p>
                <p>{location}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">Get in Touch:</p>
                <div className="space-y-2">
                  <a href={`tel:1-${phone.office.replace(/\D/g,'')}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">
                    Office: {phone.office}
                  </a>
                  <a href={`tel:1-${phone.cell.replace(/\D/g,'')}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">
                    Cell: {phone.cell}
                  </a>
                  <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-2 border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="space-y-2 md:space-y-0">
              <p>© {currentYear} {companyName}. All rights reserved.</p>
              <p className="text-xs text-gray-500">Designed by BigusDesign.com</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-blue-400 transition-colors duration-200">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;