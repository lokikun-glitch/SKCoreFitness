# Simple SEO Skills — Brand Name Search & Google Visibility

## Goal

For a static website, make the site technically ready so that searches for the exact business/brand name can find the website.

Example:
- `SKCORE FITNESS`
- `SK CORE FITNESS`
- `SK CORE FITNESS CLUB`

This is **basic search/indexing setup**, NOT a full SEO campaign.

---

## Agent Instructions

You are an implementation agent working inside an existing website repository.

### 1. Inspect the project first

Identify:
- Framework/build system
- Homepage entry point
- `<head>` / metadata handling
- Existing `robots.txt`
- Existing `sitemap.xml`
- Existing structured data/schema
- Existing canonical URL
- Existing domain configuration

Do not blindly overwrite existing SEO configuration.

---

## 2. Homepage metadata

Ensure the homepage has a meaningful `<title>` containing the exact business name.

Example:

```html
<title>SKCORE FITNESS | SK CORE FITNESS CLUB</title>
```

Add a useful meta description containing:
- Business name
- Main service
- Location if the website already provides the location

Example:

```html
<meta
  name="description"
  content="SKCORE FITNESS — SK CORE FITNESS CLUB in Nagpur. ..."
/>
```

Do NOT keyword-stuff.

---

## 3. Visible business identity

Ensure the homepage visibly contains the official business name.

Prefer:
- `<h1>` containing the business name
- Clear business name in introductory content
- Consistent spelling throughout the website

Do not invent business information.

If the official business name is unclear, STOP and ask the human.

---

## 4. Canonical URL

Add a canonical URL pointing to the production domain.

Example:

```html
<link rel="canonical" href="https://skcore.fitness/" />
```

Use the actual production domain found in the project/configuration.

Do not invent domains.

---

## 5. robots.txt

Ensure a valid `robots.txt` exists at:

```text
/robots.txt
```

Basic example:

```txt
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Replace `example.com` with the actual production domain.

Do not block the homepage or important public pages.

---

## 6. sitemap.xml

Create or update:

```text
/sitemap.xml
```

Include the production URL(s) that should be indexed.

For a simple one-page website:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
  </url>
</urlset>
```

Use the actual production domain.

---

## 7. Structured data

If appropriate for the existing website, add valid JSON-LD describing the website/business.

For the site-name case, consider:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SKCORE FITNESS",
  "alternateName": [
    "SK CORE FITNESS",
    "SK CORE FITNESS CLUB"
  ],
  "url": "https://skcore.fitness/"
}
```

Only use names that are actually provided by the client/site.

If the business is clearly a local business and enough factual information is already present, additional appropriate structured data may be added.

Do not invent:
- ratings
- reviews
- prices
- addresses
- phone numbers
- opening hours
- social profiles

---

## 8. Build and verify

After changes:

1. Run the project's normal build.
2. Fix any build errors.
3. Verify:
   - Homepage loads
   - `/robots.txt` loads
   - `/sitemap.xml` loads
   - Canonical URL is correct
   - `<title>` is correct
   - Meta description exists
   - Business name is visible
   - JSON-LD is valid if added

Do not claim Google indexing has happened merely because the code is correct.

---

# Human-Only Steps

Some Google services require access to the client's Google account/domain/property.

If the agent cannot perform the action legitimately with available credentials, **DO NOT ask for passwords or attempt to bypass authentication.**

Instead, give the human a step-by-step guide.

## Google Search Console

Ask the client to:

1. Open Google Search Console.
2. Choose **Add property**.
3. Prefer **Domain property** for the custom domain.
4. Enter:

```text
skcore.fitness
```

5. Google will provide a DNS verification record.
6. Ask the client to add that DNS record at their domain/DNS provider.
7. Return to Search Console.
8. Click **Verify**.
9. After verification, open **Sitemaps**.
10. Submit:

```text
sitemap.xml
```

11. Open **URL Inspection**.
12. Enter:

```text
https://skcore.fitness/
```

13. If Google reports that the URL is not indexed, use **Request indexing**.
14. Wait for Google to crawl/process the request.

### Important

Do not promise:
- immediate indexing
- a specific indexing date
- a specific Google ranking
- first position
- guaranteed search visibility

Google controls crawling, indexing, and ranking.

---

# Google Analytics

Google Analytics is NOT required merely for Google Search indexing.

Only configure it if the client requests analytics.

If analytics is requested and human Google-account access is required:

1. Go to Google Analytics.
2. Create/select the client's property.
3. Create/select the web data stream.
4. Enter the production website URL.
5. Copy the provided Google tag/measurement ID.
6. Add it to the website's global `<head>` using the project's appropriate method.
7. Deploy.
8. Use Analytics' real-time/debug tools to verify data.

Never ask the client for their Google password.

---

# Google Business Profile

If the client wants the business to appear prominently for:
- `gym near me`
- `gyms in Nagpur`
- `best gym in Nagpur`
- other local searches

that is beyond this simple brand-name indexing task.

If they want a Google Business Profile, tell the human they need to create/claim and verify it through their own Google account.

Do not create fake locations, reviews, or business information.

---

# Scope Boundary

This skill handles:

- Technical crawlability
- Basic homepage metadata
- Brand-name consistency
- Canonical URL
- robots.txt
- sitemap.xml
- Basic structured data
- Search Console setup guidance
- Indexing request guidance

This skill does NOT promise or automatically perform:

- Ranking #1
- Competitive keyword SEO
- Backlink campaigns
- Content marketing
- Link building
- Review manipulation
- Fake traffic/clicks
- Guaranteed indexing time
- Guaranteed search position
- Full monthly SEO campaigns

---

# Final Report

When finished, report:

### Completed
- [x] Homepage title
- [x] Meta description
- [x] Business name consistency
- [x] Canonical URL
- [x] robots.txt
- [x] sitemap.xml
- [x] Structured data (if appropriate)
- [x] Build verification

### Human action required
Clearly list anything the agent could not do because it requires the client's Google/DNS/account access.

Give exact step-by-step instructions.

### Important
State that the website is technically prepared for Google discovery/indexing, but Google controls when it crawls, indexes, and displays the site.
