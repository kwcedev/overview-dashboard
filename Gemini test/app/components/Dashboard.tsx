import { ArrowRight, Trophy, Target, Zap } from "lucide-react";
import { Link } from "react-router";

export function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 relative z-10">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Vue d'ensemble</h2>
          <p className="text-muted-foreground font-medium mt-1">Aujourd'hui, c'est ton sprint de vie.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="p-2.5 bg-green-500/10 text-green-500 rounded-xl">
              <span className="font-bold text-lg">€</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Revenus Mois</p>
              <p className="text-xl font-black">4,250 €</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Life Score Hero */}
        <div className="lg:col-span-5 bg-card border border-border rounded-[24px] p-8 shadow-sm flex flex-col relative overflow-hidden">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-8">
            <Trophy className="w-5 h-5 text-primary" />
            Life Score
          </h3>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative inline-flex items-center justify-center">
              <svg width="200" height="200" className="transform -rotate-90">
                <circle cx="100" cy="100" r="92" stroke="var(--life-score-track)" strokeWidth="16" fill="transparent" />
                <circle cx="100" cy="100" r="92" stroke="var(--primary)" strokeWidth="16" strokeDasharray="578" strokeDashoffset="115" strokeLinecap="round" fill="transparent" />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="font-black tabular-nums tracking-tighter text-foreground text-5xl">80</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">SCORE</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full font-bold text-sm">
              <Zap className="w-4 h-4" />
              Streak : 12 jours à +70%
            </div>
          </div>

          <div className="space-y-4 w-full mt-auto">
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex justify-between items-end text-sm">
                <span className="font-semibold text-muted-foreground">Checklist du jour</span>
                <span className="font-bold tabular-nums"><span className="text-foreground">12</span><span className="text-muted-foreground">/15</span></span>
              </div>
              <div className="h-2.5 w-full bg-[var(--life-score-track)] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex justify-between items-end text-sm">
                <span className="font-semibold text-muted-foreground">Nutrition (Protéines)</span>
                <span className="font-bold tabular-nums"><span className="text-foreground">110g</span><span className="text-muted-foreground">/150g</span></span>
              </div>
              <div className="h-2.5 w-full bg-[var(--life-score-track)] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: '73%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Quick Actions & Focus */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="bg-primary text-primary-foreground rounded-[24px] p-8 shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <h3 className="text-2xl font-black mb-2">Focus du moment</h3>
            <p className="font-medium text-primary-foreground/80 mb-6 max-w-md">
              Ta priorité aujourd'hui est la prospection. L'objectif mensuel de 10k€ nécessite 2 clients supplémentaires.
            </p>
            <div className="flex gap-3">
              <Link to="/business" className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-xl font-bold hover:bg-white/90 transition-colors">
                Aller au Business <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <Link to="/checklist" className="bg-card border border-border rounded-[24px] p-6 shadow-sm hover:border-primary/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-1">Checklist</h4>
              <p className="text-sm font-medium text-muted-foreground mb-4">3 tâches restantes pour le bloc de l'après-midi.</p>
              <div className="mt-auto flex items-center font-bold text-sm text-primary">
                Ouvrir <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </Link>

            <Link to="/sport" className="bg-card border border-border rounded-[24px] p-6 shadow-sm hover:border-primary/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-1">Prochaine Séance</h4>
              <p className="text-sm font-medium text-muted-foreground mb-4">Upper Body • 45 min • Modéré</p>
              <div className="mt-auto flex items-center font-bold text-sm text-orange-500">
                Démarrer <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
