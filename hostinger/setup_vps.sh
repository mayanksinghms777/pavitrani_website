#!/usr/bin/env bash
# Automated Setup Script for Pavitrani Jewellers on Hostinger VPS (Ubuntu/Debian)
# Run on the VPS as root: sudo bash setup_vps.sh

set -e

echo "=========================================================="
echo "  Setting up Pavitrani Jewellers on Hostinger VPS"
echo "  Domain: pavitrani.com / www.pavitrani.com"
echo "=========================================================="

# 1. Update packages
echo "--> Updating system packages..."
apt update -y

# 2. Install Nginx, Certbot & Utilities
echo "--> Installing Nginx, Certbot, and rsync..."
apt install -y nginx certbot python3-certbot-nginx rsync ufw curl

# 3. Create Web Directory and Build
echo "--> Creating web root at /var/www/pavitrani/dist..."
mkdir -p /var/www/pavitrani/dist

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

if [ -f "$REPO_ROOT/package.json" ]; then
    echo "--> Detected repository source at $REPO_ROOT. Checking Node.js & building bundle..."
    if ! command -v node >/dev/null 2>&1; then
        echo "--> Installing Node.js 20 LTS..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
        apt install -y nodejs
    fi
    echo "--> Building production assets..."
    cd "$REPO_ROOT"
    npm install
    npm run build
    cp -r "$REPO_ROOT/dist/"* /var/www/pavitrani/dist/
    cd "$SCRIPT_DIR"
fi

chown -R www-data:www-data /var/www/pavitrani
chmod -R 755 /var/www/pavitrani

# 4. Copy Nginx Site Configuration
echo "--> Applying Nginx site configuration..."
CONF_PATH="$SCRIPT_DIR/pavitrani.com.conf"
if [ -f "$CONF_PATH" ]; then
    cp "$CONF_PATH" /etc/nginx/sites-available/pavitrani.com
elif [ -f "pavitrani.com.conf" ]; then
    cp pavitrani.com.conf /etc/nginx/sites-available/pavitrani.com
else
    cat << 'EOF' > /etc/nginx/sites-available/pavitrani.com
server {
    listen 80;
    listen [::]:80;
    server_name pavitrani.com www.pavitrani.com;

    root /var/www/pavitrani/dist;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;

    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location ~* \.(webp|png|jpg|jpeg|gif|ico|svg|css|js|woff2|woff|ttf)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
        access_log off;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
fi

ln -sf /etc/nginx/sites-available/pavitrani.com /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default || true

nginx -t
systemctl reload nginx

# 5. Open Firewall Ports
echo "--> Configuring UFW Firewall for HTTP, HTTPS & SSH..."
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw --force enable || true

# 6. Install SSL via Certbot (Let's Encrypt)
echo "--> Requesting SSL Certificate for pavitrani.com..."
certbot --nginx -d pavitrani.com -d www.pavitrani.com --non-interactive --agree-tos -m mayanksinghms777@gmail.com --redirect || {
    echo "Notice: SSL request requires domain DNS A-record to be pointed to this VPS IP first."
}

echo "=========================================================="
echo "  Setup Complete! Your VPS is ready to serve pavitrani.com"
echo "=========================================================="
