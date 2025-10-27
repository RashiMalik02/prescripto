# 🏥 Prescripto - Healthcare Appointment Booking System

A full-stack MERN healthcare application for booking doctor appointments with integrated payment system.

## 🌐 Live Deployment

- **Frontend**: https://prescriptofrontend1.netlify.app/
- **Admin Panel**: https://prescriptoadmin1.netlify.app/admin-dashboard
- **Backend API**: https://prescripto-u3c0.onrender.com
- **GitHub Repository**: https://github.com/RashiMalik02/prescripto

**Contact**: rashii.malik02@gmail.com

---

## 📋 Features

### Patient Portal (Frontend)
- ✅ User registration and authentication
- ✅ Browse doctors by speciality
- ✅ Book appointments
- ✅ Stripe payment integration
- ✅ View and manage appointments
- ✅ Profile management
- ✅ Responsive footer with working navigation links
- ✅ Contact page with email integration

### Admin Panel
- ✅ Secure admin authentication
- ✅ Add new doctors with image upload
- ✅ View all appointments
- ✅ Manage doctor profiles
- ✅ Dashboard with statistics
- ✅ Appointment status management

### Backend API
- ✅ RESTful API architecture
- ✅ JWT authentication
- ✅ MongoDB database
- ✅ Cloudinary image storage
- ✅ Payment processing (Stripe)
- ✅ Role-based access control

---

## 🛠️ Tech Stack

### Frontend & Admin
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt
- Cloudinary
- Stripe

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- Stripe account

### 1. Clone Repository
```bash
git clone https://github.com/Abhinavsuri90/prescripto.git
cd prescripto
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with:
CURRENCY=INR
JWT_SECRET=greatstack
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=greatstack123
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
PORT=4000

npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install

# Create .env file with:
VITE_BACKEND_URL=http://localhost:4000

npm run dev
```

### 4. Admin Panel Setup
```bash
cd admin
npm install

# Create .env file with:
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=₹

npm run dev
```

---

## 🔑 Admin Credentials

- **Email**: admin@example.com
- **Password**: greatstack123

---

## 📁 Project Structure

```
prescripto/
├── backend/          # Express.js API server
│   ├── config/       # Database & cloud storage config
│   ├── controllers/  # Request handlers
│   ├── middleware/   # Auth & file upload middleware
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   └── server.js     # Entry point
├── frontend/         # Patient-facing React app
│   ├── src/
│   │   ├── assets/   # Images & icons
│   │   ├── components/
│   │   ├── context/  # Global state
│   │   └── pages/    # Route pages
│   └── dist/         # Production build
└── admin/           # Admin panel React app
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── context/
    │   └── pages/
    └── dist/        # Production build
```

---

## 🗄️ Database Schema

### Users Collection
- name, email, password (hashed)
- image, phone, address
- gender, dob

### Doctors Collection
- name, email, password (hashed)
- image, speciality, degree
- experience, about, fees
- address, available (boolean)

### Appointments Collection
- userId, docId
- slotDate, slotTime
- userData, docData
- amount, date, cancelled, payment, isCompleted

---

## 🔐 Environment Variables

### Backend (.env)
```env
CURRENCY=INR
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin_password
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=4000
```

### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=₹
```

---

## Deployment Guide

### Backend (Render)
1. Create new Web Service
2. Connect GitHub repository
3. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Add all environment variables
5. Deploy

### Frontend & Admin (Netlify)
1. Import from GitHub
2. Configure:
   - Base Directory: `frontend` or `admin`
   - Build Command: `npm run build`
   - Publish Directory: `frontend/dist` or `admin/dist`
3. Add environment variables
4. Deploy

---

## Common Issues & Solutions

### MongoDB Connection Timeout
- Ensure MongoDB Atlas allows connections from all IPs (0.0.0.0/0)
- Check if password has special characters (URL encode them)
- Verify database user has proper permissions

### Images Not Uploading
- Verify Cloudinary credentials
- Check file size limits
- Ensure proper MIME types

### Payment Not Working
- Use Stripe test mode keys for development
- Test with Stripe test card: 4242 4242 4242 4242

---

## API Endpoints

### User Routes
- POST `/api/user/register` - Register new user
- POST `/api/user/login` - User login
- GET `/api/user/get-profile` - Get user profile
- POST `/api/user/update-profile` - Update profile
- POST `/api/user/book-appointment` - Book appointment
- GET `/api/user/appointments` - List user appointments
- POST `/api/user/cancel-appointment` - Cancel appointment
- POST `/api/user/payment-stripe` - Stripe payment

### Admin Routes
- POST `/api/admin/login` - Admin login
- POST `/api/admin/add-doctor` - Add new doctor
- GET `/api/admin/all-doctors` - List all doctors
- POST `/api/admin/change-availability` - Toggle doctor availability
- GET `/api/admin/appointments` - List all appointments
- POST `/api/admin/cancel-appointment` - Cancel appointment

### Doctor Routes
- POST `/api/doctor/login` - Doctor login
- GET `/api/doctor/appointments` - Doctor's appointments
- POST `/api/doctor/complete-appointment` - Mark complete
- POST `/api/doctor/cancel-appointment` - Cancel appointment
- GET `/api/doctor/dashboard` - Doctor dashboard stats
- GET `/api/doctor/profile` - Doctor profile
- POST `/api/doctor/update-profile` - Update profile
- GET `/api/doctor/list` - List all available doctors

---

## 📞 Contact Information

- **Email**: rashii.malik02@gmail.com
- **Phone**: +1-212-456-7890
- **Developer**: Rashi Malik

---

## Contributing

This is a project for educational purposes. Feel free to fork and modify.

---

## License

This project is open source and available for educational purposes.

---


## Acknowledgments

- React Team
- MongoDB Team
- Stripe Team
- Cloudinary Team
- All open-source contributors

---

**Developed by Rashi Malik**

**Made with ❤️ for healthcare accessibility**
