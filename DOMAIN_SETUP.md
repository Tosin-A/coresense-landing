# Custom Domain Setup for coresense.online

## ✅ Code Changes (Already Done)

1. ✅ Created `public/CNAME` file with `coresense.online`
2. ✅ Updated `vite.config.js` to use base path `/` (removed `/coresense-landing/`)
3. ✅ Changes committed and pushed to GitHub

## ⚠️ CURRENT ISSUE: DNS Not Configured Correctly

**Problem:** Your DNS records are currently pointing to `76.223.105.230` and `13.248.243.5`, which are NOT GitHub Pages servers.

**Solution:** You need to update your DNS records at your domain registrar.

## 🔧 Next Steps: Configure DNS and GitHub Pages

### Step 1: Configure DNS Records at Your Domain Registrar

**IMPORTANT:** Go to your domain registrar (where you bought coresense.online) and **DELETE** any existing A records, then add these DNS records:

#### Option A: Apex Domain (coresense.online) - Recommended
Add **4 A records** pointing to GitHub Pages IPs:

```
Type: A
Name: @ (or leave blank, or coresense.online)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank, or coresense.online)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank, or coresense.online)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank, or coresense.online)
Value: 185.199.111.153
TTL: 3600 (or default)
```

#### Option B: CNAME Record (www.coresense.online)
If you want www.coresense.online to work:

```
Type: CNAME
Name: www
Value: Tosin-A.github.io
TTL: 3600 (or default)
```

**Note:** You can use both A records (for apex) and CNAME (for www) if your registrar supports it.

### Step 2: Configure Custom Domain in GitHub Pages

1. Go to your repository: https://github.com/Tosin-A/coresense-landing
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Custom domain**, enter: `coresense.online`
4. Check **Enforce HTTPS** (recommended)
5. Click **Save**

### Step 3: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- GitHub will verify your DNS settings automatically
- You can check status in the GitHub Pages settings page

### Step 4: Verify Everything Works

Once DNS has propagated:

1. Visit `https://coresense.online` - should load your site
2. Check that HTTPS is working (GitHub provides free SSL)
3. Test all pages and forms to ensure everything works

## 🔍 Troubleshooting

### If the site doesn't load after 24 hours:

1. **Check DNS propagation:**
   ```bash
   dig coresense.online +short
   ```
   Should return the 4 GitHub Pages IP addresses

2. **Verify CNAME file:**
   - The CNAME file should be in your repository at `public/CNAME`
   - After deployment, it should be at the root of your site

3. **Check GitHub Pages settings:**
   - Go to Settings → Pages
   - Verify the custom domain is listed
   - Check for any error messages

4. **Clear browser cache:**
   - Try incognito/private browsing mode
   - Or clear your DNS cache

### Common Issues:

- **"Domain not verified"**: Wait longer for DNS propagation
- **"Not secure" warning**: Enable "Enforce HTTPS" in GitHub Pages settings
- **404 errors**: Make sure the base path in vite.config.js is `/` (already done)

## 📝 Notes

- The CNAME file in `public/` will be automatically deployed to the root of your site
- GitHub Pages provides free SSL certificates via Let's Encrypt
- Your site will be available at both:
  - `https://coresense.online` (custom domain)
  - `https://tosin-a.github.io/coresense-landing/` (GitHub Pages URL - will redirect)

