# 🚍 USSD Bus Booking System

A multi-operator **bus ticketing platform** built with **Node.js**, **Express**, and **TypeScript**. Passengers can book bus tickets via **USSD**, while operators manage their routes, buses, and bookings through an admin interface. The system supports **cash payments** and **receipt printing at pickup points**.

---

## 📱 Features

### 👥 For Passengers (via USSD)
- Book bus tickets by selecting:
  - Route
  - Date & Time
  - Number of Seats
- View booked tickets
- Cancel upcoming bookings
- Payment via cash or mobile money (e.g., EcoCash)

### 🧑‍💼 For Bus Operators (Admin)
- Register and manage buses
- Create & assign routes and trip schedules
- View and manage bookings
- Print physical ticket receipts at bus pickup points

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL
- **Authentication:** JWT (for admin)
- **USSD Gateway:** Africa's Talking or Econet
- **Printing:** ESC/POS printer or PDF

---

## 📦 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/ussd-bus-booking-system.git
cd ussd-bus-booking-system
