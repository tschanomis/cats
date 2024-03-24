# Étape 1 : Utiliser une image Node.js pour construire l'application
FROM node:alpine AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances du projet
RUN npm install

# Construire l'application
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour exécuter l'application en production
FROM nginx:alpine

# Copier les fichiers de build de l'étape précédente dans l'image finale
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port sur lequel l'application s'exécute (facultatif si vous n'en avez pas besoin)
EXPOSE 80

# Commande pour exécuter le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
