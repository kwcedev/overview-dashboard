import { Scale, Droplets, Moon, Zap } from "lucide-react";

export function Corps() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 relative z-10">
      <div>
        <h2 className="text-3xl font-black tracking-tight">Corps & Santé</h2>
        <p className="text-muted-foreground font-medium mt-1">La machine qui supporte ton esprit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Poids Actuel", val: "78.5 kg", sub: "-1.2kg depuis 1 mois", icon: Scale, color: "text-blue-500", bg: "bg-blue-500/10" },
          { title: "Hydratation", val: "1.5L", sub: "Objectif: 3L / jour", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-500/10" },
          { title: "Sommeil", val: "7h 15m", sub: "Qualité moyenne : 85%", icon: Moon, color: "text-indigo-500", bg: "bg-indigo-500/10" },
          { title: "Énergie", val: "8/10", sub: "Stable depuis ce matin", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{stat.title}</p>
              <h4 className="text-3xl font-black tabular-nums">{stat.val}</h4>
              <p className="text-xs font-medium text-muted-foreground mt-2">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-3xl p-8 shadow-sm flex items-center justify-center min-h-[300px] border-dashed">
        <div className="text-center opacity-50">
          <Scale className="w-12 h-12 mx-auto mb-4" />
          <h3 className="font-bold text-xl">Graphique de Poids & Mensurations</h3>
          <p className="text-sm font-medium mt-1">Les données de ton évolution corporelle apparaîtront ici.</p>
        </div>
      </div>
    </div>
  );
}
