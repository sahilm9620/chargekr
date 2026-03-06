# Chargekr — Complete Application Blueprint

> India's First Peer-to-Peer EV Charging Platform

**Version:** 1.0  
**Last Updated:** February 23, 2026  
**Contact:** info@chargekr.com  
**Website:** [chargekr.com](https://chargekr.com)

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Problem Statement](#2-problem-statement)
3. [Solution](#3-solution)
4. [User Personas](#4-user-personas)
5. [Core Features](#5-core-features)
6. [User Flows](#6-user-flows)
7. [Earning & Business Model](#7-earning--business-model)
8. [Charger Types Supported](#8-charger-types-supported)
9. [Safety & Trust System](#9-safety--trust-system)
10. [Payment System](#10-payment-system)
11. [Insurance & Host Protection](#11-insurance--host-protection)
12. [Technical Architecture](#12-technical-architecture)
13. [AI & Smart Features](#13-ai--smart-features)
14. [Admin Panel](#14-admin-panel)
15. [Legal & Compliance](#15-legal--compliance)
16. [Roadmap & Future Features](#16-roadmap--future-features)

---

## 1. Product Overview

**Chargekr** is a mobile-first platform (Android + iOS) that connects **EV charger owners ("Hosts")** with **electric vehicle drivers ("Drivers")**. Hosts list their idle home/office chargers, drivers discover and book them, and payments happen automatically through the app.

**Tagline:** *Share your charger, earn money, and build a greener future.*

### Key Metrics (Targets)
| Metric | Target |
|--------|--------|
| Chargers Shared | 2,500+ |
| Registered Users | 10,000+ |
| Cities | 15+ (India) |
| CO₂ Prevented | 50+ tons |
| Avg. Host Monthly Earnings | ₹5,000–15,000 |
| Host Revenue Share | 85% |
| Platform Fee | 15% |

### Platform Availability
- **Android:** Google Play Store
- **iOS:** Apple App Store
- **Web:** chargekr.com (marketing + landing)

---

## 2. Problem Statement

- India's EV adoption is surging but public charging infrastructure hasn't kept pace
- EV owners experience **range anxiety** — fear of running out of charge with no charger nearby
- Average home EV charger sits **idle 20+ hours/day** — a massive underutilized resource
- Public stations often have **long wait times**, high prices, or are unreliable
- No existing platform in India connects private charger owners with drivers who need a charge

---

## 3. Solution

Chargekr creates a **decentralized, community-powered charging network** by:

1. **Empowering Hosts** — Homeowners monetize their idle chargers
2. **Helping Drivers** — Nearby chargers are discoverable and bookable in seconds
3. **Saving Money** — Up to 40% cheaper than public/commercial charging stations
4. **Reducing Emissions** — Utilizes existing infrastructure instead of building new stations
5. **Building Community** — Peer-to-peer trust through reviews, ratings, and verified profiles

---

## 4. User Personas

### 4.1 Charger Host (Supplier)
- **Who:** Homeowner, apartment resident, office/shop owner with an EV charger
- **Motivation:** Earn passive income, help neighbors, offset electricity costs
- **Behavior:** Lists charger once, sets schedule, earns money weekly
- **Pain Point:** Charger sits idle most of the day, no way to monetize it

### 4.2 EV Driver (Consumer)
- **Who:** EV owner (car, scooter, bike) needing to charge away from home
- **Motivation:** Find affordable, nearby charging without long waits
- **Behavior:** Opens app → finds charger → books → drives there → charges → pays
- **Pain Point:** Range anxiety, expensive public chargers, limited availability

---

## 5. Core Features

### 5.1 For Drivers

| Feature | Description |
|---------|-------------|
| **Charger Discovery** | Map view showing all available chargers nearby with real-time availability |
| **Smart Search & Filters** | Filter by charger type (L1/L2/DC), connector, price range, distance, rating |
| **Booking System** | Reserve a charger slot in advance or book on-demand |
| **Navigation** | In-app navigation to charger location (integrates with Google Maps / Apple Maps) |
| **Trip Planner** | Plan a long-distance trip with optimal charging stops along the route |
| **Live Status** | Real-time charging session progress — current charge %, estimated time remaining |
| **Payment** | Automatic payment at session end via UPI / cards / net banking |
| **Reviews & Ratings** | Rate hosts and chargers after each session (1-5 stars + text review) |
| **Charging History** | View past sessions, receipts, and spending analytics |
| **Favorites** | Save frequently used chargers for quick rebooking |
| **Notifications** | Push notifications for booking confirmations, session updates, promotions |

### 5.2 For Hosts

| Feature | Description |
|---------|-------------|
| **Charger Listing** | Add charger with type, connector, photos, location pin, description |
| **Availability Scheduler** | Set when charger is available — daily, weekly, custom. Block personal use times |
| **Pricing Control** | Set your own hourly rate OR use AI-suggested pricing based on location & demand |
| **Booking Management** | View incoming bookings, approve/decline, manage calendar |
| **Host Dashboard** | Real-time earnings tracker, booking stats, charger usage analytics |
| **Payout** | Automatic weekly payouts to bank account (every Monday) |
| **Guest Communication** | In-app messaging with drivers for session coordination |
| **Reviews** | View ratings received, respond to reviews |
| **Tax Reports** | Export earning reports for income tax / GST filing |
| **Host Protection** | Insurance coverage up to ₹2,00,000 per incident |

### 5.3 Common Features

| Feature | Description |
|---------|-------------|
| **User Registration** | Sign up via phone number + OTP, or email |
| **Profile** | Name, photo, vehicle details (drivers), charger details (hosts), verification status |
| **KYC Verification** | Government ID upload for identity verification (hosts & high-value transactions) |
| **In-App Chat** | Messaging between driver and host for a confirmed booking |
| **Support** | 24/7 in-app support chat + email support |
| **Dark Mode** | Full dark mode UI |
| **Multi-Language** | Hindi + English (initially), expandable |

---

## 6. User Flows

### 6.1 Driver Flow

```
Open App
  → Enable Location / Enter Area
  → Browse Map OR List View of Nearby Chargers
  → Select Charger → View Details (type, price, photos, rating, distance)
  → Tap "Book Now"
  → Select Date + Time Slot
  → Confirm Booking → Pay (or pay-after-session)
  → Navigate to Charger Location
  → Start Charging Session (scan QR or confirm in-app)
  → Monitor Charging Progress (real-time)
  → Session Ends → Auto-payment processed
  → Rate & Review Host
```

### 6.2 Host Onboarding Flow

```
Download App → Sign Up
  → Select "I'm a Charger Host"
  → Add Charger Details:
      ├── Charger Type (Level 1 / Level 2 / DC Fast)
      ├── Connector Type (Type 2, CCS, CHAdeMO, etc.)
      ├── Power Output (kW)
      ├── Location (address + map pin)
      ├── Photos (charger, setup, access area)
      └── Description & Access Instructions
  → Set Availability Schedule
  → Set Pricing (hourly rate)
  → Submit for Verification
  → Listing Goes Live
  → Start Receiving Bookings
```

### 6.3 Host Earning Flow

```
Driver Books Charger
  → Host Receives Notification
  → Driver Arrives → Charging Session Starts
  → Session Ends → Payment Processed
  → 85% Goes to Host Earnings Wallet
  → 15% Platform Fee Deducted
  → Weekly Payout to Bank Account (Every Monday)
  → Min Payout Threshold: ₹100
```

---

## 7. Earning & Business Model

### 7.1 Revenue Model

| Revenue Stream | Details |
|---------------|---------|
| **Platform Fee** | 15% commission on each booking |
| **Premium Host Subscription** (future) | Featured listings, priority support, advanced analytics |
| **Promoted Listings** (future) | Hosts pay to boost visibility in search results |
| **Enterprise Plans** (future) | B2B partnerships with fleet operators, companies, residential societies |

### 7.2 Host Earnings

| Variable | Range |
|----------|-------|
| Hourly Rate | ₹20 – ₹200 (host sets) |
| Avg. Sessions/Day | 2–6 |
| Monthly Earnings (typical) | ₹5,000 – ₹15,000 |
| Monthly Earnings (DC Fast in commercial area) | Up to ₹28,000+ |
| Revenue to Host | 85% |
| Upfront Costs for Host | ₹0 (use existing charger) |

### 7.3 Earnings Calculator Logic

```
Monthly Earnings = hours_per_day × rate_per_hour × days_per_week × 4 × 0.85

Example:
  4 hrs/day × ₹50/hr × 5 days/week × 4 weeks × 0.85 = ₹3,400/month
```

---

## 8. Charger Types Supported

### 8.1 Level 1 — Standard Home Charger

| Spec | Value |
|------|-------|
| Power | 1.2 – 1.8 kW |
| Voltage | 120V AC (standard outlet) |
| Charging Speed | 5–8 km of range per hour |
| Full Charge Time | 20–40 hours |
| Connector | Standard 3-pin plug |
| Best For | Overnight top-ups, scooters, low-range EVs |
| Cost | ₹0 (uses existing outlet) |

### 8.2 Level 2 — Dedicated Home/Office Charger

| Spec | Value |
|------|-------|
| Power | 3.3 – 22 kW |
| Voltage | 240V AC |
| Charging Speed | 20–100 km of range per hour |
| Full Charge Time | 3–8 hours |
| Connector | Type 2 (Mennekes), J1772 |
| Best For | Daily home charging, workplace charging |
| Cost | ₹15,000 – ₹80,000 |

### 8.3 Level 3 — DC Fast Charger

| Spec | Value |
|------|-------|
| Power | 50 – 350 kW |
| Voltage | 200 – 1000V DC |
| Charging Speed | 250–400 km of range per hour |
| Full Charge Time | 20–60 minutes (to 80%) |
| Connector | CCS Combo 2, CHAdeMO, GB/T |
| Best For | Commercial locations, highway stops, fleet operators |
| Cost | ₹5,00,000 – ₹50,00,000 |

---

## 9. Safety & Trust System

### 9.1 For Drivers

- **Verified Hosts:** All hosts undergo KYC verification
- **Charger Photos:** Required photos of charger setup before listing approval
- **Ratings & Reviews:** Community-driven trust scores
- **Real-time Session Monitoring:** Track charging status, auto-shutoff on full charge
- **Emergency Support:** 24/7 support line for session issues
- **Report System:** Flag unsafe chargers or bad experiences

### 9.2 For Hosts

- **Verified Drivers:** All drivers have verified identity and vehicle details
- **Booking Confirmation:** Hosts can see driver profile before session
- **Host Protection Insurance:** ₹2,00,000 coverage per incident
- **Damage Reporting:** In-app damage report with photo evidence within 48 hours
- **Cancellation Protection:** Drivers charged 25% for late cancellations
- **Block Users:** Hosts can block specific users from rebooking

### 9.3 Platform Safety Standards

- All listed chargers recommended to be installed by **licensed electrician**
- Must comply with **BIS (Bureau of Indian Standards)** electrical safety
- **GFCI (Ground Fault Circuit Interrupter)** protection recommended
- Chargers must be **weatherproofed** (IP54+ rating for outdoor)
- Platform conducts **periodic safety audits** on flagged listings
- EV charging systems have built-in **BMS (Battery Management System)** that prevents overcharging

### 9.4 Safety During Charging

| Scenario | Safety Measure |
|----------|---------------|
| Rain/wet conditions | Connectors are IP-rated weatherproof, sealed on connection |
| Thunderstorm | Recommend unplugging as precaution |
| Burning smell | Stop immediately, unplug, report via app |
| Overnight charging | BMS auto-stops at full charge — completely safe |
| Cable tripping | Keep cable visible, use cable ramps |

---

## 10. Payment System

### 10.1 Payment Methods Accepted
- **UPI** (Google Pay, PhonePe, Paytm, etc.)
- **Credit / Debit Cards** (Visa, Mastercard, RuPay)
- **Net Banking**
- **Chargekr Wallet** (future — prepaid wallet with bonus credits)

### 10.2 Payment Flow

```
Session Ends
  → Total calculated: hours × hourly rate
  → Driver charged automatically
  → Payment processed via gateway (Razorpay / Stripe)
  → 85% credited to Host earnings wallet
  → 15% retained as platform fee
  → Host receives weekly bank transfer (Monday)
```

### 10.3 Refund Policy

| Scenario | Refund |
|----------|--------|
| Driver cancels 30+ min before booking | Full refund |
| Driver cancels < 30 min before booking | 75% refund (25% to host) |
| Host cancels confirmed booking | Full refund to driver |
| Charger malfunction during session | Refund for unused time |
| Dispute | Resolved within 15 business days |

### 10.4 Tax
- All fees inclusive of **GST** as applicable
- Hosts responsible for declaring income and paying **income tax**
- App provides **exportable earning reports** for tax filing

---

## 11. Insurance & Host Protection

### 11.1 Host Protection Policy

| Detail | Value |
|--------|-------|
| **Coverage Limit** | ₹2,00,000 per incident |
| **What's Covered** | Physical damage to charger, electrical connection point, cable damage |
| **What's NOT Covered** | Pre-existing damage, normal wear & tear, host-caused damage, natural disasters, theft, amounts > ₹2L |
| **Claim Window** | Within 48 hours of incident |
| **Evidence Required** | Photos of damage |
| **Supplementary** | Does NOT replace personal homeowner's/renter's insurance |

---

## 12. Technical Architecture

### 12.1 Tech Stack (Recommended)

| Layer | Technology |
|-------|-----------|
| **Mobile App (Frontend)** | React Native or Flutter (cross-platform Android + iOS) |
| **Web Frontend** | Next.js or React.js |
| **Backend API** | Node.js (Express/Fastify) or Spring Boot (Java) |
| **Database** | PostgreSQL (primary) + Redis (caching, sessions) |
| **Real-time** | WebSocket (Socket.io) for live charging status updates |
| **Maps & Location** | Google Maps SDK / Mapbox |
| **Geospatial Queries** | PostGIS extension on PostgreSQL |
| **Authentication** | Firebase Auth or custom JWT + OTP (MSG91/Twilio) |
| **Payments** | Razorpay (India) / Stripe |
| **Push Notifications** | Firebase Cloud Messaging (FCM) + Apple Push Notification Service (APNS) |
| **File Storage** | AWS S3 / Cloudinary (charger photos, profile images) |
| **Hosting** | AWS (EC2/ECS) or Google Cloud Platform |
| **CDN** | CloudFront / Cloudflare |
| **CI/CD** | GitHub Actions |
| **Monitoring** | Sentry (error tracking) + Grafana + Prometheus |
| **Analytics** | Mixpanel / Amplitude (user analytics) + Google Analytics (web) |

### 12.2 Database Schema (Key Tables)

```
users
├── id (UUID, PK)
├── name
├── email
├── phone (unique)
├── password_hash
├── role (driver | host | both)
├── profile_photo_url
├── is_verified (boolean)
├── kyc_status (pending | verified | rejected)
├── created_at
└── updated_at

vehicles (for drivers)
├── id (UUID, PK)
├── user_id (FK → users)
├── make
├── model
├── year
├── registration_number
├── battery_capacity_kwh
├── connector_type
└── created_at

chargers
├── id (UUID, PK)
├── host_id (FK → users)
├── type (level1 | level2 | dc_fast)
├── connector_type
├── power_output_kw
├── hourly_rate (decimal)
├── latitude (decimal)
├── longitude (decimal)
├── address
├── description
├── photos (JSON array of URLs)
├── access_instructions
├── is_active (boolean)
├── is_verified (boolean)
├── avg_rating (decimal)
├── total_reviews (int)
├── created_at
└── updated_at

availability
├── id (UUID, PK)
├── charger_id (FK → chargers)
├── day_of_week (0-6)
├── start_time (TIME)
├── end_time (TIME)
└── is_blocked (boolean)

bookings
├── id (UUID, PK)
├── driver_id (FK → users)
├── charger_id (FK → chargers)
├── host_id (FK → users)
├── status (pending | confirmed | active | completed | cancelled)
├── scheduled_start (timestamp)
├── scheduled_end (timestamp)
├── actual_start (timestamp)
├── actual_end (timestamp)
├── total_hours (decimal)
├── total_amount (decimal)
├── platform_fee (decimal)
├── host_earning (decimal)
├── payment_status (pending | paid | refunded)
├── cancellation_reason
├── cancelled_by (driver | host | system)
├── created_at
└── updated_at

reviews
├── id (UUID, PK)
├── booking_id (FK → bookings)
├── reviewer_id (FK → users)
├── reviewee_id (FK → users)
├── charger_id (FK → chargers)
├── rating (1-5)
├── comment (text)
├── created_at
└── updated_at

payouts
├── id (UUID, PK)
├── host_id (FK → users)
├── amount (decimal)
├── period_start (date)
├── period_end (date)
├── status (pending | processing | completed | failed)
├── bank_reference
├── processed_at
└── created_at

transactions
├── id (UUID, PK)
├── booking_id (FK → bookings)
├── user_id (FK → users)
├── type (payment | refund | payout)
├── amount (decimal)
├── gateway (razorpay | stripe)
├── gateway_transaction_id
├── status (pending | success | failed)
├── created_at
└── updated_at

messages
├── id (UUID, PK)
├── booking_id (FK → bookings)
├── sender_id (FK → users)
├── receiver_id (FK → users)
├── content (text)
├── is_read (boolean)
├── created_at
└── updated_at

reports
├── id (UUID, PK)
├── reporter_id (FK → users)
├── reported_id (FK → users)
├── charger_id (FK → chargers)
├── booking_id (FK → bookings)
├── type (safety | fraud | misconduct | damage)
├── description (text)
├── evidence_urls (JSON array)
├── status (open | investigating | resolved | dismissed)
├── admin_notes (text)
├── created_at
└── resolved_at
```

### 12.3 API Endpoints (Key Routes)

```
AUTH
  POST   /api/auth/register          → Register user
  POST   /api/auth/login             → Login (phone + OTP)
  POST   /api/auth/verify-otp        → Verify OTP
  POST   /api/auth/refresh           → Refresh JWT token
  DELETE /api/auth/logout             → Logout

USERS
  GET    /api/users/me               → Get current user profile
  PUT    /api/users/me               → Update profile
  POST   /api/users/me/kyc           → Submit KYC documents
  GET    /api/users/:id/reviews      → Get reviews for a user

VEHICLES
  POST   /api/vehicles               → Add vehicle
  GET    /api/vehicles               → List user's vehicles
  PUT    /api/vehicles/:id           → Update vehicle
  DELETE /api/vehicles/:id           → Remove vehicle

CHARGERS
  POST   /api/chargers               → Create charger listing
  GET    /api/chargers               → List all chargers (with filters)
  GET    /api/chargers/nearby        → Geospatial search (lat, lng, radius)
  GET    /api/chargers/:id           → Get charger details
  PUT    /api/chargers/:id           → Update listing
  DELETE /api/chargers/:id           → Remove listing
  GET    /api/chargers/:id/availability → Get availability slots
  PUT    /api/chargers/:id/availability → Update availability

BOOKINGS
  POST   /api/bookings               → Create booking
  GET    /api/bookings               → List user's bookings
  GET    /api/bookings/:id           → Get booking details
  PUT    /api/bookings/:id/confirm   → Host confirms booking
  PUT    /api/bookings/:id/start     → Start charging session
  PUT    /api/bookings/:id/end       → End charging session
  PUT    /api/bookings/:id/cancel    → Cancel booking

PAYMENTS
  POST   /api/payments/initiate      → Initiate payment
  POST   /api/payments/webhook       → Payment gateway webhook
  GET    /api/payments/history       → Transaction history

PAYOUTS
  GET    /api/payouts                → List host payouts
  GET    /api/payouts/:id            → Payout details

REVIEWS
  POST   /api/reviews                → Submit review
  GET    /api/reviews/charger/:id    → Reviews for a charger

MESSAGES
  GET    /api/messages/:bookingId    → Get messages for booking
  POST   /api/messages/:bookingId    → Send message

REPORTS
  POST   /api/reports                → File a report

ADMIN
  GET    /api/admin/users            → List all users
  PUT    /api/admin/users/:id/verify → Verify user KYC
  GET    /api/admin/chargers         → List all chargers
  PUT    /api/admin/chargers/:id/verify → Verify charger
  GET    /api/admin/bookings         → All bookings
  GET    /api/admin/reports          → All reports
  PUT    /api/admin/reports/:id      → Update report status
  GET    /api/admin/analytics        → Platform-wide analytics
```

### 12.4 Real-Time Features

| Feature | Technology | How It Works |
|---------|-----------|-------------|
| Live charging status | WebSocket | Client subscribes to `charging:{bookingId}` channel. Server pushes charge %, time remaining every 30s |
| Booking notifications | FCM/APNS | Push notification on new booking, cancellation, session events |
| Chat | WebSocket | Real-time bidirectional messaging between host and driver |
| Charger availability | WebSocket | Map updates as chargers go online/offline or get booked |

### 12.5 Geospatial Search

```sql
-- Find chargers within X km of a given point
SELECT *, 
  ST_Distance(
    location::geography, 
    ST_MakePoint(:lng, :lat)::geography
  ) / 1000 AS distance_km
FROM chargers
WHERE is_active = true
  AND ST_DWithin(
    location::geography, 
    ST_MakePoint(:lng, :lat)::geography, 
    :radius_meters
  )
ORDER BY distance_km ASC
LIMIT 50;
```

---

## 13. AI & Smart Features

### 13.1 AI-Suggested Pricing
- Analyzes **location**, **demand patterns**, **time of day**, **charger type**, and **competitor pricing**
- Recommends optimal hourly rate to maximize bookings and earnings
- Host can accept suggestion or set custom price

### 13.2 Smart Trip Planner
- Input: Start location, destination, vehicle battery level
- Output: Optimal route with recommended charging stops on Chargekr network
- Considers: Battery range, charger availability, pricing, ratings

### 13.3 Availability Prediction
- ML model predicts charger availability based on historical booking patterns
- Shows "Likely Available" / "Might be Busy" indicators on map

### 13.4 Smart Notifications
- "Your usual charger is available now"
- "Low charge detected — 3 chargers within 2km"
- "Prices are 20% lower than usual in your area right now"

---

## 14. Admin Panel

### 14.1 Dashboard
- Total users, hosts, drivers (daily/weekly/monthly growth)
- Active bookings, daily revenue, platform fee collected
- Charger utilization rate
- Geographic heatmap of demand vs supply

### 14.2 Management
- **User Management:** View, verify, suspend, delete users
- **Charger Moderation:** Approve new listings, flag unsafe chargers, remove violations
- **Booking Oversight:** View all bookings, manage disputes
- **Report Queue:** Review safety reports, fraud reports
- **Payout Management:** Trigger payouts, handle failed payouts

### 14.3 Analytics
- Revenue trends, booking volume, average session duration
- Top hosts by earnings, top chargers by utilization
- User retention, churn analysis
- Geographic expansion tracking

---

## 15. Legal & Compliance

### 15.1 Platform Status
- Chargekr operates as an **intermediary** under **Information Technology Act, 2000 (Section 79)**
- Not a party to the charging transaction — facilitates connections only
- Users are obligated to comply with all applicable Indian laws

### 15.2 Data Protection
- Compliant with **Digital Personal Data Protection Act, 2023 (DPDPA)**
- Compliant with **IT Act 2000** and **IT Rules 2011**
- Encryption: TLS 1.3 (transit) + AES-256 (at rest)
- Data breach notification within 72 hours
- Grievance Officer appointed per DPDPA requirement
- Users can exercise rights: access, correction, erasure, consent withdrawal

### 15.3 Tax Obligations
- Platform fee includes **GST** as applicable
- Hosts are independently responsible for **income tax** reporting
- Financial records retained for **8 years** (Income Tax Act + GST laws)

### 15.4 Dispute Resolution
1. Good-faith **mediation** first
2. If unresolved → binding **arbitration** under Arbitration & Conciliation Act, 1996
3. Seat of arbitration: India
4. Governing law: Laws of India

### 15.5 Documents
- **Privacy Policy:** DPDPA-compliant, 11 sections — [privacy-policy.html](privacy-policy.html)
- **Terms of Service:** 17 sections — [terms-of-service.html](terms-of-service.html)
- **About Us:** Company info — [about-us.html](about-us.html)

---

## 16. Roadmap & Future Features

### Phase 1 — MVP (Current)
- [x] User registration & authentication (phone + OTP)
- [x] Charger listing with photos, type, location
- [x] Map-based charger discovery
- [x] Booking system with time slots
- [x] Payment processing (UPI, cards)
- [x] Ratings & reviews
- [x] Host dashboard with earnings tracking
- [x] Weekly bank payouts
- [x] In-app messaging
- [x] Push notifications
- [x] Host protection insurance

### Phase 2 — Growth
- [ ] AI-suggested pricing for hosts
- [ ] Smart trip planner with route optimization
- [ ] Chargekr Wallet (prepaid with bonus credits)
- [ ] Referral program (invite friends, earn credits)
- [ ] Multi-language support (Hindi first, then regional)
- [ ] EV scooter/bike specific filters
- [ ] Subscription plans for frequent drivers

### Phase 3 — Expansion
- [ ] Fleet operator partnerships (commercial plans)
- [ ] Residential society bulk onboarding
- [ ] Enterprise dashboard for companies with fleets
- [ ] Integration with vehicle telematics (SOC via OBD-II / car APIs)
- [ ] Solar/green energy host badges
- [ ] IoT smart plug integration for remote monitoring
- [ ] Expand to Tier 2 & Tier 3 cities

### Phase 4 — Platform Maturity
- [ ] Dynamic pricing (surge pricing during peak hours)
- [ ] Loyalty program with tiers (Bronze → Silver → Gold → Platinum)
- [ ] Carbon credits tracking and marketplace
- [ ] Open API for third-party developers
- [ ] Hardware partnerships (sell Chargekr-branded smart chargers)
- [ ] International expansion (Southeast Asia)

---

## Social Media

| Platform | URL |
|----------|-----|
| X (Twitter) | [x.com/charge_kr](https://x.com/charge_kr) |
| Instagram | [instagram.com/charge.kr](https://www.instagram.com/charge.kr/) |
| LinkedIn | [linkedin.com/company/chargekr](https://www.linkedin.com/company/chargekr/) |
| YouTube | [youtube.com/@Chargekr-i9r](https://www.youtube.com/@Chargekr-i9r) |

---

*This document serves as the single source of truth for the Chargekr application. All development decisions should reference this blueprint.*
