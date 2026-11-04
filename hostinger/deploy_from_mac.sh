#!/usr/bin/env bash
# Quick deployment script to sync dist/ from local Mac to Hostinger VPS
# Usage: bash hostinger/deploy_from_mac.sh [VPS_IP]

set -e

VPS_IP="${1:-187.127.157.53}"
REMOTE_USER="root"
REMOTE_DIR="/var/www/pavitrani/dist/"

echo "=========================================================="
echo "  Deploying Pavitrani Jewellers to Hostinger VPS"
echo "  Target: $REMOTE_USER@$VPS_IP:$REMOTE_DIR"
echo "=========================================================="

echo "--> Building production assets with Vite..."
npm run build

echo "--> Uploading dist files to VPS..."
rsync -avz --delete dist/ "$REMOTE_USER@$VPS_IP:$REMOTE_DIR"

echo "--> Reloading Nginx on VPS..."
ssh "$REMOTE_USER@$VPS_IP" "systemctl reload nginx"

echo "=========================================================="
echo "  Deployment Complete! Live at https://pavitrani.com"
echo "=========================================================="
