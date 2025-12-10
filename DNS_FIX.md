# 🔴 URGENT: Fix DNS Configuration for coresense.online

## Current Problem

Your domain `coresense.online` is currently pointing to:
- `76.223.105.230` ❌ (Wrong - not GitHub Pages)
- `13.248.243.5` ❌ (Wrong - not GitHub Pages)

GitHub Pages cannot verify your domain because it doesn't resolve to their servers.

## ✅ Solution: Update DNS Records

### Step 1: Log into Your Domain Registrar

Go to where you purchased `coresense.online` (e.g., Namecheap, GoDaddy, Google Domains, etc.)

### Step 2: Delete Existing A Records

1. Find your DNS management / DNS settings
2. **DELETE** any existing A records for `coresense.online` (especially the ones pointing to `76.223.105.230` and `13.248.243.5`)

### Step 3: Add 4 New A Records

Add these **4 A records** (all pointing to GitHub Pages):

```
Record 1:
Type: A
Host/Name: @ (or leave blank, or coresense.online)
Value/IP: 185.199.108.153
TTL: 3600 (or Auto/Default)

Record 2:
Type: A
Host/Name: @ (or leave blank, or coresense.online)
Value/IP: 185.199.109.153
TTL: 3600 (or Auto/Default)

Record 3:
Type: A
Host/Name: @ (or leave blank, or coresense.online)
Value/IP: 185.199.110.153
TTL: 3600 (or Auto/Default)

Record 4:
Type: A
Host/Name: @ (or leave blank, or coresense.online)
Value/IP: 185.199.111.153
TTL: 3600 (or Auto/Default)
```

**Note:** Some registrars use different field names:
- "Host" or "Name" might be `@`, blank, or `coresense.online`
- "Value" or "Points to" or "IP Address" should be the IP addresses above
- "TTL" can be 3600 or Auto/Default

### Step 4: (Optional) Add CNAME for www

If you want `www.coresense.online` to work:

```
Type: CNAME
Host/Name: www
Value/Points to: Tosin-A.github.io
TTL: 3600 (or Auto/Default)
```

### Step 5: Save and Wait

1. **Save** your DNS changes
2. **Wait 15-60 minutes** for DNS to propagate
3. GitHub will automatically detect the changes and verify your domain

## ✅ Verify DNS is Fixed

After 15-60 minutes, run this command to check:

```bash
dig coresense.online +short
```

You should see **all 4 GitHub Pages IP addresses**:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

If you see these IPs, your DNS is correct! GitHub should verify automatically within a few minutes.

## 📋 Quick Reference: GitHub Pages IP Addresses

For apex domains (like coresense.online), you MUST use all 4 A records:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

## 🆘 Still Having Issues?

1. **Double-check** you deleted the old A records first
2. **Verify** all 4 A records are added (not just 1 or 2)
3. **Wait longer** - DNS can take up to 48 hours (but usually 15-60 minutes)
4. **Check GitHub Pages settings** - Go to Settings → Pages and see if there are any error messages

## 📝 Common Registrar Instructions

### Namecheap
1. Go to Domain List → Manage → Advanced DNS
2. Delete old A records
3. Add 4 new A records with Host `@` and Value as the IPs above

### GoDaddy
1. Go to My Products → DNS
2. Delete old A records
3. Add 4 new A records with Name `@` and Value as the IPs above

### Google Domains
1. Go to DNS → Custom records
2. Delete old A records
3. Add 4 new A records with Name `@` and Data as the IPs above

