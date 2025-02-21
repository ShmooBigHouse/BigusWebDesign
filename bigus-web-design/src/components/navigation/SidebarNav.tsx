// components/navigation/SidebarNav.tsx
import React, { useState } from 'react';
import { ChevronRight, Home, LayoutDashboard, Users, Settings, Bell, HelpCircle, ChevronLeft } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  badge?: number;
  subitems?: { name: string; href: string }[];
}

interface SidebarNavProps {
  brandName?: string;
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ 
  brandName = "Dashboard",
  className = ""
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Navigation items with their icons and optional subitems
  const navItems: NavItem[] = [
    {
      name: "Home",
      icon: <Home className="w-5 h-5" />,
      href: "#"
    },
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: "#",
      badge: 3,
      subitems: [
        { name: "Analytics", href: "#" },
        { name: "Reports", href: "#" },
        { name: "Real-time", href: "#" }
      ]
    },
    {
      name: "Users",
      icon: <Users className="w-5 h-5" />,
      href: "#",
      subitems: [
        { name: "Team", href: "#" },
        { name: "Permissions", href: "#" }
      ]
    },
    {
      name: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      href: "#",
      badge: 5
    },
    {
      name: "Settings",
      icon: <Settings className="w-5 h-5" />,
      href: "#"
    },
    {
      name: "Help",
      icon: <HelpCircle className="w-5 h-5" />,
      href: "#"
    }
  ];

  return (
    <div 
      className={`
        h-full bg-white border-r border-gray-200
        transition-all duration-300
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${className}
      `}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
          {!isCollapsed && (
            <span className="font-semibold text-lg text-gray-900">
              {brandName}
            </span>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => setExpandedItem(
                expandedItem === item.name ? null : item.name
              )}
              className={`
                w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} 
                p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 group relative
              `}
            >
              <div className="flex items-center">
                <span className="flex-shrink-0">{item.icon}</span>
                {!isCollapsed && (
                  <span className="ml-3">{item.name}</span>
                )}
              </div>
              {!isCollapsed && item.subitems && (
                <ChevronRight 
                  className={`w-5 h-5 transition-transform ${
                    expandedItem === item.name ? 'rotate-90' : ''
                  }`}
                />
              )}
              {item.badge && (
                <span 
                  className={`
                    absolute ${isCollapsed ? 'top-0 right-0' : 'right-2'} 
                    px-2 py-1 text-xs rounded-full bg-blue-500 text-white
                  `}
                >
                  {item.badge}
                </span>
              )}
            </button>

            {/* Subitems */}
            {!isCollapsed && item.subitems && expandedItem === item.name && (
              <div className="mt-2 ml-4 pl-4 border-l border-gray-200">
                {item.subitems.map((subitem) => (
                  <button
                    key={subitem.name}
                    className="w-full p-2 text-sm rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 my-1"
                  >
                    {subitem.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;