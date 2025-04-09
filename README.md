# Projet Test pour TX Studio

Ce dépôt contient un projet test réalisé pour l'entreprise TX Studio. Il s'agit d'une application Next.js développée avec Node.js 22.

[https://test-tx-studio.vercel.app/](https://test-tx-studio.vercel.app/)

## Table des Matières

- [À propos du projet](#à-propos-du-projet)
- [Installation](#installation)
  - [Installer Node.js 22](#installer-nodejs-22)
    - [Windows](#windows)
    - [Mac](#mac)
    - [Linux](#linux)
  - [Utiliser un Dev Container](#utiliser-un-dev-container)
- [Lancer le projet](#lancer-le-projet)

## À propos du projet

Ce projet est une démonstration d'une application Next.js. Il a été développé avec Node.js 22 et inclut des fonctionnalités comme un tableau de bord, des informations financières et la gestion des transactions.

## Installation

Pour exécuter ce projet en local, vous devez installer Node.js 22. Vous pouvez l'installer manuellement ou utiliser un Dev Container pour un environnement de développement préconfiguré.

### Installer Node.js 22

#### Windows

1. Téléchargez l'installateur de Node.js 22 depuis le [site officiel de Node.js](https://nodejs.org/).
2. Lancez l'installateur et suivez les instructions.
3. Vérifiez l'installation en exécutant la commande suivante dans un terminal :

   ```bash
   node -v
   ```

Cela devrait afficher une version comme v22.x.x.

Alternativement, vous pouvez utiliser nvm (Node Version Manager) :

1. Installez nvm-windows depuis le dépôt GitHub de [nvm-windows](https://github.com/coreybutler/nvm-windows).
2. Ouvrez un terminal et exécutez :

   ```bash
    nvm install 22
    nvm use 22
   ```

3. Vérifiez l'installation en exécutant la commande suivante dans un terminal :

   ```bash
   node -v
   ```

Cela devrait afficher une version comme v22.x.x.

#### Mac/Linux

1. Installez nvm en suivant les instructions sur le dépôt GitHub de [nvm](https://github.com/nvm-sh/nvm).

2. Ouvrez un terminal et exécutez :

   ```bash
    nvm install 22
    nvm use 22
   ```

3. Vérifiez l'installation en exécutant la commande suivante dans un terminal :

   ```bash
   node -v
   ```

Cela devrait afficher une version comme v22.x.x.

## Utiliser un Dev Container

Si vous préférez un environnement de développement préconfiguré avec Docker, vous pouvez utiliser un Dev Container avec Visual Studio Code.

#### Remarque

Les Dev Containers sont également disponibles pour les IDE JetBrains (comme WebStorm ou IntelliJ IDEA) via des plugins spécifiques. Cependant, ce guide se concentre uniquement sur l'utilisation avec Visual Studio Code.

#### Prérequis supplémentaires pour les Dev Containers

1. Assurez-vous que Docker Desktop (et WSL sur Windows) est installé et configuré correctement.

2. Sur Windows il est recommandé de cloner le projet directement dans le système de fichiers WSL. Cela améliore considérablement les performances lors de l'utilisation de Docker et des Dev Containers.

#### Etape

1. Ouvrez le projet dans VS Code.

2. Installez l'extension Dev Containers :

3. Ouvrez la vue Extensions dans VS Code (Ctrl+Shift+X ou Cmd+Shift+X sur Mac).
   Recherchez [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) et installez l'extension développée par Microsoft.

4. Lorsque vous y êtes invité, cliquez sur Reopen in Container.
    Si vous n'êtes pas invité, ouvrez la palette de commandes (Ctrl +Shift+P ou Cmd+Shift+P sur Mac) et sélectionnez Dev Containers: Reopen in Container.

5. Attendez que le conteneur soit construit et démarré. Cela peut prendre quelques minutes lors de la première exécution.

## Lancer le projet

Une fois Node.js 22 installé ou le Dev Container configuré, suivez ces étapes pour lancer le projet :

1. Installez les dépendances :

   ```bash
   npm install
   ```

2. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

3. Ouvrez votre navigateur et accédez à http://localhost:3000.
