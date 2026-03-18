import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "logo", label: "Logo" },
  { id: "color", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "components", label: "Components" },
  { id: "documents", label: "Documents" },
  { id: "socials", label: "Socials" },
  { id: "charts", label: "Charts & Data" },
  { id: "anti-patterns", label: "Anti-Patterns" },
];

const GuidelineNav = () => {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-screen w-56 border-r border-border bg-card p-6 hidden lg:flex flex-col z-50">
      <div className="mb-8">
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Brand System</span>
        <h2 className="text-sm font-semibold text-foreground mt-1">Storm Jarvie</h2>
      </div>
      <div className="space-y-1 flex-1">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block px-3 py-2 text-sm rounded-md transition-all duration-200 ${
              active === id
                ? "bg-primary text-primary-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="pt-4 border-t border-border">
        <span className="font-mono text-[10px] text-muted-foreground">v1.0 · March 2026</span>
      </div>
    </nav>
  );
};

export default GuidelineNav;
