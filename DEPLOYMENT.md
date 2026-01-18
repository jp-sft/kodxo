# Guide de Déploiement KODXO Landing Page

## 📋 Prérequis

- Node.js 20 ou supérieur
- Docker (pour le déploiement conteneurisé)
- npm ou yarn

## 🚀 Déploiement Local

### Installation

```bash
# Cloner le repository
git clone https://github.com/jp-sft/kodxo.git
cd kodxo

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build de Production

```bash
# Créer le build de production
npm run build

# Lancer le serveur de production
npm start
```

## 🐳 Déploiement avec Docker

### Construction de l'Image

```bash
# Construire l'image Docker
docker build -t kodxo-landing:latest .

# Lancer le conteneur
docker run -d -p 3000:3000 --name kodxo kodxo-landing:latest
```

### Vérification

```bash
# Vérifier que le conteneur fonctionne
docker ps

# Voir les logs
docker logs kodxo

# Arrêter le conteneur
docker stop kodxo

# Redémarrer le conteneur
docker start kodxo
```

## 🌐 Déploiement sur VPS

### Option 1: Avec Docker

```bash
# Sur votre VPS
git clone https://github.com/jp-sft/kodxo.git
cd kodxo

# Construire et lancer
docker build -t kodxo-landing .
docker run -d -p 80:3000 --name kodxo --restart always kodxo-landing
```

### Option 2: Avec PM2

```bash
# Installer PM2 globalement
npm install -g pm2

# Build de production
npm run build

# Lancer avec PM2
pm2 start npm --name "kodxo" -- start

# Sauvegarder la configuration PM2
pm2 save
pm2 startup
```

## 🔧 Configuration Nginx (Optionnel)

Si vous utilisez Nginx comme reverse proxy:

```nginx
server {
    listen 80;
    server_name kodxo.com www.kodxo.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## ⚙️ Configuration Avant Production

### 1. Remplacer les Informations de Contact

Dans `components/WhatsAppButton.tsx` et `components/Contact.tsx`:

```typescript
// Remplacer
href="https://wa.me/237000000000"
// Par votre vrai numéro (format international sans +)
href="https://wa.me/237XXXXXXXXX"
```

Dans `components/Contact.tsx`:

```typescript
// Remplacer
href="mailto:contact@kodxo.com"
// Par votre vraie adresse email
href="mailto:votre-email@kodxo.com"
```

### 2. Ajouter les Liens des Réseaux Sociaux

Dans `components/Footer.tsx`:

```typescript
// Remplacer
href="#"
// Par vos vrais liens LinkedIn et Twitter
href="https://www.linkedin.com/company/kodxo"
href="https://twitter.com/kodxo"
```

### 3. Variables d'Environnement (Optionnel)

Créer un fichier `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=237XXXXXXXXX
NEXT_PUBLIC_EMAIL=contact@kodxo.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/kodxo
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/kodxo
```

## 📊 Monitoring et Maintenance

### Vérifier les Performances

```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse http://votre-domaine.com --view
```

### Logs

```bash
# Avec Docker
docker logs -f kodxo

# Avec PM2
pm2 logs kodxo
```

## 🔒 SSL/HTTPS

Pour activer HTTPS avec Let's Encrypt:

```bash
# Installer certbot
sudo apt install certbot python3-certbot-nginx

# Obtenir un certificat SSL
sudo certbot --nginx -d kodxo.com -d www.kodxo.com
```

## 🆘 Dépannage

### Le site ne démarre pas

```bash
# Vérifier les logs
docker logs kodxo
# ou
pm2 logs kodxo

# Vérifier que le port n'est pas déjà utilisé
sudo lsof -i :3000
```

### Problèmes de build

```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

## 📞 Support

Pour toute question technique, référez-vous à:
- Documentation Next.js: https://nextjs.org/docs
- Documentation Tailwind CSS: https://tailwindcss.com/docs
- Documentation Framer Motion: https://www.framer.com/motion/
