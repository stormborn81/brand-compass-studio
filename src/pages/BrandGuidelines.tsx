import { motion } from "framer-motion";
import GuidelineNav from "@/components/guidelines/GuidelineNav";
import SectionHeader from "@/components/guidelines/SectionHeader";
import ColorSwatch from "@/components/guidelines/ColorSwatch";
import logoPrimary from "@/assets/logo-primary.svg";
import logoHorizontal from "@/assets/logo-horizontal.svg";
import logoMark from "@/assets/logo-mark.svg";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const anim = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
};

const chartData = [
  { month: "Jan", revenue: 4200, clients: 3 },
  { month: "Feb", revenue: 5100, clients: 4 },
  { month: "Mar", revenue: 7800, clients: 5 },
  { month: "Apr", revenue: 9200, clients: 6 },
  { month: "May", revenue: 10400, clients: 7 },
  { month: "Jun", revenue: 12100, clients: 8 },
];

const BrandGuidelines = () => {
  return (
    <div className="min-h-screen bg-background">
      <GuidelineNav />

      <main className="lg:ml-56">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-16 pt-16 pb-24 border-b border-border">
          <motion.div {...anim} className="max-w-3xl">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Launchpad-OS · Design System v1.0</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-4 leading-[1.1]">
              Brand Style<br />Guidelines
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-[55ch]">
              The definitive reference for Storm Jarvie's visual identity across website, social media, presentation decks, charts, and professional documents.
            </p>
            <div className="flex gap-3 mt-8">
              <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground">Website</span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground">Socials</span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground">Decks</span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground">Documents</span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground">Charts</span>
            </div>
          </motion.div>
        </section>

        <div className="px-6 md:px-12 lg:px-16 max-w-5xl">

          {/* ====== 01 OVERVIEW ====== */}
          <SectionHeader id="overview" number="01" title="Overview" subtitle="Design is the infrastructure of trust. If it doesn't facilitate a decision, it is noise." />
          
          <motion.div {...anim} className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Character", values: ["Serious", "Minimal", "Cool-toned", "Spacious"] },
              { label: "Audience", values: ["High-intent professionals", "Transitioning to independent work", "Data-literate decision makers"] },
              { label: "Voice", values: ["Peer-to-peer expert", "Direct & specific", "Numbers over adjectives"] },
            ].map((item) => (
              <div key={item.label} className="shadow-card rounded-xl bg-card p-6">
                <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">{item.label}</span>
                <ul className="mt-4 space-y-2">
                  {item.values.map((v) => (
                    <li key={v} className="text-sm text-foreground">→ {v}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div {...anim} className="mt-8 shadow-card rounded-xl bg-card p-8">
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Philosophy</span>
            <p className="text-foreground mt-4 max-w-[65ch]">
              A "Command Center" for freelancers: high-density information delivered with low-stress visual hierarchy. 
              No literal "space" or "rocket" imagery. We represent "Launch" through momentum and clarity, not metaphors.
            </p>
          </motion.div>

          {/* ====== 02 LOGO ====== */}
          <SectionHeader id="logo" number="02" title="Logo" subtitle="The mark uses a geometric lightning bolt constellation — representing connected thinking, not a literal bolt." />

          <motion.div {...anim} className="grid md:grid-cols-3 gap-6">
            <div className="shadow-card rounded-xl bg-card p-8 flex flex-col items-center justify-center min-h-[240px]">
              <img src={logoPrimary} alt="Storm Jarvie primary logo" className="w-48 h-auto" />
              <span className="font-mono text-[10px] text-muted-foreground mt-4">Primary · On Green</span>
            </div>
            <div className="shadow-card rounded-xl bg-card p-8 flex flex-col items-center justify-center min-h-[240px]">
              <img src={logoHorizontal} alt="Storm Jarvie horizontal logo" className="w-full max-w-[280px] h-auto" />
              <span className="font-mono text-[10px] text-muted-foreground mt-4">Horizontal · Lockup</span>
            </div>
            <div className="shadow-card rounded-xl bg-card p-8 flex flex-col items-center justify-center min-h-[240px]">
              <img src={logoMark} alt="Storm Jarvie logo mark" className="w-24 h-auto" />
              <span className="font-mono text-[10px] text-muted-foreground mt-4">Mark · Icon</span>
            </div>
          </motion.div>

          <motion.div {...anim} className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="shadow-card rounded-xl p-6 bg-card">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Clear Space</span>
              <p className="text-sm text-foreground mt-3">Minimum clear space around the logo equals the height of the lightning bolt mark. Never crowd the logo with other elements.</p>
            </div>
            <div className="shadow-card rounded-xl p-6 bg-card">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Minimum Size</span>
              <p className="text-sm text-foreground mt-3">The mark should not be reproduced smaller than 24px in digital or 8mm in print. The horizontal lockup minimum is 120px wide.</p>
            </div>
          </motion.div>

          {/* ====== 03 COLOR ====== */}
          <SectionHeader id="color" number="03" title="Color Palette" subtitle="Cool Slate base with Forest Green identity. Signal Orange reserved strictly for action states." />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Forest Green" token="--primary" hex="#1A4D2F" hsl="150 48% 20%" className="bg-primary" />
            <ColorSwatch name="Charcoal" token="--foreground" hex="#173026" hsl="150 50% 15%" className="bg-foreground" />
            <ColorSwatch name="Signal Orange" token="--accent" hex="#F07020" hsl="20 90% 55%" className="bg-accent" />
            <ColorSwatch name="Cool Slate" token="--background" hex="#F5F7F9" hsl="210 20% 98%" className="bg-background border border-border" textClass="text-foreground" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <ColorSwatch name="Sage" token="--secondary" hex="#ECF0EC" hsl="150 12% 94%" className="bg-secondary" textClass="text-secondary-foreground" />
            <ColorSwatch name="Slate Gray" token="--muted-foreground" hex="#5C6670" hsl="210 10% 40%" className="bg-muted-foreground" />
            <ColorSwatch name="Border" token="--border" hex="#E2E6EB" hsl="210 15% 90%" className="bg-border" textClass="text-foreground" />
            <ColorSwatch name="Card White" token="--card" hex="#FFFFFF" hsl="0 0% 100%" className="bg-card border border-border" textClass="text-foreground" />
          </div>

          <motion.div {...anim} className="mt-8">
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Chart Series</span>
            <div className="grid grid-cols-5 gap-4 mt-4">
              {[
                { name: "Primary Blue", hex: "#2563EB", className: "bg-chart-1" },
                { name: "Success Green", hex: "#10B981", className: "bg-chart-2" },
                { name: "Warning Amber", hex: "#F59E0B", className: "bg-chart-3" },
                { name: "Indigo", hex: "#6366F1", className: "bg-chart-4" },
                { name: "Forest", hex: "#1A4D2F", className: "bg-chart-5" },
              ].map((c) => (
                <div key={c.name}>
                  <div className={`${c.className} h-16 rounded-lg`} />
                  <p className="text-xs text-foreground mt-2">{c.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{c.hex}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ====== 04 TYPOGRAPHY ====== */}
          <SectionHeader id="typography" number="04" title="Typography" subtitle="Plus Jakarta Sans for all UI and headings. JetBrains Mono for metadata. Source Serif 4 for long-form reading." />

          <motion.div {...anim} className="space-y-8">
            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Display · Plus Jakarta Sans 600</span>
              <p className="text-5xl font-semibold text-foreground mt-4" style={{ letterSpacing: "-0.04em" }}>
                Scale to $10k/mo with 20% higher margins.
              </p>
            </div>

            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Body · Plus Jakarta Sans 400</span>
              <p className="text-base text-foreground mt-4 max-w-[65ch]" style={{ lineHeight: 1.6 }}>
                You work directly with me. No account managers, no juniors, no overhead. I have 15 years across product, growth and experimentation, including leading a growth team that ran 250+ experiments and delivered over $70M in incremental revenue.
              </p>
            </div>

            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Mono · JetBrains Mono 400</span>
              <p className="font-mono text-sm text-foreground mt-4">
                GA4 Property · Editor Role · Version 1.0 · $24,900 AUD ex GST
              </p>
            </div>

            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Serif · Source Serif 4 400</span>
              <p className="font-serif text-lg text-foreground mt-4 max-w-[65ch]" style={{ lineHeight: 1.6 }}>
                "Storm's audit uncovered tracking gaps we'd been ignoring for two years. Within a month of implementing his fixes, we could finally see which channels were actually driving purchases."
              </p>
            </div>
          </motion.div>

          <motion.div {...anim} className="mt-8 shadow-card rounded-xl bg-card p-6">
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Type Scale</span>
            <div className="mt-4 space-y-3">
              {[
                { label: "Display", size: "text-5xl", weight: "font-semibold", spec: "48px / -0.04em / 600" },
                { label: "H1", size: "text-3xl", weight: "font-semibold", spec: "30px / -0.04em / 600" },
                { label: "H2", size: "text-2xl", weight: "font-semibold", spec: "24px / -0.04em / 600" },
                { label: "H3", size: "text-xl", weight: "font-medium", spec: "20px / -0.04em / 500" },
                { label: "Body", size: "text-base", weight: "font-normal", spec: "16px / 1.6 line-height / 400" },
                { label: "Small", size: "text-sm", weight: "font-normal", spec: "14px / 1.6 line-height / 400" },
                { label: "Mono", size: "text-xs", weight: "font-normal", spec: "12px / monospace / 400" },
              ].map((t) => (
                <div key={t.label} className="flex items-baseline justify-between border-b border-border pb-3 last:border-0">
                  <span className={`${t.size} ${t.weight} text-foreground`} style={{ letterSpacing: "-0.04em" }}>{t.label}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{t.spec}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ====== 05 COMPONENTS ====== */}
          <SectionHeader id="components" number="05" title="Components" subtitle="Reusable building blocks: buttons, cards, and form elements with consistent spacing and radius." />

          <motion.div {...anim} className="space-y-8">
            {/* Buttons */}
            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Buttons</span>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all duration-100 hover:-translate-y-px hover:shadow-lg">
                  Primary Action
                </button>
                <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all duration-100 hover:-translate-y-px hover:shadow-lg">
                  Signal Action
                </button>
                <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all duration-100 hover:-translate-y-px">
                  Secondary
                </button>
                <button className="border border-border bg-card text-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all duration-100 hover:-translate-y-px hover:shadow-card">
                  Outline
                </button>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <span className="font-mono text-[10px] text-muted-foreground">Radius: 8px · Padding: px-6 py-3 · Hover: translate-y-[-1px] + shadow-lg · Easing: cubic-bezier(0.4, 0, 0.2, 1)</span>
              </div>
            </div>

            {/* Data Card */}
            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Data Cards</span>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {[
                  { label: "Revenue", value: "$24,900", delta: "+18%", positive: true },
                  { label: "Clients", value: "8", delta: "+3", positive: true },
                  { label: "Avg. Project", value: "$3,112", delta: "-2%", positive: false },
                ].map((d) => (
                  <div key={d.label} className="shadow-card rounded-xl bg-card p-6">
                    <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">{d.label}</span>
                    <p className="text-3xl font-semibold text-foreground mt-2" style={{ letterSpacing: "-0.04em" }}>{d.value}</p>
                    <span className={`font-mono text-xs mt-1 ${d.positive ? "text-chart-2" : "text-destructive"}`}>{d.delta}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <span className="font-mono text-[10px] text-muted-foreground">White bg · 1px rgba(0,0,0,0.05) outline · 12px radius · Header: monospace 0.75rem</span>
              </div>
            </div>

            {/* Depth */}
            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Shadow & Radius System</span>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-sm font-medium text-foreground">Concentric Radius</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>Outer Container: <span className="font-mono text-foreground">12px</span></li>
                    <li>Inner Component: <span className="font-mono text-foreground">8px</span> (assumes 4px padding)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Layered Shadow Stack</p>
                  <code className="block mt-3 font-mono text-[11px] text-muted-foreground bg-secondary rounded-md p-3 leading-relaxed">
                    0 0 0 1px rgba(0,0,0,.05),<br/>
                    0 2px 4px rgba(0,0,0,.05),<br/>
                    0 12px 24px rgba(0,0,0,.05)
                  </code>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ====== 06 DOCUMENTS ====== */}
          <SectionHeader id="documents" number="06" title="Documents" subtitle="Professional documents follow A4 format with consistent headers, footers, and typographic hierarchy." />

          <motion.div {...anim} className="shadow-card rounded-xl bg-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Document Standards</span>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  <li className="flex gap-3"><span className="text-muted-foreground">Format</span> A4 (210 × 297mm)</li>
                  <li className="flex gap-3"><span className="text-muted-foreground">Margins</span> 1 inch (25.4mm) all sides</li>
                  <li className="flex gap-3"><span className="text-muted-foreground">Header</span> Logo mark top-left, page number in mono top-right</li>
                  <li className="flex gap-3"><span className="text-muted-foreground">Footer</span> Brand mark bottom-left, URL bottom-right</li>
                  <li className="flex gap-3"><span className="text-muted-foreground">Body font</span> Plus Jakarta Sans 400, 11pt</li>
                  <li className="flex gap-3"><span className="text-muted-foreground">Headings</span> Plus Jakarta Sans 600, section-numbered</li>
                  <li className="flex gap-3"><span className="text-muted-foreground">Metadata</span> JetBrains Mono, dates, versions, prices</li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Document Types</span>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  <li className="flex gap-3"><span className="font-mono text-xs text-accent">SOW</span> Scope of Works — client proposals</li>
                  <li className="flex gap-3"><span className="font-mono text-xs text-accent">RPT</span> Audit & Gap Reports</li>
                  <li className="flex gap-3"><span className="font-mono text-xs text-accent">GDE</span> Reporting & Training Guides</li>
                  <li className="flex gap-3"><span className="font-mono text-xs text-accent">INV</span> Invoices</li>
                </ul>
                <div className="mt-6 p-4 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    Footer stamp: <span className="font-mono">Storm Jarvie · www.stormjarvie.com.au · [Doc Title] · Confidential</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...anim} className="mt-6 shadow-card rounded-xl bg-card p-8">
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Section Heading Pattern</span>
            <div className="mt-6 border-l-4 border-primary pl-6">
              <p className="font-mono text-xs text-muted-foreground">SECTION 01</p>
              <h3 className="text-2xl font-semibold text-foreground mt-1">Background & Context</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-[55ch]">
                Green left-border accent. Monospace section number. Heading in Plus Jakarta Sans 600.
                Body text left-aligned, max 65 characters per line.
              </p>
            </div>
          </motion.div>

          {/* ====== 07 SOCIALS ====== */}
          <SectionHeader id="socials" number="07" title="Social Media" subtitle="Two post archetypes: the Insight Post (white/data) and the Proof Post (dark/testimonial)." />

          <motion.div {...anim} className="grid md:grid-cols-2 gap-6">
            {/* Insight Post */}
            <div className="shadow-card rounded-xl overflow-hidden">
              <div className="aspect-square bg-card border border-border p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Storm Jarvie · Insight</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground" style={{ letterSpacing: "-0.04em" }}>
                    Your GA4 data is<br />
                    <span className="text-accent">probably wrong.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 max-w-[30ch]">
                    73% of Magento stores have duplicate purchase events firing. Here's how to check.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={logoMark} alt="" className="w-5 h-5" />
                  <span className="font-mono text-[10px] text-muted-foreground">stormjarvie.com.au</span>
                </div>
              </div>
              <div className="p-4 bg-card">
                <span className="font-mono text-[10px] text-muted-foreground">"Insight" Post · 1080×1080 · White bg, one highlight color</span>
              </div>
            </div>

            {/* Proof Post */}
            <div className="shadow-card rounded-xl overflow-hidden">
              <div className="aspect-square bg-foreground p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-background/60 uppercase tracking-widest">Storm Jarvie · Proof</span>
                </div>
                <div>
                  <p className="font-serif text-xl text-background/90 italic leading-relaxed">
                    "Within a month of implementing his fixes, we could finally see which channels were actually driving purchases."
                  </p>
                  <p className="font-mono text-xs text-background/50 mt-4">— Head of Digital, Enterprise Retailer</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-background/40">stormjarvie.com.au</span>
                </div>
              </div>
              <div className="p-4 bg-card">
                <span className="font-mono text-[10px] text-muted-foreground">"Proof" Post · 1080×1080 · Dark bg, serif testimonial</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...anim} className="mt-6 shadow-card rounded-xl bg-card p-6">
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Social Rules</span>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li>→ Format: 1080 × 1080px for feed posts</li>
              <li>→ Layout: Swiss Style — large-scale typography paired with micro-copy</li>
              <li>→ Insight posts: white bg, 10% cool-gray border, one accent highlight</li>
              <li>→ Proof posts: dark (foreground) bg, serif font for "Story" feel</li>
              <li>→ Always include brand mark and URL in the safe zone</li>
            </ul>
          </motion.div>

          {/* ====== 08 CHARTS ====== */}
          <SectionHeader id="charts" number="08" title="Charts & Data Visualization" subtitle="Clean, functional data presentation. No 3D, no shadows on data elements, no gradient fills." />

          <motion.div {...anim} className="grid md:grid-cols-2 gap-6">
            <div className="shadow-card rounded-xl bg-card p-6">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Line Chart</span>
              <div className="mt-4 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 90%)" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }} stroke="hsl(210 15% 90%)" />
                    <YAxis tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }} stroke="none" />
                    <Tooltip contentStyle={{ fontFamily: "JetBrains Mono", fontSize: 11, borderRadius: 8, border: "1px solid hsl(210 15% 90%)" }} />
                    <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="shadow-card rounded-xl bg-card p-6">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Bar Chart</span>
              <div className="mt-4 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 90%)" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }} stroke="hsl(210 15% 90%)" />
                    <YAxis tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }} stroke="none" />
                    <Tooltip contentStyle={{ fontFamily: "JetBrains Mono", fontSize: 11, borderRadius: 8, border: "1px solid hsl(210 15% 90%)" }} />
                    <Bar dataKey="clients" fill="#1A4D2F" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          <motion.div {...anim} className="mt-6 shadow-card rounded-xl bg-card p-6">
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Chart Rules</span>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <ul className="space-y-2 text-sm text-foreground">
                <li>→ No 3D effects, no shadows on bars/lines</li>
                <li>→ 2pt stroke width for line charts</li>
                <li>→ Remove Y-axis line; use subtle horizontal gridlines only</li>
                <li>→ Use <span className="font-mono text-xs">JetBrains Mono</span> for all axis labels</li>
              </ul>
              <ul className="space-y-2 text-sm text-foreground">
                <li>→ Use the chart color series in order</li>
                <li>→ Solid fills only — no gradients on data</li>
                <li>→ Bar charts get 4px top radius</li>
                <li>→ Tooltips: 8px radius, 1px border, mono font</li>
              </ul>
            </div>
          </motion.div>

          {/* Presentation */}
          <motion.div {...anim} className="mt-8 shadow-card rounded-xl bg-card p-8">
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Presentation Decks</span>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <p className="text-sm font-medium text-foreground">Layout</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Aspect ratio: <span className="font-mono text-foreground">16:9</span></li>
                  <li>Grid: <span className="font-mono text-foreground">4-column "Power Grid"</span></li>
                  <li>Safe zone: <span className="font-mono text-foreground">80px</span> margin all edges</li>
                  <li>Max 3 bullet points per slide</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Hierarchy</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>One L1 headline per slide</li>
                  <li>If &gt;3 bullets needed, split into two slides</li>
                  <li>Charts: one per slide, full width within grid</li>
                  <li>Footer: brand mark + page number</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ====== 09 ANTI-PATTERNS ====== */}
          <SectionHeader id="anti-patterns" number="09" title="Anti-Patterns" subtitle="The 'No' list. These patterns are explicitly rejected from the brand system." />

          <motion.div {...anim} className="grid md:grid-cols-2 gap-6 pb-24">
            {[
              { title: "No Gradients", desc: "We use solid, confident fills. Gradients feel like marketing fluff." },
              { title: "No Center-Aligned Body", desc: "All prose is left-aligned for readability. Headlines may centre on slides only." },
              { title: "No Stock People", desc: "Use UI crops, abstract geometric patterns, or architectural photography. Never 'smiling person at laptop.'" },
              { title: "No Soft Colors", desc: "No pastels. Every color must have enough contrast to be functional." },
              { title: "No Solid #000 Borders", desc: "Use the layered shadow stack for all cards and containers." },
              { title: "No Generic Fonts", desc: "Never use Inter, Poppins, or system defaults. The type system is Plus Jakarta Sans, JetBrains Mono, Source Serif 4." },
            ].map((item) => (
              <div key={item.title} className="shadow-card rounded-xl bg-card p-6 border-l-4 border-destructive">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Motion Reference */}
          <motion.div {...anim} className="pb-24">
            <div className="shadow-card rounded-xl bg-card p-8">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Motion Reference</span>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-foreground">Easing</p>
                  <code className="block font-mono text-xs text-muted-foreground mt-2 bg-secondary rounded-md p-3">
                    cubic-bezier(0.4, 0, 0.2, 1)
                  </code>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Durations</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Hover states: <span className="font-mono text-foreground">200ms</span></li>
                    <li>Layout shifts: <span className="font-mono text-foreground">300ms</span></li>
                    <li>Page entrances: <span className="font-mono text-foreground">300ms</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">Standard Entrance</p>
                <code className="block font-mono text-[11px] text-muted-foreground mt-2 bg-secondary rounded-md p-4 leading-relaxed whitespace-pre">{`{
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
}`}</code>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default BrandGuidelines;
