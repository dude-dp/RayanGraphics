# Rayan Graphics - Professional Print Shop Website

A modern, animated website for Rayan Graphics print shop in Chennai, featuring online ordering and payment integration.

![Website Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### Design & UI
- **Modern CMYK-inspired design** with vibrant gradient aesthetics
- **Smooth GSAP animations** for enhanced user experience
- **Fully responsive** - works on desktop, tablet, and mobile
- **Accessible** - follows WCAG guidelines
- **Fast loading** - optimized performance

### Functionality
- **Service showcase** with detailed descriptions
- **Interactive portfolio** with hover effects
- **Customer reviews** section with ratings
- **Online ordering system** with form validation
- **Payment integration** via Razorpay (India's leading payment gateway)
- **Contact form** for quote requests
- **Smooth scroll navigation**
- **Mobile-friendly hamburger menu**

### Technical Stack
- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- GSAP 3.12.5 (Animation Library)
- Razorpay Payment Gateway
- Google Fonts (Bebas Neue, Outfit)

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)
- GitHub account (for hosting)
- Razorpay account (for payment processing - optional for demo)

## 🚀 Quick Start

### 1. Clone or Download

```bash
# Clone the repository
git clone https://github.com/yourusername/rayan-graphics.git

# Navigate to directory
cd rayan-graphics
```

Or simply download the files and extract them.

### 2. File Structure

```
rayan-graphics/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/            # (Create this folder for images)
    └── images/
```

### 3. Local Development

Simply open `index.html` in your browser:

```bash
# Using Python's built-in server (recommended)
python -m http.server 8000

# Or using Node.js
npx http-server

# Then open http://localhost:8000 in your browser
```

## 🌐 Deployment to GitHub Pages

### Method 1: GitHub Web Interface

1. Create a new repository on GitHub
2. Upload `index.html`, `styles.css`, and `script.js`
3. Go to repository Settings → Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be live at `https://yourusername.github.io/rayan-graphics`

### Method 2: Git Command Line

```bash
# Initialize git repository
git init

# Add files
git add .

# Commit
git commit -m "Initial commit - Rayan Graphics website"

# Add remote repository
git remote add origin https://github.com/yourusername/rayan-graphics.git

# Push to GitHub
git push -u origin main

# Enable GitHub Pages
# Go to Settings → Pages → Select 'main' branch → Save
```

## 🎨 Customization Guide

### 1. Update Business Information

#### Contact Details (index.html)
Search for "Contact Section" and update:
- Address
- Phone number
- Email
- Business hours
- Metro/Railway station info

```html
<!-- Find and update these sections -->
<div class="info-item">
    <span class="info-icon">📍</span>
    <div class="info-text">
        <h4>Address</h4>
        <p>YOUR ADDRESS HERE</p>
    </div>
</div>
```

#### Business Name & Logo
Update the logo text in the navigation and footer:

```html
<div class="logo">
    <span class="logo-text">YOUR BUSINESS</span>
    <span class="logo-subtext">YOUR TAGLINE</span>
</div>
```

### 2. Customize Colors

Edit CSS variables in `styles.css`:

```css
:root {
    /* Change these to your brand colors */
    --cyan: #00bcd4;        /* Primary color 1 */
    --magenta: #e91e63;     /* Primary color 2 */
    --yellow: #ffc107;      /* Accent color */
    --black: #1a1a1a;       /* Text color */
}
```

### 3. Update Services

Add/remove/modify services in the "Services Section" of `index.html`:

```html
<div class="service-card" data-service="your-service">
    <div class="service-icon">🎨</div>
    <h3 class="service-title">Your Service</h3>
    <p class="service-desc">Description here</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
    <button class="service-btn" onclick="openOrderModal('Your Service')">Order Now</button>
</div>
```

Also update the service prices in `script.js`:

```javascript
const prices = {
    'Your Service': '₹XXX - ₹XXXX',
    // Add more services...
};
```

### 4. Add Portfolio Images

Replace gradient backgrounds with actual images:

```html
<!-- In index.html, find portfolio-item and add image -->
<div class="portfolio-item" style="background-image: url('assets/images/project1.jpg');">
    <div class="portfolio-overlay">
        <h4>Project Title</h4>
        <p>Description</p>
    </div>
</div>
```

Then add CSS for proper image display:

```css
.portfolio-item {
    background-size: cover;
    background-position: center;
}
```

### 5. Update Reviews

Modify the reviews section with real customer testimonials:

```html
<div class="review-card">
    <div class="review-stars">★★★★★</div>
    <p class="review-text">"Your customer review here"</p>
    <div class="review-author">
        <div class="author-avatar">A</div>
        <div class="author-info">
            <h4>Customer Name</h4>
            <span>Business/Role</span>
        </div>
    </div>
</div>
```

## 💳 Payment Integration Setup

### Razorpay Setup (For Indian Businesses)

1. **Create Razorpay Account**
   - Visit https://razorpay.com
   - Sign up for a free account
   - Complete KYC verification

2. **Get API Keys**
   - Go to Settings → API Keys
   - Generate Test Keys for testing
   - Generate Live Keys for production

3. **Update Payment Configuration**

In `script.js`, find the `initiatePayment` function:

```javascript
const options = {
    key: 'rzp_test_XXXXXXXX', // Replace with your Razorpay key
    // For production, use: 'rzp_live_XXXXXXXX'
    ...
};
```

4. **Test Payment**
   - Use test mode keys for testing
   - Test card: 4111 1111 1111 1111
   - Any future expiry date
   - Any CVV

5. **Go Live**
   - Switch to live keys
   - Update key in script.js
   - Test with small transaction first

### Alternative Payment Gateways

To use other payment gateways (Stripe, PayPal, etc.):

1. Remove Razorpay script from `index.html`
2. Add your gateway's script
3. Modify `initiatePayment` function in `script.js`
4. Follow your gateway's integration guide

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px - 1024px
- Mobile: Below 768px

Test responsiveness:
- Chrome DevTools (F12 → Toggle Device Toolbar)
- Physical devices
- BrowserStack or similar tools

## ⚡ Performance Optimization

### Current Optimizations
- Lazy loading for images
- CSS animations (GPU accelerated)
- Minimal external dependencies
- Compressed CSS/JS (minify for production)

### Further Optimizations
1. **Minify files**:
   ```bash
   # Use online tools or:
   npm install -g minify
   minify styles.css > styles.min.css
   minify script.js > script.min.js
   ```

2. **Optimize images**:
   - Use WebP format
   - Compress with TinyPNG or ImageOptim
   - Resize to appropriate dimensions

3. **Enable caching**:
   Add `.htaccess` if using Apache:
   ```apache
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType text/css "access plus 1 year"
       ExpiresByType application/javascript "access plus 1 year"
   </IfModule>
   ```

## 🔒 Security Considerations

1. **Never expose API keys in frontend**
   - For production, API calls should go through your backend
   - Backend validates and processes payments

2. **Form validation**
   - Client-side validation is implemented
   - Add server-side validation for production

3. **HTTPS**
   - GitHub Pages provides free SSL
   - Essential for payment processing

## 🧪 Testing

### Manual Testing Checklist
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Service cards display correctly
- [ ] Order modal opens/closes
- [ ] Forms validate inputs
- [ ] Payment flow works (test mode)
- [ ] Animations are smooth
- [ ] Responsive on all devices
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create GA4 property at https://analytics.google.com
2. Add tracking code to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Troubleshooting

### Common Issues

**Q: Animations not working**
- Check browser console for errors
- Ensure GSAP CDN is loading
- Verify internet connection

**Q: Payment not processing**
- Check Razorpay API key is correct
- Verify account is activated
- Check browser console for errors

**Q: Mobile menu not working**
- Clear browser cache
- Check JavaScript is enabled
- Verify no console errors

**Q: Images not loading**
- Check file paths are correct
- Verify images are in correct folder
- Check image permissions

## 📞 Support

For issues specific to:
- **Razorpay**: https://razorpay.com/support
- **GitHub Pages**: https://docs.github.com/pages
- **GSAP**: https://greensock.com/docs

## 🔄 Updates & Maintenance

### Regular Updates
- Review and update business information
- Add new services/products
- Update portfolio with recent work
- Refresh customer testimonials
- Check for broken links

### Dependency Updates
Check for updates to:
- GSAP library
- Payment gateway SDK
- Browser compatibility

## 📄 License

This project is free to use and modify for your business needs.

## 🙏 Credits

- **Design & Development**: Custom built for Rayan Graphics
- **Animations**: GSAP (GreenSock Animation Platform)
- **Fonts**: Google Fonts (Bebas Neue, Outfit)
- **Payment**: Razorpay
- **Icons**: Unicode Emoji

## 🎯 Future Enhancements

Potential features to add:
- [ ] Customer login/dashboard
- [ ] Order tracking system
- [ ] Online design tool
- [ ] Real-time price calculator
- [ ] Multi-language support
- [ ] Blog section
- [ ] Live chat support
- [ ] Email automation
- [ ] Invoice generation
- [ ] Inventory management

## 📝 Changelog

### Version 1.0.0 (2026-02-01)
- Initial release
- Core features implemented
- Responsive design
- Payment integration
- GSAP animations

---

**Built with ❤️ for Rayan Graphics, Chennai**

For customization help or questions, feel free to reach out!
