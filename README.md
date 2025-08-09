# Angular Assignment – Client-Side Web Application

This is a **client-side web application** built with **Angular 20** as part of a college assignment.  
The app demonstrates **navigation, API consumption using Angular services and HttpClient, and reactive forms**.  
It is deployed to a public hosting platform.

---

## 📌 Features
- **Routing & Navigation**: Home, API Data, and Form pages.
- **API Integration**: Fetches data from a public API using `HttpClient` via a service.
- **Reactive Forms**: Form with validation (required fields, email format).
- **Component-based Structure**: Clean and modular Angular design.
- **Deployment Ready**: Configured for production build and deployment.

---

## 🛠️ Technologies Used
- **Angular 20**
- **TypeScript**
- **RxJS**
- **Bootstrap** (or your chosen CSS framework)
- **Public REST API** (e.g., JSONPlaceholder)
- **Angular CLI**

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli)

Check your versions:

node -v
npm -v
ng version

2️⃣ Installation
Clone the repository and install dependencies:


npm install


3️⃣ Run in Development Mode

ng serve

or

npm start

Then open:
http://localhost:4200/

📄 Pages Overview

🏠 Home Page

Simple introduction text about the app.

🌐 API Data Page

Fetches and displays data from a public API using Angular HttpClient.

Data loading state and error handling included.

📝 Form Page

Reactive form with:

Name (required)

Email (required, email format validation)

Message (required, min length)

Displays error messages on invalid input.

Resets after successful submit.




