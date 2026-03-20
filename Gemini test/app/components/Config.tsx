import { useState, useEffect } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Config() {
  const [isDark, setIsDark] = useState(true);
  const [customColor, setCustomColor] = useState("#8b5cf6");

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
    
    // Essayer de lire la couleur actuelle
    const currentPrimary = getComputedStyle(html).getPropertyValue('--primary').trim();
    if (currentPrimary && currentPrimary.startsWith('#')) {
      setCustomColor(currentPrimary);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCustomColor(color);
    document.documentElement.style.setProperty('--primary', color);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 relative z-10">
      <div>
        <h2 className="text-3xl font-black tracking-tight">Configuration</h2>
        <p className="text-muted-foreground font-medium mt-1">Personnalise ton système.</p>
      </div>

      <div className="space-y-6">
        
        {/* Theme Toggle */}
        <div className="bg-card border border-border rounded-[24px] p-6 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Mode d'affichage</h3>
            <p className="text-sm font-medium text-muted-foreground">Bascule entre le mode clair et le mode sombre.</p>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="w-14 h-14 rounded-2xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors border border-border"
          >
            {isDark ? <Sun className="w-6 h-6 text-foreground" /> : <Moon className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Custom Color Picker */}
        <div className="bg-card border border-border rounded-[24px] p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Palette className="text-primary w-6 h-6" />
            <div>
              <h3 className="font-bold text-lg">Couleur d'accentuation</h3>
              <p className="text-sm font-medium text-muted-foreground">Clique sur le carré de couleur ci-dessous pour ouvrir le sélecteur précis (façon Photoshop).</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 p-6 bg-muted/30 rounded-2xl border border-border">
            <div className="relative group">
              <input 
                type="color" 
                value={customColor}
                onChange={handleColorChange}
                className="w-20 h-20 p-0 border-0 rounded-2xl cursor-pointer bg-transparent overflow-hidden shadow-lg"
                style={{
                  WebkitAppearance: 'none',
                  border: 'none',
                }}
              />
              <div 
                className="absolute inset-0 rounded-2xl border-4 border-card pointer-events-none group-hover:scale-105 transition-transform"
                style={{ backgroundColor: customColor }}
              />
            </div>
            
            <div>
              <p className="font-bold mb-1">Code Hexadécimal</p>
              <div className="px-4 py-2 bg-background border border-border rounded-lg font-mono text-sm tracking-widest text-muted-foreground">
                {customColor.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
