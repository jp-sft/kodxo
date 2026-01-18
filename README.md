# KODXO - Landing Page

Site vitrine professionnel pour KODXO, agence d'automatisation et IA basée à Yaoundé, Cameroun.

## 🚀 Technologies

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Déploiement:** Docker

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Builder pour production
npm run build

# Lancer en production
npm start
```

## 🐳 Docker

```bash
# Build l'image Docker
docker build -t kodxo-landing .

# Lancer le container
docker run -p 3000:3000 kodxo-landing
```

## 🎨 Design System

- **Background:** #0B1120 (Deep Night Blue)
- **Accent:** #EA580C (Copper Orange)
- **Text Primary:** #FFFFFF (White)
- **Text Secondary:** #94A3B8 (Slate Gray)
- **Font:** Montserrat (Google Fonts)

## 📱 Sections

1. **Header** - Navigation sticky avec glassmorphism
2. **Hero** - Section d'accueil avec CTA
3. **Problems** - 3 cartes des pain points
4. **Services** - Les 3 piliers (ERP, Automation, Dev)
5. **Tech Stack** - Logos des technologies
6. **Contact** - Formulaire d'audit gratuit
7. **Footer** - Copyright et liens
8. **WhatsApp** - Bouton flottant fixe

## 🌐 Configuration

### WhatsApp Button

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update the WhatsApp number in `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=237XXXXXXXXX
```

### Contact Form Integration

The contact form is ready to integrate with your preferred service. Choose one:

**Option 1: Formspree** (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Update `components/ContactSection.tsx` with the Formspree endpoint

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Set up your email service and template
3. Add credentials to `.env.local` and update the component

**Option 3: n8n Webhook**
1. Create a webhook workflow in n8n
2. Add the webhook URL to `.env.local`
3. Update the component to POST to the webhook

## 📄 License

© 2025 KODXO. Tous droits réservés.
