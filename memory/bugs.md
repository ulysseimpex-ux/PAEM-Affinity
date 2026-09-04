# Bugs connus — Humbble

Liste des bugs et points d'attention identifiés lors des sessions de travail. Statut : `ouvert` ou `résolu`. Mettre à jour ce fichier dès qu'un bug est découvert ou corrigé.

---

## Ouverts

### 2. Configuration Appwrite non finalisée
- **Statut :** ouvert
- **Description :** `constants/appwrite.ts` contient des valeurs placeholder (`YOUR_APPWRITE_ENDPOINT`, `YOUR_PROJECT_ID`). L'authentification (`app/auth/signin.tsx`, `app/auth/signup.tsx`) ne peut donc pas fonctionner tant qu'un vrai projet Appwrite n'est pas branché.
- **Impact :** Bloquant pour tester le flux d'authentification réel, mais sans impact sur le reste de l'app qui fonctionne avec des données mock.
- **Découvert le :** 2026-09-04, lors de la lecture de `constants/appwrite.ts`.

### 3. Chevauchement des `id` entre tableaux dans DB/userDB.tsx
- **Statut :** ouvert (risque potentiel, pas un bug actif)
- **Description :** Les tableaux `SuggestedUsers`, `matchwithgoalData` et `RECOMMENDATION_USER` ont chacun leur propre séquence d'`id` qui se chevauche (ex. `id: 1` existe dans plusieurs tableaux). Sans conséquence tant que les tableaux restent consommés séparément (ex. comme `key` dans des listes distinctes), mais deviendrait problématique s'ils étaient un jour fusionnés dans une seule liste ou une seule base de données.
- **Impact :** Aucun impact actuel constaté ; à surveiller si les données mock sont un jour fusionnées ou migrées vers Appwrite.
- **Découvert le :** 2026-09-04, lors de l'ajout de 30 profils fictifs dans `DB/userDB.tsx`.

---

## Résolus

### 1. Typo dans README.md — commande Android
- **Statut :** résolu
- **Description :** Dans la section "Running the Project" du `README.md`, la commande Android était écrite `npn run android` au lieu de `npm run android`.
- **Impact :** Faible — induisait en erreur un nouveau contributeur qui copiait-collait la commande.
- **Découvert le :** 2026-09-04, lors de la lecture du README pour documenter la structure du projet.
- **Résolu le :** 2026-09-04 — correction directe de la typo dans `README.md`.
