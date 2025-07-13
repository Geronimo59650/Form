# Version Statique - La Caracola Salento

## 🆓 Hébergement 100% Gratuit sur GitHub Pages

Cette version statique de votre formulaire peut être hébergée gratuitement sur GitHub Pages sans aucun coût.

## 📋 Configuration Requise

### 1. Compte EmailJS (Gratuit)
Pour que les emails fonctionnent, vous devez créer un compte gratuit sur [EmailJS](https://www.emailjs.com/) :

1. Créez un compte gratuit sur emailjs.com
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Récupérez vos identifiants :
   - Public Key
   - Service ID  
   - Template ID

### 2. Mise à jour des identifiants
Dans le fichier `script.js`, remplacez :
```javascript
// Ligne 105
emailjs.init("YOUR_PUBLIC_KEY"); // Remplacez par votre clé publique

// Ligne 260
to_email: 'votre-email@hotel.com', // Remplacez par votre email

// Ligne 266  
return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams);
```

## 🚀 Déploiement sur GitHub Pages

### Option A : Interface GitHub (Recommandée)

1. **Créer un repository GitHub**
   - Allez sur github.com
   - Cliquez "New repository" 
   - Nommez-le "la-caracola-form"
   - Cochez "Public"
   - Cliquez "Create repository"

2. **Uploader les fichiers**
   - Cliquez "uploading an existing file"
   - Glissez-déposez les 3 fichiers :
     - `index.html`
     - `script.js` 
     - `README.md`
   - Écrivez "Initial commit" 
   - Cliquez "Commit changes"

3. **Activer GitHub Pages**
   - Allez dans Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Cliquez "Save"

4. **Votre site sera disponible à :**
   `https://votrenom.github.io/la-caracola-form/`

### Option B : GitHub CLI (Avancé)

```bash
# Créer le repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/la-caracola-form.git
git push -u origin main

# Activer Pages via les paramètres GitHub
```

## 📱 Fonctionnalités Incluses

✅ **Multilingue** - Français, Espagnol, Anglais  
✅ **Responsive** - Optimisé mobile  
✅ **Validation** - Contrôles automatiques  
✅ **Email automatique** - Via EmailJS  
✅ **WhatsApp** - Génération automatique des messages  
✅ **Transferts** - Tarifs inclus  
✅ **Hébergement gratuit** - GitHub Pages  

## 🔗 Intégration sur votre site

### Code iframe pour www.lacaracolahotel.com :
```html
<iframe 
  src="https://votrenom.github.io/la-caracola-form/" 
  width="100%" 
  height="800px" 
  frameborder="0"
  title="Formulaire d'enregistrement La Caracola">
</iframe>
```

### Ou redirection directe :
```html
<a href="https://votrenom.github.io/la-caracola-form/" 
   class="btn btn-primary">
   Formulaire d'Enregistrement
</a>
```

## 📲 Partage WhatsApp

URL directe pour partager :
```
https://votrenom.github.io/la-caracola-form/
```

Message WhatsApp préparé :
```
🏨 Formulaire d'Enregistrement - La Caracola Salento

Bonjour ! Pour faciliter votre arrivée, merci de remplir notre formulaire en ligne :

🔗 https://votrenom.github.io/la-caracola-form/

✅ Disponible en 3 langues
🚗 Service de transfert inclus  
📱 Optimisé mobile

Merci et à bientôt à Salento ! 🌴
```

## 🛠️ Support Technique

- **Hébergement :** Gratuit à vie sur GitHub Pages
- **Emails :** 200 emails/mois gratuits avec EmailJS
- **Maintenance :** Aucune requise, fonctionne automatiquement
- **SSL :** Certificat HTTPS automatique

## 📞 Contact

Les réservations seront automatiquement envoyées :
- **Email :** À l'adresse que vous configurez
- **WhatsApp :** Lien direct vers +33 669708171