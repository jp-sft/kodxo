#!/bin/bash

# KODXO Landing Page - Quick Start Script
# This script helps set up and run the project

set -e

echo "🚀 KODXO Landing Page Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local and add your WhatsApp number!"
    echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Ask what to do
echo "What would you like to do?"
echo "1) Run in development mode (npm run dev)"
echo "2) Build for production (npm run build)"
echo "3) Build and start production server"
echo "4) Build Docker image"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🔧 Starting development server..."
        echo "Opening http://localhost:3000"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "🏗️  Building for production..."
        npm run build
        echo ""
        echo "✅ Build complete! Run 'npm start' to test production build."
        ;;
    3)
        echo ""
        echo "🏗️  Building for production..."
        npm run build
        echo ""
        echo "🚀 Starting production server..."
        echo "Opening http://localhost:3000"
        npm start
        ;;
    4)
        echo ""
        echo "🐳 Building Docker image..."
        docker build -t kodxo-landing .
        echo ""
        echo "✅ Docker image built successfully!"
        echo "Run: docker run -p 3000:3000 kodxo-landing"
        echo "Or:  docker-compose up -d"
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac
