# Website Configuration System

This directory contains the configuration system that makes the HRak Tech website data customizable without touching the code.

## Files

- `website-config.json` - The main configuration file containing all website data
- `../hooks/useWebsiteConfig.ts` - React hooks and utilities for accessing configuration data

## Configuration Structure

The configuration is organized into logical sections:

### Company Information (`company`)
- Basic company details (name, tagline, description)
- Logo paths
- Contact information (email, phone, address)
- Social media links
- Trust indicators/stats

### SEO Configuration (`seo`)
- Page title and meta description
- Keywords and author information
- Open Graph and Twitter card data
- Website URL and locale

### Section-Specific Content
Each major website section has its own configuration:

- `hero` - Hero section content and CTA
- `services` - Services offered and descriptions
- `technologies` - Technology stack and descriptions
- `projects` - Portfolio projects organized by category
- `testimonials` - Customer testimonials and reviews
- `contact` - Contact form fields and information
- `footer` - Footer links and content
- `navigation` - Navigation menu items

### Theme Configuration (`theme`)
- Brand colors and gradients
- Consistent styling values

## Usage

### In Components

```tsx
import { useWebsiteConfig } from "@/hooks/useWebsiteConfig";

export function MyComponent() {
  const config = useWebsiteConfig();
  
  return (
    <div>
      <h1>{config.company.name}</h1>
      <p>{config.hero.subtitle.main}</p>
    </div>
  );
}
```

### For Specific Sections

```tsx
import { getConfigSection } from "@/hooks/useWebsiteConfig";

// In server components or for static data
const seoConfig = getConfigSection("seo");
const heroConfig = getConfigSection("hero");
```

### Utility Hooks

```tsx
import { useCompanyInfo, useSEOInfo, useTheme } from "@/hooks/useWebsiteConfig";

export function MyComponent() {
  const company = useCompanyInfo();
  const theme = useTheme();
  
  return <div style={{ color: theme.colors.primary }}>{company.name}</div>;
}
```

## Customization Guide

### Updating Content

1. Open `website-config.json`
2. Find the section you want to modify
3. Update the text, URLs, or data
4. Save the file - changes will be reflected immediately

### Adding New Services

```json
{
  "services": {
    "items": [
      {
        "id": "new-service",
        "icon": "icon-name",
        "title": "New Service Title",
        "description": "Service description",
        "color": "from-[#color1] to-[#color2]",
        "bgColor": "from-[#color1]/20 to-[#color2]/10"
      }
    ]
  }
}
```

### Adding New Testimonials

```json
{
  "testimonials": {
    "items": [
      {
        "id": 5,
        "name": "Client Name",
        "position": "Job Title",
        "company": "Company Name",
        "image": "👤",
        "rating": 5,
        "comment": "Testimonial text here..."
      }
    ]
  }
}
```

### Adding New Projects

```json
{
  "projects": {
    "categories": {
      "web": {
        "projects": [
          {
            "name": "Project Name",
            "url": "https://project-url.com",
            "description": "Project description"
          }
        ]
      }
    }
  }
}
```

## Component Integration Status

### ✅ Fully Integrated
- `layout.tsx` - SEO metadata
- `Navbar.tsx` - Navigation items and company info
- `HeroSection.tsx` - Hero content and CTA
- `Footer.tsx` - Footer content and links

### 🔄 Partially Integrated
- Contact information is used in multiple components

### ⏳ Pending Integration
- `ServicesSection.tsx`
- `TechnologiesSection.tsx`
- `ProjectsSection.tsx`
- `TestimonialsSection.tsx`
- `ContactSection.tsx`

See `ConfigExample.tsx` for integration patterns for the remaining components.

## Benefits

1. **Easy Content Management** - Update website content without code changes
2. **Consistency** - Centralized data ensures consistency across components
3. **Type Safety** - TypeScript interfaces prevent configuration errors
4. **Maintainability** - Clear separation between content and presentation
5. **Scalability** - Easy to add new sections or modify existing ones

## Best Practices

1. Always use the configuration hooks in components
2. Don't hardcode strings that should be configurable
3. Keep the JSON structure organized and well-commented
4. Use meaningful IDs and keys for list items
5. Validate configuration changes before deployment
6. Consider creating a simple admin interface for non-technical users

## Future Enhancements

- Environment-specific configurations (dev, staging, prod)
- Multi-language support
- CMS integration for dynamic updates
- Configuration validation schema
- Admin interface for content management
