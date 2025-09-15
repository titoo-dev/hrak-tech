import { useMemo } from 'react';
import websiteConfig from '@/config/website-config.json';

// Type definitions for the website configuration
export interface WebsiteConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    logo: string;
    logoWithBg: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      twitterHandle: string;
    };
    stats: Array<{
      label: string;
      icon: string;
    }>;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    url: string;
    locale: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };
  hero: {
    badge: {
      text: string;
      icon: string;
    };
    title: {
      words: string[];
      highlight: string;
    };
    subtitle: {
      main: string;
      secondary: string;
    };
    cta: {
      text: string;
      action: string;
    };
  };
  services: {
    badge: string;
    title: {
      main: string;
      highlight: string;
      subtitle: string;
    };
    description: string;
    items: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
      color: string;
      bgColor: string;
    }>;
    cta: {
      text: string;
      action: string;
    };
  };
  technologies: {
    badge: string;
    title: {
      main: string;
      highlight: string;
      subtitle: string;
    };
    description: string;
    items: Array<{
      name: string;
      description: string;
      logo: string;
      color: string;
      glowColor: string;
      accent: string;
    }>;
    additionalInfo: {
      title: string;
      description: string;
      technologies: string;
    };
  };
  projects: {
    badge: string;
    title: {
      main: string;
      highlight: string;
      subtitle: string;
    };
    description: string;
    categories: {
      [key: string]: {
        title: string;
        icon: string;
        color: string;
        glowColor: string;
        projects: Array<{
          name: string;
          description: string;
          url?: string;
        }>;
      };
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
      action: string;
    };
  };
  testimonials: {
    badge: string;
    title: {
      main: string;
      highlight: string;
      subtitle: string;
    };
    description: string;
    items: Array<{
      id: number;
      name: string;
      position: string;
      company: string;
      image: string;
      rating: number;
      comment: string;
    }>;
  };
  contact: {
    badge: string;
    title: {
      main: string;
      highlight: string;
      subtitle: string;
    };
    description: string;
    info: {
      title: string;
      description: string;
      guarantee: {
        title: string;
        description: string;
      };
    };
    form: {
      title: string;
      fields: {
        [key: string]: {
          label: string;
          placeholder: string;
          required: boolean;
          options?: Array<{
            value: string;
            label: string;
          }>;
        };
      };
      submitButton: {
        text: string;
        loadingText: string;
      };
    };
    success: {
      title: string;
      description: string;
    };
  };
  footer: {
    description: string;
    navigation: Array<{
      label: string;
      section: string;
    }>;
    services: string[];
    legal: Array<{
      label: string;
      url: string;
    }>;
    copyright: string;
  };
  navigation: {
    items: Array<{
      label: string;
      section: string;
    }>;
    cta: {
      text: string;
      action: string;
    };
  };
  theme: {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      accent: string;
    };
    gradients: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
}

/**
 * Custom hook to access website configuration data
 * @returns The complete website configuration object
 */
export const useWebsiteConfig = (): WebsiteConfig => {
  return useMemo(() => websiteConfig as WebsiteConfig, []);
};

/**
 * Utility function to get a specific section of the configuration
 * @param section - The section key to retrieve
 * @returns The requested configuration section
 */
export const getConfigSection = <K extends keyof WebsiteConfig>(
  section: K
): WebsiteConfig[K] => {
  return websiteConfig[section] as WebsiteConfig[K];
};

/**
 * Utility function to get company information
 * @returns Company configuration
 */
export const useCompanyInfo = () => {
  const config = useWebsiteConfig();
  return config.company;
};

/**
 * Utility function to get SEO information
 * @returns SEO configuration
 */
export const useSEOInfo = () => {
  const config = useWebsiteConfig();
  return config.seo;
};

/**
 * Utility function to get theme colors and gradients
 * @returns Theme configuration
 */
export const useTheme = () => {
  const config = useWebsiteConfig();
  return config.theme;
};

export default useWebsiteConfig;
