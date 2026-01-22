# 🌱 Daily Routine Tracker

## 📌 Contexte du projet

Cette application web est développée pour une startup spécialisée dans le **bien-être et la productivité**. Elle permet aux utilisateurs de suivre leurs **routines quotidiennes**, d’améliorer leurs habitudes et de visualiser leur progression individuelle et collective.

L’objectif principal est de créer une application **frontend moderne avec React**, utilisant le **localStorage** pour la persistance des données, sans backend.

---

## 🎯 Objectifs

* Permettre aux utilisateurs de créer et gérer leurs routines quotidiennes
* Marquer les routines comme accomplies chaque jour
* Suivre la progression individuelle (hebdomadaire)
* Visualiser la progression globale d’un groupe (famille, amis, colocataires)
* Manipuler le state React et le localStorage de manière synchronisée

---

## 🛠️ Technologies utilisées

* **React** (Hooks : useState, useEffect)
* **JavaScript (ES6+)**
* **HTML5 / CSS3**
* **localStorage** pour la persistance des données
* **Vite** 

---

## 👥 User Stories

* **US1 – Affichage des routines** : Voir toutes les routines chargées depuis le localStorage
* **US2 – Ajouter une routine** : Ajouter une nouvelle routine pour un utilisateur
* **US3 – Supprimer une routine** : Supprimer une routine non pertinente
* **US4 – Marquer comme accomplie** : Marquer une routine comme accomplie pour la journée

---

## ⚙️ Fonctionnalités principales

* Ajouter une routine pour un utilisateur
* Supprimer une routine
* Marquer une routine comme accomplie pour la journée
* Calcul automatique de la progression hebdomadaire par utilisateur

---

## 💾 Gestion des données (localStorage)

* Toutes les données sont stockées dans le **localStorage**
* Chargement initial des données au montage de l’application
* Chaque action (ajout, suppression, accomplissement) :

  * Met à jour le state React
  * Met à jour le localStorage immédiatement

---

## 🎬 Démo

<img width="1361" height="685" alt="Capture2" src="https://github.com/user-attachments/assets/5c1fb271-d9f8-4981-a263-cb4cc82144f1" />

---

## 🚀 Installation et lancement

1. Cloner le projet
2. Installer les dépendances : `npm install`
3. Lancer l’application : `npm run dev`
4. Ouvrir dans le navigateur : `http://localhost:5173`

---


## 👩‍💻 Auteur

**Khadija Araja**
Développeuse Frontend React

---

## 🔗 Liens utiles

- <a href="https://trello.com/invite/b/68c7e6025d06c47c1c721da9/ATTI308f4ae69563413143ce832be786320aFE6C0A9E/daily" target="_blank" style="text-decoration:none;">
  <kbd>📋 Voir le Planning Trello</kbd>
</a>

- <a href="https://www.figma.com/design/BCw7UgcmKlzpW8n8Iv17Gz/Untitled?node-id=0-1&t=sbyqrTMI95UIQTqB-1" target="_blank" style="text-decoration:none;">
  <kbd>🎨 Maquettage Figma</kbd>
</a>
