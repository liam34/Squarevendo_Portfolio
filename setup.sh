#!/bin/bash
# Quick setup script for Squarevendo Portfolio

echo "🚀 Squarevendo Portfolio - Astro Setup"
echo "======================================"
echo ""

# Check Node version
NODE_VERSION=$(node -v)
echo "✓ Node.js version: $NODE_VERSION"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎉 Ready to start development!"
echo ""
echo "Commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run preview - Preview production build"
echo ""
echo "Visit http://localhost:3000 when running npm run dev"
echo ""
