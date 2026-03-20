import { useState } from "react";
import { PenLine, Smile, Frown, Meh, Save } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Journal() {
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { id: "good", icon: Smile, color: "text-green-500", bg: "hover:bg-green-500/10 focus:bg-green-500/10" },
    { id: "neutral", icon: Meh, color: "text-amber-500", bg: "hover:bg-amber-500/10 focus:bg-amber-500/10" },
    { id: "bad", icon: Frown, color: "text-red-500", bg: "hover:bg-red-500/10 focus:bg-red-500/10" },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 relative z-10">
      <div>
        <h2 className="text-3xl font-black tracking-tight">Journal</h2>
        <p className="text-muted-foreground font-medium mt-1">Vide ton esprit. Aligne tes pensées.</p>
      </div>

      <div className="bg-card border border-border rounded-[32px] p-8 shadow-sm space-y-8">
        
        <div>
          <label className="block text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
            Humeur du jour
          </label>
          <div className="flex gap-4">
            {moods.map((m) => (
              <button
                key={m.id}
                onClick={() => setMood(m.id)}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2",
                  mood === m.id ? `border-primary ${m.bg}` : "border-border hover:border-primary/50",
                  m.color
                )}
              >
                <m.icon className="w-8 h-8" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-bold text-muted-foreground uppercase tracking-wider">
            3 Gratitudes
          </label>
          <textarea 
            placeholder="1. Je suis reconnaissant pour...&#10;2. ...&#10;3. ..."
            className="w-full bg-background border border-border rounded-2xl p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-bold text-muted-foreground uppercase tracking-wider">
            Brain Dump (Vide-tête)
          </label>
          <textarea 
            placeholder="Écris tout ce qui te passe par la tête..."
            className="w-full bg-background border border-border rounded-2xl p-4 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
          />
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity">
            <Save className="w-5 h-5" />
            Enregistrer l'entrée
          </button>
        </div>
      </div>
    </div>
  );
}
