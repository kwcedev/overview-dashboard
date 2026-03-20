import { useState } from "react";
import { Plus, Check, MoreVertical } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Habit = {
  id: string;
  category: string;
  name: string;
};

export function Tracker() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", category: "Matin", name: "1 big dump mental matin" },
    { id: "2", category: "Matin", name: "2 priorités du jour" },
    { id: "3", category: "Matin", name: "3 gratitudes matin" },
    { id: "4", category: "Sport", name: "Séance du jour" },
    { id: "5", category: "Corps", name: "2L eau minimum" },
    { id: "6", category: "Corps", name: "Lumière du jour 15 min" },
    { id: "7", category: "Nutrition", name: "Validation 4 repas" },
    { id: "8", category: "Business", name: "Prospecter 20 entreprises" },
    { id: "9", category: "Business", name: "Travail agence 3h+" },
    { id: "10", category: "Discipline", name: "No doomscroll" },
    { id: "11", category: "Discipline", name: "No video games" },
    { id: "12", category: "Soir", name: "Préparer le lendemain" },
  ]);

  const [checks, setChecks] = useState<Record<string, Record<string, boolean>>>({});

  // Generate last 14 days
  const today = new Date();
  const days = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (13 - i));
    return d;
  });

  const toggleCheck = (habitId: string, dayIdx: number) => {
    setChecks(prev => {
      const dayKey = `day-${dayIdx}`;
      const current = prev[habitId]?.[dayKey] || false;
      return {
        ...prev,
        [habitId]: {
          ...prev[habitId],
          [dayKey]: !current
        }
      };
    });
  };

  const addHabit = () => {
    const name = window.prompt("Nom de la nouvelle tâche ?");
    if (name) {
      setHabits([...habits, { id: Date.now().toString(), category: "Custom", name }]);
    }
  };

  const formatDayName = (d: Date) => {
    return new Intl.DateTimeFormat('fr-FR', { weekday: 'short' }).format(d).charAt(0).toUpperCase();
  };
  
  const formatDayNum = (d: Date) => {
    return new Intl.DateTimeFormat('fr-FR', { day: '2-digit' }).format(d);
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 flex flex-col h-[calc(100vh-theme(spacing.16))] relative z-10">
      
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Weekly Tracker</h2>
          <p className="text-muted-foreground font-medium mt-1">
            Visualise tes patterns. La consistance bat l'intensité.
          </p>
        </div>
        
        <button 
          onClick={addHabit}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5" />
          Ajouter une tâche
        </button>
      </div>

      <div className="bg-card border border-border rounded-3xl shadow-sm flex-1 flex flex-col overflow-hidden">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr>
                <th className="p-4 font-semibold text-muted-foreground text-sm w-72 sticky left-0 top-0 bg-card z-20 border-b border-r border-border backdrop-blur-md bg-card/90">
                  Habitude
                </th>
                {days.map((d, i) => {
                  const isToday = i === days.length - 1;
                  return (
                    <th 
                      key={i} 
                      className={cn(
                        "p-3 text-center sticky top-0 bg-card z-10 border-b border-border min-w-[64px] backdrop-blur-md bg-card/90",
                        isToday ? "bg-primary/5" : ""
                      )}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className={cn(
                          "text-xs font-bold uppercase",
                          isToday ? "text-primary" : "text-muted-foreground"
                        )}>
                          {formatDayName(d)}
                        </span>
                        <span className={cn(
                          "w-7 h-7 flex items-center justify-center rounded-full text-sm font-black",
                          isToday ? "bg-primary text-primary-foreground" : "text-foreground"
                        )}>
                          {formatDayNum(d)}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {habits.map((habit) => (
                <tr key={habit.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="p-4 sticky left-0 bg-card z-10 border-r border-border group-hover:bg-muted/30 transition-colors flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-0.5">
                        {habit.category}
                      </span>
                      <span className="text-sm font-medium">{habit.name}</span>
                    </div>
                    <button className="text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-foreground transition-opacity p-1">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                  
                  {days.map((_, dayIdx) => {
                    const isToday = dayIdx === days.length - 1;
                    const isChecked = checks[habit.id]?.[`day-${dayIdx}`] || false;
                    
                    return (
                      <td 
                        key={dayIdx} 
                        className={cn("p-2 text-center align-middle", isToday ? "bg-primary/5" : "")}
                      >
                        <div className="flex justify-center">
                          <button 
                            onClick={() => toggleCheck(habit.id, dayIdx)}
                            className={cn(
                              "w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all duration-200",
                              isChecked 
                                ? "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/30" 
                                : "border-border hover:border-primary/50 bg-background"
                            )}
                          >
                            {isChecked && <Check className="w-4 h-4" strokeWidth={3} />}
                          </button>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
