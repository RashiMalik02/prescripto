#!/bin/bash

# Prescripto Full Stack - Quick Start Script
# This script starts all three parts of the application

echo "🚀 Starting Prescripto Full Stack Application..."
echo ""

# Check if we're in the right directory
if [ ! -d "backend" ] || [ ! -d "frontend" ] || [ ! -d "admin" ]; then
    echo "❌ Error: Please run this script from the prescripto-full-stack root directory"
    exit 1
fi

# Start backend
echo "📦 Starting Backend Server..."
cd backend
npm start &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 3

# Start frontend
echo "🎨 Starting Frontend..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Start admin
echo "👨‍💼 Starting Admin Panel..."
cd admin
npm run dev &
ADMIN_PID=$!
cd ..

echo ""
echo "✅ All servers started!"
echo ""
echo "📍 Access your applications:"
echo "   Backend:  http://localhost:4000"
echo "   Frontend: http://localhost:5173"
echo "   Admin:    http://localhost:5174"
echo ""
echo "🔑 Admin Login:"
echo "   Email:    admin@example.com"
echo "   Password: greatstack123"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for user interrupt
wait
