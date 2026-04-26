# Project Synopsis

## 1. Project Title
Learnify Course Website

## 2. Project Team
- Student Name: Mohd Saif Shekh
- PRN: 2023017001470374

## 3. Introduction
Learnify Course Website is a multi-page educational website designed to present web design and front-end development courses in a simple and attractive way. It combines course information, admission flow, service details, contact information, and payment options in one connected interface.

The purpose of this project is to help students explore courses, understand the learning path, and move smoothly from browsing to enrollment.

## 4. Objectives / Existing System / Need
- Present course details in a clear and organized format.
- Provide a simple admission and payment flow.
- Give users quick access to course categories and support pages.
- Replace scattered information with a single structured website.

The need for this system comes from the lack of a clean, centralized course presentation page for beginners who want to learn web design and development.

## 5. Scope of the Project
This project includes:
- Home page with course overview
- Course listing and search/filter option
- About, services, contact, admission, and payment pages
- Responsive layout and navigation

This project does not include:
- Database integration
- User authentication backend
- Real payment gateway integration
- Admin dashboard

## 6. Technologies Used
- HTML5
- CSS3
- JavaScript
- Google Fonts
- Ionicons

## 7. System Architecture
The project follows a client-side, multi-page website architecture.

Main components:
- `index.html` as the landing page
- `courses.html` for course catalog and search
- `about.html` for project overview
- `services.html` for service highlights
- `admission.html` for form-based enrollment
- `payments.html` for fee and payment details
- `contact.html` for support information
- `style.css` for visual design
- `javascript.js` for course search and filtering

Data flow:
User opens a page -> reads content -> navigates using menu links -> searches courses or fills admission details -> moves to payment/contact pages.

Architecture diagram:

```text
+------------------+      +-------------------+
|     Student      | ---> |   Learnify Home   |
+------------------+      +-------------------+
                                    |
                                    v
                   +----------------+----------------+
                   |                                 |
                   v                                 v
          +-------------------+            +-------------------+
          | Course Catalogue   |            | About / Services  |
          | Search and Filter  |            | Information Pages |
          +-------------------+            +-------------------+
                   |                                 |
                   v                                 v
          +-------------------+            +-------------------+
          | Admission Form    |            | Contact / Help    |
          +-------------------+            +-------------------+
                   |
                   v
          +-------------------+
          | Payment Details   |
          +-------------------+
```

## 8. Modules & Functionalities
- Home module: Introduces the platform, highlights featured course content, and provides login/signup actions.
- Course module: Displays multiple course cards with duration, level, and enrollment buttons.
- Admission module: Collects basic student information through a form.
- Payment module: Shows payment methods and course fee details.
- Services module: Explains the support and learning services offered.
- Contact module: Provides contact details and next-step links.
- Search module: Filters course cards based on keywords on the courses page.

## 9. Methodology
The project was developed using a simple waterfall-style approach:
- Requirement understanding
- Page planning
- UI design
- HTML/CSS development
- JavaScript functionality
- Testing and refinement

## 10. Expected Outcome
The website gives users a smooth way to explore courses, read information, and move toward enrollment. It improves visibility of the course offerings and creates a polished learning platform for students.

## 11. Conclusion
Learnify Course Website is a practical front-end project that demonstrates how a course-selling or training website can be organized across multiple pages. It combines design, content presentation, and basic interactivity to create a useful educational portal.

## 12. References
- Project files: `index.html`, `about.html`, `admission.html`, `courses.html`, `payments.html`, `contact.html`, `services.html`, `style.css`, `javascript.js`
- Google Fonts
- Ionicons
