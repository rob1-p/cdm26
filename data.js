// ============================================================
//  FICHIER DE DONNÉES — SEUL FICHIER À MODIFIER
//  Modifie uniquement ce fichier après chaque match.
//  L'interface se met à jour automatiquement.
// ============================================================

const DATA = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    lastUpdate: "17 juin 2026 – 09h00 · Après France 3-1 Sénégal",
    currentPhase: "groupes", // "groupes" | "16" | "8" | "quarts" | "demies" | "finale"
    focusTeam: "France",
  },

  // ── GROUPES ───────────────────────────────────────────────
  // Liste des 12 groupes. Pour chaque équipe: pts/j/g/n/d/bp/bc
  // qualified: null | "1er" | "2e" | "3e" | "eliminé"
  groups: {
    A: {
      teams: [
        { name: "Mexique",       flag: "🇲🇽", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Afrique du Sud",flag: "🇿🇦", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Corée du Sud",  flag: "🇰🇷", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Barragiste D",  flag: "🏳️",  pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    B: {
      teams: [
        { name: "Canada",    flag: "🇨🇦", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Suisse",    flag: "🇨🇭", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Qatar",     flag: "🇶🇦", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Barragiste A", flag: "🏳️", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    C: {
      teams: [
        { name: "Brésil",  flag: "🇧🇷", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Maroc",   flag: "🇲🇦", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Haïti",   flag: "🇭🇹", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Écosse",  flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    D: {
      teams: [
        { name: "États-Unis",  flag: "🇺🇸", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Paraguay",    flag: "🇵🇾", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Australie",   flag: "🇦🇺", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Barragiste C",flag: "🏳️",  pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    E: {
      teams: [
        { name: "Allemagne",     flag: "🇩🇪", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Côte d'Ivoire", flag: "🇨🇮", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Équateur",      flag: "🇪🇨", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Curaçao",       flag: "🇨🇼", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    F: {
      teams: [
        { name: "Pays-Bas", flag: "🇳🇱", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Japon",    flag: "🇯🇵", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Tunisie",  flag: "🇹🇳", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Barragiste B", flag: "🏳️", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    G: {
      teams: [
        { name: "Espagne",    flag: "🇪🇸", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Arabie S.",  flag: "🇸🇦", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Chili",      flag: "🇨🇱", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Serbie",     flag: "🇷🇸", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    H: {
      teams: [
        { name: "Portugal",  flag: "🇵🇹", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Pologne",   flag: "🇵🇱", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Bolivie",   flag: "🇧🇴", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Cameroun",  flag: "🇨🇲", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    I: {
      // ← GROUPE FRANCE — Mise à jour prioritaire après chaque match
      teams: [
        { name: "France",   flag: "🇫🇷", pts:3, j:1, g:1, n:0, d:0, bp:3, bc:1, qualified: null },
        { name: "Norvège",  flag: "🇳🇴", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Sénégal",  flag: "🇸🇳", pts:0, j:1, g:0, n:0, d:1, bp:1, bc:3, qualified: null },
        { name: "Irak",     flag: "🇮🇶", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    J: {
      teams: [
        { name: "Argentine",  flag: "🇦🇷", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Algérie",    flag: "🇩🇿", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Autriche",   flag: "🇦🇹", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Jordanie",   flag: "🇯🇴", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    K: {
      teams: [
        { name: "Portugal",   flag: "🇵🇹", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Colombie",   flag: "🇨🇴", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "RD Congo",   flag: "🇨🇩", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Ouzbékistan",flag: "🇺🇿", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
    L: {
      teams: [
        { name: "Angleterre", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Sénégal",    flag: "🇸🇳", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "IR Iran",    flag: "🇮🇷", pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
        { name: "Barragiste", flag: "🏳️",  pts:0, j:0, g:0, n:0, d:0, bp:0, bc:0, qualified: null },
      ]
    },
  },

  // ── MATCHS ÉQUIPE DE FRANCE ────────────────────────────────
  // status: "upcoming" | "live" | "done"
  // scorers: [{ name, min, type: "goal"|"penalty"|"og" }]
  francMatches: [
    {
      id: "I-J1",
      status: "done",
      date: "16 juin 2026",
      time: "21h00",
      venue: "MetLife Stadium",
      city: "New York",
      round: "Poule I – J1",
      home: { name: "France", flag: "🇫🇷" },
      away: { name: "Sénégal", flag: "🇸🇳" },
      score: { home: 3, away: 1 },
      scorers: {
        home: [
          { name: "Mbappé", min: 66, type: "goal" },
          { name: "Barcola", min: 82, type: "goal" },
          { name: "Mbappé", min: 90+6, type: "goal" },
        ],
        away: [
          { name: "I. Mbaye", min: 90+5, type: "goal" },
        ]
      },
      analysis: {
        preview: "Premier match de poule face au Sénégal, équipe africaine la plus dangereuse du tournoi. Les Lions disposent de Sadio Mané en fin de carrière mais toujours influent, et d'une défense organisée (Koulibaly). La France est favorite à 66% mais le Sénégal a l'habitude des surprises : ils avaient battu les Bleus 1-0 en 2002. Deschamps devrait aligner un 4-3-3 avec Mbappé pointe, Dembelé et Griezmann sur les ailes. L'enjeu : ne pas concéder sur coup de pied arrêté (Koulibaly, 1m90).",
        keyDuel: "Mbappé vs Koulibaly — duel de titans entre le meilleur attaquant français et le patron défensif sénégalais.",
        winProbability: { home: 66, draw: 19, away: 15 },
        keyStats: [
          { label: "Classement FIFA", home: "#3", away: "#19" },
          { label: "Buts marqués (qualifs)", home: "28", away: "21" },
          { label: "Buteur clé", home: "Mbappé (12 buts)", away: "Mané (8 buts)" },
        ],
        postMatch: "Victoire 3-1 des Bleus, laborieuse en première période mais maîtrisée en seconde. La France a souffert et a frôlé le désastre sur un poteau de Nicolas Jackson (25e) sauvé par Maignan. Mbappé a débloqué la situation à la 66e sur assist d'Olise, puis Barcola a doublé la mise (82e, assist Rabiot). Le Sénégal a réduit le score en toute fin (90e+5, Mbaye) avant que Mbappé ne scelle le score d'une frappe de 25 mètres (90e+6). 🏆 Record historique : avec ce doublé, Kylian Mbappé devient à 58 buts le meilleur buteur de l'histoire de l'équipe de France, dépassant Olivier Giroud. Point noir : 6e match consécutif sans clean sheet.",
      }
    },
    {
      id: "I-J2",
      status: "upcoming",
      date: "22 juin 2026",
      time: "23h00",
      venue: "Lincoln Financial Field",
      city: "Philadelphie",
      round: "Poule I – J2",
      home: { name: "France", flag: "🇫🇷" },
      away: { name: "Irak", flag: "🇮🇶" },
      score: { home: null, away: null },
      scorers: { home: [], away: [] },
      analysis: {
        preview: "Adversaire a priori le plus abordable du groupe. L'Irak s'est qualifié via les barrages asiatiques et n'a pas l'habitude de la scène mondiale depuis 1986. Une victoire large ici permettrait d'aborder le match décisif contre la Norvège avec sérénité. Attention à la rotation excessive : Deschamps doit gérer son effectif sur 3 matchs en 10 jours.",
        keyDuel: "Tchouaméni vs le milieu irakien — domination attendue au milieu de terrain.",
        winProbability: { home: 87, draw: 9, away: 4 },
        keyStats: [
          { label: "Classement FIFA", home: "#3", away: "#68" },
          { label: "Participations CM", home: "16", away: "2" },
          { label: "Enjeu", home: "Qualification quasi-assurée", away: "Exploit historique" },
        ],
        postMatch: null,
      }
    },
    {
      id: "I-J3",
      status: "upcoming",
      date: "26 juin 2026",
      time: "21h00",
      venue: "Gillette Stadium",
      city: "Boston",
      round: "Poule I – J3",
      home: { name: "Norvège", flag: "🇳🇴" },
      away: { name: "France", flag: "🇫🇷" },
      score: { home: null, away: null },
      scorers: { home: [], away: [] },
      analysis: {
        preview: "Le match le plus important du groupe. Ce choc détermine qui sera 1er ou 2e — ce qui change radicalement le bracket pour la suite. La Norvège d'Erling Haaland est la 4e nation au classement FIFA. Haaland a inscrit 37 buts en qualification, un record absolu. La France doit gérer ce match avec intelligence : une victoire = 1re place quasi-garantie, un nul peut suffire selon les autres résultats. En cas de défaite, la France peut quand même se qualifier comme 2e ou meilleur 3e.",
        keyDuel: "Haaland vs Upamecano — le duel à 100M€ : le meilleur avant-centre du monde face au défenseur français le plus physique.",
        winProbability: { home: 35, draw: 28, away: 37 },
        keyStats: [
          { label: "Classement FIFA", home: "#4", away: "#3" },
          { label: "Buteur clé", home: "Haaland (37 buts qualifs)", away: "Mbappé (12 buts)" },
          { label: "Enjeu", home: "1re place du groupe", away: "1re place = bracket favorable" },
        ],
        postMatch: null,
      }
    },
  ],

  // ── PHASE FINALE FRANCE ────────────────────────────────────
  // Remplir au fur et à mesure. opponent: null si inconnu.
  knockout: [
    {
      round: "1/16 de finale",
      roundShort: "1/16",
      date: "30 juin 2026",
      time: "23h00",
      venue: "MetLife Stadium",
      city: "New York",
      scenario: "Si France 1re du groupe I",
      opponent: null, // ← remplir quand connu: { name: "Maroc", flag: "🇲🇦" }
      opponentNote: "Meilleur 3e parmi C/D/F/G/H",
      score: null,
      scorers: { home: [], away: [] },
      analysis: "En tant que 1re du groupe, la France affronte un 3e repêché — équipe qui n'a pas réussi à finir dans les 2 premiers de son groupe. Historiquement, les 3es ont rarement créé de grosses surprises au tour suivant quand ils jouent une nation du top 5. Risque élevé uniquement si la France arrive physiquement diminuée.",
      winProbability: { home: 78, draw: 12, away: 10 },
    },
    {
      round: "1/8 de finale",
      roundShort: "1/8",
      date: "4 juillet 2026",
      time: "23h00",
      venue: "Lincoln Financial Field",
      city: "Philadelphie",
      scenario: "Si France 1re du groupe I",
      opponent: null,
      opponentNote: "Vainqueur match 73 ou 75 (zone Brésil/Mexique/Maroc)",
      score: null,
      scorers: { home: [], away: [] },
      analysis: "C'est ici que le vrai tournoi commence. Le 1/8 oppose potentiellement la France au Brésil ou aux Pays-Bas selon les résultats des groupes C et F. Un Brésil-France en 1/8 serait l'affiche du tournoi, deux nations qui ne se sont pas affrontées en phase finale depuis 2006. La profondeur du banc français sera déterminante.",
      winProbability: { home: 55, draw: 20, away: 25 },
    },
    {
      round: "Quart de finale",
      roundShort: "1/4",
      date: "9 juillet 2026",
      time: "22h00",
      venue: "Gillette Stadium",
      city: "Boston",
      scenario: "Si France 1re du groupe I",
      opponent: null,
      opponentNote: "Zone Allemagne/Portugal (groupe E/H)",
      score: null,
      scorers: { home: [], away: [] },
      analysis: "La FIFA a séparé France et Espagne dans des demi-tableaux opposés. Mais l'Allemagne (Groupe E, 1re probable) et le Portugal (Groupe K) peuvent se retrouver dans ce quart. L'Allemagne, portée par un renouveau générationnel (Musiala, Wirtz), est l'adversaire le plus redouté ici. Le Portugal sans Ronaldo mais avec Félix, Bruno et Leão reste dangereux.",
      winProbability: { home: 52, draw: 22, away: 26 },
    },
    {
      round: "Demi-finale",
      roundShort: "1/2",
      date: "14 juillet 2026",
      time: "21h00",
      venue: "AT&T Stadium",
      city: "Dallas",
      scenario: "Si France 1re du groupe I",
      opponent: null,
      opponentNote: "Zone Argentine/Algérie/Autriche (Groupe J)",
      score: null,
      scorers: { home: [], away: [] },
      analysis: "Si la France est 1re de son groupe, elle évite l'Espagne et l'Angleterre jusqu'à la finale (règle FIFA de séparation des têtes de série). La demi la plus probable oppose la France à l'Argentine championne du monde en titre. Un France-Argentine en demi le 14 juillet serait un scénario de rêve, une revanche potentielle de la finale 2022.",
      winProbability: { home: 50, draw: 18, away: 32 },
    },
    {
      round: "Finale",
      roundShort: "Finale",
      date: "19 juillet 2026",
      time: "21h00",
      venue: "MetLife Stadium",
      city: "New York",
      scenario: null,
      opponent: null,
      opponentNote: "Vainqueur de l'autre demi-tableau (Espagne ou Angleterre probables)",
      score: null,
      scorers: { home: [], away: [] },
      analysis: "La finale revient là où tout a commencé — le MetLife Stadium de New York. L'Espagne, tenante du titre européen, ou l'Angleterre qui n'a jamais gagné de Coupe du Monde depuis 1966. La France est 3e nation au classement FIFA, favorie avec l'Espagne et l'Argentine. Une 3e étoile serait le plus grand accomplissement de l'histoire du football français.",
      winProbability: { home: 48, draw: 16, away: 36 },
    },
  ],

  // ── FOCUS FRANCE — STATS GLOBALES ─────────────────────────
  franceFocus: {
    formation: "4-3-3",
    coach: "Didier Deschamps",
    fifaRank: 3,
    // Joueurs clés avec stats — mettre à jour après chaque match
    keyPlayers: [
      { name: "Kylian Mbappé",      flag: "⚽", position: "ATT", goals: 2, assists: 0, note: "Capitaine, meilleur buteur de l'histoire des Bleus (58 buts). Doublé contre le Sénégal dont une frappe de 25m en toute fin de match. Record historique." },
      { name: "Antoine Griezmann",   flag: "🎯", position: "MIL", goals: 0, assists: 0, note: "Créateur principal, passeur décisif, âme de l'équipe." },
      { name: "Bradley Barcola",     flag: "⚡", position: "ATT", goals: 1, assists: 0, note: "Remplaçant entré à la 80e à la place de Dembélé, buteur dès sa première action (82e). Montée en puissance remarquée." },
      { name: "Aurélien Tchouaméni", flag: "🛡️", position: "MIL", goals: 0, assists: 0, note: "Récupérateur, relanceur, pilier défensif du milieu." },
      { name: "N. Upamecano",        flag: "🧱", position: "DEF", goals: 0, assists: 0, note: "Défenseur central, puissant dans les duels aériens." },
      { name: "Mike Maignan",        flag: "🧤", position: "GK",  goals: 0, assists: 0, note: "Gardien titulaire, réflexes et relances au pied." },
    ],
    // Buteurs France (mis à jour après chaque match)
    scorers: [
      { name: "Kylian Mbappé", goals: 2, penalties: 0 },
      { name: "Bradley Barcola", goals: 1, penalties: 0 },
    ],
    // Résumé de tournoi
    tournamentStats: {
      matchesPlayed: 1,
      wins: 1,
      draws: 0,
      losses: 0,
      goalsScored: 3,
      goalsConceded: 1,
    },
    // Analyse générale des Bleus dans ce tournoi
    globalAnalysis: "Entrée en lice réussie mais perfectible. Les Bleus ont souffert en 1re période face à un Sénégal organisé et intense, frôlant la catastrophe sur un poteau de Jackson (25e). La 2e période a vu une France plus dominante : Mbappé a débloqué (66e) puis signé un doublé record en toute fin (90e+6), 58 buts en Bleu — meilleur buteur de l'histoire devant Giroud. Barcola a confirmé sa montée en puissance (82e). Point de vigilance : 6e match sans clean sheet, la défense reste perméable. Prochain rendez-vous contre l'Irak le 22 juin — une victoire large assure la qualification.",
  },

  // ── BRACKET PHASE FINALE (GÉNÉRAL) ────────────────────────
  // Remplir au fur et à mesure quand les équipes sont connues
  // null = à déterminer
  bracket: {
    r16: [
      // match 73
      { id: "M73", date: "28 juin", team1: { name: "1A", flag: "❓" }, team2: { name: "2B", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 74
      { id: "M74", date: "29 juin", team1: { name: "1E", flag: "❓" }, team2: { name: "3e ABCDF", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 75
      { id: "M75", date: "30 juin", team1: { name: "1F", flag: "❓" }, team2: { name: "2C", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 76
      { id: "M76", date: "29 juin", team1: { name: "1C", flag: "❓" }, team2: { name: "2F", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 77 — FRANCE si 1re du groupe I
      { id: "M77", date: "30 juin", team1: { name: "1I (France?)", flag: "🇫🇷" }, team2: { name: "3e CDFGH", flag: "❓" }, score1: null, score2: null, winner: null, isFrance: true },
      // match 78
      { id: "M78", date: "30 juin", team1: { name: "2E", flag: "❓" }, team2: { name: "2I", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 79
      { id: "M79", date: "1 juil", team1: { name: "1A", flag: "❓" }, team2: { name: "3e CEFHI", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 80
      { id: "M80", date: "1 juil", team1: { name: "1L", flag: "❓" }, team2: { name: "3e EHIJK", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 81
      { id: "M81", date: "2 juil", team1: { name: "1D", flag: "❓" }, team2: { name: "3e BEFIJ", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 82
      { id: "M82", date: "1 juil", team1: { name: "1G", flag: "❓" }, team2: { name: "3e AEHIJ", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 83
      { id: "M83", date: "3 juil", team1: { name: "2K", flag: "❓" }, team2: { name: "2L", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 84
      { id: "M84", date: "2 juil", team1: { name: "1H", flag: "❓" }, team2: { name: "2J", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 85
      { id: "M85", date: "3 juil", team1: { name: "1B", flag: "❓" }, team2: { name: "3e EFGIJ", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 86
      { id: "M86", date: "4 juil", team1: { name: "1J", flag: "❓" }, team2: { name: "2H", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 87
      { id: "M87", date: "4 juil", team1: { name: "1K", flag: "❓" }, team2: { name: "3e DEIJL", flag: "❓" }, score1: null, score2: null, winner: null },
      // match 88
      { id: "M88", date: "3 juil", team1: { name: "2D", flag: "❓" }, team2: { name: "2G", flag: "❓" }, score1: null, score2: null, winner: null },
    ],
    qf: [
      { id: "QF1", date: "9 juil",  team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M73","M75"], isFrance: true },
      { id: "QF2", date: "10 juil", team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M74","M77"] },
      { id: "QF3", date: "11 juil", team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M76","M78"] },
      { id: "QF4", date: "12 juil", team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M79","M80"] },
      { id: "QF5", date: "9 juil",  team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M81","M82"] },
      { id: "QF6", date: "10 juil", team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M83","M84"] },
      { id: "QF7", date: "11 juil", team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M85","M86"] },
      { id: "QF8", date: "12 juil", team1: null, team2: null, score1: null, score2: null, winner: null, fromMatches: ["M87","M88"] },
    ],
    sf: [
      { id: "SF1", date: "14 juil", team1: null, team2: null, score1: null, score2: null, winner: null, isFrance: true },
      { id: "SF2", date: "15 juil", team1: null, team2: null, score1: null, score2: null, winner: null },
    ],
    final: {
      id: "FIN", date: "19 juil", team1: null, team2: null, score1: null, score2: null, winner: null, isFrance: true,
    },
    third: {
      id: "3RD", date: "18 juil", team1: null, team2: null, score1: null, score2: null, winner: null,
    },
  },

}; // fin DATA
