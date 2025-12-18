# 🍛 Spice & Grill - Restaurant Website (Week 4)

## 📖 Project Overview
"Spice & Grill" is a multi-page business website designed for a fictional restaurant. This project focuses on **Site Architecture**, demonstrating how to link multiple HTML pages (`Home`, `Menu`, `Contact`) together while maintaining consistent branding, navigation, and footer elements across the entire site.

## 🚀 Key Features
* **Multi-Page Navigation:** Seamless navigation between Home, Menu, and Booking pages.
* **Responsive Menu Grid:** A visually rich food menu displayed using **CSS Grid**, which automatically adjusts the number of columns based on the device screen size.
* **Table Booking System:** A complex form that captures:
    * Customer Name & Phone
    * Date of Reservation
    * Number of Guests (with min/max constraints)
* **Interactive Feedback:** JavaScript alerts confirm successful bookings to the user.

## 🛠️ Technical Highlights
* **CSS Grid:** Utilized `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` to create a responsive card layout without media queries.
* **Form Input Types:** used specific HTML5 inputs (`type="date"`, `type="tel"`, `type="number"`) to trigger the correct keyboards on mobile devices.
* **CSS Variables:** Defined brand colors (`--primary`, `--secondary`) in `:root` for consistent theming.

## 📂 Project Structure
```text
week-4-restaurant/
├── index.html       
├── menu.html        
├── contact.html     
├── css/style.css    
└── js/script.js     