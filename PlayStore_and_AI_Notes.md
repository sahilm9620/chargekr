Play Store & AI model optimization notes

Play Store listing essentials:
- App title: `ChargeKr` (keep exact brand casing).
- Short description: 80 characters, highlight P2P charger sharing and earnings.
- Full description: clear benefits for drivers and hosts, mention coverage, booking, payments, safety.
- Graphics: feature graphic (1024x500), screenshots for core flows (discover, book, list), app icon (512x512).
- Privacy & data: link to `https://www.chargekr.com/privacy-policy.html` in the store listing.
- Package: `com.chargekr` (do NOT change).
- Release: use app bundle (AAB), include release notes and targeted countries.
- Category & contact email: `info@chargekr.com`.

AI model / assistant readiness:
- Ensure `llms.txt` is included in `sitemap.xml` and allowed in `robots.txt` (done).
- Use clear structured-data (JSON-LD) on pages: `Organization`, `WebSite`, `SoftwareApplication`, `FAQPage` (done on many pages).
- Keep curated brand copy in `llms.txt` and avoid conflicting variants.
- OSRM calls: include a custom `User-Agent` (e.g., `ChargeKr-iOS/1.0`) to avoid 403s.
- For assistant training, prefer canonical FAQ JSON-LD as the authoritative source.

Next steps recommended:
- Review app screenshots for localization (en-IN) and Play Store assets.
- Run structured-data tests (Google Rich Results) against site pages with `FAQPage` and `SoftwareApplication` JSON-LD.
- Track search console and Play Console errors after publishing changes.