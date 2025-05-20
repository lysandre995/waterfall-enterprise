#!/bin/bash

set -e

DIST_DIR="dist"
DEPLOY_BRANCH="gh-pages"
MAIN_BRANCH="main"
REMOTE_URL=""

# check if we are in a git repo
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: Not a git repository."
  exit 1
fi

# check remote origin
if ! git remote get-url origin > /dev/null 2>&1; then
  read -rp "Remote 'origin' not found. Enter remote URL: " REMOTE_URL
  git remote add origin "$REMOTE_URL"
  echo "Remote 'origin' added."
else
  REMOTE_URL=$(git remote get-url origin)
fi

# check if dist exists
if [ ! -d "$DIST_DIR" ]; then
  echo "Error: Directory '$DIST_DIR' not found. Please build the project first."
  exit 1
fi

# goes into dist
cd "$DIST_DIR"

# starts git
if [ ! -d ".git" ]; then
  git init
  git remote add origin "$REMOTE_URL"
  echo "Initialized git repository in $DIST_DIR"
fi

# check if gh-pages branch exists
if git show-ref --verify --quiet "refs/heads/$DEPLOY_BRANCH"; then
  git checkout "$DEPLOY_BRANCH"
else
  # starts from main
  if git ls-remote --heads origin "$DEPLOY_BRANCH" | grep "$DEPLOY_BRANCH" > /dev/null; then
    git checkout -b "$DEPLOY_BRANCH" "origin/$DEPLOY_BRANCH"
  else
    # create empty branch
    git checkout -b "$DEPLOY_BRANCH"
  fi
fi

# create CNAME file
echo "waterfall-enterprise.org" > CNAME
git add CNAME

# add and commits
git add --all
git commit -m "Deploy to $DEPLOY_BRANCH" --allow-empty

# push
git push origin "$DEPLOY_BRANCH" --force

# back to root
cd ..

echo "Deployment to $DEPLOY_BRANCH branch completed successfully."
