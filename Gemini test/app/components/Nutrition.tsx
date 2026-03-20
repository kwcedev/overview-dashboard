import { useState } from "react";
import { CheckCircle2, Info, Plus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Nutrition() {
  const [validated, setValidated] = useState<number[]>([]);

  const meals = [
    {
      id: 1,
      name: "Petit-déjeuner",
      time: "8h30",
      calories: 450,
      protein: 35,
      options: [
        "Milkshake (lait + whey + banane + créatine + grenade)",
        "Skyr + miel + muesli + fruit + créatine"
      ]
    },
    {
      id: 2,
      name: "Déjeuner",
      time: "12h30",
      calories: 650,
      protein: 45,
      options: [
        "Bœuf + semoule + poivrons/champignons + huile d'olive",
        "Wraps + poulet/dinde + crudités + sauce yaourt + avocat",
        "Thon boîte + salade + maïs + cornichons + pain complet"
      ]
    },
    {
      id: 3,
      name: "Collation",
      time: "16h30",
      calories: 250,
      protein: 20,
      options: [
        "Skyr + miel + muesli",
        "Yaourt grec + fruit",
        "Houmous + wrap + concombre"
      ]
    },
    {
      id: 4,
      name: "Dîner",
      time: "19h30",
      calories: 550,
      protein: 50,
      options: [
        "Saumon + asperges + riz ou semoule",
        "Bœuf + sucrine + avocat",
        "Œufs au plat + salade + pain complet"
      ]
    }
  ];

  const totalProtein = 150;
  const currentProtein = meals
    .filter(m => validated.includes(m.id))
    .reduce((acc, curr) => acc + curr.protein, 0);

  const toggleMeal = (id: number) => {
    setValidated(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Nutrition</h2>
          <p className="text-muted-foreground font-medium mt-1">Objectif : 150g protéines / jour. 0 alcool, 0 fast-food.</p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Protéines</p>
            <div className="flex items-end gap-1">
              <span className="text-2xl font-black tabular-nums text-primary">{currentProtein}g</span>
              <span className="text-sm font-bold text-muted-foreground mb-1">/ {totalProtein}g</span>
            </div>
          </div>
          <div className="w-16 h-16 relative flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="32" cy="32" r="28" stroke="var(--life-score-track)" strokeWidth="6" fill="none" />
              <circle 
                cx="32" cy="32" r="28" 
                stroke="var(--primary)" 
                strokeWidth="6" 
                fill="none" 
                strokeDasharray="175.9" 
                strokeDashoffset={175.9 - (Math.min(100, (currentProtein/totalProtein)*100) / 100) * 175.9}
                className="transition-all duration-700 ease-out" 
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal) => {
          const isDone = validated.includes(meal.id);
          return (
            <div 
              key={meal.id} 
              className={cn(
                "bg-card border-2 rounded-3xl p-6 transition-all duration-300 relative overflow-hidden",
                isDone ? "border-primary/50" : "border-border"
              )}
            >
              {isDone && <div className="absolute inset-0 bg-primary/5 pointer-events-none" />}
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-bold text-muted-foreground">{meal.time}</span>
                  <h3 className="text-xl font-black">{meal.name}</h3>
                </div>
                <button 
                  onClick={() => toggleMeal(meal.id)}
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                    isDone 
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" 
                      : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                  )}
                >
                  <CheckCircle2 className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider block">Options</span>
                {meal.options.map((opt, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 flex-shrink-0" />
                    <span className="text-foreground/90">{opt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/50 flex justify-between items-center text-sm font-bold">
                <span className="text-muted-foreground">~{meal.calories} kcal</span>
                <span className="text-primary">{meal.protein}g prot.</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6 flex gap-4 items-start">
        <Info className="text-primary flex-shrink-0" />
        <div>
          <h4 className="font-bold text-primary mb-1">Rappel Cheat Meals</h4>
          <p className="text-sm text-foreground/80 font-medium">
            Mercredi et Dimanche au déjeuner = Cheat meal (libre). Ces jours-là, la contrainte nutritionnelle du déjeuner saute, profite sans culpabiliser !
          </p>
        </div>
      </div>
    </div>
  );
}
