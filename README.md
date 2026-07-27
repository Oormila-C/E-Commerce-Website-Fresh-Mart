# 🛒 FreshMart - Full Stack Grocery Shopping Application

FreshMart is a full-stack grocery shopping web application developed using **React**, **Node.js**, and **Express.js**. The application provides a simple and user-friendly interface where users can securely log in, browse grocery products, add items to their cart, and manage their shopping experience.

---

## 🚀 Features

- 🔐 User Login Authentication
- 👤 Personalized Dashboard after successful login
- ❌ Invalid login handling with a separate failure page
- 🛍️ Browse grocery products
- 🛒 Add products to shopping cart
- ➕ Increase or decrease product quantity
- 🗑️ Remove items from cart
- 💰 Automatic total price calculation
- 🔄 Global cart state management using React Context API
- 🚪 Logout functionality
- 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- React Context API
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- CORS

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Vercel (Frontend Deployment)
- Render (Backend Deployment)

---

## 📂 Project Structure

```
FreshMart
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── Data
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── backend
    ├── index.js
    ├── package.json
    └── node_modules
```

---

## ⚙️ Application Workflow

1. User opens the login page.
2. User enters their username and password.
3. React sends the login request to the Express backend using Axios.
4. The backend validates the credentials.
5. If the credentials are correct:
   - User details are stored in Local Storage.
   - User is redirected to the Dashboard.
6. If the credentials are incorrect:
   - User is redirected to the Login Failed page.
7. After logging in, users can:
   - Browse products
   - Add products to the cart
   - Update product quantities
   - Remove products from the cart
   - View the total amount
8. Clicking **Logout** clears the stored session data and redirects the user back to the login page.

---

## 💻 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/FreshMart.git
```

### Navigate to the project

```bash
cd FreshMart
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

### Install backend dependencies

```bash
cd ../backend
npm install
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
node index.js
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 📸 Screens

- Login Page
- Dashboard
- Product Listing
- Shopping Cart
- Login Failed Page

---

