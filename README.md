# Regan Anto - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a Full-Stack Developer.

## 🚀 Live Demo

**Production**: [https://regan07.github.io/regan-portfolio/](https://regan07.github.io/regan-portfolio/)

## 👨‍💻 About This Portfolio

This portfolio website represents my journey as a Full-Stack Developer, featuring:

- **Modern Design**: Clean, professional interface with dark/light theme toggle
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and transitions
- **Dynamic Content**: Real-time contact form with EmailJS integration
- **Performance Focused**: Fast loading with optimized assets

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern component-based architecture
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components

### Features & Integrations
- **EmailJS** - Contact form email delivery
- **Lucide Icons** - Beautiful, customizable icons
- **Smooth Scrolling** - Enhanced navigation experience
- **Theme Toggle** - Dark/Light mode support
- **Responsive Design** - Mobile-first approach

### Development & Deployment
- **GitHub Pages** - Hosting and deployment
- **GitHub Actions** - Automated deployment pipeline
- **ESLint & TypeScript** - Code quality and type safety

## 🏗️ Project Structure

```
src/
├── components/
│   ├── portfolio/          # Main portfolio sections
│   │   ├── Header.tsx      # Navigation and theme toggle
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # Personal information
│   │   ├── Skills.tsx      # Technical skills
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Awards.tsx      # Achievements
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer section
│   └── ui/                 # Reusable UI components
├── data/
│   └── portfolioData.ts    # Portfolio content and data
├── lib/
│   ├── assetUtils.ts       # Asset path utilities
│   └── utils.ts            # General utilities
└── pages/
    ├── Index.tsx           # Main portfolio page
    └── NotFound.tsx        # 404 page
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Regan07/regan-portfolio.git
cd regan-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:8080`

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery. To set it up:

1. **Create EmailJS Account**
   - Sign up at [EmailJS.com](https://emailjs.com)
   - Create an email service
   - Create an email template

2. **Configure Environment Variables**
   ```bash
   # Create .env.local file
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id  
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Update Configuration**
   - Replace placeholder values in `src/components/portfolio/Contact.tsx`
   - Customize email template variables

## 🚢 Deployment

### GitHub Pages (Current Setup)

1. **Build for production**
```bash
npm run build
```

2. **Deploy to GitHub Pages**
```bash
npm run deploy
```

The site is automatically deployed to GitHub Pages with the base path `/regan-portfolio/`.

### Alternative Deployment Options
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **Custom Server**: Upload `dist` folder contents

## 🎨 Customization

### Portfolio Data
Update `src/data/portfolioData.ts` to customize:
- Personal information
- Skills and technologies
- Project details
- Work experience
- Contact information

### Styling
- **Colors**: Modify CSS variables in `src/index.css`
- **Components**: Update component styles in respective files
- **Theme**: Customize dark/light theme colors

### Assets
- **Resume**: Replace `public/ReganAnto_Resume.docx`
- **Images**: Add project images to `public/gallery/`
- **Favicon**: Replace `public/favicon.ico`

## 📱 Features Showcase

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark/Light Theme** - User preference toggle
- ✅ **Smooth Animations** - Enhanced user experience
- ✅ **Contact Form** - Direct email integration
- ✅ **Project Gallery** - Showcase with details
- ✅ **Skills Matrix** - Organized by categories
- ✅ **Work Timeline** - Professional experience
- ✅ **Awards Section** - Recognition and achievements
- ✅ **Social Links** - Professional networking
- ✅ **Resume Download** - Direct PDF/DOCX download

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Regan Anto**
- **Email**: regananto986@gmail.com
- **LinkedIn**: [linkedin.com/in/regan-anto](https://www.linkedin.com/in/regan-anto)
- **GitHub**: [github.com/Regan07](https://github.com/Regan07)

---

⭐ **Star this repository if you found it helpful!**
