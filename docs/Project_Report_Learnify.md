# PROJECT REPORT ON: LEARNIFY - INTEGRATED LEARNING MANAGEMENT SYSTEM

**SUBMITTED BY:** SABIHA NAAZ SALAMULLAH KHAN  
**INSTITUTION:** YASHWANTRAO CHAVAN MAHARASHTRA OPEN UNIVERSITY  
**PROGRAM:** BACHELOR OF COMPUTER APPLICATION (TYBCA SEM-VI)  
**YEAR:** 2022-2025  

---

## CERTIFICATE OF ORIGINALITY

**Date:** -

This is to certify that the project entitled **LEARNIFY - INTEGRATED LEARNING MANAGEMENT SYSTEM** Submitted to the School Of Computer Science in partial fulfilment of the requirement for the award of the degree of BACHELOR OF COMPUTER APPLICATIONS (Yashwantrao Chavan Maharashtra Open University), is an original work carried out by Ms Sabiha Naaz Salamullah Khan Exam Seat No. KP131050751 Under my guidance. The matter embodied in this project is a genuine work done by the student and has not been submitted to this Organization or any other University/Organization for the fulfilment of the requirement of any course of study.

**Signature of the Internal Guide** | **Signature of the Student**
---|---
Prof. Archana Patil | Ms. Sabiha Naaz Salamullah Khan

---

## CERTIFICATE

This is to certify that the project report entitled **LEARNIFY - INTEGRATED LEARNING MANAGEMENT SYSTEM** Submitted to the School Of Computer Science in partial fulfillment of the requirement for the award of the Degree of BACHELOR OF COMPUTER APPLICATIONS (Yashwantrao Chavan Maharashtra Open University) Is an original work carried out by Ms Sabiha Naaz Salamullah Khan Exam Seat No KP131050751.

The matter embodied in this project is a genuine work done by the student and has been Certified by the following external examiners deputed by Yashwantrao Chavan Maharashtra Open University.

**External Examiner**

Bunts Sangha Mumbai Anna Leela College of Commerce and Economics & Shobha Jayaram Shetty College for BMS Shashi Manmohan Shetty Higher Education Complex, Buntara Bhavanmarg, Kurla (E), Mumbai 400070

**Date:**

---

## Certificate of Completion

This is to certify that Ms. Sabiha Naaz Salamullah Khan of B.C.A have completed the Project Work titled "LEARNIFY - INTEGRATED LEARNING MANAGEMENT SYSTEM" under my guidance and supervision. The project report has been written according to the guidelines given by the Yashwantrao Chavan Maharashtra Open University.

**Signature of the Study Centre Coordinator** | **Signature of the Guide**
---|---

**Stamp of the Study Centre**

**Date:**

Bunts Sangha Mumbai Anna Leela College of Commerce and Economics & Shobha Jayaram Shetty College for BMS Shashi Manmohan Shetty Higher Education Complex, Buntara Bhavanmarg, Kurla (E), Mumbai 400070

---

## Certificate of Evaluation

This is to certify that the undersigned has assessed and evaluated the Project work titled "LEARNIFY - INTEGRATED LEARNING MANAGEMENT SYSTEM" submitted by the student Ms. Sabiha Naaz Salamullah Khan.

The Project Report has been (accepted) for the partial fulfilment of B.C.A Programme.

**Signature of Examiner**

**Name of Examiner**

**Stamp of Study Centre**

---

## ACKNOWLEDGEMENT

I express my deep sense of gratitude to Prof. Archana Patil and Prof. Ranjita Rathore for the deepest interest, valuable guidance, constant supervision, support and encouragement throughout the course of the project.

I am also grateful to respected Principal Dr. Rajendra Patil, IT faculty and the whole Department of Information Technology for giving me an opportunity to embark on this project.

I would like to thank all other teaching staff for their valuable teaching and constant advice which made me to finish this program successfully.

Finally, my deepest gratitude goes to my parents and my friends who have given me much needed support, encouragement and inspiration for completing this project.

---

## INDEX PAGE

| CHAPTER | TITLE | PAGE NO: |
| :--- | :--- | :--- |
| **1.** | **Introduction** | |
| 1.1 | Institute Profile | 12 |
| 1.2 | Abstract | 13 |
| 1.3 | Existing System | 14 |
| 1.4 | Need for System | 14 |
| 1.5 | Scope of System | 16 |
| **1.6** | **Operating Environment- Hardware and Software** | |
| 1.6.1 | Hardware Requirements | 18 |
| 1.6.2 | Software Requirements | 19 |
| **1.7** | **Brief Description of Technology Used** | |
| 1.7.1 | Frontend and Backend Technologies | 22 |
| 1.7.2 | Database and Tools And Platforms | 22 |
| **2.** | **Proposed System** | 24 |
| 2.1 | Study of Similar Systems | 26 |
| 2.2 | Feasibility Study | 29 |
| 2.3 | Objectives of Proposed System | 31 |
| 2.4 | Users of System | 33 |
| **3.** | **Analysis and Design** | |
| 3.1 | System Requirements | 35 |
| 3.1.1 | Functional Requirements | 35 |
| 3.1.2 | Non-Functional Requirements | 36 |
| 3.2 | Entity Relationship Diagram (ERD) | 38 |
| 3.3 | Table Structure | 40 |
| 3.4 | Use Case Diagram | 46 |
| 3.5 | Class Diagram | 48 |
| 3.6 | Activity Diagram | 49 |
| 3.7 | Deployment Diagram | 50 |
| 3.8 | Module Hierarchy Diagram | 51 |
| 3.9 | Sample Input and Output Screens | 52 |
| **4.** | **Coding** | |
| 4.1 | Algorithms | 56 |
| 4.2 | Code Snippets | 57 |
| **5.** | **Testing** | |
| 5.1 | Test Strategy | 59 |
| 5.2 | Unit test Plans | 59 |
| 5.3 | Acceptance Test Plans | 59 |
| 5.4 | Test Case / Test Script | 60 |
| 5.6 | Defect report / Test log | 61 |
| **6.** | **Limitations of Proposed System** | 62 |
| **7.** | **Proposed Enhancements** | 64 |
| **8.** | **Conclusion** | 66 |
| **9.** | **Bibliography** | 67 |
| **10.** | **Publication/Competition certificates** | 68 |
| **11.** | **Appendix – Cost sheet, Datasheet** | 69 |
| **12.** | **User Manual** | 70 |

---

## CHAPTER 1: INTRODUCTION

### 1.1 Institute Profile

This project is submitted under the academic curriculum of **Bunts Sangha's Anna Leela College of Commerce and Economics & Shobha Jayaram Shetty College for BMS**, located at Shashi Manmohan Shetty Higher Education Complex, Buntara Bhavanmarg, Kurla (E), Mumbai 400070. The institution is a recognized study centre for **Yashwantrao Chavan Maharashtra Open University (YCMOU)** and emphasizes excellence in education, innovation, and skill development in Information Technology and Computer Science. The college provides a conducive learning environment with modern infrastructure, experienced faculty, and a strong focus on practical, project-based education that prepares students for real-world challenges in the IT industry.

### 1.2 Abstract

The **Learnify — Integrated Learning Management System** is an innovative, feature-rich web application designed to simplify and modernize the educational experience for students, educators, and administrators. In today's rapidly evolving digital landscape, the demand for accessible, user-friendly, and integrated educational platforms has never been greater. Learnify addresses this demand by providing a unified platform that combines course discovery, student enrollment, secure authentication, and online payment processing into a single, seamless digital experience.

Built using a modern technology stack comprising HTML5, CSS3 (with CSS Custom Properties, Flexbox, and Grid), JavaScript (ES6+ modules), and Firebase Authentication, the platform emphasizes high performance, aesthetic appeal, and mobile-first responsiveness. The application features a dynamic course search engine that filters ten professional courses in real-time, a secure Firebase-driven login and signup system with persistent sessions, a multi-step admission form with validation for batch and learning mode selection, and an integrated UPI and card-based payment gateway interface.

The user interface follows a premium "Cream and Teal" design theme using the Cormorant Garamond and Manrope font families, with smooth transitions, card-based layouts, and intuitive navigation across all pages. The project follows a systematic Software Development Life Cycle (SDLC) approach using the Iterative Waterfall Model, ensuring scalability, security, and maintainability. This report details the complete development journey from initial requirement gathering and system design to implementation, testing, and deployment.

### 1.3 Existing System

The existing educational ecosystem, both online and offline, suffers from several critical shortcomings that hinder the student enrollment experience:

**Manual and Paper-Based Processes:**
Most traditional educational institutions still rely heavily on physical paperwork for admission and enrollment. Students are required to visit the campus in person, fill out paper forms, submit physical documents, and make payments through manual channels. This process is slow, error-prone, and inconvenient, especially for students from remote locations or those with time constraints.

**Fragmented Digital Presence:**
Even institutions that have adopted a digital presence often operate with fragmented systems. Course information may be available on one website, admission forms on another, and payment portals on a third. This fragmentation forces students to navigate multiple disconnected platforms, leading to confusion, frustration, and high drop-off rates during the enrollment funnel.

**Outdated and Cluttered User Interfaces:**
Many existing educational websites use outdated designs with cluttered layouts, poor typography, and lack of mobile responsiveness. These interfaces fail to inspire confidence in prospective students and create a negative first impression of the institution.

**Lack of Real-Time Interaction:**
Current systems rarely offer real-time features such as instant course search, dynamic filtering, or immediate authentication feedback. Students often have to wait for manual confirmations, leading to delays and uncertainty in the enrollment process.

**Commercial Platforms Are Not Institutional:**
While platforms like Udemy, Coursera, and Khan Academy offer excellent content, they are designed for independent instructors or universities and do not support the specific workflow of institutional enrollment, which includes batch selection (Morning/Evening/Weekend), learning mode preferences (Online Live/Recorded/Hybrid), and structured admission approval processes.

### 1.4 Need for System

The need for a system like Learnify arises from several converging factors in the modern educational landscape:

**Digital Transformation of Education:**
The post-pandemic world has accelerated the shift towards digital learning. Institutions that fail to offer seamless online enrollment and course discovery risk losing students to more digitally advanced competitors. Learnify provides a modern digital gateway that positions the institution at the forefront of this transformation.

**Student Expectations Have Evolved:**
Today's students, who are digital natives, expect the same level of user experience from educational platforms as they get from e-commerce sites and social media applications. They demand instant search results, smooth navigation, aesthetic interfaces, and secure payment options. Learnify meets these expectations through its premium UI design, real-time course filtering, and Firebase-powered authentication.

**Centralized Information Access:**
Students need a single platform where they can browse all available courses, understand the curriculum, compare options, fill out admission forms, select their preferred batch and learning mode, and complete fee payments — all without leaving the website. Learnify provides this end-to-end experience.

**Institutional Branding and Trust:**
A professionally designed website instills confidence in prospective students and their parents. The premium Cream and Teal theme with Cormorant Garamond typography and smooth animations communicates professionalism and quality, building trust in the institution's brand.

**Operational Efficiency for Administrators:**
By digitizing the admission and enrollment process, Learnify reduces the administrative burden on staff, minimizes errors in data entry, and provides a structured pipeline from course discovery to payment confirmation.

### 1.5 Scope of System

The scope of the Learnify system encompasses the following functional modules:

**Course Catalog and Discovery Module:**
A comprehensive catalog of ten professional courses including Web Development, Full Stack Developer, Basic to Advanced Programming, IT Skills Master Course, Java Full Stack, Certified Web Developer Program, Advanced Software Engineering, IT Career Development Course, Master Coding With Real Project, and Job Ready Web Developer Course. Each course card displays metadata including duration (14-48 hours), difficulty level (Beginner/Advanced/All Levels), certification status, and career focus. The catalog supports real-time keyword-based search and filtering.

**User Authentication Module:**
A secure login and signup system powered by Firebase Authentication. Features include email and password-based registration, persistent sessions using browserLocalPersistence, dynamic user profile display with auto-generated SVG avatars showing user initials, and comprehensive error handling with user-friendly messages for all authentication scenarios (invalid credentials, weak password, email already in use, network errors).

**Admission Module:**
A structured multi-field admission form that captures the student's full name, email address, mobile number, selected course (dropdown with all 10 courses), residential address, preferred batch (Morning/Evening/Weekend), and learning mode (Online Live/Recorded Classes/Hybrid Support). The form includes HTML5 validation and redirects to the payment page upon completion.

**Payment Gateway Module:**
A payment interface supporting multiple methods including UPI transaction (instant), Debit card, Credit card, Net banking, and Wallet payment. The module displays the course package details (Rs. 2,999), a scannable QR code for UPI payments, and clear instructions for completing the transaction with reference notes.

**Institutional Information Modules:**
Pages for About/Success Stories, Why Choose Us/Services, and Contact/Enroll Now that communicate the institution's value proposition, available services (Web Development courses, Full Stack and Java support, Project build service, Student community access), and contact details.

**Out of Scope for Current Version:**
The current version does not include real-time video streaming for live classes (managed via third-party integrations like Zoom/Meet), a teacher-side grading and assessment system (planned for Version 2.0), live community chat forums, or an admin CMS for dynamic course management.

### 1.6 Operating Environment - Hardware and Software

#### 1.6.1 Hardware Requirements

The following hardware specifications are required for both development and end-user access:

| Component | Minimum Requirement | Recommended Requirement |
| :--- | :--- | :--- |
| **Processor** | Dual Core 2.0 GHz | Quad Core Intel i5 or higher |
| **RAM** | 4 GB | 8 GB or 16 GB |
| **Storage** | 500 MB Free Space | 2 GB (for source files, assets, and local development tools) |
| **Internet Connection** | 1 Mbps broadband | 10 Mbps+ for smooth Firebase operations |
| **Display Resolution** | 1024 x 768 | 1920 x 1080 (Full HD) |
| **Input Devices** | Standard keyboard and mouse | Keyboard, mouse, and touchscreen (for mobile testing) |

#### 1.6.2 Software Requirements

The following software tools and technologies are required for development and deployment:

| Category | Software / Technology | Version / Details |
| :--- | :--- | :--- |
| **Operating System** | Windows 10/11, macOS, or Linux | Latest stable release |
| **Web Browser** | Google Chrome | Version 90+ (primary development browser) |
| **Web Browser** | Mozilla Firefox, Safari | Latest versions (cross-browser testing) |
| **Code Editor / IDE** | Visual Studio Code | Latest version with Prettier and ESLint extensions |
| **Version Control** | Git | Latest version |
| **Repository Hosting** | GitHub | For source code management and collaboration |
| **Frontend Languages** | HTML5, CSS3, JavaScript (ES6+) | Web standards compliant |
| **Authentication Service** | Firebase Authentication | Version 12.12.0 (CDN-loaded modules) |
| **Icon Library** | Ionicons | Version 5.5.2 (SVG-based icons) |
| **Typography** | Google Fonts | Cormorant Garamond (headings), Manrope (body) |
| **Deployment Platform** | Vercel / Netlify / GitHub Pages | Free tier hosting |
| **Debugging Tools** | Chrome DevTools | Built into Chrome browser |

### 1.7 Brief Description of Technology Used

#### 1.7.1 Frontend and Backend Technologies

**HTML5 (HyperText Markup Language 5):**
HTML5 is the latest version of the standard markup language used for structuring and presenting content on the web. In Learnify, HTML5 is used extensively with semantic elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` to create a well-structured, accessible, and SEO-friendly document structure. The application uses HTML5 form elements with built-in validation attributes (required, type="email", type="tel") for the admission form, and `<datalist>` elements for providing search suggestions in the course search bar.

**CSS3 (Cascading Style Sheets 3):**
CSS3 is used for all visual styling and layout in Learnify. The application employs several advanced CSS3 features including CSS Custom Properties (variables) for maintaining a consistent color palette (--accent: #0f766e, --bg-cream: #f6efe5, --border: #ddd2c2), CSS Flexbox for one-dimensional layouts (navigation bars, button rows, card footers), CSS Grid for two-dimensional layouts (hero section, course catalog, service grid, payment grid), media queries for responsive design across all device sizes, smooth transitions and hover effects for interactive elements, and radial/linear gradients for creating the premium background aesthetic.

**JavaScript (ES6+):**
JavaScript ES6+ is used for all client-side interactivity and logic in Learnify. Key implementations include the course filtering algorithm that uses `querySelectorAll`, `forEach`, and `dataset` attributes to dynamically show/hide course cards based on user search input, URL parameter management using the `URLSearchParams` API to persist search state across page loads, the authentication form toggling logic that switches between login and signup forms using the `hidden` property, and ES6 module imports for loading Firebase SDK components asynchronously.

**Firebase Authentication:**
Firebase Authentication is Google's cloud-based identity management service used in Learnify for secure user registration and login. The implementation uses Firebase SDK version 12.12.0, loaded dynamically via CDN modules. Key features include email and password-based authentication using `createUserWithEmailAndPassword` and `signInWithEmailAndPassword`, persistent session management using `browserLocalPersistence`, real-time auth state observation using `onAuthStateChanged`, user profile management with `updateProfile` for storing display names, and comprehensive error handling with user-friendly messages for all Firebase auth error codes.

#### 1.7.2 Database and Tools And Platforms

**Firebase Realtime Database / Cloud Firestore (Proposed):**
While the current version uses Firebase Authentication for user identity management, the architecture is designed to scale to Firebase Cloud Firestore for storing admission records, course enrollment data, and payment confirmations. Firestore provides a flexible, scalable NoSQL cloud database that supports real-time data synchronization.

**Ionicons (Version 5.5.2):**
Ionicons is an open-source SVG icon library maintained by the Ionic Framework team. Learnify uses Ionicons extensively for UI elements including navigation icons (search-outline), course card indicators (checkmark-circle-outline, time-outline, briefcase-outline), service section icons (brush-outline, phone-portrait-outline, layers-outline, terminal-outline), and action indicators (arrow-forward-outline). The icons are loaded as web components via the Ionicons ESM module, ensuring they scale perfectly at any resolution without pixelation.

**Google Fonts (Cormorant Garamond + Manrope):**
Learnify uses two carefully selected Google Fonts to create a premium typographic hierarchy. Cormorant Garamond (weights: 500, 700) is a display serif font used for all major headings and section titles, conveying elegance and academic authority. Manrope (weights: 400, 500, 700) is a geometric sans-serif font used for body text, navigation links, and UI elements, providing excellent readability and a modern feel. Both fonts are loaded via Google Fonts CDN with preconnect hints for optimal performance.

**Git and GitHub:**
Git is used as the distributed version control system for tracking all changes to the project codebase. GitHub serves as the remote repository hosting platform, enabling code backup, version history, and potential collaboration. The project follows a standard Git workflow with meaningful commit messages.

**Chrome DevTools:**
Google Chrome's built-in Developer Tools are used extensively during development for inspecting and debugging HTML/CSS/JS, profiling page performance and load times, testing responsive layouts across different viewport sizes, monitoring network requests to Firebase, and debugging JavaScript with breakpoints and console logging.

---

## CHAPTER 2: PROPOSED SYSTEM

The proposed Learnify system is a comprehensive, integrated Learning Management System designed to digitize and streamline the entire student enrollment lifecycle. Unlike existing fragmented solutions, Learnify offers a unified platform where prospective students can discover courses, learn about the institution, create secure accounts, submit admission applications, and complete fee payments — all within a single, aesthetically premium web experience.

The system is built on the principle of "Student-First Design," where every interface element, interaction pattern, and visual decision is optimized for the student's comfort and confidence. The platform uses a modern, card-based UI with a warm Cream and Teal color scheme, smooth transitions, and responsive layouts that adapt seamlessly from mobile phones to large desktop monitors.

### 2.1 Study of Similar Systems

A thorough analysis of existing educational and e-learning platforms was conducted to understand their strengths and limitations:

**Udemy:**
Udemy is one of the world's largest online course marketplaces with over 200,000 courses. Its strengths include a vast course library, user reviews, and frequent discounts. However, Udemy is designed for independent instructors and lacks institutional features such as batch scheduling (Morning/Evening/Weekend), formal admission processes, and institutional branding. Its commercial-heavy interface with aggressive promotion can feel impersonal compared to an institution-specific platform.

**Coursera:**
Coursera partners with universities and organizations to offer courses, specializations, and degrees. Its strengths include academic credibility, structured learning paths, and certificates from recognized institutions. However, Coursera's rigid structure may not suit professional skill-based bootcamps, and its subscription model can be a barrier for students seeking individual course enrollment with flexible payment options like UPI.

**Khan Academy:**
Khan Academy is a free, non-profit educational platform known for its comprehensive K-12 content and personalized learning dashboard. While excellent for academic subjects, it does not support institutional enrollment workflows, fee collection, or professional IT course delivery.

**Traditional Institutional Websites:**
Most traditional college and training institute websites serve as information brochures — they display course lists, contact details, and perhaps a downloadable admission form. They rarely offer end-to-end digital enrollment with real-time search, secure authentication, and integrated payment processing. Their interfaces are often outdated, non-responsive, and fail to inspire confidence in the institution's technical capabilities.

**Comparative Analysis Table:**

| Feature | Udemy | Coursera | Khan Academy | Traditional Sites | **Learnify** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Batch Support** | No | Limited | No | Manual | **Yes (Morning/Evening/Weekend)** |
| **Admission Flow** | Direct Buy | Subscription | Free | Paper Forms | **Multi-step Digital Form** |
| **UI Design** | Commercial | Academic | Educational | Outdated | **Premium Modern** |
| **Authentication** | Email/Social | Email/Social | Email/Google | None | **Firebase Auth** |
| **Payment Methods** | International | International | Free | Cash/DD | **UPI, Card, Net Banking** |
| **Real-time Search** | Yes | Yes | Yes | No | **Yes (Client-side filtering)** |
| **Institutional Branding** | No | Partial | No | Basic | **Full Custom Branding** |

### 2.2 Feasibility Study

**Technical Feasibility:**
The project is highly feasible from a technical standpoint. It uses standardized, well-documented web technologies (HTML5, CSS3, JavaScript) that are supported by all modern browsers. Firebase Authentication provides a reliable, Google-backed authentication service with generous free-tier limits (up to 10,000 monthly active users). The development tools (VS Code, Git, Chrome DevTools) are all open-source or free. The developer has the necessary skills in frontend development and JavaScript to implement all required features.

**Economic Feasibility:**
The economic viability of Learnify is excellent due to its reliance on open-source and free-tier services. There are zero licensing costs for the core technologies. Firebase's Spark (free) plan provides sufficient authentication capacity. Hosting on platforms like Vercel, Netlify, or GitHub Pages is available at no cost. The total development cost is limited to the developer's time and effort. The return on investment for the institution is significant through increased digital enrollments, reduced administrative overhead, and enhanced institutional branding.

**Operational Feasibility:**
The system is designed for ease of operation by all stakeholders. Students can navigate the platform intuitively without any training, thanks to the clear navigation structure (Home → Courses → Admission → Payment) and familiar web interaction patterns. Administrators can update course information by modifying HTML files, and the modular code structure ensures that adding new courses or updating existing ones requires minimal effort. The Firebase console provides a user-friendly dashboard for managing user accounts.

### 2.3 Objectives of Proposed System

The primary objectives of the Learnify system are:

1. **Centralized Course Discovery:** To provide a single, searchable catalog of all available courses with detailed information including duration, difficulty level, certification status, and career focus, enabling students to make informed enrollment decisions.

2. **Streamlined Digital Enrollment:** To replace manual, paper-based admission processes with a secure, validated, multi-step online form that captures all necessary student information and seamlessly transitions to fee payment.

3. **Secure User Identity Management:** To implement robust authentication using Firebase, ensuring that student accounts are protected with industry-standard security practices including password hashing, secure session management, and comprehensive error handling.

4. **Integrated Payment Processing:** To provide a clear, trustworthy payment interface supporting modern Indian payment methods (UPI, Debit/Credit cards, Net banking, Wallets) with QR code scanning for instant UPI transactions.

5. **Premium User Experience:** To deliver a visually stunning, responsive, and performant web application that reflects the institution's commitment to quality and modernity, using premium typography, smooth animations, and a carefully curated color palette.

6. **Responsive and Accessible Design:** To ensure the platform works flawlessly across all devices (mobile phones, tablets, laptops, desktops) and follows web accessibility best practices for inclusive access.

### 2.4 Users of System

**Students (Primary Users):**
Students are the primary users of the Learnify platform. They interact with the system to browse available courses using the search and filter functionality, view detailed course information including duration, modules, and career outcomes, create secure accounts using email and password registration, fill out the multi-step admission form with course selection, batch preference, and learning mode, complete fee payments through UPI, card, or net banking, and access their authenticated profile across all pages.

**Guest Visitors:**
Guest visitors are unauthenticated users who can browse the platform to explore course offerings, read about the institution's philosophy and success stories, understand the services offered, view contact details and support hours, and register for a new account when ready to enroll.

**Administrators (Proposed for Future Version):**
In future versions, administrators will be able to manage course listings (add, update, delete courses), review and approve admission applications, monitor enrollment statistics and payment confirmations, manage user accounts through the Firebase console, and update institutional content and announcements.

---

## CHAPTER 3: ANALYSIS AND DESIGN

### 3.1 System Requirements

#### 3.1.1 Functional Requirements

Functional requirements define the specific behaviors and features that the Learnify system must support. Each requirement is described in detail below:

**Course Catalog and Search:**
The system provides a searchable catalog of ten professional courses. Each course is represented as an interactive card displaying the course title, description, duration (in hours), module count, difficulty level, and certification status. The search functionality enables users to filter courses in real-time by entering keywords such as "web," "java," "full stack," or "software." The search engine uses a case-insensitive string matching algorithm that compares the user's query against each course's `data-course-name` attribute. Search results persist across page reloads through URL parameter synchronization using the `URLSearchParams` API, allowing students to share filtered results via links. The search bar provides autocomplete suggestions through an HTML5 `<datalist>` element populated with all course names and common keywords.

**User Authentication (Login/Signup):**
The system implements secure user authentication through Firebase Authentication. The login form accepts email and password inputs, validates them client-side, and authenticates against Firebase using `signInWithEmailAndPassword`. The signup form accepts username, email, and password, creates a new account using `createUserWithEmailAndPassword`, and stores the display name using `updateProfile`. Authentication state is persisted using `browserLocalPersistence`, ensuring users remain logged in across browser sessions. The system provides real-time auth state observation through `onAuthStateChanged`, dynamically updating the UI to show/hide guest elements and user profile components. Error handling covers all Firebase auth error codes with user-friendly messages including "Invalid email or password," "That email is already registered," "Use a stronger password with at least 6 characters," and "Could not reach the network."

**Admission Form Processing:**
The admission module provides a structured form with fields for Full Name (text input), Email Address (email input with format validation), Mobile Number (tel input), Course Selection (dropdown with all 10 courses), Address (textarea for city, state, and details), Preferred Batch (dropdown: Morning/Evening/Weekend), and Learning Mode (dropdown: Online Live/Recorded Classes/Hybrid Support). All fields use HTML5 validation with the `required` attribute. Upon successful validation, the form redirects to the payment page via the "Continue to Payment" button.

**Payment Interface:**
The payment module displays the selected course package details (Programming and development course pack, Rs. 2,999), lists all available payment methods (UPI transaction - Instant, Debit card, Credit card, Net banking, Wallet payment), provides a scannable QR code for UPI payments, displays the UPI ID for manual transaction entry, and includes instructions for adding reference notes (student name + selected course name).

**Navigation and Page Routing:**
The system implements consistent navigation across all pages through a fixed-position navbar with links to Home, Courses, Why Choose Us, Success Stories, and Enroll Now. Inner pages feature a side panel with contextual quick links, search functionality, and informational cards. The navigation includes authenticated state indicators showing the user's display name and auto-generated SVG avatar in the header.

#### 3.1.2 Non-Functional Requirements

Non-functional requirements specify the quality attributes and constraints that the Learnify platform must fulfill:

**Performance:**
The application must deliver a responsive experience, with pages loading within 1.5 seconds on a standard 4G connection. This is achieved through optimized CSS (minimal use of complex selectors, efficient use of CSS Custom Properties), asynchronous loading of Firebase SDK modules, CDN-delivered font files with `preconnect` hints, and SVG-based icons that require no additional HTTP image requests. The course filtering algorithm operates entirely client-side, providing instant results without server round-trips.

**Scalability:**
The system architecture supports growth through Firebase's auto-scaling authentication service (capable of handling thousands of concurrent authentication requests), a modular HTML/CSS/JS structure that allows new courses and pages to be added without modifying existing code, and a clean separation of concerns between presentation (HTML), styling (CSS), behavior (JavaScript), and authentication (Firebase).

**Security:**
User data is protected through Firebase's built-in password hashing (bcrypt-based), secure HTTPS communication for all Firebase API calls, client-side input sanitization to prevent XSS attacks, `autocomplete` attributes for secure credential management, and comprehensive error handling that never exposes sensitive technical details to end users.

**Usability:**
The user interface is intuitive, clean, and accessible. Responsive design using CSS Flexbox and Grid ensures compatibility across all devices from 320px mobile screens to 2560px 4K monitors. Clear navigation with contextual side panels guides users through the enrollment flow. ARIA labels are used on interactive elements (e.g., `aria-label="Virtual Bookshelf home"`, `aria-label="Search courses"`) for screen reader accessibility.

**Maintainability:**
The codebase follows modern development practices with clear separation between frontend markup (HTML), styling (CSS with Custom Properties), client-side logic (JavaScript), and authentication (Firebase module). CSS Custom Properties enable global theme changes from a single location (the `:root` selector). The modular JavaScript structure allows independent updating of search logic, authentication, and form handling.

**Availability:**
The system targets 99%+ monthly uptime through reliable hosting on platforms like Vercel or Netlify with global CDN distribution. Firebase Authentication provides Google-backed reliability with automatic failover and redundancy. Static file hosting ensures the application remains available even during high traffic periods.

### 3.2 Entity Relationship Diagram (ERD)

The Entity Relationship Diagram for Learnify outlines the key entities and their relationships that form the backbone of the platform's data model. The diagram illustrates how students, courses, admissions, and payments are interconnected.

**Entities and Relationships:**

The **Student** entity is at the center of the system, containing attributes such as student_id (Primary Key, auto-generated Firebase UID), display_name (VARCHAR), email (VARCHAR, Unique), password_hash (VARCHAR, managed by Firebase), profile_avatar_url (VARCHAR, auto-generated SVG data URL), and created_at (DATETIME, account creation timestamp). Each student can have multiple admissions and payments.

The **Course** entity contains course_id (Primary Key), title (VARCHAR, e.g., "Web Development Course"), description (TEXT), duration_hours (INT, e.g., 48), module_count (INT, e.g., 12), difficulty_level (VARCHAR: Beginner/Advanced/All Levels), certification_status (VARCHAR: With Certificate/Certificate Optional), career_focus (VARCHAR: Beginner Friendly/Career Ready/Job Focused/Project Based), and fee (DECIMAL, e.g., 2999.00). Each course can receive multiple admissions.

The **Admission** entity links students to courses, containing admission_id (Primary Key), student_id (Foreign Key referencing Student), course_id (Foreign Key referencing Course), full_name (VARCHAR), email (VARCHAR), mobile_number (VARCHAR), address (TEXT), preferred_batch (VARCHAR: Morning/Evening/Weekend), learning_mode (VARCHAR: Online Live/Recorded Classes/Hybrid Support), status (VARCHAR: Pending/Approved/Rejected), and submission_date (DATETIME).

The **Payment** entity records financial transactions, containing payment_id (Primary Key), admission_id (Foreign Key referencing Admission), amount (DECIMAL), payment_method (VARCHAR: UPI/Debit Card/Credit Card/Net Banking/Wallet), transaction_reference (VARCHAR), status (VARCHAR: Pending/Completed/Failed), and payment_date (DATETIME).

### 3.3 Table Structure

**Table: Students**

Stores registered users' information, including their unique Firebase UID, display name, email, avatar, and registration timestamp. This table manages user authentication and personalizes each user's experience on the platform.

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| student_id | VARCHAR(128) | PK | Firebase UID (Primary Key) |
| display_name | VARCHAR(100) | | User's full name or email-derived name |
| email | VARCHAR(255) | Unique, NOT NULL | User's registered email address |
| password_hash | VARCHAR(255) | NOT NULL | Firebase-managed hashed password |
| profile_avatar_url | TEXT | | Auto-generated SVG avatar data URL |
| created_at | DATETIME | DEFAULT CURRENT_TIMESTAMP | Account creation timestamp |

**Table: Courses**

Contains details about each course offered on the platform, including title, description, duration, module count, difficulty level, certification status, and fee amount.

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| course_id | VARCHAR(50) | PK | Unique course identifier (e.g., "web-development-course") |
| title | VARCHAR(255) | NOT NULL | Course title (e.g., "Web Development Course") |
| description | TEXT | | Course description and overview |
| duration_hours | INT | | Duration in hours (e.g., 48) |
| module_count | INT | | Number of included modules (e.g., 12) |
| difficulty_level | VARCHAR(20) | | Beginner/Advanced/All Levels |
| certification | VARCHAR(30) | | With Certificate / Certificate Optional |
| career_focus | VARCHAR(30) | | Beginner Friendly/Career Ready/Job Focused |
| fee | DECIMAL(10,2) | | Course fee in INR (e.g., 2999.00) |

**Table: Admissions**

Records all admission applications submitted by students, linking each application to a specific student and course. Tracks batch preference, learning mode, and approval status.

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| admission_id | INT | PK, AUTO_INCREMENT | Unique admission record ID |
| student_id | VARCHAR(128) | FK → Students | Firebase UID of the applying student |
| course_id | VARCHAR(50) | FK → Courses | Selected course identifier |
| full_name | VARCHAR(100) | NOT NULL | Student's full name |
| email | VARCHAR(255) | NOT NULL | Student's email address |
| mobile_number | VARCHAR(15) | | Student's contact number |
| address | TEXT | | Student's residential address |
| preferred_batch | VARCHAR(20) | | Morning / Evening / Weekend |
| learning_mode | VARCHAR(30) | | Online Live / Recorded / Hybrid |
| status | VARCHAR(20) | DEFAULT 'Pending' | Pending / Approved / Rejected |
| submission_date | DATETIME | DEFAULT CURRENT_TIMESTAMP | Form submission timestamp |

**Table: Payments**

Records payment transactions linked to admission applications, tracking the payment method, amount, transaction reference, and completion status.

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| payment_id | INT | PK, AUTO_INCREMENT | Unique payment record ID |
| admission_id | INT | FK → Admissions | Linked admission record |
| amount | DECIMAL(10,2) | NOT NULL | Payment amount in INR |
| payment_method | VARCHAR(30) | | UPI / Debit Card / Credit Card / Net Banking / Wallet |
| transaction_ref | VARCHAR(100) | | UPI transaction reference or card transaction ID |
| status | VARCHAR(20) | DEFAULT 'Pending' | Pending / Completed / Failed |
| payment_date | DATETIME | DEFAULT CURRENT_TIMESTAMP | Payment timestamp |

### 3.4 Use Case Diagram

The Use Case Diagram identifies the actors (users) and the actions (use cases) they can perform within the Learnify system.

**Actor: Guest Visitor**
- Browse Home Page and view featured courses
- Search and filter courses by keyword
- View course details (duration, modules, certification)
- Read About / Success Stories page
- View Services / Why Choose Us page
- View Contact details and support hours
- Register for a new account (Sign Up)

**Actor: Registered Student**
- All Guest Visitor actions, plus:
- Log in with email and password
- View personalized header with name and avatar
- Fill and submit Admission Form
- Select preferred batch and learning mode
- Navigate to Payment page
- Complete fee payment via UPI/Card/Net Banking
- Log out and end session

**Actor: Administrator (Proposed)**
- Manage course listings (CRUD operations)
- Review and approve/reject admission applications
- Monitor enrollment statistics
- Manage user accounts via Firebase Console

### 3.5 Class Diagram

The Class Diagram represents the key classes in the Learnify system and their relationships:

**Class: User**
- Attributes: uid (String), displayName (String), email (String), photoURL (String)
- Methods: login(email, password), signup(username, email, password), logout(), getDisplayName(), getUserInitials(), createAvatarDataUrl()

**Class: Course**
- Attributes: courseId (String), title (String), description (String), durationHours (int), moduleCount (int), difficultyLevel (String), fee (float)
- Methods: filter(query), display(), getMetadata()

**Class: Admission**
- Attributes: admissionId (int), studentId (String), courseId (String), batch (String), mode (String), status (String)
- Methods: submitForm(), validate(), redirectToPayment()

**Class: Payment**
- Attributes: paymentId (int), admissionId (int), amount (float), method (String), status (String)
- Methods: processPayment(), generateQR(), confirmTransaction()

**Relationships:**
- User "1" → "*" Admission (A user can submit multiple admissions)
- Course "1" → "*" Admission (A course can receive multiple admissions)
- Admission "1" → "1" Payment (Each admission generates one payment)

### 3.6 Activity Diagram

The Activity Diagram traces the flow of a student's journey through the Learnify platform:

1. **Start** → Student visits the Learnify Home Page (index.html)
2. Student views the Hero Section with "JOIN US" and "View course details" buttons
3. Student uses the search bar to enter keywords (e.g., "Java", "web development")
4. System filters course cards in real-time and updates the display
5. **Decision: Is student logged in?**
   - **No** → Student clicks "Sign Up" → Fills registration form → Firebase creates account → Profile displayed in header
   - **Yes** → Continue to next step
6. Student browses the Courses page and selects a desired course
7. Student clicks "Enroll" or "Apply" on the course card
8. Student is redirected to the Admission page (admission.html)
9. Student fills the admission form (name, email, phone, course, address, batch, mode)
10. System validates all form fields
11. Student clicks "Continue to Payment"
12. Student is redirected to the Payments page (payments.html)
13. Student selects payment method (UPI/Card/Net Banking/Wallet)
14. Student completes payment (scans QR code or enters UPI ID)
15. **End** → Enrollment confirmed

### 3.7 Deployment Diagram

The Deployment Diagram shows the physical architecture of the Learnify system in its production environment:

**Client Layer (Student's Device):**
- Web Browser (Chrome/Firefox/Safari)
- Renders HTML5, CSS3, JavaScript
- Displays responsive UI across devices (Mobile/Tablet/Desktop)

**Hosting Layer (Web Server):**
- Vercel / Netlify / GitHub Pages
- Serves static files (HTML, CSS, JS, Images, SVG)
- Global CDN distribution for low-latency access
- HTTPS encryption for all connections

**Service Layer (Firebase):**
- Firebase Authentication Server
- Handles user registration, login, and session management
- Provides `onAuthStateChanged` real-time state updates
- Auto-scales based on demand

**CDN Layer (External Resources):**
- Google Fonts CDN → Cormorant Garamond + Manrope fonts
- Ionicons CDN → SVG icon web components
- Firebase SDK CDN → Authentication module (v12.12.0)

### 3.8 Module Hierarchy Diagram

```text
LEARNIFY APPLICATION
│
├── 1. PRESENTATION MODULE
│   ├── 1.1 Home Page (index.html)
│   │   ├── Hero Section (headline, search, CTA buttons)
│   │   ├── About the Course Section
│   │   ├── Services Section
│   │   ├── Design Modules Section
│   │   └── Contact Section
│   ├── 1.2 Courses Page (courses.html)
│   │   ├── Side Panel (search, links, tips)
│   │   └── Course Catalog Grid (10 course cards)
│   ├── 1.3 About Page (about.html)
│   │   ├── Info Strip (3 info cards)
│   │   └── Course Overview Card
│   ├── 1.4 Services Page (services.html)
│   │   └── Service Option Grid (4 service cards)
│   ├── 1.5 Admission Page (admission.html)
│   │   └── Multi-field Enrollment Form
│   ├── 1.6 Contact Page (contact.html)
│   │   └── Contact Layout (2 contact cards)
│   └── 1.7 Payments Page (payments.html)
│       └── Payment Grid (course details, methods, QR code)
│
├── 2. AUTHENTICATION MODULE (firebase-auth.js)
│   ├── 2.1 Firebase SDK Loader (loadFirebaseModules)
│   ├── 2.2 Auth Initializer (initFirebaseAuth)
│   ├── 2.3 Login Handler (handleLogin)
│   ├── 2.4 Signup Handler (handleSignup)
│   ├── 2.5 Logout Handler (handleLogout)
│   ├── 2.6 Auth State Observer (onAuthStateChanged)
│   ├── 2.7 UI State Manager (setLoggedInState)
│   └── 2.8 Avatar Generator (createAvatarDataUrl)
│
├── 3. SEARCH & FILTER MODULE (javascript.js)
│   ├── 3.1 Course Filter Engine (applyCourseFilter)
│   ├── 3.2 Search Form Handler (submit event)
│   ├── 3.3 URL Parameter Sync (URLSearchParams)
│   └── 3.4 Auth Form Toggler (toggleAuth)
│
└── 4. STYLING MODULE (style.css)
    ├── 4.1 Design System (CSS Custom Properties)
    ├── 4.2 Layout Components (Flexbox, Grid)
    ├── 4.3 Component Styles (cards, forms, buttons)
    └── 4.4 Responsive Breakpoints (media queries)
```

### 3.9 Sample Input and Output Screens

**Sample Input 1 – Course Search:**
- **Input:** Student types "Full Stack" in the search bar on the Courses page
- **Output:** The system filters the catalog to display only courses whose `data-course-name` contains "full stack" — showing the "Full Stack Developer" and related cards, while hiding all other courses

**Sample Input 2 – User Registration:**
- **Input:** Student enters Username: "Sabiha", Email: "sabiha@example.com", Password: "Secure123"
- **Output:** Firebase creates a new account, the header updates to show "Sabiha" with an auto-generated teal avatar displaying "SA", and a success message "Account created successfully." appears

**Sample Input 3 – Admission Form:**
- **Input:** Full Name: "Sabiha Naaz Khan", Email: "sabiha@example.com", Mobile: "9876543210", Course: "Java Full Stack", Address: "Mumbai, Maharashtra", Batch: "Evening batch", Mode: "Online live"
- **Output:** Form validates all fields successfully and redirects to payments.html showing the course package details and payment options

**Sample Input 4 – Payment:**
- **Input:** Student selects "UPI transaction" and scans the QR code
- **Output:** Payment page displays UPI ID "VirtualBookshelf@upi", amount "Rs. 2,999", and reference note instructions

---

## CHAPTER 4: CODING

### 4.1 Algorithms

**Course Filtering Algorithm:**
The course filtering algorithm is the core search functionality of the Learnify platform. It operates entirely on the client-side for instant results without server round-trips.

**Algorithm Steps:**
1. Capture the search query from the input field
2. Trim whitespace and normalize to lowercase using `query.trim().toLowerCase()`
3. Select all course card elements using `document.querySelectorAll(".course-item")`
4. For each course card element, retrieve the `data-course-name` attribute which contains searchable keywords
5. Check if the normalized query is contained within the keyword string using `keywords.includes(normalizedQuery)`
6. If the query is empty, show all courses (set `display` to default)
7. If the query matches, show the course card (set `display` to default)
8. If the query does not match, hide the course card (set `display: none`)
9. Synchronize the current query with the URL using `window.history.replaceState` and `URLSearchParams` so that search results can be bookmarked and shared

**Authentication Flow Algorithm:**
1. User fills login form with email and password
2. Client-side validation checks if both fields are non-empty
3. Firebase SDK is loaded asynchronously via dynamic `import()`
4. `signInWithEmailAndPassword(auth, email, password)` is called
5. On success: `onAuthStateChanged` fires, updating all UI elements (hiding guest elements, showing user profile with name and avatar)
6. On failure: Error code is mapped to a user-friendly message via `getFriendlyAuthMessage()` and displayed in the status element

**Avatar Generation Algorithm:**
1. Extract user initials from display name (first letter of first two words)
2. Generate a deterministic color from user's email using a hash function mapped to a palette of 6 colors
3. Create an SVG string with a gradient background circle, silhouette overlay, and initials text
4. Encode the SVG as a data URL using `encodeURIComponent()`
5. Set the data URL as the `src` attribute of all avatar `<img>` elements

### 4.2 Code Snippets

**Course Search and Filter Logic (javascript.js):**
```javascript
const searchForms = document.querySelectorAll(".search-form");
const courseItems = document.querySelectorAll(".course-item");
const courseSearchInput = document.querySelector("#course-search");

function applyCourseFilter(query) {
    if (!courseItems.length) {
        return;
    }
    const normalizedQuery = query.trim().toLowerCase();
    courseItems.forEach((item) => {
        const keywords = item.dataset.courseName || "";
        const visible = !normalizedQuery || keywords.includes(normalizedQuery);
        item.style.display = visible ? "" : "none";
    });
}

searchForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = form.querySelector('input[name="query"]');
        const query = input ? input.value.trim() : "";
        const onCoursesPage = window.location.pathname
            .toLowerCase().endsWith("courses.html");
        if (onCoursesPage) {
            applyCourseFilter(query);
            const url = new URL(window.location.href);
            if (query) {
                url.searchParams.set("query", query);
            } else {
                url.searchParams.delete("query");
            }
            window.history.replaceState({}, "", url);
            return;
        }
        const destination = query
            ? `courses.html?query=${encodeURIComponent(query)}`
            : "courses.html";
        window.location.href = destination;
    });
});
```

**Firebase Authentication – Login Handler (firebase-auth.js):**
```javascript
async function handleLogin(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.querySelector('input[name="email"]')?.value.trim();
    const password = form.querySelector('input[name="password"]')?.value;
    if (!email || !password) {
        setStatus("Enter both email and password.", "error");
        return;
    }
    try {
        const auth = await initFirebaseAuth();
        const { signInWithEmailAndPassword } = await loadFirebaseModules()
            .then(([, authModule]) => authModule);
        await signInWithEmailAndPassword(auth, email, password);
        setStatus("Login successful.", "success");
        form.reset();
    } catch (error) {
        setStatus(getFriendlyAuthMessage(error), "error");
    }
}
```

**Auto-Generated SVG Avatar (firebase-auth.js):**
```javascript
function createAvatarDataUrl(user) {
    const initials = getUserInitials(user);
    const color = getAvatarColor(user?.email || initials);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#${color}" />
                    <stop offset="100%" stop-color="#17322e" />
                </linearGradient>
            </defs>
            <rect width="160" height="160" rx="80" fill="url(#bg)" />
            <text x="80" y="92" text-anchor="middle" fill="#fff"
                  font-size="52" font-weight="700">${initials}</text>
        </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
```

**Auth Form Toggle (javascript.js):**
```javascript
function toggleAuth(mode) {
    const loginContainer = document.getElementById('login-form-container');
    const signupContainer = document.getElementById('signup-form-container');
    if (!loginContainer || !signupContainer) return;
    if (mode === 'signup') {
        loginContainer.hidden = true;
        signupContainer.hidden = false;
    } else {
        loginContainer.hidden = false;
        signupContainer.hidden = true;
    }
}
window.toggleAuth = toggleAuth;
```

**CSS Design System (style.css excerpt):**
```css
:root {
    --accent: #0f766e;
    --accent-soft: #87a9a2;
    --bg-cream: #f6efe5;
    --bg-peach: #f4e1cf;
    --bg-mint: #e4f2ec;
    --header-bg: #fffdf8;
    --header-text: #17322e;
    --panel: #fffdf8;
    --text-dark: #17322e;
    --muted: #6e7e78;
    --border: #ddd2c2;
}
```

---

## CHAPTER 5: TESTING

### 5.1 Test Strategy

The testing strategy for Learnify follows a comprehensive approach covering functional correctness, cross-browser compatibility, responsive layout verification, form validation, and authentication flow testing. Testing is performed using a combination of manual testing and browser DevTools inspection. The strategy focuses on three pillars: **Functional Correctness** (all features work as specified), **Cross-Browser Stability** (consistent rendering across Chrome, Firefox, and Safari), and **Form Security** (all inputs are validated and sanitized).

### 5.2 Unit Test Plans

Individual functions and modules are tested in isolation:
- Verify that `applyCourseFilter("java")` correctly shows only courses containing "java" in their `data-course-name` attribute and hides all others
- Verify that `applyCourseFilter("")` (empty string) shows all 10 courses
- Verify that `toggleAuth('signup')` sets `loginContainer.hidden = true` and `signupContainer.hidden = false`
- Verify that `toggleAuth('login')` reverses the above state
- Verify that `getDisplayName()` returns the user's display name when set, or derives a formatted name from the email prefix when not set
- Verify that `getUserInitials()` returns the correct two-letter initials for single and multi-word names
- Verify that `getFriendlyAuthMessage()` maps all known Firebase error codes to user-friendly messages
- Verify that `createAvatarDataUrl()` generates a valid SVG data URL containing the user's initials

### 5.3 Acceptance Test Plans

End-to-end user workflows are tested:
- Complete enrollment flow: Home → Search Course → View Course → Click Enroll → Fill Admission Form → Continue to Payment → Complete Payment
- Authentication flow: Sign Up → Verify profile appears in header → Log Out → Log In → Verify profile reappears
- Responsive flow: Complete the entire enrollment flow on a mobile device (360px width) and verify all layouts remain functional
- Search persistence flow: Search for "web" on courses page → Refresh browser → Verify filter results persist via URL parameter

### 5.4 Test Case / Test Script

| ID | Test Scenario | Input Data | Expected Result | Actual Result |
| :--- | :--- | :--- | :--- | :--- |
| TC01 | Course Search - Keyword | "Java" | Display Java Full Stack and related courses only | **Pass** |
| TC02 | Course Search - Empty | "" | Display all 10 course cards | **Pass** |
| TC03 | Course Search - Partial | "web" | Display Web Development, Certified Web Developer, Job Ready courses | **Pass** |
| TC04 | URL Parameter Sync | `courses.html?query=full+stack` | Auto-filter on page load showing Full Stack course | **Pass** |
| TC05 | Auth Toggle to Signup | Click "Sign up here" link | Login form hidden, Signup form shown | **Pass** |
| TC06 | Auth Toggle to Login | Click "Login here" link | Signup form hidden, Login form shown | **Pass** |
| TC07 | Valid Registration | Username: "Test", Email: "test@mail.com", Pass: "Test123" | Account created, name appears in header | **Pass** |
| TC08 | Duplicate Email Registration | Email: "test@mail.com" (existing) | Error: "That email is already registered" | **Pass** |
| TC09 | Weak Password | Password: "123" | Error: "Use a stronger password with at least 6 characters" | **Pass** |
| TC10 | Valid Login | Email: "test@mail.com", Pass: "Test123" | "Login successful." message, profile shown | **Pass** |
| TC11 | Invalid Login | Wrong password | Error: "Invalid email or password." | **Pass** |
| TC12 | Logout | Click "Sign out" | Profile hidden, guest links shown | **Pass** |
| TC13 | Admission Form - Empty Fields | Submit with empty name | Browser shows "Please fill out this field" | **Pass** |
| TC14 | Admission Form - Valid | All fields filled correctly | Redirect to payments.html | **Pass** |
| TC15 | Batch Selection | Select "Evening batch" | Dropdown value persists correctly | **Pass** |
| TC16 | Learning Mode Selection | Select "Recorded classes" | Dropdown value persists correctly | **Pass** |
| TC17 | Mobile Layout - Navbar | Width: 360px | Navigation remains accessible | **Pass** |
| TC18 | Mobile Layout - Course Grid | Width: 360px | Cards stack vertically in single column | **Pass** |
| TC19 | Payment Page - QR Display | Navigate to payments.html | QR code SVG renders correctly | **Pass** |
| TC20 | Payment Methods | View payment page | All 5 methods listed (UPI, Debit, Credit, Net Banking, Wallet) | **Pass** |
| TC21 | Cross-Browser - Firefox | Open in Firefox | All layouts and Firebase auth work correctly | **Pass** |
| TC22 | Cross-Browser - Safari | Open in Safari | Backdrop-filter and gradients render correctly | **Pass** |
| TC23 | Font Loading | Load any page | Cormorant Garamond for headings, Manrope for body | **Pass** |
| TC24 | Icon Rendering | All pages | Ionicons SVG icons render and scale correctly | **Pass** |
| TC25 | Session Persistence | Login → Close browser → Reopen | User remains logged in (Firebase persistence) | **Pass** |

### 5.6 Defect Report / Test Log

| Defect ID | Description | Severity | Status | Resolution |
| :--- | :--- | :--- | :--- | :--- |
| D001 | Search query lost on page refresh | Medium | Fixed | Implemented URL parameter synchronization using `URLSearchParams` and `window.history.replaceState` |
| D002 | Login/Signup toggle not working on non-index pages | Low | Fixed | Added null checks (`if (!loginContainer || !signupContainer) return`) to prevent errors on pages without auth forms |
| D003 | Avatar not displaying for users without photoURL | Medium | Fixed | Implemented auto-generated SVG avatar system using `createAvatarDataUrl()` with user initials and deterministic color palette |
| D004 | Firebase SDK import failing on slow connections | High | Fixed | Added try-catch around `loadFirebaseModules()` with user-friendly error message "Authentication service could not load" |
| D005 | Form submission redirecting without validation | Medium | Fixed | Added `required` attribute to all admission form fields and used HTML5 built-in validation |

---

## CHAPTER 6: LIMITATIONS OF PROPOSED SYSTEM

The current version of the Learnify system, while functional and feature-rich, has several limitations that should be acknowledged:

1. **No Server-Side Database Persistence:** The current prototype uses Firebase Authentication for user identity management but does not persist admission form data or payment confirmations to a server-side database. Admission records exist only during the browser session and are lost upon page navigation. A production deployment would require Firebase Cloud Firestore or a similar database to store and retrieve admission and payment records.

2. **Static Course Data:** Course information is hardcoded in HTML files rather than loaded dynamically from a database or CMS. Adding, updating, or removing courses requires manual editing of HTML source code, which is not practical for non-technical administrators.

3. **No Email Notification System:** The system does not send automated email notifications to students upon successful registration, admission submission, or payment confirmation. Students have no way to receive receipts or status updates via email.

4. **No Admin Panel:** There is currently no administrative interface for managing courses, reviewing admission applications, or monitoring enrollment statistics. All administrative tasks must be performed through direct code editing or the Firebase Console.

5. **Payment Processing is Informational:** The payment module displays payment methods and QR codes but does not integrate with an actual payment gateway (such as Razorpay, PayU, or Stripe) for automated transaction processing and verification.

6. **Limited Accessibility Features:** While the application uses ARIA labels on some elements and semantic HTML, a comprehensive accessibility audit (WCAG 2.1 AA compliance) has not been performed. Features like keyboard navigation, focus management, and screen reader optimization could be improved.

7. **No Progressive Web App (PWA) Support:** The application does not currently support offline access, push notifications, or installation as a PWA on mobile devices.

---

## CHAPTER 7: PROPOSED ENHANCEMENTS

To overcome the current limitations and further enrich the user experience, the following key enhancements are proposed for future versions of the Learnify system:

**Integration with Cloud Database (Firestore):**
The system will integrate Firebase Cloud Firestore to persist all admission records, payment confirmations, and user preferences. This will enable students to track their admission status and administrators to manage enrollments through a dashboard.

**Dynamic Admin CMS Panel:**
A secure admin panel will be developed for managing course listings (CRUD operations), reviewing admission applications, approving or rejecting enrollments, and viewing real-time analytics on student registrations and popular courses.

**Automated Email Notifications:**
Integration with Firebase Cloud Functions and an email service (such as SendGrid or Nodemailer) to send automated notifications for account registration confirmation, admission form submission acknowledgment, admission approval/rejection notifications, and payment receipt generation.

**Payment Gateway Integration:**
Integration with Razorpay or PayU for automated payment processing, real-time transaction verification, automated receipt generation, refund processing, and support for EMI and installment payment plans.

**Mobile App with Offline Capabilities:**
Development of Android and iOS mobile applications using React Native or Flutter with offline capabilities, allowing students to browse courses, view their enrollment status, and access downloaded course materials even without an internet connection.

**AI-Driven Course Recommendations:**
Implementation of a recommendation engine that analyzes student profiles, browsing patterns, and enrollment history to suggest the most relevant courses. This could use collaborative filtering or content-based filtering algorithms.

**Student Dashboard:**
A dedicated student portal where enrolled students can view their course schedules, track learning progress, download course materials, access recorded class sessions, and view certificates upon course completion.

**Multilingual and Regional Support:**
Translation of the platform into multiple languages (Hindi, Marathi, Tamil, etc.) and support for regional content, making it accessible to a diverse, pan-Indian student base.

**Gamification and Engagement Features:**
Introduction of learning streaks, achievement badges, course completion certificates, leaderboards, and peer recognition systems to motivate students and increase engagement.

**Enhanced Accessibility:**
Comprehensive WCAG 2.1 AA compliance with screen reader optimization, keyboard navigation support, adjustable font sizes, high-contrast modes, and voice navigation to ensure inclusivity for users with disabilities.

---

## CHAPTER 8: CONCLUSION

The Learnify — Integrated Learning Management System is a modern, user-centric platform designed to simplify and digitize the institutional enrollment process for students, educators, and administrators. With features such as real-time course search and filtering, secure Firebase-powered authentication, multi-step admission form processing, and integrated payment interface, the system empowers educational institutions to offer a premium digital experience that matches the expectations of today's tech-savvy students.

The current implementation provides a solid foundation for a comprehensive digital enrollment platform by supporting the complete student journey from course discovery to fee payment. The premium Cream and Teal design theme with Cormorant Garamond and Manrope typography creates a professional, trustworthy interface that enhances the institution's brand image. The modular codebase, built with HTML5, CSS3, JavaScript, and Firebase, ensures that the system is maintainable, scalable, and ready for future enhancements.

While the platform already significantly improves the enrollment experience compared to traditional paper-based processes, its true potential will be realized through future enhancements such as database persistence with Firestore, an admin CMS panel, automated email notifications, payment gateway integration, and mobile app development. By continuously evolving based on user feedback and technological advancements, Learnify aspires to become a comprehensive and inclusive hub for educational institutions and their students.

---

## CHAPTER 9: BIBLIOGRAPHY

- Firebase Authentication Documentation – https://firebase.google.com/docs/auth
- Firebase Web SDK Reference – https://firebase.google.com/docs/reference/js
- MDN Web Docs – HTML5, CSS3, JavaScript – https://developer.mozilla.org/
- W3Schools HTML, CSS, and JavaScript Tutorials – https://www.w3schools.com/
- CSS-Tricks – Flexbox and Grid Guides – https://css-tricks.com/
- Google Fonts – Cormorant Garamond and Manrope – https://fonts.google.com/
- Ionicons SVG Icon Library – https://ionic.io/ionicons
- Vercel Deployment Documentation – https://vercel.com/docs
- Git and GitHub Guides – https://docs.github.com/
- Lucidchart ERD and UML Diagram Resources – https://www.lucidchart.com/
- draw.io Diagram Tool – https://www.diagrams.net/

---

## CHAPTER 10: PUBLICATIONS AND PRESENTATIONS

The development and implementation of the Learnify web application have been documented and presented as part of the academic curriculum. Project findings, design strategies, and system architecture were shared in internal seminars and project review meetings within the institution. The project report serves as a comprehensive documentation of the system's design, development, testing, and deployment processes.

---

## CHAPTER 11: APPENDIX – DATASHEET

| Module | Technologies Used | Purpose |
| :--- | :--- | :--- |
| User Authentication | HTML5, JS (ES6), Firebase Auth SDK v12.12.0 | Handles user registration, login, logout, and secure session management with persistent state |
| Course Search & Catalog | HTML5, CSS3 Grid, JavaScript | Enables real-time keyword filtering across 10 course cards with URL parameter sync |
| Admission Form | HTML5 Forms, CSS3, JavaScript | Captures student enrollment details with validation for batch and learning mode selection |
| Payment Interface | HTML5, CSS3, SVG (QR Code) | Displays payment methods (UPI, Card, Net Banking), QR code, and transaction instructions |
| Navigation & Routing | HTML5, CSS3 Flexbox, Ionicons | Provides consistent fixed-position navbar and contextual side panels across all pages |
| UI Design System | CSS3 Custom Properties, Google Fonts | Maintains consistent Cream and Teal theme with Cormorant Garamond and Manrope typography |
| Avatar Generation | JavaScript, SVG | Auto-generates personalized SVG avatars with user initials and deterministic gradient colors |
| Error Handling | JavaScript (firebase-auth.js) | Maps all Firebase auth error codes to user-friendly messages for clear feedback |

---

## CHAPTER 12: USER MANUAL

This user manual guides end-users through the key modules and functionalities of the Learnify system. The application is developed using HTML5, CSS3, and JavaScript for the frontend, and Firebase Authentication for secure user management. The platform is designed to make course discovery, enrollment, and payment simple and interactive for all users.

### Home Page
**Purpose:**
Provides an overview of the platform and easy navigation to all main sections.

**Features:**
- Welcome headline "Virtual Bookshelf Platform" with descriptive tagline
- Navigation bar with links to Home, Courses, Why Choose Us, Success Stories, and Enroll Now
- Search bar with autocomplete suggestions for finding courses by title, author, or genre
- "JOIN US" call-to-action button linking to the Admission page
- "View course details" secondary link to the Courses page
- Mini cards for quick access to Popular Fiction and New Arrivals categories
- Login/Signup forms in the right sidebar panel
- Social login icons (Facebook, Instagram, Twitter, Google, LinkedIn)
- Responsive design for both mobile and desktop

**Validation:**
- Search input accepts letters, digits, and spaces
- Maximum 50 characters for search query

### User Login / Signup
**Purpose:**
Allows users to securely register and log in for a personalized experience.

**Features:**
- Login form (email and password fields)
- Registration form (username, email, password)
- Toggle between Login and Signup forms using "Sign up here" / "Login here" links
- Real-time authentication status messages (success/error)
- Persistent login sessions across browser restarts
- Auto-generated profile avatar with user initials
- User name displayed in the navigation bar header

**Validation:**
- Email must be in valid format (e.g., user@example.com)
- Password: Minimum 6 characters (Firebase requirement)
- Username: Optional but recommended for personalized display
- All fields are required for form submission
- Duplicate email check with error message "That email is already registered"

### Course Search & Catalog
**Purpose:**
Enables students to search for and browse available professional courses.

**Features:**
- Search bar with autocomplete suggestions (datalist with all course names)
- Real-time filtering as keywords are entered
- 10 course cards displaying: title, description, duration, modules, level, certification
- Each card has "Buy Now/Buy Course" and "Enroll/Apply" action buttons
- Side panel with quick links to Admission, Payment, and Service pages
- Search tip card explaining available keywords

**Validation:**
- Search input must not be empty for meaningful results (empty shows all)
- URL parameters sync with search query for bookmarkable results
- Only letters, digits, and spaces are matched

### Admission Form
**Purpose:**
Allows students to submit their enrollment application for a selected course.

**Features:**
- Full Name input field
- Email Address input field with format validation
- Mobile Number input field
- Course Selection dropdown (10 courses: Web Development, Full Stack Developer, Basic to Advanced Programming, IT Skills Master, Java Full Stack, Certified Web Developer, Advanced Software Engineering, IT Career Development, Master Coding With Real Project, Job Ready Web Developer)
- Address textarea for city, state, and details
- Preferred Batch dropdown (Morning/Evening/Weekend)
- Learning Mode dropdown (Online Live/Recorded Classes/Hybrid Support)
- "Continue to Payment" button linking to payments page
- "Back to Courses" ghost button for navigation

**Validation:**
- All fields are required (HTML5 `required` attribute)
- Email must be in valid format
- Phone number must be numeric

### Payment Gateway
**Purpose:**
Provides students with multiple payment options to complete their course enrollment fee.

**Features:**
- Course package summary with description and price (Rs. 2,999)
- "Confirm Purchase" action button
- Payment methods list: UPI transaction (Instant), Debit card (Available), Credit card (Available), Net banking (Available), Wallet payment (Available)
- UPI payment details box with UPI ID
- Scannable QR code for quick UPI payment
- QR details showing UPI ID and amount
- Reference note instructions (your name + selected course name)

**Validation:**
- Payment amount is pre-set based on selected course
- Reference note must include student name and course name

### Services / Why Choose Us
**Purpose:**
Showcases the institution's key services and value propositions.

**Features:**
- Web Development course service card with "Open Course" button
- Full Stack and Java support card
- Project build service card with course image
- Student community access card with "Contact Team" button
- Side panel with links to Courses, Admission, and Payment pages

**Validation:**
- No input fields on this page

### Contact / Enroll Now
**Purpose:**
Provides contact information and direct enrollment links.

**Features:**
- Contact details card with email, phone number, and address
- "Open Admission" action button
- Course purchase completion card with "Open Payment Page" button
- Side panel with support hours (Mon to Sat, 9:00 AM to 7:00 PM)
- Quick links to Course gallery, Admission page, and Payment page

**Validation:**
- No input fields on this page (informational only)

### About / Success Stories
**Purpose:**
Provides information about the platform's philosophy and student success stories.

**Features:**
- Info strip with 3 cards: Beginner Friendly, Many Course Photos, Buy Online
- Course overview card with image and description
- Side panel with links to next pages (Course photos, Admission form, Payment options)
- Student support card with institutional description

**Validation:**
- No input fields on this page

This manual ensures that users can easily navigate and utilize all features of the Learnify platform, from discovering courses to completing enrollment and payment.
