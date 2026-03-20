import { useState } from "react";
import { Check, Clock, Sunset, Sunrise, Moon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Checklist() {
  const [completed, setCompleted] = useState<string[]>([]);

  const sections = [
    {
      title: "Routine Matinale",
      icon: Sunrise,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tasks: [
        { id: "m1", title: "1 big dump mental matin", duration: "10 min" },
        { id: "m2", title: "2 priorités du jour", duration: "5 min" },
        { id: "m3", title: "3 gratitudes", duration: "5 min" },
        { id: "m4", title: "Lumière du jour", duration: "15 min" },
      ]
    },
    {
      title: "Focus & Deep Work",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tasks: [
        { id: "w1", title: "Prospection client", duration: "2h" },
        { id: "w2", title: "Travail agence / client", duration: "3h" },
        { id: "w3", title: "Zéro doomscrolling", duration: "All day" },
      ]
    },
    {
      title: "Routine Soir",
      icon: Moon,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      tasks: [
        { id: "n1", title: "Préparer le lendemain", duration: "15 min" },
        { id: "n2", title: "Lecture 10 pages", duration: "20 min" },
        { id: "n3", title: "Pas d'écran 1h avant", duration: "1h" },
      ]
    }
  ];

  const toggleTask = (id: string) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const totalTasks = sections.reduce((acc, curr) => acc + curr.tasks.length, 0);
  const progress = (completed.length / totalTasks) * 100;

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 relative z-10">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Checklist du Jour</h2>
          <p className="text-muted-foreground font-medium mt-1">
            Chaque coche est une victoire sur toi-même.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-2xl font-black tabular-nums text-primary">{Math.round(progress)}%</span>
            <span className="text-xs font-bold text-muted-foreground uppercase block">Avancement</span>
          </div>
          <div className="w-16 h-16 relative flex items-center justify-center bg-card border border-border rounded-full shadow-sm">
            <svg className="w-14 h-14 transform -rotate-90">
              <circle cx="28" cy="28" r="24" stroke="var(--life-score-track)" strokeWidth="6" fill="none" />
              <circle 
                cx="28" cy="28" r="24" 
                stroke="var(--primary)" 
                strokeWidth="6" 
                fill="none" 
                strokeDasharray="150" 
                strokeDashoffset={150 - (progress / 100) * 150}
                className="transition-all duration-700 ease-out" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="bg-card border border-border rounded-[24px] overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
              <div className={cn("p-2 rounded-xl", section.bg, section.color)}>
                <section.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">{section.title}</h3>
            </div>
            
            <div className="divide-y divide-border/50">
              {section.tasks.map((task) => {
                const isDone = completed.includes(task.id);
                return (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                      "w-full px-6 py-4 flex items-center gap-4 hover:bg-muted/50 transition-colors group text-left",
                      isDone ? "bg-primary/5 hover:bg-primary/10" : ""
                    )}
                  >
                    <div className={cn(
                      "w-7 h-7 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all",
                      isDone 
                        ? "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/30" 
                        : "border-border bg-background group-hover:border-primary/50"
                    )}>
                      {isDone && <Check className="w-4 h-4" strokeWidth={3} />}
                    </div>
                    
                    <span className={cn(
                      "font-semibold flex-1 transition-all",
                      isDone ? "text-muted-foreground line-through opacity-70" : "text-foreground"
                    )}>
                      {task.title}
                    </span>
                    
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-muted px-2 py-1 rounded-md">
                      {task.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
