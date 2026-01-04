# Employee Management Dashboard

## 📌 Overview

This project is a **React-based Employee Management Dashboard** built as part of an interview assessment.  
It allows users to manage employee records with basic CRUD operations, image upload, filtering, status toggling, and printing functionality.

The application is **frontend-only** and uses **browser localStorage** for data persistence, as per the assignment scope.

---

## ✨ Features

### 🔐 Authentication

- Login page as the entry point
- Mock authentication (no backend)
- Dashboard access is restricted without login

---

### 📊 Dashboard

- Employee list displayed in a table
- Summary cards showing:
  - Total Employees
  - Active Employees
  - Inactive Employees

---

### ➕ Add / ✏️ Edit Employee

- Form opens on **Add Employee** or **Edit**
- Form closes automatically on **Save** or **Cancel**
- Fields included:
  - Full Name (required)
  - Gender (dropdown)
  - Date of Birth (date picker)
  - State (dropdown)
  - Profile Image upload (image picker)
  - Active / Inactive status
- Image preview is shown before saving
- Basic validation for required fields

---

### 🖼️ Profile Image Handling

- Only image files are allowed
- Image size restricted to avoid browser storage limits
- Image preview before saving
- Uploaded image displayed in the employee list
- Placeholder (initial letter) shown if no image is provided

---

### 📋 Employee List & Actions

- Displays employee details including profile image
- Available actions:
  - Edit employee
  - Delete employee (with confirmation)
- Active / Inactive status can be toggled directly from the list
- Changes are reflected immediately and persisted

---

### 🔍 Search & Filters

- Search employees by name
- Filter by gender
- Filter by active / inactive status
- Filters work together dynamically

---

### 🖨️ Print Employees List

- Single **Print Employees** button
- Prints only the employee table (not the entire page)
- Uses print-specific CSS for clean output

---

### 💾 Data Persistence

- Employee data stored in `localStorage`
- Data persists across page refreshes
- No backend or database used

---

## 🛠️ Tech Stack

- **React** (Functional Components)
- **React Hooks** (`useState`, `useEffect`)
- **CSS** for styling
- **Browser localStorage** for persistence

_No external UI libraries were used._

---

## 📁 Project Structure

src/
├── components/
│ ├── Auth/
│ │ └── Login.jsx
│ ├── Dashboard/
│ │ ├── Dashboard.jsx
│ │ ├── EmployeeForm.jsx
│ │ ├── EmployeeTable.jsx
│ │ ├── EmployeeFilters.jsx
│ │ └── SummaryCards.jsx
├── App.js
├── index.js
├── context/
│ └── AuthContext.js
└── styles/
  └── global.css

---

## ▶️ How to Run the Project

1. Install dependencies:

   ```bash
   npm install

   ```

2. Start the development server:

   npm start

3. Open in browser:

   http://localhost:3000
