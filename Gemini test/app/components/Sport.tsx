import { useState } from "react";
import { CheckCircle2, ChevronRight, Activity, Flame, Battery, Shield } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WEEKLY_SPLIT = [
  { day: "Lundi", type: "Upper", icon: Activity },
  { day: "Mardi", type: "Lower + Core", icon: Battery },
  { day: "Mercredi", type: "Repos", isRest: true },
  { day: "Jeudi", type: "Back + Arms", icon: Shield },
  { day: "Vendredi", type: "Circuit", icon: Flame },
  { day: "Samedi", type: "Pump + Posture", icon: Activity },
  { day: "Dimanche", type: "Rando", isRest: true },
];

const TODAY_EXERCISES = [
  { id: 1, name: "Pompes déclinées lestées", reps: "6-12", weight: "10kg" },
  { id: 2, name: "Dips chaise", reps: "8-15", weight: "Lesté" },
  { id: 3, name: "Dév militaire", reps: "10-15", weight: "2x2kg" },
  { id: 4, name: "Élévations latérales", reps: "15-25", weight: "2x2kg" },
  { id: 5, name: "Curl biceps", reps: "12-20", weight: "2x2kg" },
  { id: 6, name: "Planche", reps: "45-60s", weight: "Poids corps" },
];

export function Sport() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleEx = (id: number) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const progress = (completed.length / TODAY_EXERCISES.length) * 100;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Sport</h2>
          <p className="text-muted-foreground font-medium mt-1">Programme 6 jours + 1 repos.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-xl p-1 shadow-sm overflow-x-auto max-w-full">
          {WEEKLY_SPLIT.map((d, i) => {
            const isToday = i === 0; // Fake today = Lundi
            return (
              <button 
                key={i}
                className={cn(
                  "flex flex-col items-center min-w-[80px] px-3 py-2 rounded-lg transition-all",
                  isToday ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider mb-1 opacity-80">{d.day}</span>
                <span className="text-xs font-semibold whitespace-nowrap">{d.type}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Current Workout */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full uppercase tracking-wider mb-3">
                  Séance du jour
                </span>
                <h3 className="text-2xl font-black">Upper Body</h3>
                <p className="text-muted-foreground mt-1 text-sm font-medium">4 tours × 90s repos</p>
              </div>
              
              <div className="text-right">
                <span className="text-3xl font-black tabular-nums">{Math.round(progress)}%</span>
                <span className="text-xs font-bold text-muted-foreground uppercase block">Complété</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-3 w-full bg-[var(--life-score-track)] rounded-full overflow-hidden mb-8">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-3">
              {TODAY_EXERCISES.map((ex) => {
                const isDone = completed.includes(ex.id);
                return (
                  <button
                    key={ex.id}
                    onClick={() => toggleEx(ex.id)}
                    className={cn(
                      "w-full text-left flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 group",
                      isDone 
                        ? "bg-primary/5 border-primary border-opacity-50" 
                        : "bg-background border-border hover:border-primary/30"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                        isDone ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                      )}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className={cn("font-bold text-lg", isDone ? "text-primary" : "")}>
                        {ex.name}
                      </span>
                    </div>
                    
                    <div className="flex gap-4 items-center">
                      <div className="text-right">
                        <span className="block text-xs font-bold text-muted-foreground uppercase">Reps</span>
                        <span className="font-semibold">{ex.reps}</span>
                      </div>
                      <div className="text-right w-20">
                        <span className="block text-xs font-bold text-muted-foreground uppercase">Charge</span>
                        <span className="font-semibold">{ex.weight}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {progress === 100 && (
              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-500 font-bold flex items-center justify-center gap-2 animate-in fade-in zoom-in">
                <Flame className="w-5 h-5" />
                Séance validée avec succès !
              </div>
            )}
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-4">Équipement</h4>
            <ul className="space-y-3">
              {[
                "2 haltères 2kg",
                "Sac à dos lestable",
                "Tapis de sol",
                "Élastique",
                "Chaise"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-4">Instructions</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Échauffement obligatoire avant chaque séance (5 exercices mobilités).</p>
              <p>Étirements 5-6 exercices en fin de séance.</p>
              <p>Objectif : recomposition corporelle. Maintien de l'intensité, pas de temps de repos dépassé.</p>
            </div>
            <button className="mt-6 w-full py-2.5 bg-muted hover:bg-muted/80 text-foreground font-bold rounded-xl transition-colors text-sm flex justify-center items-center gap-2">
              Voir la bibliothèque d'exos <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
