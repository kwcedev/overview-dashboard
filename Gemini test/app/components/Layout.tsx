import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router";
import { 
  Home, Activity, Dumbbell, Apple, Calendar, 
  Briefcase, BookOpen, Settings, Sun, Moon, Palette, ListTodo, CheckSquare 
} from "lucide-react";

export function Layout() {
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("violet");

  useEffect(() => {
    document.documentElement.className = `${theme} theme-${accent}`;
  }, [theme, accent]);

  const navItems = [
    { name: "Vue d'ensemble", path: "/", icon: Home },
    { name: "Checklist", path: "/checklist", icon: CheckSquare },
    { name: "Tracker Complet", path: "/tracker", icon: ListTodo },
    { name: "Sport", path: "/sport", icon: Dumbbell },
    { name: "Nutrition", path: "/nutrition", icon: Apple },
    { name: "Planning", path: "/planning", icon: Calendar },
    { name: "Corps", path: "/corps", icon: Activity },
    { name: "Business", path: "/business", icon: Briefcase },
    { name: "Journal", path: "/journal", icon: BookOpen },
    { name: "Config", path: "/config", icon: Settings },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden font-sans">
      {/* Mobile Header (visible only on small screens) */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card">
        <h1 className="text-xl font-bold tracking-tight">Life<span style={{color: "var(--primary)"}}>+</span></h1>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-muted transition-colors bg-background border border-border"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-border bg-card/50 flex-col backdrop-blur-md">
        <div className="p-6">
          <h1 className="text-3xl font-bold tracking-tight">Life<span style={{color: "var(--primary)"}}>+</span></h1>
          <p className="text-sm text-muted-foreground mt-1 font-medium">Systeme d'optimisation</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto mt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/30" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Theme Controls */}
        <div className="p-6 border-t border-border bg-card/80">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-semibold text-muted-foreground">Apparence</span>
            <button 
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full hover:bg-muted transition-colors bg-background border border-border"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5" />
              Accent
            </div>
            <div className="flex justify-between px-1">
              {['lime', 'blue', 'violet', 'orange', 'rose'].map(c => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  className={`w-6 h-6 rounded-full transition-all duration-200 ${accent === c ? 'scale-125 ring-2 ring-offset-2 ring-offset-background ring-border' : 'hover:scale-110'}`}
                  style={{ 
                    backgroundColor: c === 'lime' ? '#84cc16' : 
                                    c === 'blue' ? '#3b82f6' : 
                                    c === 'violet' ? '#8b5cf6' : 
                                    c === 'orange' ? '#f97316' : '#f43f5e'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent pointer-events-none" />
        <Outlet />
      </main>
    </div>
  );
}
