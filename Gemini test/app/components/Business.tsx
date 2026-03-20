import { Target, Euro, Users, TrendingUp } from "lucide-react";

export function Business() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 relative z-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Business</h2>
          <p className="text-muted-foreground font-medium mt-1">Acquisition, croissance et metrics.</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-primary/30">
          Nouveau Deal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Euro className="w-24 h-24" />
          </div>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">MRR Actuel</p>
          <h4 className="text-4xl font-black tabular-nums text-primary mb-2">4,250 €</h4>
          <div className="flex items-center gap-1 text-sm font-bold text-green-500">
            <TrendingUp className="w-4 h-4" /> +15% ce mois
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Prospection (Jour)</p>
          <h4 className="text-4xl font-black tabular-nums mb-2">12<span className="text-2xl text-muted-foreground">/20</span></h4>
          <div className="h-2 w-full bg-[var(--life-score-track)] rounded-full overflow-hidden">
            <div className="h-full bg-foreground rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Clients Actifs</p>
          <h4 className="text-4xl font-black tabular-nums mb-2">6</h4>
          <p className="text-sm font-bold text-muted-foreground">Objectif T1: 10 clients</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border bg-muted/30">
          <h3 className="font-bold text-lg">Pipeline Commercial</h3>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-sm font-bold text-muted-foreground uppercase">Prospect</th>
              <th className="p-4 text-sm font-bold text-muted-foreground uppercase">Statut</th>
              <th className="p-4 text-sm font-bold text-muted-foreground uppercase">Valeur</th>
              <th className="p-4 text-sm font-bold text-muted-foreground uppercase">Dernier Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { name: "Agence Alpha", status: "Négociation", val: "1500 €", date: "Il y a 2j" },
              { name: "Startup Beta", status: "Découverte", val: "800 €", date: "Aujourd'hui" },
              { name: "E-com Gamma", status: "Closing", val: "2200 €", date: "Hier" },
            ].map((p, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-semibold">{p.name}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full">
                    {p.status}
                  </span>
                </td>
                <td className="p-4 font-bold tabular-nums">{p.val}</td>
                <td className="p-4 text-sm font-medium text-muted-foreground">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
