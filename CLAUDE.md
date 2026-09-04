# CLAUDE.md — Contexte permanent du projet Humbble

Ce fichier fournit à Claude Code le contexte nécessaire pour travailler efficacement sur ce dépôt. Il est chargé automatiquement au début de chaque session.

## Le projet

**Humbble** est une application de rencontre (dating app) open source, alternative à Bumble : privacy-first, sans tracking, cross-platform (Web, Android, iOS).

## Stack technique

| Élément | Technologie |
|---|---|
| Framework mobile | React Native `0.76` via Expo `~52` |
| Navigation | Expo Router (routing basé sur le système de fichiers) |
| Langage | TypeScript |
| Backend / Auth / DB | Appwrite |
| Tests | Jest + jest-expo |
| Animations / gestes | react-native-reanimated, react-native-gesture-handler, react-native-deck-swiper |

## Structure des dossiers

```
app/            → Écrans et navigation (Expo Router : un fichier = une route)
  ├─ (tabs)/    → Onglets principaux (accueil, discover, people, profile, chats)
  └─ auth/      → Écrans de connexion / inscription
components/     → Composants UI réutilisables (cartes, boutons, thème, etc.)
constants/      → Valeurs fixes (Colors.ts, config Appwrite)
hooks/          → Hooks personnalisés (thème clair/sombre)
DB/             → Données mock (ex: DB/userDB.tsx — profils utilisateurs de démo)
assets/         → Images, polices
scripts/        → Scripts utilitaires (reset-project.js)
android/, ios/  → Projets natifs générés par Expo (`expo prebuild`)
memory/         → Mémoire persistante du projet pour Claude Code (voir plus bas)
```

Une explication plus détaillée est disponible dans `explications/structure-du-projet.md`.

## Conventions de code

- TypeScript partout où c'est possible (`.tsx`/`.ts`), sauf composants legacy en `.jsx`.
- Composants fonctionnels avec hooks, pas de classes.
- Un écran = un fichier dans `app/`, respectant les conventions de routing d'Expo Router (dossiers entre parenthèses = groupes de routes, `_layout.tsx` = layout d'un groupe).
- Les composants UI réutilisables vivent dans `components/`, pas directement dans `app/`.
- Utiliser `ThemedText` / `ThemedView` plutôt que `Text`/`View` bruts pour respecter le thème clair/sombre.
- Ne pas committer de clés/secrets Appwrite réels dans `constants/appwrite.ts` — utiliser des variables d'environnement ou des valeurs placeholder (`YOUR_APPWRITE_ENDPOINT`, `YOUR_PROJECT_ID`).
- Pas d'abstraction prématurée : préférer du code simple et direct, cohérent avec le style existant du fichier édité.

## Commandes utiles

```sh
npm install          # installer les dépendances
npm start             # lancer Expo (choix de la plateforme au menu)
npm run android       # lancer sur Android
npm run ios           # lancer sur iOS
npm run web           # lancer sur le web
npm test              # lancer les tests Jest
npm run lint          # linter le projet (expo lint)
npm run prebuild       # générer/mettre à jour les projets natifs android/ios
```

---

## ⚠️ Gestion de mémoire du projet — À LIRE IMPÉRATIVEMENT

Ce projet utilise un système de mémoire persistante dans le dossier `memory/` pour assurer la continuité du travail entre les sessions Claude Code.

### Au DÉBUT de chaque session

Avant de commencer à travailler, **lire systématiquement** :
1. `memory/handoff.md` — pour connaître l'état actuel du projet et les prochaines étapes prévues.
2. `memory/bugs.md` — pour connaître les bugs déjà identifiés (ouverts ou résolus) et éviter de les réintroduire ou de perdre du temps à les redécouvrir.

Ces deux fichiers permettent de reprendre le travail exactement là où il a été laissé, sans redemander de contexte à l'utilisateur.

### À la FIN de chaque session

Avant de terminer, **mettre à jour** :
1. `memory/session-log.md` — ajouter une nouvelle entrée datée résumant ce qui a été fait (changements, fichiers modifiés).
2. `memory/handoff.md` — mettre à jour l'état actuel du projet et les prochaines étapes, pour que la session suivante puisse reprendre le fil.

Si des bugs ont été découverts ou corrigés pendant la session, mettre aussi à jour `memory/bugs.md`. Si une décision technique notable a été prise (ou un piège évité), l'ajouter à `memory/lessons.md`.

### Fichiers du dossier `memory/`

| Fichier | Rôle |
|---|---|
| `memory/session-log.md` | Journal chronologique des sessions (date, résumé, fichiers modifiés) |
| `memory/handoff.md` | État actuel du projet + prochaines étapes prévues |
| `memory/bugs.md` | Bugs identifiés, avec statut ouvert/résolu |
| `memory/lessons.md` | Leçons apprises, pièges évités, décisions techniques et leur justification |
