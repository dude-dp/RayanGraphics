

1. **Update config.js** (Most Important!)
   ```javascript
   // Edit these:
   phone: '+91-XXXXXXXXXX',
   email: 'youremail@example.com',
   
   // Razorpay key (if using payments)
   keyId: 'rzp_test_YOUR_KEY_HERE'
   ```

2. **Update Business Info in index.html**
   - Search for "2nd floor, Vaniga valagam"
   - Replace with your address
   - Update phone, email, hours

3. **Add Your Services**
   - Edit the services section
   - Update prices
   - Change descriptions

4. **Add Real Reviews**
   - Replace sample reviews with actual customer testimonials

### Step 6: Set Up Payments (Optional)

#### For Razorpay (Recommended for India):

1. **Create Account**
   - Go to https://razorpay.com
   - Click "Sign Up"
   - Complete registration

2. **Get Test Keys**
   - Dashboard → Settings → API Keys
   - Click "Generate Test Key"
   - Copy the Key ID

3. **Update Website**
   - In `config.js`, update:
   ```javascript
   razorpay: {
       keyId: 'rzp_test_YOUR_KEY_HERE'
   }
   ```

4. **Test Payment**
   - Use test card: 4111 1111 1111 1111
   - Any future date, any CVV

5. **Go Live**
   - Complete KYC in Razorpay dashboard
   - Generate Live keys
   - Replace test key with live key

### Step 7: Add Google Analytics (Optional)

1. Create GA4 account at https://analytics.google.com
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `config.js`:
   ```javascript
   analytics: {
       trackingId: 'G-XXXXXXXXXX',
       enabled: true
   }
   ```
4. Add tracking code to index.html before `</head>`

## ✅ Verification Checklist

After deployment, check:
- [ ] Website loads correctly
- [ ] All links work
- [ ] Mobile menu works on phone
- [ ] Forms submit properly
- [ ] Contact info is correct
- [ ] Services are accurate
- [ ] Test payment works (test mode)
- [ ] Website is responsive on mobile

## 🔧 Common Issues & Solutions

### Website Not Loading?
- Wait 3-5 minutes after enabling Pages
- Check GitHub Pages is enabled in Settings
- Verify branch is set to "main"
- Clear browser cache (Ctrl+F5)

### Animations Not Working?
- Check browser console (F12)
- Verify GSAP CDN is loading
- Test in different browser

### Payment Not Working?
- Verify Razorpay key is correct
- Check key is for test/live mode
- See browser console for errors

### Mobile Menu Stuck?
- Clear browser cache
- Check JavaScript is enabled
- Try incognito mode

## 📞 Need Help?

1. **GitHub Pages Issues**: https://docs.github.com/pages
2. **Razorpay Support**: https://razorpay.com/support
3. **GSAP Documentation**: https://greensock.com/docs

## 🎯 Next Steps

Once live:
1. Test everything thoroughly
2. Add real portfolio images
3. Update with actual customer reviews
4. Share your website URL
5. Consider custom domain (optional)

## 🌐 Custom Domain (Optional)

Want `www.rayangraphics.com` instead of `.github.io`?

1. Buy domain (GoDaddy, Namecheap, etc.)
2. In GitHub Settings → Pages → Custom domain
3. Enter your domain name
4. Update DNS settings at your registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```
5. Wait 24 hours for propagation

## 💡 Pro Tips

1. **Test on Multiple Devices**: Phone, tablet, desktop
2. **Update Regularly**: Keep content fresh
3. **Backup**: Download files periodically
4. **SEO**: Add meta descriptions
5. **Speed**: Optimize images before uploading
6. **Security**: Never commit secret keys to GitHub

## 📈 Performance Tips

- Compress images (use TinyPNG.com)
- Use WebP format for images
- Minimize CSS/JS for production
- Enable browser caching
- Monitor with Google PageSpeed Insights

---

## 🎉 Congratulations!

Your professional print shop website is now live!

Share it with:
- Customers via WhatsApp/Email
- Google My Business profile
- Social media pages
- Business cards and marketing materials

---

**Need customization help?** 
Review the full README.md for detailed instructions.

**Ready to go live?** 
Remember to switch Razorpay from test to live mode!
