# 🇫🇷 Dashboard CM 2026 — Guide de mise à jour

## Structure des fichiers

```
france2026/
├── index.html   ← Ne jamais toucher à ce fichier
└── data.js      ← SEUL fichier à modifier
```

---

## Comment mettre à jour après un match

### 1. Score + statut
Dans `data.js`, trouver le match dans `francMatches` et modifier :
```js
status: "done",             // "upcoming" → "done"
score: { home: 2, away: 1 } // remplir le score
```

### 2. Buteurs
```js
scorers: {
  home: [
    { name: "Mbappé", min: 23, type: "goal" },
    { name: "Griezmann", min: 67, type: "penalty" }
  ],
  away: [
    { name: "Mané", min: 88, type: "goal" }
  ]
}
// type: "goal" | "penalty" | "og" (contre-son-camp)
```

### 3. Analyse post-match
Dans `analysis.postMatch`, ajouter le résumé :
```js
postMatch: "Victoire solide des Bleus. Mbappé auteur d'un doublé en première période..."
```

### 4. Classement du groupe I
Mettre à jour les stats de chaque équipe dans `groups.I.teams` :
```js
{ name: "France", flag: "🇫🇷", pts: 3, j: 1, g: 1, n: 0, d: 0, bp: 2, bc: 1, qualified: null }
```

### 5. Stats joueurs France
Dans `franceFocus.keyPlayers`, mettre à jour `goals` et `assists`.

Dans `franceFocus.scorers`, ajouter les buteurs :
```js
scorers: [
  { name: "Mbappé", goals: 2, penalties: 1 },
  { name: "Griezmann", goals: 1 }
]
```

### 6. Stats globales tournoi
```js
tournamentStats: {
  matchesPlayed: 1,
  wins: 1,
  draws: 0,
  losses: 0,
  goalsScored: 2,
  goalsConceded: 1,
}
```

### 7. Mettre à jour la date
```js
meta: {
  lastUpdate: "17 juin 2026 – 23h15",
}
```

---

## Phase finale — quand l'adversaire est connu

Dans `knockout`, remplir `opponent` :
```js
opponent: { name: "Maroc", flag: "🇲🇦" }
```

Dans `bracket.r16`, remplir les équipes du match France (M77) :
```js
{ id: "M77", team1: { name: "France", flag: "🇫🇷" }, team2: { name: "Maroc", flag: "🇲🇦" }, ... }
```

---

## Déploiement GitHub Pages

1. Créer un repo GitHub (ex: `france2026`)
2. Uploader `index.html` et `data.js`
3. Settings → Pages → Deploy from branch → main → / (root)
4. URL accessible : `https://tonpseudo.github.io/france2026`

**Pour chaque mise à jour :** modifier `data.js` sur GitHub (bouton ✏️), commit → le site se met à jour en ~30 secondes.

**Sur téléphone :** ouvrir l'URL → partager → "Sur l'écran d'accueil" = icône comme une appli native.
