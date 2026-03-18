import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Maximize2, ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import SlideLayout, { ScaledSlide } from "@/components/slides/SlideLayout";
import logoMark from "@/assets/logo-mark.svg";
import logoTransparent from "@/assets/logo-transparent.png";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from "recharts";

// ─── Sample Data ───
const chartData = [
  { month: "Jan", value: 4200, compare: 3800 },
  { month: "Feb", value: 5100, compare: 4200 },
  { month: "Mar", value: 7800, compare: 5900 },
  { month: "Apr", value: 9200, compare: 7100 },
  { month: "May", value: 10400, compare: 8800 },
  { month: "Jun", value: 12100, compare: 9500 },
];

const tableData = [
  { metric: "Conversion Rate", baseline: "2.1%", variant: "3.4%", change: "+61.9%", sig: "Yes" },
  { metric: "Bounce Rate", baseline: "58%", variant: "42%", change: "-27.6%", sig: "Yes" },
  { metric: "Avg. Session", baseline: "1:42", variant: "2:18", change: "+35.3%", sig: "No" },
  { metric: "Revenue/Visitor", baseline: "$4.20", variant: "$6.80", change: "+61.9%", sig: "Yes" },
];

// ─── Slide definitions ───
interface SlideDef {
  id: string;
  label: string;
  category: string;
  render: (n: number, total: number) => React.ReactNode;
}

const BRAND_FOREST = "hsl(150, 48%, 20%)";
const BRAND_ORANGE = "hsl(20, 90%, 55%)";
const BRAND_SAGE = "hsl(150, 15%, 92%)";
const BRAND_CHARCOAL = "hsl(150, 50%, 15%)";
const CHART_1 = "hsl(217, 91%, 60%)";
const CHART_2 = "hsl(160, 84%, 39%)";

// Phone frame component
const PhoneFrame = ({ label, children }: { label?: string; children?: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-[16px]">
    {label && <span className="font-mono text-[18px] text-[hsl(210,10%,40%)] tracking-widest uppercase">{label}</span>}
    <div className="w-[320px] h-[640px] rounded-[40px] border-[6px] border-[hsl(150,50%,15%)] bg-[hsl(210,20%,98%)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[hsl(150,50%,15%)] rounded-b-[14px]" />
      <div className="absolute inset-[20px] top-[40px] bg-[hsl(150,15%,92%)] rounded-[8px] flex items-center justify-center">
        {children || <span className="font-mono text-[14px] text-[hsl(210,10%,40%)]">375 × 812</span>}
      </div>
    </div>
  </div>
);

// Browser frame component
const BrowserFrame = ({ children }: { children?: React.ReactNode }) => (
  <div className="w-full h-full flex flex-col rounded-[12px] border-[3px] border-[hsl(210,15%,85%)] bg-[hsl(0,0%,100%)] overflow-hidden">
    <div className="h-[44px] bg-[hsl(210,15%,95%)] flex items-center px-[16px] gap-[8px] shrink-0">
      <div className="flex gap-[6px]">
        <div className="w-[12px] h-[12px] rounded-full bg-[hsl(0,70%,65%)]" />
        <div className="w-[12px] h-[12px] rounded-full bg-[hsl(45,70%,60%)]" />
        <div className="w-[12px] h-[12px] rounded-full bg-[hsl(140,50%,55%)]" />
      </div>
      <div className="flex-1 mx-[12px] h-[28px] rounded-[6px] bg-[hsl(210,15%,90%)] flex items-center px-[12px]">
        <span className="font-mono text-[12px] text-[hsl(210,10%,50%)]">stormjarvie.com.au</span>
      </div>
    </div>
    <div className="flex-1 bg-[hsl(150,15%,92%)] flex items-center justify-center">
      {children || <span className="font-mono text-[16px] text-[hsl(210,10%,40%)]">1440 × 900</span>}
    </div>
  </div>
);

// Insight callout box
const InsightCallout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-[20px] bg-[hsl(150,20%,94%)] rounded-[12px] px-[32px] py-[24px] mt-[24px]">
    <Lightbulb className="w-[28px] h-[28px] text-[hsl(20,90%,55%)] shrink-0 mt-[2px]" />
    <p className="text-[20px] leading-[1.6] text-[hsl(210,10%,30%)] font-serif">{children}</p>
  </div>
);

const slides: SlideDef[] = [
  // 1. Cover
  {
    id: "cover", label: "Cover", category: "Structure",
    render: (n, t) => (
      <SlideLayout dark slideNumber={n} totalSlides={t}>
        <div className="flex-1 flex flex-col justify-center">
          <img src={logoTransparent} alt="Storm Jarvie" className="h-[56px] w-auto mb-[60px]" style={{ filter: "brightness(0) invert(1)" }} />
          <h1 className="text-[72px] font-bold leading-[1.1] tracking-[-0.04em] max-w-[1200px]">
            Monthly Performance<br />Review
          </h1>
          <p className="text-[28px] font-light mt-[24px] text-[hsl(0,0%,100%)]/70">
            Digital Strategy & Growth Report
          </p>
          <div className="flex items-center gap-[24px] mt-[60px]">
            <span className="font-mono text-[16px] text-[hsl(0,0%,100%)]/50">March 2026</span>
            <span className="w-[40px] h-[2px] bg-[hsl(20,90%,55%)]" />
            <span className="font-mono text-[16px] text-[hsl(0,0%,100%)]/50">Storm Jarvie</span>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 2. Agenda
  {
    id: "agenda", label: "Agenda", category: "Structure",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Agenda</span>
        <h2 className="text-[52px] font-bold tracking-[-0.04em] mb-[60px]">Today's Discussion</h2>
        <div className="flex-1 flex flex-col gap-[28px] max-w-[1000px]">
          {["Performance Overview", "Channel Analysis", "Experiment Results", "Key Insights", "Recommendations", "Next Steps"].map((item, i) => (
            <div key={i} className="flex items-center gap-[24px] group">
              <span className="font-mono text-[32px] font-bold text-[hsl(20,90%,55%)] w-[60px]">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[32px] font-medium">{item}</span>
              <div className="flex-1 border-b border-dashed border-[hsl(210,15%,85%)]" />
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  // 3. Full Text + Title
  {
    id: "full-text", label: "Full Text + Title", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Section Title</span>
        <h2 className="text-[56px] font-bold tracking-[-0.04em] leading-[1.15] mb-[40px] max-w-[1400px]">
          Strategic positioning drives<br />sustainable growth
        </h2>
        <p className="text-[26px] leading-[1.7] text-[hsl(210,10%,40%)] max-w-[1200px] font-serif">
          A well-defined digital strategy doesn't just increase traffic — it fundamentally transforms 
          how your business acquires, engages, and retains customers. By aligning your online presence 
          with your core value proposition, every touchpoint becomes an opportunity to build trust and 
          drive conversions.
        </p>
        <p className="text-[26px] leading-[1.7] text-[hsl(210,10%,40%)] max-w-[1200px] font-serif mt-[24px]">
          The data consistently shows that businesses investing in strategic digital foundations 
          see 3–5× returns within the first 12 months, compared to those taking ad-hoc approaches.
        </p>
      </SlideLayout>
    ),
  },
  // 4. Half Text / Half Callout
  {
    id: "half-callout", label: "Half Text / Callout", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t} noPadding>
        <div className="absolute inset-0 flex">
          <div className="w-1/2 p-[80px] flex flex-col justify-center">
            <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Key Finding</span>
            <h2 className="text-[48px] font-bold tracking-[-0.04em] leading-[1.15] mb-[32px]">
              Organic search now drives the majority of qualified leads
            </h2>
            <p className="text-[22px] leading-[1.7] text-[hsl(210,10%,40%)] font-serif">
              After implementing the revised content strategy in Q1, organic search traffic 
              increased by 147% while cost per acquisition dropped to its lowest point in 18 months.
            </p>
          </div>
          <div className="w-1/2 bg-[hsl(150,48%,20%)] flex flex-col items-center justify-center text-[hsl(0,0%,100%)]">
            <span className="font-mono text-[18px] tracking-widest uppercase text-[hsl(0,0%,100%)]/50 mb-[24px]">Organic Growth</span>
            <span className="text-[144px] font-bold tracking-[-0.06em] leading-none">147%</span>
            <span className="text-[24px] font-light mt-[16px] text-[hsl(0,0%,100%)]/70">increase in qualified traffic</span>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 5. Half Text / Half Image
  {
    id: "half-image", label: "Half Text / Image", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t} noPadding>
        <div className="absolute inset-0 flex">
          <div className="w-1/2 p-[80px] flex flex-col justify-center">
            <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Visual Context</span>
            <h2 className="text-[48px] font-bold tracking-[-0.04em] leading-[1.15] mb-[32px]">
              Supporting visual goes here with context
            </h2>
            <p className="text-[22px] leading-[1.7] text-[hsl(210,10%,40%)] font-serif">
              Use this layout when you need to pair an explanation with a relevant image, 
              diagram, or visual asset that reinforces the point.
            </p>
          </div>
          <div className="w-1/2 bg-[hsl(150,15%,92%)] flex items-center justify-center">
            <div className="w-[680px] h-[680px] rounded-[16px] border-2 border-dashed border-[hsl(210,15%,85%)] flex flex-col items-center justify-center gap-[16px]">
              <div className="w-[64px] h-[64px] rounded-[8px] bg-[hsl(210,15%,85%)] flex items-center justify-center">
                <span className="text-[28px]">🖼</span>
              </div>
              <span className="font-mono text-[16px] text-[hsl(210,10%,40%)]">Image Placeholder</span>
              <span className="font-mono text-[13px] text-[hsl(210,10%,55%)]">960 × 1080 recommended</span>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 6. Half Text / Desktop Screenshot
  {
    id: "half-desktop", label: "Half Text / Desktop", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t} noPadding>
        <div className="absolute inset-0 flex">
          <div className="w-[45%] p-[80px] flex flex-col justify-center">
            <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Desktop View</span>
            <h2 className="text-[44px] font-bold tracking-[-0.04em] leading-[1.15] mb-[32px]">
              Homepage redesign improves first impressions
            </h2>
            <p className="text-[20px] leading-[1.7] text-[hsl(210,10%,40%)] font-serif">
              The new hero section clearly communicates the value proposition within 3 seconds, 
              resulting in a 34% reduction in bounce rate.
            </p>
          </div>
          <div className="w-[55%] p-[60px] pl-0 flex items-center">
            <BrowserFrame />
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 7. Half Text / Mobile Screenshot
  {
    id: "half-mobile", label: "Half Text / Mobile", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t} noPadding>
        <div className="absolute inset-0 flex">
          <div className="w-[55%] p-[80px] flex flex-col justify-center">
            <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Mobile Experience</span>
            <h2 className="text-[48px] font-bold tracking-[-0.04em] leading-[1.15] mb-[32px]">
              Mobile-first design drives 68% of all conversions
            </h2>
            <p className="text-[22px] leading-[1.7] text-[hsl(210,10%,40%)] font-serif">
              With the majority of traffic coming from mobile devices, the responsive experience 
              is now the primary conversion pathway.
            </p>
          </div>
          <div className="w-[45%] flex items-center justify-center">
            <PhoneFrame />
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 8. AB Test Comparison
  {
    id: "ab-test", label: "A/B Test Comparison", category: "Experiments",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">A/B Test</span>
        <h2 className="text-[48px] font-bold tracking-[-0.04em] mb-[12px]">CTA Button Redesign</h2>
        <p className="text-[22px] text-[hsl(210,10%,40%)] mb-[48px]">Comparing current design against proposed variant</p>
        <div className="flex-1 flex items-center justify-center gap-[120px]">
          <PhoneFrame label="Control (A)">
            <div className="flex flex-col items-center justify-center h-full gap-[12px]">
              <div className="w-[200px] h-[40px] rounded-[6px] bg-[hsl(210,15%,85%)]" />
              <div className="w-[160px] h-[40px] rounded-[6px] bg-[hsl(150,48%,20%)] flex items-center justify-center">
                <span className="text-[14px] text-[hsl(0,0%,100%)] font-semibold">Get Started</span>
              </div>
            </div>
          </PhoneFrame>
          <div className="flex flex-col items-center gap-[16px]">
            <span className="font-mono text-[14px] text-[hsl(210,10%,40%)]">VS</span>
            <div className="w-[2px] h-[200px] bg-[hsl(210,15%,90%)]" />
          </div>
          <PhoneFrame label="Variant (B)">
            <div className="flex flex-col items-center justify-center h-full gap-[12px]">
              <div className="w-[200px] h-[40px] rounded-[6px] bg-[hsl(210,15%,85%)]" />
              <div className="w-[200px] h-[48px] rounded-[8px] bg-[hsl(20,90%,55%)] flex items-center justify-center">
                <span className="text-[15px] text-[hsl(0,0%,100%)] font-bold">Start Free Trial →</span>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </SlideLayout>
    ),
  },
  // 9. Experiment Results
  {
    id: "experiment-results", label: "Experiment Results", category: "Experiments",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Experiment Results</span>
        <h2 className="text-[48px] font-bold tracking-[-0.04em] mb-[48px]">CTA Button Redesign — Results</h2>
        <div className="flex-1 flex gap-[60px]">
          <div className="flex-1 flex flex-col gap-[40px]">
            <div>
              <span className="font-mono text-[14px] text-[hsl(210,10%,40%)] uppercase tracking-wider">Hypothesis</span>
              <p className="text-[24px] leading-[1.6] mt-[12px] font-serif text-[hsl(210,10%,30%)]">
                A larger, orange CTA with action-oriented copy will increase sign-up conversion rate by ≥15%.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[32px]">
              {[
                { label: "Conversion Rate", value: "+61.9%", sub: "2.1% → 3.4%" },
                { label: "Statistical Sig.", value: "98.2%", sub: "p = 0.018" },
                { label: "Sample Size", value: "12,400", sub: "per variant" },
              ].map((m, i) => (
                <div key={i} className="bg-[hsl(150,15%,92%)] rounded-[12px] p-[32px]">
                  <span className="font-mono text-[13px] text-[hsl(210,10%,40%)] uppercase tracking-wider">{m.label}</span>
                  <div className="text-[48px] font-bold tracking-[-0.04em] mt-[8px]">{m.value}</div>
                  <span className="font-mono text-[14px] text-[hsl(210,10%,50%)]">{m.sub}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[360px] flex flex-col items-center justify-center">
            <div className="w-full bg-[hsl(160,84%,39%)] rounded-[16px] p-[40px] flex flex-col items-center text-[hsl(0,0%,100%)]">
              <span className="font-mono text-[16px] tracking-widest uppercase opacity-70">Verdict</span>
              <span className="text-[56px] font-bold mt-[8px]">WIN</span>
              <span className="text-[18px] mt-[8px] opacity-80">Ship to 100%</span>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 10. Data: Single Chart
  {
    id: "data-single", label: "Data: Single Chart", category: "Data",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Performance Data</span>
        <h2 className="text-[48px] font-bold tracking-[-0.04em] mb-[24px]">Revenue Growth — H1 2026</h2>
        <InsightCallout>Revenue acceleration in Q2 correlates with the new content strategy launch in March. Organic channel drove 68% of net-new revenue.</InsightCallout>
        <div className="flex-1 mt-[24px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barSize={60}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,15%,90%)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontFamily: "JetBrains Mono", fontSize: 18, fill: "hsl(210,10%,40%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontFamily: "JetBrains Mono", fontSize: 16, fill: "hsl(210,10%,50%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
              <Tooltip contentStyle={{ fontFamily: "JetBrains Mono", fontSize: 14 }} />
              <Bar dataKey="value" fill={BRAND_FOREST} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SlideLayout>
    ),
  },
  // 11. Data: Two Charts
  {
    id: "data-double", label: "Data: Two Charts", category: "Data",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Comparison</span>
        <h2 className="text-[48px] font-bold tracking-[-0.04em] mb-[16px]">Revenue vs. Benchmark</h2>
        <InsightCallout>We outperformed industry benchmarks by 34% in Q2, with the gap widening each month — indicating compounding returns from strategic investment.</InsightCallout>
        <div className="flex-1 flex gap-[60px] mt-[24px]">
          <div className="flex-1 flex flex-col">
            <span className="font-mono text-[16px] text-[hsl(210,10%,40%)] mb-[16px]">Actual Revenue</span>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barSize={40}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,15%,90%)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontFamily: "JetBrains Mono", fontSize: 14, fill: "hsl(210,10%,40%)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontFamily: "JetBrains Mono", fontSize: 13, fill: "hsl(210,10%,50%)" }} axisLine={false} tickLine={false} />
                  <Bar dataKey="value" fill={BRAND_FOREST} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="font-mono text-[16px] text-[hsl(210,10%,40%)] mb-[16px]">Industry Benchmark</span>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,15%,90%)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontFamily: "JetBrains Mono", fontSize: 14, fill: "hsl(210,10%,40%)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontFamily: "JetBrains Mono", fontSize: 13, fill: "hsl(210,10%,50%)" }} axisLine={false} tickLine={false} />
                  <Line type="monotone" dataKey="compare" stroke={CHART_1} strokeWidth={3} dot={{ r: 5, fill: CHART_1 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 12. Data: Table
  {
    id: "data-table", label: "Data: Table", category: "Data",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Detailed Results</span>
        <h2 className="text-[48px] font-bold tracking-[-0.04em] mb-[48px]">Experiment Metrics Breakdown</h2>
        <div className="flex-1">
          <table className="w-full">
            <thead>
              <tr className="border-b-[3px] border-[hsl(150,48%,20%)]">
                {["Metric", "Baseline", "Variant", "Change", "Significant"].map((h) => (
                  <th key={h} className="text-left py-[20px] px-[24px] font-mono text-[16px] text-[hsl(210,10%,40%)] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="border-b border-[hsl(210,15%,90%)]">
                  <td className="py-[24px] px-[24px] text-[22px] font-semibold">{row.metric}</td>
                  <td className="py-[24px] px-[24px] font-mono text-[22px] text-[hsl(210,10%,40%)]">{row.baseline}</td>
                  <td className="py-[24px] px-[24px] font-mono text-[22px] text-[hsl(210,10%,40%)]">{row.variant}</td>
                  <td className="py-[24px] px-[24px] font-mono text-[22px] font-bold text-[hsl(160,84%,39%)]">{row.change}</td>
                  <td className="py-[24px] px-[24px]">
                    <span className={`font-mono text-[15px] px-[16px] py-[6px] rounded-full ${
                      row.sig === "Yes" 
                        ? "bg-[hsl(160,84%,39%)]/10 text-[hsl(160,84%,39%)]" 
                        : "bg-[hsl(210,10%,93%)] text-[hsl(210,10%,40%)]"
                    }`}>{row.sig}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SlideLayout>
    ),
  },
  // 13. Key Insight / Callout
  {
    id: "key-insight", label: "Key Insight", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[16px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[40px]">Key Insight</span>
          <h2 className="text-[80px] font-bold tracking-[-0.04em] leading-[1.1] max-w-[1400px]">
            Every $1 invested in SEO returned <span className="text-[hsl(20,90%,55%)]">$4.30</span> in qualified pipeline
          </h2>
          <p className="text-[24px] text-[hsl(210,10%,40%)] mt-[40px] font-serif max-w-[800px]">
            Based on 6-month trailing data, Jan–Jun 2026
          </p>
        </div>
      </SlideLayout>
    ),
  },
  // 14. Sub-Divider
  {
    id: "sub-divider", label: "Sub-Divider", category: "Structure",
    render: (n, t) => (
      <SlideLayout dark slideNumber={n} totalSlides={t}>
        <div className="flex-1 flex flex-col justify-center">
          <span className="font-mono text-[80px] font-bold text-[hsl(20,90%,55%)] leading-none mb-[24px]">03</span>
          <h2 className="text-[64px] font-bold tracking-[-0.04em]">Experiment<br />Results</h2>
          <div className="w-[80px] h-[4px] bg-[hsl(20,90%,55%)] mt-[40px]" />
        </div>
      </SlideLayout>
    ),
  },
  // 15. Thank You / Contact
  {
    id: "thank-you", label: "Thank You", category: "Structure",
    render: (n, t) => (
      <SlideLayout dark slideNumber={n} totalSlides={t}>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <img src={logoTransparent} alt="Storm Jarvie" className="h-[64px] mb-[48px]" style={{ filter: "brightness(0) invert(1)" }} />
          <h2 className="text-[72px] font-bold tracking-[-0.04em] mb-[24px]">Thank You</h2>
          <p className="text-[28px] text-[hsl(0,0%,100%)]/60 font-light">Let's keep the momentum going.</p>
          <div className="flex items-center gap-[48px] mt-[60px] text-[hsl(0,0%,100%)]/50 font-mono text-[18px]">
            <span>storm@stormjarvie.com.au</span>
            <span className="w-[4px] h-[4px] rounded-full bg-[hsl(20,90%,55%)]" />
            <span>stormjarvie.com.au</span>
            <span className="w-[4px] h-[4px] rounded-full bg-[hsl(20,90%,55%)]" />
            <span>LinkedIn</span>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 16. Timeline / Process
  {
    id: "timeline", label: "Timeline / Process", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t}>
        <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Process</span>
        <h2 className="text-[48px] font-bold tracking-[-0.04em] mb-[60px]">Project Timeline</h2>
        <div className="flex-1 flex items-center">
          <div className="flex items-start w-full">
            {[
              { phase: "Discovery", weeks: "Weeks 1–2", desc: "Audit, research, stakeholder interviews" },
              { phase: "Strategy", weeks: "Weeks 3–4", desc: "Roadmap, KPIs, channel plan" },
              { phase: "Build", weeks: "Weeks 5–8", desc: "Design, development, content creation" },
              { phase: "Launch", weeks: "Week 9", desc: "Go-live, monitoring, optimization" },
            ].map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative">
                {i < 3 && <div className="absolute top-[28px] left-[50%] w-full h-[3px] bg-[hsl(150,15%,92%)]" />}
                <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center z-10 font-mono text-[20px] font-bold ${
                  i === 3 ? "bg-[hsl(20,90%,55%)] text-[hsl(0,0%,100%)]" : "bg-[hsl(150,48%,20%)] text-[hsl(0,0%,100%)]"
                }`}>{i + 1}</div>
                <span className="text-[24px] font-bold mt-[24px]">{step.phase}</span>
                <span className="font-mono text-[15px] text-[hsl(20,90%,55%)] mt-[8px]">{step.weeks}</span>
                <p className="text-[18px] text-[hsl(210,10%,40%)] mt-[12px] max-w-[280px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 17. Comparison / Before-After
  {
    id: "before-after", label: "Before / After", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t} noPadding>
        <div className="absolute inset-0 flex">
          <div className="w-1/2 p-[80px] flex flex-col justify-center border-r border-[hsl(210,15%,90%)]">
            <span className="font-mono text-[16px] text-[hsl(0,70%,55%)] tracking-widest uppercase mb-[24px]">Before</span>
            <h3 className="text-[36px] font-bold tracking-[-0.04em] mb-[32px]">Previous Approach</h3>
            <div className="space-y-[20px]">
              {["No tracking or analytics", "Ad-hoc social posting", "Generic website copy", "No conversion funnel"].map((item, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[hsl(0,70%,55%)]" />
                  <span className="text-[22px] text-[hsl(210,10%,40%)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 p-[80px] flex flex-col justify-center">
            <span className="font-mono text-[16px] text-[hsl(160,84%,39%)] tracking-widest uppercase mb-[24px]">After</span>
            <h3 className="text-[36px] font-bold tracking-[-0.04em] mb-[32px]">Strategic Framework</h3>
            <div className="space-y-[20px]">
              {["Full GA4 + GTM implementation", "Content calendar with KPIs", "Conversion-optimized copy", "3-stage nurture funnel"].map((item, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[hsl(160,84%,39%)]" />
                  <span className="text-[22px] text-[hsl(210,10%,40%)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  // 18. Team / Bio
  {
    id: "team-bio", label: "Team / Bio", category: "Content",
    render: (n, t) => (
      <SlideLayout slideNumber={n} totalSlides={t} noPadding>
        <div className="absolute inset-0 flex">
          <div className="w-[40%] bg-[hsl(150,48%,20%)] flex items-center justify-center">
            <div className="w-[360px] h-[360px] rounded-full bg-[hsl(150,30%,35%)] flex items-center justify-center">
              <div className="w-[320px] h-[320px] rounded-full border-2 border-dashed border-[hsl(0,0%,100%)]/20 flex flex-col items-center justify-center text-[hsl(0,0%,100%)]">
                <span className="text-[48px]">👤</span>
                <span className="font-mono text-[13px] mt-[8px] opacity-50">Photo</span>
              </div>
            </div>
          </div>
          <div className="w-[60%] p-[80px] flex flex-col justify-center">
            <span className="font-mono text-[14px] text-[hsl(20,90%,55%)] tracking-widest uppercase mb-[16px]">Your Strategist</span>
            <h2 className="text-[56px] font-bold tracking-[-0.04em] mb-[8px]">Storm Jarvie</h2>
            <p className="text-[24px] text-[hsl(210,10%,40%)] mb-[40px]">Digital Strategy & Growth</p>
            <div className="space-y-[16px] text-[20px] text-[hsl(210,10%,40%)]">
              <p className="font-serif leading-[1.7]">
                10+ years helping businesses transform their digital presence into a predictable 
                growth engine. Specialising in data-driven strategy, conversion optimisation, 
                and sustainable organic growth.
              </p>
            </div>
            <div className="flex gap-[32px] mt-[40px] font-mono text-[15px] text-[hsl(210,10%,50%)]">
              <span>storm@stormjarvie.com.au</span>
              <span>stormjarvie.com.au</span>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
];

// ─── Page Component ───
const SlideTemplates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  const categories = [...new Set(slides.map((s) => s.category))];

  return (
    <div className="h-screen flex bg-background overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-card flex flex-col shrink-0 overflow-hidden">
        <div className="p-5 border-b border-border">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-3">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Brand Guidelines</span>
          </Link>
          <h1 className="text-sm font-semibold text-foreground">Slide Templates</h1>
          <span className="font-mono text-[10px] text-muted-foreground">{total} templates · 16:9</span>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {categories.map((cat) => (
            <div key={cat}>
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase px-2">{cat}</span>
              <div className="mt-1 space-y-0.5">
                {slides.filter((s) => s.category === cat).map((s) => {
                  const idx = slides.indexOf(s);
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all duration-200 flex items-center gap-2 ${
                        activeIndex === idx
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className="font-mono text-[11px] opacity-60 w-5">{String(idx + 1).padStart(2, "0")}</span>
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main canvas */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-12 border-b border-border flex items-center justify-between px-4 shrink-0 bg-card">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-muted-foreground">
              {activeIndex + 1} / {total}
            </span>
            <button
              onClick={() => setActiveIndex(Math.min(total - 1, activeIndex + 1))}
              disabled={activeIndex === total - 1}
              className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">{slides[activeIndex].label}</span>
            <span className="font-mono text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded">
              {slides[activeIndex].category}
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">1920 × 1080</span>
        </div>

        {/* Canvas area */}
        <div className="flex-1 bg-muted/50 p-6 overflow-hidden">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-card">
            <ScaledSlide>
              {slides[activeIndex].render(activeIndex + 1, total)}
            </ScaledSlide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTemplates;
