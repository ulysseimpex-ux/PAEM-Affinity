# Structure du projet — Humbble

Humbble est une application de rencontre (dating app) open source, alternative à Bumble. Elle est construite avec **React Native** + **Expo** (via **Expo Router** pour la navigation par fichiers), en **TypeScript**, et utilise **Appwrite** comme backend (authentification, base de données).

## Vue d'ensemble des dossiers principaux

```
.
├── app/            → Écrans et navigation (Expo Router)
├── components/      → Composants UI réutilisables
├── constants/        → Valeurs fixes (couleurs, config Appwrite)
├── hooks/           → Hooks React personnalisés
├── DB/              → Données/mocks liés à la base de données
├── assets/          → Images, polices
├── scripts/         → Scripts utilitaires (setup, reset)
├── android/         → Projet natif Android (généré par Expo)
├── ios/             → Projet natif iOS (généré par Expo)
└── .github/         → Templates GitHub (issues, contribution)
```

---

## `app/` — Écrans et navigation

C'est le cœur de l'application. Expo Router utilise le **système de fichiers comme routeur** : chaque fichier `.tsx` devient automatiquement un écran/une route.

- **`app/_layout.tsx`** : layout racine de l'app. Définit le thème (clair/sombre), charge les polices, gère le splash screen, et déclare la pile de navigation principale (`Stack`) avec les routes de haut niveau : les onglets `(tabs)`, les écrans d'authentification, etc.
- **`app/auth/`** : écrans d'authentification
  - `signin.tsx` — écran de connexion
  - `signup.tsx` — écran d'inscription
  (ajoutés récemment, utilisent Appwrite comme backend de démonstration)
- **`app/(tabs)/`** : groupe de routes affichées dans la barre d'onglets en bas de l'écran (dossier entre parenthèses = groupe de routes qui n'apparaît pas dans l'URL)
  - `_layout.tsx` — configuration de la barre d'onglets
  - `index.tsx` — écran d'accueil (découverte de profils / swipe)
  - `discover.tsx` — écran de découverte
  - `people.tsx` — liste des personnes/matches
  - `profile.tsx` — écran de profil utilisateur
  - `(chats)/` — sous-groupe de routes pour la messagerie
    - `index.tsx` — liste des conversations
    - `chatScreen.tsx` — écran d'une conversation
    - `_layout.tsx` — layout de la section chat
- **`app/charscreenf.tsx`** : écran additionnel (fiche/carte de personnage ou profil détaillé)
- **`app/+not-found.tsx`** : écran affiché quand une route n'existe pas (404)

---

## `components/` — Composants UI réutilisables

Composants React utilisés à travers plusieurs écrans :

- `Avatar.tsx` — affichage d'avatar utilisateur
- `Button.jsx` — bouton générique
- `Header.tsx` — en-tête d'écran
- `PeopleCard.tsx` — carte pour afficher un profil dans la liste/le swiper
- `UserCard.tsx` — carte utilisateur
- `ThemedText.tsx` / `ThemedView.tsx` — versions de `Text`/`View` qui s'adaptent au thème clair/sombre
- `ParallaxScrollView.tsx` — scroll avec effet parallax (utilisé sur les écrans de détail)
- `Collapsible.tsx` — section repliable/dépliable
- `HelloWave.tsx`, `ExternalLink.tsx`, `HapticTab.tsx` — composants utilitaires divers (venant du template Expo par défaut)
- `components/ui/` — composants liés à l'UI système (icônes, fond de la tab bar), avec variantes spécifiques iOS (`.ios.tsx`)
- `components/__tests__/` — tests unitaires (Jest) des composants, avec des snapshots

---

## `constants/` — Valeurs de configuration fixes

- `Colors.ts` — palette de couleurs de l'app (thème clair/sombre)
- `appwrite.ts` — configuration du client Appwrite (endpoint, ID de projet) ; sert de point d'entrée pour l'authentification et la base de données

## `hooks/` — Hooks React personnalisés

- `useColorScheme.ts` (+ variante `.web.ts`) — détecte le thème clair/sombre du système
- `useThemeColor.ts` — retourne la bonne couleur selon le thème actif

## `DB/`

- `userDB.tsx` — données mockées (utilisateurs suggérés) utilisées pour simuler une base de données avant/à côté de l'intégration Appwrite

## `assets/`

- `fonts/` — polices personnalisées (ex. SpaceMono)
- `images/` — icônes de l'app, images du splash screen, images d'illustration (dont les visuels des écrans de connexion/inscription)

## `scripts/`

- `reset-project.js` — script utilitaire pour réinitialiser le projet à un état "vierge" (fourni par le template Expo)

## `android/` et `ios/`

Projets natifs générés par Expo (via `expo prebuild`) permettant de compiler l'application en application native Android/iOS. Ils ne sont généralement pas modifiés à la main sauf besoin spécifique (permissions, configuration native, etc.).

## `.github/`

Fichiers de gouvernance du dépôt open source : templates pour les issues (bug report, feature request), utilisés par la communauté de contributeurs.

## Fichiers à la racine

- `app.json` — configuration Expo (nom de l'app, icônes, splash screen, plugins)
- `package.json` — dépendances et scripts npm (`start`, `android`, `ios`, `web`, `test`, `lint`)
- `tsconfig.json` — configuration TypeScript
- `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `LICENSE` — documentation du projet open source

---

## Stack technique résumée

| Élément | Technologie |
|---|---|
| Framework mobile | React Native (0.76) via Expo (~52) |
| Navigation | Expo Router (basé sur le système de fichiers) |
| Langage | TypeScript |
| Backend / Auth / DB | Appwrite |
| Tests | Jest + jest-expo |
| Animation/gestes | react-native-reanimated, react-native-gesture-handler, react-native-deck-swiper (pour le swipe de profils) |
