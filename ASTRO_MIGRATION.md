# Squarevendo Portfolio - Astro + Tailwind CSS

🚀 **Modern portfolio website built with Astro and Tailwind CSS**

## ✨ What's New

This portfolio has been upgraded to use **Astro 6** with **Tailwind CSS 4**, providing:

- ⚡ **Lightning-fast performance** with Astro's island architecture
- 🎨 **Tailwind CSS** for modern, utility-first styling
- 📱 **Fully responsive** design
- 🔄 **Component-based** architecture
- 📦 **Optimized assets** in public folder
- ♿ **Accessible** markup and navigation
- 🎯 **Smooth scroll behavior** with ScrollReveal
- 📧 **Web3Forms integration** for contact submissions

## 🗂️ Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Navigation.astro    # Main navigation bar
│   ├── Hero.astro          # Hero section
│   ├── Projects.astro      # Projects grid with filtering
│   ├── Contact.astro       # Contact form
│   ├── Loading.astro       # Loading animation
│   └── Footer.astro        # Footer component
├── layouts/
│   └── Layout.astro     # Main layout wrapper
├── pages/               # Page routes
│   ├── index.astro         # Home page (/)
│   ├── success.astro       # Success page (/success)
│   ├── resume.astro        # Resume page (/resume)
│   └── art-studio/         # Art studio section (/art-studio)
│       └── index.astro
└── styles/
    └── base.css         # Base styles (copied from legacy CSS)

public/                 # Static assets
├── images/            # All image files
├── *.mp4              # Videos
└── *.png, *.jpg       # Project screenshots

astro.config.mjs       # Astro configuration
tailwind.config.js     # Tailwind CSS configuration
package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22.12.0 or higher
- npm or pnpm package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

3. **Build for production:**
```bash
npm build
```

4. **Preview production build:**
```bash
npm preview
```

## 📄 Pages

- **Home** (`/`) - Main landing page with hero, projects showcase, and contact form
- **Resume** (`/resume`) - Full resume/CV page
- **Success** (`/success`) - Thank you page after form submission
- **Art Studio** (`/art-studio`) - Yoga studio showcase project

## 🎨 Styling

### Tailwind CSS
- **Configuration:** `tailwind.config.js`
- **Color scheme:** Primary blue (#3b82f6), with supporting grays
- **Custom fonts:** Montserrat (Google Fonts)
- **Responsive breakpoints:** Mobile-first approach

### CSS Variables (for legacy support)
```css
--primary-color: #3b82f6
--primary-color-dark: #2563eb
--text-dark: #2d2d2d
--text-light: #4a4a4a
--text-muted: #7a7a7a
--bg-dark: #f5f5f1
--bg-card: #ffffff
```

## 🔧 Key Features

### Navigation
- Fixed navbar with smooth scrolling
- Mobile hamburger menu
- Automatic menu close on link click

### Hero Section
- Animated heading and content
- Call-to-action buttons
- Social media links
- ScrollReveal animations

### Projects Section
- Grid layout with hover effects
- Category filtering (All, Web Design, App Development, UI/UX)
- Project cards with overlays
- Direct links to live projects

### Contact Form
- Web3Forms integration (no backend needed)
- Form validation
- Success/error feedback
- Contact information display

### Loading Animation
- Custom percentage counter
- Animated loading bar
- Auto-dismiss after 2 seconds

## 📱 Responsive Design

All components are fully responsive:
- **Desktop:** Full multi-column layouts
- **Tablet:** Adapted grid layouts
- **Mobile:** Single column layouts with touch-friendly navigation

## 🔗 External Dependencies

- **RemixIcon:** Icon library (CDN)
- **ScrollReveal:** Scroll animations (CDN)
- **Web3Forms:** Contact form backend (API)

## 📋 File Structure Preserved

✅ **All original files preserved:**
- Image files in `/public`
- Videos and assets copied to `/public`
- Original HTML files remain for reference
- Links use relative paths for forward compatibility

⚠️ **Note:** Update redirect URLs if changing domains. Currently set to `https://squarevendo.com/success.html`

## 🚢 Deployment

### Build Steps
1. `npm run build` - Creates optimized production files in `dist/`
2. Deploy `dist/` folder to your hosting

### Recommended Hosts
- **Vercel** (native Astro support)
- **Netlify** (direct Git integration)
- **AWS S3 + CloudFront**
- **Any static host** (GitHub Pages, etc.)

### Environment Variables
Currently using Web3Forms - no backend environment variables needed. To use a different form provider:

1. Update the form action in `src/components/Contact.astro`
2. Update the access key and redirect URL

## 🔄 Migration Notes

### From Static HTML to Astro

**What Changed:**
- ✅ HTML files → Astro components
- ✅ CSS → Tailwind utilities + component styles
- ✅ Vanilla JS → Astro script tags + client-side JS
- ✅ Images → Optimized in public folder

**What Stayed the Same:**
- ✅ Exact same visual design
- ✅ All functionality preserved
- ✅ Same URL structure and routing
- ✅ Same asset file paths
- ✅ Mobile menu behavior
- ✅ Form integration

### Performance Improvements
- 🚀 Faster page loads (Astro zero-JS by default)
- 📦 Smaller bundle sizes
- 🎯 Better SEO with semantic HTML
- ⚡ Efficient CSS bundling

## 🛠️ Customization Guide

### Adding New Pages
Create a new file in `src/pages/`:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title">
  <h1>Your Content Here</h1>
</Layout>
```

### Modifying Styles
1. **Component styles:** Edit `<style>` block in each `.astro` file
2. **Global styles:** Modify `src/layouts/Layout.astro`
3. **Tailwind:** Update `tailwind.config.js` for theme changes

### Adding Components
1. Create new file in `src/components/`
2. Import in page files: `import MyComponent from '../components/MyComponent.astro'`
3. Use in template: `<MyComponent />`

## 🐛 Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3001
```

**Assets not loading:**
- Ensure image paths start with `/` (e.g., `/image.png`)
- Check that files exist in `/public` folder

**Form not working:**
- Verify Web3Forms access key in `Contact.astro`
- Check redirect URL is correct

**Styles not applying:**
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server

## 📞 Support & Documentation

- **Astro Docs:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com
- **Web3Forms:** https://web3forms.com
- **ScrollReveal:** https://scrollrevealjs.org

## 📄 License

MIT License - Free to use and modify

## 🎯 Next Steps

1. ✅ Review the design and functionality
2. ✅ Test all pages and forms
3. ✅ Update contact form settings if needed
4. ✅ Deploy to production
5. ✅ Monitor performance metrics

---

**Built with ❤️ using Astro & Tailwind CSS**
