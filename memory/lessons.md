# Leçons apprises — Humbble

Décisions techniques prises, pièges évités, et raisonnement derrière certains choix. Objectif : éviter de refaire les mêmes erreurs ou de redécouvrir les mêmes contraintes d'une session à l'autre.

---

## DB/userDB.tsx contient 3 structures différentes, pas une seule

Le fichier `DB/userDB.tsx` exporte trois tableaux distincts (`SuggestedUsers`, `matchwithgoalData`, `RECOMMENDATION_USER`) avec des champs différents :
- `SuggestedUsers` : `id`, `name`, `age`, `image` (pas de `bio`).
- `matchwithgoalData` et `RECOMMENDATION_USER` : `id`, `name`, `age`, `image`, `bio`.

**Piège évité :** ajouter un champ `bio` ou `city` uniformément sur les trois tableaux aurait cassé la consigne "respecter exactement la même structure". Avant toute modification de ce fichier, toujours vérifier quel(s) tableau(x) sont réellement visés, car ils ne partagent pas le même schéma.

**Décision :** quand une information demandée (ex. "ville") ne correspond à aucun champ existant, l'intégrer dans un champ texte existant (`bio`) plutôt que d'ajouter un nouveau champ non prévu par la structure d'origine. Ça respecte la contrainte de format tout en répondant au besoin fonctionnel.

## Pas de champ "ville" dédié dans les données utilisateur mock

Aucun des trois tableaux de `DB/userDB.tsx` n'a de champ `city`/`ville`. Si un futur besoin nécessite un filtrage ou un affichage par ville de façon structurée (pas juste dans un texte libre), il faudra explicitement ajouter ce champ à tous les objets concernés et mettre à jour les composants qui consomment ces données (`PeopleCard.tsx`, `UserCard.tsx`, écrans `discover.tsx`/`people.tsx`).

## Ambiguïté de périmètre → demander plutôt que supposer

Quand une demande peut s'appliquer à plusieurs structures de données incompatibles entre elles (ici : à quel(s) tableau(x) ajouter des profils), il vaut mieux poser une question de clarification rapide plutôt que de deviner, car le mauvais choix aurait nécessité de tout refaire ou d'avoir des données incohérentes entre tableaux.

## `constants/appwrite.ts` est volontairement en placeholder

Les valeurs `YOUR_APPWRITE_ENDPOINT` / `YOUR_PROJECT_ID` sont intentionnelles (template de démarrage), pas un oubli à corriger sans discussion. Ne pas y injecter de vraies clés sans confirmation explicite de l'utilisateur, et ne jamais committer de vraies credentials Appwrite dans ce fichier.
