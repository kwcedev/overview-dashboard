Life+ — Concept & UX (Résumé Complet)
L'idée centrale
Life+ est un tableau de bord de vie personnelle sans limite de durée. L'objectif : transformer chaque journée en sprint de vie structuré, où chaque journée est scorée, trackée et analysée. Le principe est qu'on ne peut pas améliorer ce qu'on ne mesure pas — donc tout ce qui compte dans une journée a une case à cocher.

La vision produit est de passer d'une simple "daily checklist" à un véritable "behavior tracking & progression system". Le système doit mettre l'accent sur la consistance plutôt que la perfection, fournir un feedback visuel instantané, montrer les patterns dans le temps, et augmenter la motivation et l'engagement.
Les grandes sections

1. Vue d'ensemble (Home)

La page principale. Elle donne une lecture instantanée de l'état du jour et de la progression globale.

Life Score Hero : le premier élément visible. Un grand anneau de score à gauche avec le score total du jour sur 100, accompagné de 7 barres de breakdown à droite (une par catégorie de scoring : Checklist, Sport, Nutrition, Sommeil, Discipline, Productivité, Bonus). Chaque barre montre sa contribution au score total.

Métriques business en haut : revenus du mois, clients signés, prospects touchés. Avec barre de progression vers l'objectif.

Discipline — Progression : une rangée de 7-13 jauges circulaires, une par jour récent. Chaque jauge montre le % de la checklist accomplie ce jour-là, le score de vie (LifeScore), et le nombre de tâches faites. Un badge "streak" indique combien de jours consécutifs à 70%+ de complétion.

Weekly Tracker : le cœur de la vue. Un tableau horizontal avec tous les jours depuis le début en colonnes, et toutes les tâches du quotidien (~30 items) en lignes. Chaque case est cliquable — verte si cochée, vide si pas cochée, tiret si la tâche ne s'applique pas ce jour-là (ex : No Sofia ne s'applique pas le mardi et samedi). Toutes les cases de tous les jours passés sont modifiables directement depuis ce tableau.

Comportement temporel du Weekly Tracker :

Le jour actuel est toujours la dernière colonne à droite
Quand on passe au jour suivant, il s'ajoute à droite
Les jours précédents restent à gauche
Scroll horizontal pour remonter dans le temps
Les 7 derniers jours sont visibles par défaut
Chaque colonne jour a une jauge circulaire en haut montrant le % de complétion, avec couleur dynamique (rouge 0% → orange → jaune → vert 100%)
Cliquer sur une cellule d'un jour passé → toggle rétroactif
Cliquer sur une cellule d'aujourd'hui → toggle en temps réel (met à jour Life Score, jauges, etc.)
Hover sur une cellule → affiche le label complet de l'item

Corps : poids actuel vs objectif, dernière séance de sport.

Nutrition : résumé rapide de l'état nutritionnel du jour.

2. Checklist (Todo)

La checklist complète du jour, organisée en groupes :

Matin :

Hygiène réveil
1 big dump mental matin (écriture libre / vidage de cerveau)
2 priorités du jour
3 gratitudes matin
Lecture matin

Sport :

Séance du jour (dynamique selon le planning sportif)
Auto-cochée quand tous les exercices de la séance sont validés

Corps :

2L eau minimum
Lumière du jour 15 min
150g protéines
Electrolytes
Créatine
Whey
Oméga 3
Walk 15 min post nutrition

Business :

Prospecter 20 entreprises
Travail agence 3h+
Code de la route 1h
n8n / IA 30 min
Note : certaines tâches business apparaissent seulement si elles sont présentes dans l'agenda du jour (filtrage par scheduleTag). Si l'agenda du jour n'inclut pas "code de la route" ou "n8n", ces items ne s'affichent pas dans la checklist.

Nutrition :

Validation repas (auto-cochée quand les 4 repas sont validés dans la section Nutrition)
Walk post-repas

Soir :

Méditation 30 min
Lecture soir
1 big dump mental soir
Préparer le lendemain (principe "Winning Tomorrow Today")
3 gratitudes soir
Alarm coucher
Hygiène couché

Discipline :

No fap
No doomscroll
No Sofia (jours applicables seulement : lundi, mercredi, jeudi, vendredi, dimanche. Sofia est autorisée le mardi et le samedi.)
No smoke
No alcohol
No video games

Sommeil :

Couché à l'heure — heure dynamique calculée selon le premier événement du lendemain (formule : 6 cycles de 90 min + 15 min d'endormissement = 9h15 avant le premier event). Par défaut : 23h les soirs normaux, 1h le mardi et samedi.

Logique de reset : chaque soir à minuit, la checklist du jour est automatiquement archivée dans l'historique (todoHistory) et une nouvelle journée commence avec des items frais.

Auto-checks :

L'item "Sport du jour" se coche automatiquement quand tous les exercices de la séance sont complétés
L'item "Nutrition complète" se coche automatiquement quand les 4 repas sont validés
Si le petit-déj est un milkshake (option 1), la créatine et la whey se cochent automatiquement

Checklist rétroactive : on peut modifier les items des jours passés depuis la checklist ou depuis le Weekly Tracker de la Home.

Drag & drop : les items de la checklist peuvent être réordonnés par glisser-déposer.

3. Sport

Programme de musculation sur 6 jours + 1 jour de repos/rando (dimanche).

Équipement : 2 haltères 2kg, sac à dos lestable, tapis, élastique, chaise.

Cycle hebdomadaire fixe :

Lundi — Upper (4 tours × 90s repos) : Pompes déclinées lestées (6-12), Dips chaise (8-15), Dév militaire (10-15), Élévations latérales (15-25), Curl biceps (12-20), Planche (45-60s)
Mardi — Lower + Core (4 tours × 90s repos) : Squat tempo lesté (10-15), Bulgares (8-12/jambe), Hip thrust (12-25), Mollets debout (20-30), Dead bug (12/côté), Planche (45s)
Mercredi — Repos : Marche légère 10-15 min
Jeudi — Back + Arms (4 tours × 90s repos) : Rowing unilatéral sac (10-20/bras), Oiseau buste penché (15-25), Curl marteau (12-20), Curl supination (12-20), Superman hold (30-45s)
Vendredi — Circuit densité (4 tours × 90s repos) : Pompes (8-15), Squat lesté (12-20), Rowing sac (12-20), Dips (8-15), Planche (45s)
Samedi — Pump + Posture (4 tours × 90s repos) : Pompes prise large (max-3), Élévations latérales (20), Oiseau buste penché (20), Curl biceps (15-20)
Dimanche — Rando + Mobilité : Rando 3-4h terrain naturel + mobilité complète

Chaque séance comprend :

Un échauffement (5 exercices)
Les exercices principaux organisés en tours/sets, avec poids/reps
Des étirements (5-6 exercices)
Une barre de progression de la séance (% des exercices cochés)

4. Nutrition

Suivi des 4 repas de la journée avec validation case par case. L'objectif quotidien est 150g de protéines. Régime : déficit léger, recomposition corporelle. 0 alcool, 0 fast-food, 0 sucre liquide. Budget ~15€/jour, pas de congélateur.

Petit-déjeuner (8h30) :

Option 1 : Milkshake (lait + whey + banane + créatine + grenade) → auto-coche créatine + whey
Option 2 : Skyr + miel + muesli + fruit + créatine

Déjeuner (12h30) :

Pack 1 : Bœuf + semoule + poivrons/champignons + huile d'olive
Pack 2 : Wraps + poulet/dinde + sucrine/concombre/cornichons + sauce yaourt citron + avocat
Pack 3 : Thon boîte + salade + maïs + cornichons + pain complet
Mercredi + Dimanche = Cheat meal (libre)

Collation (16h30) :

Option 1 : Skyr + miel + muesli
Option 2 : Yaourt grec + fruit
Option 3 : Houmous + wrap + concombre

Dîner (19h30) :

Option 1 : Saumon + asperges + riz ou semoule
Option 2 : Bœuf + sucrine + avocat
Option 3 : Œufs au plat + salade + pain complet

Les jours de cheat meal (mercredi et dimanche au déjeuner), une case spéciale "Cheat meal — libre !" remplace les contraintes habituelles du déjeuner.

5. Planning

Deux sous-vues :

Semaine type (template) : le modèle de la semaine idéale. 7 colonnes (lundi → dimanche), avec des blocs horaires colorés par catégorie. On peut ajouter, modifier, supprimer, déplacer des blocs (drag & drop). Chaque modification se répercute automatiquement sur l'agenda des prochaines semaines.

Semaine type par défaut :

Lundi : Sport Upper 8h30-9h15, Travail agence 10h-13h, Prospection 14h-17h, Code route 17h-18h
Mardi : Sport Lower 8h30-9h15, Travail agence 10h-13h, Terrain 14h-17h, Code route 17h-18h
Mercredi : Travail/n8n 10h-13h, Prospection 14h-17h, Code route 17h-18h, Cheat meal 20h-21h
Jeudi : Sport Back 8h30-9h15, Travail agence 10h-13h, Terrain 14h-17h, Code route 17h-18h
Vendredi : Sport Circuit 8h30-9h15, Travail agence 10h-13h, Prospection 14h-17h, IA/n8n 18h-19h
Samedi : Sport Pump 8h30-9h15, Business 10h-13h, Prospection 14h-17h, Repos 20h-21h
Dimanche : Grands-parents 11h-12h, Rando 3-4h 14h-18h, Swiss (CV) 17h-19h, Repos total 19h-20h

Couleurs planning par catégorie : sport = vert, travail = bleu, prospection = violet, repos/coucher = orange, rando = jaune-vert, code = rouge.

Agenda semaine : la vue concrète semaine par semaine. Les blocs du template sont auto-injectés, et on peut ajouter des événements ponctuels par-dessus (ex : Orthodontiste le 14 avril 10h-11h). On peut naviguer de semaine en semaine.

Lien checklist ↔ agenda : les tâches de la checklist qui ont un scheduleTag (agence, route, n8n) ne s'affichent que si un événement correspondant est présent dans l'agenda du jour.

6. Corps

Suivi du poids actuel vs objectif (75kg → 70kg, 1m78, recomposition corporelle). Affichage de la dernière séance de sport. Historique du poids avec courbe de progression.

7. Business

Suivi des métriques business : revenus du mois, clients signés, prospects touchés. Barres de progression vers les objectifs. Historique des revenus et dépenses.

8. Journal

Vue permettant de consulter l'historique jour par jour. Checklist rétroactive : possibilité de modifier les items cochés/décochés des jours passés depuis cette vue.

9. Config

Objectif de poids et de revenus
Date de début du tracking
Export/import des données (JSON)
Connexion Firebase (sync cloud optionnel)
Liste des backups locaux restaurables
Choix du thème (dark/light) et de la couleur d'accent (5 options : lime, blue, violet, orange, rose)

La logique de scoring (LifeScore)

C'est le cœur du produit. Ce qui rend l'app addictive. Chaque jour reçoit un score sur 100 :

Catégorie | Points max | Calcul
Checklist | 25 | (tâches faites / tâches totales) × 25
Sport | 20 | Jour de repos → 20 auto. Sinon : (exercices cochés / total exercices) × 20
Nutrition | 15 | 0 repas validé = 0, 1 repas = 4, 2 repas = 7, 3 repas = 11, 4 repas = 15
Sommeil | 15 | Couché à l'heure coché → 10 pts. Sinon 0. (wearable plus tard pour les 15 complets)
Discipline | 15 | (tâches discipline cochées / total tâches discipline) × 15
Productivité | 10 | (tâches business cochées / total tâches business) × 10. Si aucune tâche business ce jour → 5 par défaut
Bonus | 5 | +2 si streak ≥ 3 jours, +3 si streak ≥ 7 jours (remplace le +2), +2 si LifeScore de la veille ≥ 80. Cap à 5

Total = min(100, somme de toutes les catégories)

Principes UX comportementaux

Ces principes définissent comment l'utilisateur interagit avec le système, indépendamment de tout choix visuel :

1. Weekly Overview First : chaque habitude = une ligne, chaque jour = une colonne. L'utilisateur voit instantanément sa consistance, ses streaks, et ses échecs.
2. Instant Feedback System : chaque action est immédiatement compréhensible. États binaires simples (fait / pas fait / partiel). Charge cognitive → zéro.
3. Progression over Completion : taux de complétion par habitude et par semaine. Mettre en avant les tendances, pas juste le succès quotidien.
4. Streak & Break Awareness : streaks visibles (jours consécutifs réussis). Breaks visibles aussi (important psychologiquement). Encourager la continuation.
5. Today Focus within Context : "Aujourd'hui" est instantanément identifiable et rapide à interagir, mais toujours visible dans le contexte de la semaine.
6. Low Friction Interaction : cocher une tâche = rapide + satisfaisant. Minimiser la navigation et les clics.
7. Behavioral Motivation : créer subtilement de la satisfaction quand l'utilisateur est consistant, et de l'inconfort quand il casse une habitude. Boucles de renforcement positif.

La logique de persistance

Toutes les données sont sauvegardées automatiquement sur le disque local (Life+_Data/backups/) à chaque modification via le serveur Node local. Un fichier latest.json contient toujours l'état le plus récent. Des fichiers horodatés sont créés (1 par minute max) et les 200 derniers sont conservés — ce qui donne un historique de plusieurs jours récupérable en cas de problème.

Stockage principal : localStorage (clé 'jtb3') avec sync optionnelle vers Firebase (realtime bidirectionnel, snapshots journaliers, safeMerge, IndexedDB local en backup).

Données sauvegardées : état de toutes les tâches du jour (S.todos), historique complet des jours passés (todoHistory avec items + done/total + lifeScore), logs de sport, logs de nutrition, suivi du poids, événements agenda, template semaine, configuration utilisateur.

Navigation

L'app est pensée mobile-first mais utilisable sur desktop. Navigation par onglets (vue d'ensemble, checklist, sport, nutrition, planning, corps, business, journal, config). Tout est accessible en un tap. Les données les plus importantes (aujourd'hui, streak, score) sont visibles sans scroller sur la home. Le Weekly Tracker permet de compenser un oubli de check sur n'importe quel jour passé sans quitter la vue d'ensemble.

Routine quotidienne type

Heure | Activité
8h00 | Réveil + 1L eau + hygiène réveil
8h30 | Sport 45 min
9h30 | Douche + petit-déj + lumière du jour
10h-13h | Travail agence / prospection
13h-14h | Déjeuner + marche 15 min post nutrition
14h-17h | Prospection digital/terrain OU travail client
17h-18h | Code de la route
18h-19h | Apprentissage n8n/IA
19h-20h | Dîner + repos
20h-22h | Lecture + méditation + prépa lendemain + hygiène couché
23h | Couché

Idées futures (roadmap fonctionnelle)

AI life coach agent intégré : connecter un compte IA → toutes les données du dashboard sont transmises au coach qui donne des conseils personnalisés
Réseau social intégré : scoreboard, partage de Life Score entre utilisateurs, leaderboard, dynamique communautaire type Threads
Life Score + Paliers + Récompenses/Pénalités : système de niveaux et de conséquences liées au score
Tracking réel via wearable (Apple Watch) : sommeil précis, fréquence cardiaque, activité
Auto-replanification : si une tâche est ratée, le système propose de la replacer automatiquement
Input texte + Input vocal naturel : cocher des tâches ou logger des données par la voix
Système de streak avancé : bonus et pénalités liés à la consistance
Simulation prédictive : projection de ce qui va se passer si le rythme actuel continue (poids, score, habitudes)
Prévention burn-out : calcul du temps de repos nécessaire basé sur la charge et la performance
Comptabilité intégrée : gestion factures, devis, suivi comptable directement dans l'onglet Business
Planning intelligent auto : suggestions automatiques de réorganisation de la journée
Multi-langue : français, anglais, espagnol
App native : iOS et Android