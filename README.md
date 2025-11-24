# Varshini’s Portfolio Website

A modern, fully responsive personal portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
This website highlights my **projects, skills, experience, education**, and includes a fully functional EmailJS contact form.

---
##  Live Demo
(https://varshiniyenjarlapati-portfolio.netlify.app/)
---

##  Features

###  Elegant UI & Branding
- Clean, minimal layout with custom navigation bar  
- Smooth color theme using Tailwind CSS  
- Sticky LinkedIn/GitHub icons on desktop

###  Reusable Components
- **ProjectCard** components with hover effects + GitHub/Live links  
- **EducationCard** components  
- Modular UI components like Navbar, Footer, FixedSocials

###  Smooth Animations
- Hero animations and scrolling effects with Framer Motion  
- Typed text animation on the home page

###  Functional Contact Form
- EmailJS integration to send messages instantly

###  Skills & Work Experience
- Tech logos grid  
- Experience cards

###  About & Education
- Education cards with images and short descriptions

###  Fully Responsive
- Looks great on all devices

---

##  Tech Stack

### Frontend
- React  
- TypeScript  
- Tailwind CSS  
- Framer Motion  

### Tools & Libraries
- EmailJS  
- React Typed  
- React Icons  

---

##  EmailJS Contact Form Setup (For Anyone Cloning This Project)

This portfolio uses **EmailJS** to send messages from the contact form.  
If you clone this repo and want the contact form to work, **you must set up your own EmailJS account and keys**.

###  Steps

1. Create an account at **https://emailjs.com/**
2. Create:
   - an **Email Service**
   - an **Email Template**
   - a **Public Key**
3. Create a `.env.local` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

##  Installation & Setup

```bash
git clone <your-repo-link>
cd portfolio-website
npm install
npm run dev
npm run build
```

---

## Contact
The contact page uses **EmailJS** to send messages directly to your inbox.

---
