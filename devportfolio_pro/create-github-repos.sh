#!/bin/bash

# GitHub Repository Creation Script
# This script will help you create all 12 repositories for your portfolio projects

echo "🚀 Creating GitHub Repositories for Portfolio Projects"
echo "=============================================="

# Array of repository names
repos=(
    "ecommerce-analytics"
    "smart-task-manager"
    "sentiment-analysis"
    "finance-tracker"
    "ai-cms"
    "collaboration-platform"
    "smart-home-dashboard"
    "blockchain-supply-chain"
    "ml-deployment-platform"
    "weather-ml-model"
    "collaborative-whiteboard"
    "realtime-dashboard"
)

# GitHub username
GITHUB_USERNAME="shivaragula"

echo "📋 Repositories to create:"
for repo in "${repos[@]}"; do
    echo "  - $repo"
done

echo ""
echo "🔧 Prerequisites:"
echo "1. Make sure you have GitHub CLI installed: https://cli.github.com/"
echo "2. Login to GitHub CLI: gh auth login"
echo "3. Make sure you have git installed"
echo ""

read -p "Press Enter to continue or Ctrl+C to exit..."

# Create each repository
for repo in "${repos[@]}"; do
    echo ""
    echo "📁 Creating repository: $repo"
    echo "----------------------------------------"
    
    # Create local directory
    if [ ! -d "github-repos/$repo" ]; then
        echo "❌ Error: Directory github-repos/$repo not found!"
        echo "Please make sure the github-repos folder exists with all project folders."
        continue
    fi
    
    cd "github-repos/$repo"
    
    # Initialize git repository
    git init
    
    # Add all files
    git add .
    
    # Create initial commit
    git commit -m "Initial commit: Add $repo project with comprehensive documentation"
    
    # Create GitHub repository using GitHub CLI
    echo "Creating GitHub repository..."
    gh repo create "$GITHUB_USERNAME/$repo" --public --description "$(head -n 1 README.md | sed 's/# //')" --source=.
    
    # Push to GitHub
    git branch -M main
    git remote add origin "https://github.com/$GITHUB_USERNAME/$repo.git"
    git push -u origin main
    
    echo "✅ Successfully created: https://github.com/$GITHUB_USERNAME/$repo"
    
    # Go back to root directory
    cd ../..
    
    # Small delay to avoid rate limiting
    sleep 2
done

echo ""
echo "🎉 All repositories created successfully!"
echo ""
echo "📋 Your new repositories:"
for repo in "${repos[@]}"; do
    echo "  ✅ https://github.com/$GITHUB_USERNAME/$repo"
done

echo ""
echo "🔗 Next steps:"
echo "1. Visit each repository to verify everything looks correct"
echo "2. Add any additional files or code to each repository"
echo "3. Update repository descriptions and topics on GitHub"
echo "4. Consider adding GitHub Pages for project demos"
echo ""
echo "🚀 Your portfolio is now live on GitHub!"