import { Calendar as CalIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react";

export function Planning() {
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  
  const schedule = [
    { day: 0, title: "Sport Upper", start: "08:30", end: "09:15", type: "sport" },
    { day: 0, title: "Travail agence", start: "10:00", end: "13:00", type: "work" },
    { day: 0, title: "Prospection", start: "14:00", end: "17:00", type: "prospect" },
    { day: 0, title: "Code route", start: "17:00", end: "18:00", type: "code" },
    
    { day: 1, title: "Sport Lower", start: "08:30", end: "09:15", type: "sport" },
    { day: 1, title: "Travail agence", start: "10:00", end: "13:00", type: "work" },
    { day: 1, title: "Terrain", start: "14:00", end: "17:00", type: "prospect" },
    
    { day: 2, title: "Travail / n8n", start: "10:00", end: "13:00", type: "work" },
    { day: 2, title: "Prospection", start: "14:00", end: "17:00", type: "prospect" },
    { day: 2, title: "Cheat Meal", start: "20:00", end: "21:00", type: "rest" },
  ];

  const getColor = (type: string) => {
    switch(type) {
      case 'sport': return 'bg-green-500/20 text-green-600 border-green-500/30';
      case 'work': return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
      case 'prospect': return 'bg-purple-500/20 text-purple-600 border-purple-500/30';
      case 'code': return 'bg-red-500/20 text-red-600 border-red-500/30';
      case 'rest': return 'bg-orange-500/20 text-orange-600 border-orange-500/30';
      default: return 'bg-muted text-foreground border-border';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 flex flex-col h-full relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Planning</h2>
          <p className="text-muted-foreground font-medium mt-1">Semaine type (Template)</p>
        </div>
        
        <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-2 shadow-sm">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <span className="font-bold text-sm px-2">Semaine Actuelle</span>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-3xl shadow-sm flex-1 overflow-hidden flex flex-col">
        <div className="grid grid-cols-7 border-b border-border bg-muted/30">
          {days.map((d, i) => (
            <div key={d} className="p-4 text-center border-r border-border last:border-r-0">
              <span className="text-xs font-bold text-muted-foreground uppercase">{d}</span>
              {i === 0 && <div className="mt-1 w-6 h-1 bg-primary mx-auto rounded-full" />}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 flex-1 min-h-[500px] overflow-y-auto">
          {days.map((_, dayIdx) => (
            <div key={dayIdx} className="border-r border-border last:border-r-0 p-2 relative bg-card/50">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '100% 60px', opacity: 0.2 }} />
              
              <div className="space-y-2 relative z-10">
                {schedule.filter(s => s.day === dayIdx).map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-3 rounded-xl border text-xs font-bold ${getColor(item.type)} shadow-sm`}
                  >
                    <div className="flex items-center gap-1.5 opacity-80 mb-1">
                      <Clock className="w-3 h-3" />
                      {item.start} - {item.end}
                    </div>
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
