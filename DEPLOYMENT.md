# Guide de Déploiement KODXO

## 🚀 Options de Déploiement

### Option 1: Vercel (Recommandé - Le plus simple)

Vercel est la plateforme créée par l'équipe Next.js, offrant un déploiement gratuit optimal.

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Connecter votre dépôt GitHub**
   - Cliquez sur "New Project"
   - Importez ce repository
   - Vercel détectera automatiquement Next.js

3. **Configurer les variables d'environnement**
   - Dans les paramètres du projet
   - Ajoutez: `NEXT_PUBLIC_WHATSAPP_NUMBER=237XXXXXXXXX`

4. **Déployer**
   - Cliquez sur "Deploy"
   - Votre site sera en ligne en ~2 minutes
   - URL: `https://votre-projet.vercel.app`

**Avantages:**
- Déploiement automatique à chaque push
- SSL/HTTPS gratuit
- CDN mondial
- Aucune configuration serveur

---

### Option 2: Docker sur VPS

Pour un déploiement sur votre propre serveur.

#### Prérequis
- VPS avec Docker installé (Ubuntu 22.04 recommandé)
- Accès SSH au serveur
- Nom de domaine pointant vers le VPS (optionnel)

#### Étapes

1. **Cloner le repository sur le serveur**
```bash
ssh user@your-vps-ip
git clone https://github.com/votre-compte/kodxo.git
cd kodxo
```

2. **Créer le fichier .env**
```bash
cp .env.example .env.local
nano .env.local  # Modifier le numéro WhatsApp
```

3. **Builder l'image Docker**
```bash
docker build -t kodxo-landing .
```

**OU utiliser Docker Compose (plus simple):**
```bash
docker-compose up -d
```

4. **Lancer le container (si vous n'utilisez pas docker-compose)**
```bash
docker run -d \
  --name kodxo-web \
  -p 3000:3000 \
  --env-file .env.local \
  --restart unless-stopped \
  kodxo-landing
```

5. **Vérifier que ça fonctionne**
```bash
curl http://localhost:3000
```

#### Configuration Nginx (Reverse Proxy)

Si vous voulez utiliser un nom de domaine avec HTTPS:

```nginx
server {
    listen 80;
    server_name kodxo.cm www.kodxo.cm;

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

Ensuite, installer SSL avec Certbot:
```bash
sudo certbot --nginx -d kodxo.cm -d www.kodxo.cm
```

---

### Option 3: Netlify

Alternative à Vercel, également gratuite.

1. Connectez-vous sur [Netlify](https://www.netlify.com)
2. "Add new site" → "Import from Git"
3. Sélectionnez votre repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Variables d'environnement:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
6. Deploy!

---

## 📊 Checklist Avant Déploiement

- [ ] Remplacer le numéro WhatsApp dans `.env.local`
- [ ] Configurer l'intégration du formulaire (Formspree/EmailJS/n8n)
- [ ] Tester le build localement: `npm run build && npm start`
- [ ] Vérifier la responsive sur mobile
- [ ] Tester tous les liens (WhatsApp, ancres, CTA)
- [ ] Configurer le domaine personnalisé
- [ ] Activer SSL/HTTPS
- [ ] Configurer Google Analytics (optionnel)

---

## 🔧 Mise à Jour du Site

### Vercel/Netlify
Simplement faire un `git push` sur la branche main.

### Docker sur VPS
```bash
cd kodxo
git pull

# Avec Docker Compose
docker-compose down
docker-compose build
docker-compose up -d

# OU avec Docker classique
docker stop kodxo-web
docker rm kodxo-web
docker build -t kodxo-landing .
docker run -d \
  --name kodxo-web \
  -p 3000:3000 \
  --env-file .env.local \
  --restart unless-stopped \
  kodxo-landing
```

---

## 🆘 Dépannage

### Le site ne charge pas
```bash
# Vérifier les logs Docker
docker logs kodxo-web

# Vérifier que le port est ouvert
netstat -tulpn | grep 3000
```

### Build qui échoue
```bash
# Nettoyer et rebuilder
rm -rf .next node_modules
npm install
npm run build
```

### WhatsApp ne fonctionne pas
Vérifiez le format du numéro: `237XXXXXXXXX` (sans espaces, sans +)

---

## 📞 Support

Pour toute question technique:
- Email: tech@kodxo.cm
- WhatsApp: +237 XXX XXX XXX
