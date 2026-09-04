# Handoff — État actuel du projet

Dernière mise à jour : 2026-09-04

## État actuel

- Le projet est un template Expo Router assez proche de l'état initial, avec les écrans principaux en place : onglets (accueil, discover, people, profile, chats) et écrans d'authentification (`signin.tsx`, `signup.tsx`) basés sur Appwrite.
- `constants/appwrite.ts` contient encore des valeurs placeholder (`YOUR_APPWRITE_ENDPOINT`, `YOUR_PROJECT_ID`) — l'intégration Appwrite n'est pas connectée à un vrai projet.
- `DB/userDB.tsx` contient désormais 3 tableaux de données mock enrichis (38 profils au total : `SuggestedUsers` ×18, `matchwithgoalData` ×15, `RECOMMENDATION_USER` ×20), utilisés pour peupler les écrans de découverte/swipe/recommandations sans backend réel.
- Le système de mémoire persistante du projet (`CLAUDE.md` + `memory/`) vient d'être mis en place pour la première fois.

## Prochaines étapes prévues

- [ ] Vérifier visuellement dans l'app (web/Android/iOS) que les nouveaux profils de `DB/userDB.tsx` s'affichent correctement dans les écrans qui les consomment (`discover.tsx`, `people.tsx`, écrans de swipe, etc.).
- [ ] Connecter réellement `constants/appwrite.ts` à un projet Appwrite (endpoint + project ID) si l'authentification doit devenir fonctionnelle.
- [ ] Remplacer progressivement les données mock de `DB/userDB.tsx` par de vraies requêtes Appwrite une fois le backend connecté.
- [ ] Revoir la cohérence de `id` entre tableaux si un jour ils sont fusionnés ou partagés entre écrans (actuellement les `id` se chevauchent volontairement entre tableaux distincts, ce qui est sans risque tant qu'ils restent utilisés séparément — voir `memory/lessons.md`).

## Contexte utile pour reprendre le travail

- Voir `explications/structure-du-projet.md` pour une vue d'ensemble complète de l'arborescence du projet.
- Voir `memory/bugs.md` pour les problèmes connus non résolus.
- Voir `memory/lessons.md` pour les décisions techniques prises et leur justification.
