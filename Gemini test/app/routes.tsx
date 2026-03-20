import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Tracker } from "./components/Tracker";
import { Checklist } from "./components/Checklist";
import { Sport } from "./components/Sport";
import { Nutrition } from "./components/Nutrition";
import { Planning } from "./components/Planning";
import { Corps } from "./components/Corps";
import { Business } from "./components/Business";
import { Journal } from "./components/Journal";
import { Config } from "./components/Config";

function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="p-8 max-w-7xl mx-auto flex items-center justify-center h-[60vh]">
      <div className="text-center space-y-4 opacity-50">
        <h2 className="text-3xl font-black">{title}</h2>
        <p className="text-muted-foreground font-medium">Vue en cours de construction...</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "checklist", Component: Checklist },
      { path: "tracker", Component: Tracker },
      { path: "sport", Component: Sport },
      { path: "nutrition", Component: Nutrition },
      { path: "planning", Component: Planning },
      { path: "corps", Component: Corps },
      { path: "business", Component: Business },
      { path: "journal", Component: Journal },
      { path: "config", Component: Config },
      { path: "*", Component: () => <PlaceholderView title="Page non trouvée" /> },
    ],
  },
]);
