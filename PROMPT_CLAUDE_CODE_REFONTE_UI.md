# PROMPT CLAUDE CODE — Refonte UI/UX Life+ (Design Figma)

---

## CONTEXTE

Tu travailles sur le projet **Life+**, situé dans `C:\Users\369\Desktop\Perso\dev\Life+\`.
Le code actuel est un monofichier `index.html` (~2000+ lignes) : CSS + HTML + JavaScript.
Données en **localStorage** (clé `'jtb3'`), sync optionnelle Firebase.

**MISSION : Refaire TOUTE la couche visuelle (CSS + structure HTML) pour correspondre au nouveau design décrit ci-dessous, SANS TOUCHER au JavaScript, à la logique métier, aux données, ni aux fonctionnalités.**

---

## RÈGLES ABSOLUES

### NE JAMAIS MODIFIER :

- Le bloc `<script>` entier (JS, fonctions, event listeners, variables)
- localStorage (clé `'jtb3'`), Firebase config/sync, IndexedDB
- Le state global `S` et sa structure
- L'algorithme Life Score (25+20+15+15+15+10+5)
- Les auto-checks (t17 sport, t18 nutrition, milkshake→créatine+whey)
- L'heure coucher dynamique, la checklist filtrée par agenda, le daily reset
- La checklist rétroactive, le drag & drop, l'agenda sync
- Les IDs todos (t2→t33), labels, catégories, activeDays
- L'import/export JSON, les données historiques
- Le serveur Node local (backups)

### ⚠️ RÈGLE CRITIQUE — DATA & CONTENU :

Les screenshots de référence et le dossier `Gemini test/` contiennent des **données fictives / placeholder** (4250€ de revenus, "Agence Alpha", "78.5 kg", etc.). **NE JAMAIS hardcoder ces valeurs dans le nouveau HTML.** Tout le contenu affiché (scores, poids, revenus, noms de prospects, labels de tâches, options de repas, exercices, events planning, etc.) doit venir UNIQUEMENT du JavaScript existant et du state `S` actuel. Le design Gemini ne sert que de **référence visuelle pour l'apparence** (couleurs, layout, espacement, typographie, forme des cards). Les données, les labels, les listes de tâches, les options de nutrition, les exercices de sport, les events du planning — TOUT ça reste exactement tel qu'il est dans le code JS actuel. Ne remplace, ne renomme, et ne réécris AUCUN contenu textuel généré par le JavaScript.

### CE QUE TU MODIFIES :

- Tout le CSS (remplacer entièrement)
- La structure HTML (réorganiser divs, containers, cards, grilles, nav)
- Classes CSS, IDs visuels, layout, icônes, navigation

### MÉTHODE OBLIGATOIRE AVANT DE CODER :

1. Lis `index.html` et liste TOUS les `getElementById`, `querySelector`, `classList`, `onclick`, `data-*` utilisés par le JS
2. Crée un mapping : `élément HTML → fonction JS qui le référence → ID/classe à conserver`
3. Ce mapping est intouchable. Le nouveau HTML doit garder ces IDs/classes exactement.

---

## DESIGN SYSTEM GLOBAL

### Fond & surfaces

- **Background principal** : `#0d0d12` (noir très profond, léger reflet bleu)
- **Surface card** : `rgba(255,255,255, 0.03)` avec `border: 1px solid rgba(255,255,255, 0.08)`
- **Border-radius cards** : `16px`
- **Pas de box-shadow visible** — la profondeur vient uniquement des bordures subtiles

### Typographie

- **Font** : Inter ou system-ui sans-serif
- **Titres de page** : 28-32px, font-weight 700, blanc `#f0f0f5`
- **Sous-titres de page** : 14px, `rgba(255,255,255, 0.45)`, regular
- **Labels uppercase** : 10-11px, letter-spacing 1px+, `rgba(255,255,255, 0.35)`, font-weight 500
- **Valeurs / nombres** : 24-36px, font-weight 700, blanc
- **Texte body** : 14px, `rgba(255,255,255, 0.7)`

### Couleur d'accent (défaut violet)

- **Accent principal** : `#8B5CF6` (violet)
- **Accent glow** : `rgba(139, 92, 246, 0.15)` pour backgrounds subtils
- **Accent hover nav** : fond `rgba(accent, 0.12)` + texte couleur accent
- L'accent est configurable. Le système de 5 presets (vert, bleu, violet, orange, rose) + input hex custom doit rester fonctionnel.

### Couleurs sémantiques

- **Vert** : `#4ade80` (succès, sport, validation)
- **Orange** : `#fb923c` (avertissement, repos, cheat meal)
- **Rouge** : `#f87171` (erreur, code route, danger)
- **Bleu** : `#60a5fa` (business, travail, eau)
- **Violet** : `#8B5CF6` (accent UI, prospection)
- **Jaune/Or** : `#facc15` (streak, bonus)

---

## SIDEBAR (fixe à gauche, toutes les vues)

- **Largeur** : ~200px
- **Background** : même que le fond principal (#0d0d12) ou très légèrement plus clair
- **Logo** : "Life+" en 20px bold blanc, en dessous "Système d'optimisation" en 11px muted
- **Items nav** : icône 18px + label 14px, padding 10px 16px, border-radius 10px
- **Item actif** : background accent (`#8B5CF6`), texte blanc, icône blanche. Le fond accent est plein (pas transparent), border-radius 10px
- **Items inactifs** : texte `rgba(255,255,255, 0.5)`, icône même couleur
- **10 items** dans cet ordre :
  1. Vue d'ensemble (icône maison)
  2. Checklist (icône clipboard check)
  3. Tracker Complet (icône grille/tableau)
  4. Sport (icône haltère/fitness)
  5. Nutrition (icône cœur/pomme)
  6. Planning (icône calendrier)
  7. Corps (icône activité/pouls)
  8. Business (icône building/store)
  9. Journal (icône book/carnet)
  10. Config (icône engrenage)

### Footer sidebar

- **"Apparence"** : label 12px + icône soleil/lune pour toggle dark/light
- **"ACCENT"** : label 10px uppercase + rangée de 5 dots colorés (vert `#4ade80`, bleu `#60a5fa`, violet `#8B5CF6`, orange `#fb923c`, rose `#f472b6`) — chaque dot = 20px cercle, cliquable

---

## VUE 1 — Vue d'ensemble (Home)

### Header

- Titre : **"Vue d'ensemble"** 30px bold
- Sous-titre : "Aujourd'hui, c'est ton sprint de vie."
- **En haut à droite** : chip "REVENUS MOIS" avec icône € verte + montant en gros (ex: "4,250 €"), fond card

### Layout principal : grille 2 colonnes

**Colonne gauche — Life Score (grande card)**

- Titre card : icône trophée + "Life Score"
- Grand anneau SVG circulaire au centre (~200px diamètre)
  - Couleur de l'anneau = accent (violet par défaut)
  - Track de fond = `rgba(255,255,255, 0.06)`
  - Stroke-width épais (~10px)
  - Centre : score en 48px bold + "SCORE" en 10px uppercase muted en dessous
- **Sous l'anneau** : badge streak — fond `rgba(accent, 0.12)`, icône éclair ⚡, texte "Streak : X jours à +70%" en accent color
- **Sous le badge** : 2 barres de progression horizontales :
  - "Checklist du jour" — valeur "12/15" à droite — barre accent
  - "Nutrition (Protéines)" — valeur "110g/150g" à droite — barre accent
  - Track des barres = `rgba(255,255,255, 0.06)`, fill = accent, height 6px, border-radius 3px

**Colonne droite — empilée verticalement :**

1. **Card "Focus du moment"** (hauteur ~180px)
   
   - **Background spécial** : gradient subtil violet/pourpre (pas le noir standard)
   - Titre "Focus du moment" en 20px bold blanc
   - Texte de contexte 14px blanc/muted
   - Bouton "Aller au Business →" : fond transparent, border 1px solid blanc, border-radius 24px (pill), padding 8px 20px, texte blanc 13px

2. **Grille 2 colonnes dessous** :
   
   - **Card "Checklist"** : icône engrenage/target en haut (rond 36px, fond sombre avec icône muted), titre "Checklist" bold, sous-texte "3 tâches restantes pour le bloc de l'après-midi." en muted, lien "Ouvrir" en accent color en bas
   - **Card "Prochaine Séance"** : icône éclair orange en haut (rond 36px, fond orangé), titre "Prochaine Séance" bold, sous-texte "Upper Body • 45 min • Modéré" en muted, lien "Démarrer" en rouge/accent en bas

---

## VUE 2 — Checklist du Jour

### Header

- Titre : **"Checklist du Jour"** 30px bold
- Sous-titre : "Chaque coche est une victoire sur toi-même."
- **En haut à droite** : anneau de progression petit (60px) avec "0%" au centre en vert + "AVANCEMENT" en label uppercase

### Groupes d'items

Chaque groupe est une card avec :

- **Header groupe** : icône ronde colorée (24px) + titre groupe en 16px bold blanc
- **Items** : liste verticale, chaque item = une rangée :
  - Checkbox circulaire à gauche (20px, border 1.5px `rgba(255,255,255, 0.15)`, quand cochée = fond accent + check blanc)
  - Label 14px blanc
  - **Badge durée à droite** : "10 MIN", "2H", "ALL DAY" — fond `rgba(255,255,255, 0.06)`, border-radius 6px, padding 4px 10px, texte 10px uppercase muted
  - Séparateur : aucune ligne visible entre items, juste du spacing (12-16px gap)

**Groupes dans l'ordre :**

1. **Routine Matinale** (icône lever de soleil orange)
   
   - 1 big dump mental matin (10 MIN)
   - 2 priorités du jour (5 MIN)
   - 3 gratitudes (5 MIN)
   - Lumière du jour (15 MIN)
   - Hygiène réveil
   - Lecture matin (30 MIN)

2. **Focus & Deep Work** (icône horloge bleue)
   
   - Prospection client (2H)
   - Travail agence / client (3H)
   - Zéro doomscrolling (ALL DAY)
   - Code de la route (1H) — conditionnel selon agenda
   - n8n / IA (30 MIN) — conditionnel selon agenda

3. **Routine Soir** (icône lune violette)
   
   - Préparer le lendemain (15 MIN)
   - Méditation (30 MIN)
   - Lecture soir (30 MIN)
   - 1 big dump soir (10 MIN)
   - 3 gratitudes soir (5 MIN)
   - Alarm coucher
   - Hygiène couché

4. **Corps & Suppléments** (icône cœur vert)
   
   - 2L eau minimum (ALL DAY)
   - 150g protéines (ALL DAY)
   - Electrolytes
   - Créatine
   - Whey
   - Oméga 3
   - Walk 15mn post nutrition

5. **Discipline** (icône bouclier rouge)
   
   - No fap (ALL DAY)
   - No doomscroll (ALL DAY)
   - No Sofia (jours applicables) (ALL DAY)
   - No smoke (ALL DAY)
   - No alcohol (ALL DAY)
   - No video games (ALL DAY)

6. **Sommeil**
   
   - Couché avant [heure dynamique]

7. **Auto-checks** (grisés, non cliquables manuellement)
   
   - Sport du jour ✓ (auto)
   - Nutrition complète ✓ (auto)

---

## VUE 3 — Tracker Complet (Weekly Tracker)

### Header

- Titre : **"Weekly Tracker"** 30px bold
- Sous-titre : "Visualise tes patterns. La consistance bat l'intensité."
- **Bouton haut droite** : "+ Ajouter une tâche" — fond accent, texte blanc, border-radius 24px (pill), padding 10px 24px

### Tableau

- **Structure** : tableau HTML classique, full-width dans la zone de contenu
- **Colonne gauche fixe** (~250px) : pour chaque habitude :
  - Label catégorie en 9px uppercase muted (MATIN, SPORT, CORPS, NUTRITION, BUSINESS, DISCIPLINE, SOIR)
  - Nom de l'habitude en 13px bold blanc
- **Colonnes jours** : header = lettre du jour (V, S, D, L, M, M, J) en 12px bold + numéro date en dessous (06, 07, 08...)
- **Jour actuel** : le numéro est dans un cercle plein accent (24px rond), texte blanc
- **Cellules** : checkbox carrée arrondie (20px, border-radius 6px, border 1.5px `rgba(255,255,255, 0.1)`)
  - Non coché : vide, fond transparent
  - Coché : fond accent, icône check blanche
  - N/A (tiret) : fond `rgba(255,255,255, 0.02)`, bordure dashed
- **Scroll horizontal** si plus de ~14 jours affichés
- Les cellules des jours passés sont cliquables (toggle rétroactif)
- Le tableau commence au jour 1 et va jusqu'à aujourd'hui
- Bordures du tableau : `rgba(255,255,255, 0.06)` entre les rangées

---

## VUE 4 — Sport

### Header

- Titre : **"Sport"** 30px bold
- Sous-titre : "Programme 6 jours + 1 repos."
- **Nav jours** en haut à droite : 7 onglets horizontaux (LUNDI à DIMANCHE)
  - Jour actif : fond accent, texte blanc, border-radius 8px
  - Jours inactifs : texte muted, pas de fond
  - Sous chaque jour : le type de séance (Upper, Lower + Core, Repos, etc.) en 9px

### Card séance du jour

- Badge "SÉANCE DU JOUR" en haut gauche : fond transparent, border 1px accent, border-radius 20px, texte accent 10px uppercase
- Titre séance : "Upper Body" (ou autre selon le jour) en 22px bold
- Sous-titre : "4 tours × 90s repos" en 14px muted
- **% complété** en haut droite : "0%" en 24px bold + "COMPLÉTÉ" en 10px uppercase muted
- **Barre de progression** : full-width sous le titre, height 6px, track muted, fill accent

### Liste des exercices (⚠️ IMPORTANT : GARDER ×4 TOURS)

**Chaque exercice apparaît 4 FOIS (4 tours).** Ne PAS lister chaque exercice une seule fois. Le JS actuel gère les tours avec des IDs par set (se01-t1, se01-t2, se01-t3, se01-t4). Garder ce fonctionnement.

Chaque exercice = une card/rangée :

- Checkbox ronde à gauche (cochable)
- Nom exercice en 15px bold
- **"REPS"** en label 9px muted + valeur (ex: "6-12") en 14px bold blanc
- **"CHARGE"** en label 9px muted + valeur (ex: "10kg") en 14px bold blanc
- Fond card : `rgba(255,255,255, 0.03)`, border `rgba(255,255,255, 0.06)`, border-radius 12px, padding 16px

### Sidebar droite (dans la vue Sport, pas la nav globale)

**Card "Équipement"** :

- Liste à puces avec dots colorés (accent) : 2 haltères 2kg, Sac à dos lestable, Tapis de sol, Élastique, Chaise

**Card "Instructions"** :

- Texte 13px muted : échauffement obligatoire, étirements fin de séance, objectif recomposition
- Bouton "Voir la bibliothèque d'exos >" en bas, fond card, border accent, full-width

---

## VUE 5 — Nutrition

### Header

- Titre : **"Nutrition"** 30px bold
- Sous-titre : "Objectif : 150g protéines / jour. 0 alcool, 0 fast-food."
- **Haut droite** : anneau protéines petit (50px), "0g / 150g" à côté, label "PROTÉINES" uppercase

### Grille 2×2 de cards repas

Chaque card repas :

- **Heure** en haut gauche : "8h30", "12h30", "16h30", "19h30" en 12px muted
- **Titre repas** : "Petit-déjeuner", "Déjeuner", "Collation", "Dîner" en 20px bold
- **Checkbox validation** en haut droite (cercle 32px, border muted, quand coché = fond accent + check)
- **"OPTIONS"** : label 10px uppercase muted
- Liste d'options avec dots colorés (orange/accent) : chaque option de repas en 13px
- **Footer card** : "~450 kcal" en muted à gauche + "35g prot." en vert/accent à droite

### Banner cheat meal (en bas, full-width)

- Fond subtil différencié (légèrement plus clair ou border accent)
- Icône info (i) + "Rappel Cheat Meals" en bold
- Texte : "Mercredi et Dimanche au déjeuner = Cheat meal (libre)..."

---

## VUE 6 — Planning

### Header

- Titre : **"Planning"** 30px bold
- Sous-titre : "Semaine type (Template)"
- **Nav semaine haut droite** : "< Semaine Actuelle >" avec flèches de navigation, fond card, border-radius 10px

### ⚠️ DEUX SOUS-VUES (garder les deux du code actuel) :

1. **Semaine type** (template) — ce qui est montré dans le screenshot
2. **Agenda semaine** (vue réelle semaine par semaine avec events ponctuels) — PAS visible dans le screenshot mais DOIT rester fonctionnel. Ajouter un toggle/tabs en haut pour switcher entre "Template" et "Agenda".

### Grille planning

- **7 colonnes** : LUNDI → DIMANCHE, header en 11px uppercase bold muted, sous-ligne accent pour le jour actuel
- **Blocs events** : cards arrondies (border-radius 10px) avec :
  - Icône horloge + horaire "08:30 - 09:15" en 11px
  - Nom event "Sport Upper" en 13px bold
  - **Couleurs par catégorie** (fond coloré semi-transparent + texte de même famille) :
    - Sport = vert (`rgba(74, 222, 128, 0.15)` fond, `#4ade80` texte)
    - Travail/Agence = bleu (`rgba(96, 165, 250, 0.15)` fond, `#60a5fa` texte)
    - Prospection/Terrain = violet (`rgba(139, 92, 246, 0.15)` fond, `#8B5CF6` texte)
    - Cheat meal = or/orange (`rgba(250, 204, 21, 0.15)` fond, `#facc15` texte)
    - Code route = rouge (`rgba(248, 113, 113, 0.15)` fond, `#f87171` texte)
    - n8n/IA = violet aussi
    - Repos = orange
- Les blocs sont empilés verticalement dans chaque colonne jour
- Drag & drop pour déplacer les blocs doit rester fonctionnel

---

## VUE 7 — Corps & Santé

### Header

- Titre : **"Corps & Santé"** 30px bold
- Sous-titre : "La machine qui supporte ton esprit."

### Grille 4 cards métriques (1 rangée)

Chaque card :

- Icône ronde colorée en haut gauche (36px, fond coloré subtil + icône) :
  - Poids : icône balance, fond bleuté
  - Hydratation : icône eau, fond bleu
  - Sommeil : icône lune, fond bleu sombre
  - Énergie : icône éclair, fond or
- Label uppercase 10px muted (POIDS ACTUEL, HYDRATATION, SOMMEIL, ÉNERGIE)
- Valeur en 28px bold
- Sous-texte en 12px muted

### ⚠️ AJOUTER : Input pour saisir le poids

- Sous les 4 cards, ajouter une section avec :
  - Input number pour le poids du jour (avec le même style que les inputs existants dans le code)
  - Bouton "Enregistrer" accent
  - Garder le fonctionnement JS existant pour l'enregistrement du poids

### Card graphique (grande, full-width)

- Titre : "Graphique de Poids & Mensurations"
- Placeholder : "Les données de ton évolution corporelle apparaîtront ici."
- (Le graphique existant dans le code doit s'afficher ici)

---

## VUE 8 — Business

### Header

- Titre : **"Business"** 30px bold
- Sous-titre : "Acquisition, croissance et metrics."
- **Bouton haut droite** : "Nouveau Deal" — fond accent, texte blanc, border-radius 24px pill

### Grille 3 cards métriques

1. **MRR Actuel** : grande valeur verte "4,250 €", sous-texte "↗ +15% ce mois" en vert, icône € grise à droite
2. **Prospection (jour)** : "12/20" en grand, barre de progression accent
3. **Clients Actifs** : "6" en grand, "Objectif T1: 10 clients" en muted

### Card "Pipeline Commercial" (tableau)

- Header : "Pipeline Commercial" en 16px bold
- Colonnes : PROSPECT | STATUT | VALEUR | DERNIER CONTACT
- Badges statut colorés :
  - "Négociation" = fond orange subtil, texte orange
  - "Découverte" = fond vert subtil, texte vert
  - "Closing" = fond bleu subtil, texte bleu

### ⚠️ GARDER TOUS LES INPUTS EXISTANTS

Le code actuel a des inputs pour ajouter des revenus, des dépenses, des prospects. **NE PAS les supprimer.** Les intégrer dans le nouveau design :

- Section "Ajouter un revenu" avec les mêmes champs (montant, label, date)
- Section "Ajouter une dépense" avec les mêmes champs
- Garder tous les boutons d'action et les fonctions JS associées

---

## VUE 9 — Journal

### Header

- Titre : **"Journal"** 30px bold
- Sous-titre : "Vide ton esprit. Aligne tes pensées."

### Contenu (1 grande card)

1. **Humeur du jour** : label "HUMEUR DU JOUR" uppercase muted + 3 émojis cliquables dans des cercles (40px) :
   
   - 😊 (vert), 😐 (orange), 😞 (rouge)
   - Cercle sélectionné : border 2px accent

2. **3 Gratitudes** : label uppercase muted + textarea (fond `rgba(255,255,255, 0.03)`, border `rgba(255,255,255, 0.08)`, border-radius 12px, placeholder "1. Je suis reconnaissant pour...")

3. **Brain Dump** : label "BRAIN DUMP (VIDE-TÊTE)" uppercase muted + grand textarea (même style, plus grand ~200px height, placeholder "Écris tout ce qui te passe par la tête...")

4. **Bouton "Enregistrer l'entrée"** : fond accent, texte blanc, border-radius 10px, padding 12px 32px, icône disquette à gauche. Centré ou aligné à droite.

---

## VUE 10 — Configuration

### Header

- Titre : **"Configuration"** 30px bold
- Sous-titre : "Personnalise ton système."

### Sections dans des cards

1. **Mode d'affichage** : label "Mode d'affichage" bold + sous-texte "Bascule entre le mode clair et le mode sombre." + icône soleil/lune toggle en haut droite de la card

2. **Couleur d'accentuation** : label bold + sous-texte "Clique sur le carré de couleur ci-dessous pour ouvrir le sélecteur précis (façon Photoshop)."
   
   - Grand carré de couleur (80px × 80px, border-radius 12px) montrant la couleur actuelle
   - À côté : "Code Hexadécimal" label + input text avec la valeur hex (ex: "#8B5CF6"), fond input sombre, border muted

3. ⚠️ **GARDER les sections Config existantes** du code actuel :
   
   - Objectif de poids et de revenus
   - Date de début
   - Export/import données (boutons)
   - Connexion Firebase (toggle)
   - Liste backups restaurables
   - Les intégrer dans le même style de cards que ci-dessus

---

## RESPONSIVE MOBILE

- Sidebar disparaît → bottom navigation bar (5-6 icônes principales)
- Cards passent en 1 colonne
- Weekly Tracker : scroll horizontal natif
- Planning : scroll horizontal natif
- Touch-friendly : targets minimum 44px

---

## BACKUP AVANT MODIFICATION

**AVANT toute modification**, copier `index.html` → `index_backup_avant_refonte.html`

---

## CHECKLIST DE VALIDATION FINALE

Après la refonte, vérifier :

- [ ] **AUCUNE donnée fictive Gemini n'est hardcodée** (pas de "4250€", "Agence Alpha", "78.5 kg" en dur dans le HTML — tout vient du JS)
- [ ] localStorage fonctionne (données intactes)
- [ ] Life Score se calcule et s'affiche correctement
- [ ] Auto-checks fonctionnent (sport, nutrition, milkshake)
- [ ] Daily reset fonctionne
- [ ] Checklist rétroactive fonctionne
- [ ] Drag & drop fonctionne (checklist + planning)
- [ ] Toggle dark/light fonctionne
- [ ] Les 5 couleurs d'accent + input hex fonctionnent
- [ ] Weekly Tracker : toggle passé + toggle aujourd'hui
- [ ] Sport : 4 tours par exercice affichés (pas 1 seul)
- [ ] Planning : les 2 sous-vues (template + agenda) fonctionnent
- [ ] Corps : input poids fonctionnel
- [ ] Business : tous les inputs existants (revenus, dépenses) sont présents
- [ ] Nutrition : validation repas + auto-check t18
- [ ] Journal : sauvegarde fonctionne
- [ ] Config : export/import JSON, Firebase toggle
- [ ] Responsive mobile OK
- [ ] Zéro erreur console

**En cas de doute sur un élément : ne touche pas. Demande-moi.**
