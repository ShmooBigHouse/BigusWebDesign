// components/PlanBuilder/types.ts
export interface Page {
    id: string;
    name: string;
    components: Array<{
      category: string;
      name: string;
      id: string;
    }>;
  }
  
  export interface BusinessFormData {
    businessName: string;
    tagline: string;
    description: string;
    logo?: File;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
    pages: {
      name: string;
      content: string;
      imageRequirements?: string;
    }[];
    contactDetails: {
      name: string;
      email: string;
      phone: string;
      address?: string;
      socialMedia?: {
        platform: string;
        url: string;
      }[];
    };
  }
  
  export interface MonitoringSelection {
    includes: boolean;
    plan?: 'basic' | 'premium';
  }
  
  export interface CheckoutDetails {
    basePrice: number;
    additionalPages: number;
    monitoring: boolean;
    monitoringPrice: number;
    total: number;
  }