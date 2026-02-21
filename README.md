# Modern Portfolio Website

A beautiful, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your work, skills, and professional experience.

## Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- ⚡ **Interactive Elements** - Smooth scrolling, hover effects, and micro-interactions
- 🌙 **Dark Mode Ready** - Easy to add dark mode functionality
- 📧 **Contact Form** - Functional contact form with validation
- 🎯 **SEO Optimized** - Semantic HTML5 structure
- 🚀 **Fast Loading** - Optimized images and minimal dependencies

## Structure

```
port/
├── index.html      # Main HTML file
├── styles.css      # Complete styling
├── script.js       # Interactive features
└── README.md       # This file
```

## Customization Guide

### 1. Personal Information

Edit `index.html` and update the following:

**Hero Section:**
- Replace "Your Name" with your actual name
- Update "Full Stack Developer" to your title
- Modify the description to match your background
- Add your social media links

**About Section:**
- Update the about text with your personal story
- Modify the stats (projects, experience, clients)
- Update contact information

### 2. Projects

In the Projects section of `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="#" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

### 3. Skills

Update the skills section in `index.html` with your actual technologies:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### 4. Colors and Styling

Edit `styles.css` to customize colors:

```css
:root {
    --primary-color: #4F46E5;    /* Main brand color */
    --secondary-color: #10B981;  /* Secondary accent */
    --accent-color: #F59E0B;     /* Highlight color */
    /* ... other colors */
}
```

### 5. Profile Image

Replace the placeholder image in the hero section:
- Find the `<img src="https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=Your+Photo">` 
- Replace with your own image URL
- Recommended size: 300x300px

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" → "main"
5. Your site will be live at `https://username.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up for Netlify
2. Drag and drop the entire folder
3. Your site will be deployed instantly

### Option 3: Vercel (Free)

1. Sign up for Vercel
2. Import your GitHub repository
3. Deploy automatically

### Option 4: Traditional Hosting

1. Purchase a domain and hosting
2. Upload files via FTP or cPanel
3. Point your domain to the uploaded files

## Contact Form Setup

The contact form is configured for client-side validation only. To make it fully functional:

### Option 1: Formspree (Easy)

1. Sign up for Formspree
2. Create a new form
3. Update the form action in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
```

### Option 2: Netlify Forms

If using Netlify, simply add the `data-netlify="true"` attribute:
```html
<form class="contact-form" data-netlify="true" name="contact">
```

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minify CSS/JS**: Use build tools for production
3. **Enable Caching**: Configure server headers
4. **Use CDN**: Serve assets from CDN for better performance

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing or have questions:

1. Check the customization guide above
2. Review the code comments in each file
3. Test changes locally before deploying

## Future Enhancements

- Blog section
- Testimonials
- Dark mode toggle
- Project filtering
- Resume download
- Multi-language support

---

**Happy coding! 🚀**
