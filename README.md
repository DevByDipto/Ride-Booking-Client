# Ride Booking Frontend

The Ride Booking System is a full-stack MERN project that connects Riders and Drivers through a seamless booking and management platform. Built with a modular backend architecture and a Redux-focused frontend, it ensures scalability, maintainability, and real-time interaction. The system includes secure authentication, role-based access, ride lifecycle management, and responsive UI for an intuitive user experience across devices.

---

## Table of Contents

- [live-link](https://lively-ganache-03dd6f.netlify.app)
- [backend-repo-link](https://github.com/DevByDipto/Ride-Booking-API)
- [backend-live-link](https://ride-booking-server-rust.vercel.app)

---

## Project Overview

This project is the **frontend part** of a ride booking platform.  
It supports:

- Role-based dashboards (**Admin, Rider, Driver**)
- Ride management, ride history, and ride details
- Driver assignment & availability
- Customer feedback and testimonials
- Call-to-action prompts and service highlights

---

## Features

### Public Pages

- **Home** – Hero Banner, How It Works, Service Highlights, Testimonials, Call-to-Action
- **About Us** – Company background, mission, and team profiles
- **Features** – Detailed breakdown of Rider, Driver, and Admin capabilities
- **Contact** – Validated form for inquiries (simulated submission)
- **FAQ** – Searchable list of common questions

### Admin Dashboard

- Manage all users, drivers, and rides
- Approve/Suspend drivers
- Ride history & ride details
- Profile management

### Rider Dashboard

- View ride history
- Profile management

### Driver Dashboard

- Accept/reject rides
- Update ride status
- Set availability status (Online/Offline)
- Ride history

---

## Folder Structure

```text
src/
├── components/
│   ├── layouts/        # CommonLayout, DashBoardLayout
│   ├── shared/         # reusable UI components
│   └── modules/        # HeroBanner, HowItWorksOverview, ServiceHighlights, etc.
├── page/
│   ├── admin/          # Admin dashboard pages
│   ├── rider/          # Rider dashboard pages
│   ├── driver/         # Driver dashboard pages
│   └── ride/           # Ride related pages
├── redux/              # Redux slices & API endpoints
├── utils/              # Helper functions, route generators
└── App.tsx
## 🚀 Setup Instructions

Follow the steps below to set up and run the project locally.

---
```
---
### Setup instructions
#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ride-booking-frontend.git
cd ride-booking-frontend
```
#### 2️⃣ Install Dependencies
```bash
npm install
```
#### 3️⃣ Configure Environment Variables
```
VITE_BASE_URL=http://localhost:5000/api
```
#### 4️⃣ Run the Development Server
```
npm run dev
```
---
### Admin Credentials
- email: admin@gmail.com
- pass: 12345678
### Rider Credentials
- email: user@gmail.com
- pass: 12345678
### Driver Credentials
- email: driver@gmail.com
- pass: 12345678
