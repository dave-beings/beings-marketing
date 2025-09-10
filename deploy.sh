#!/bin/bash

echo "🚀 Deploying Beings Marketing Knowledge Base..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in the 'dist' folder"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Netlify: Drag and drop the 'dist' folder to netlify.com/drop"
    echo "2. Vercel: Run 'npx vercel' in this directory"
    echo "3. GitHub Pages: Push to GitHub and enable Pages in repo settings"
    echo "4. Surge.sh: Run 'npx surge dist' to deploy to surge.sh"
    echo ""
    echo "📖 For local preview: npm run preview"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
