import PptxGenJS from "pptxgenjs";

// ─── Brand Tokens ───
const FOREST = "1A4D2F";
const ORANGE = "E8632B";
const SAGE_BG = "F5F7F5";
const WHITE = "FFFFFF";
const CHARCOAL = "1A3D26";
const GREY_TEXT = "5A6570";
const GREY_LIGHT = "D4D8DC";
const GREEN_WIN = "10B981";
const RED = "CC4444";

const SLIDE_W = 13.33; // 1920/144 ≈ 13.33 inches
const SLIDE_H = 7.5;   // 1080/144 = 7.5 inches
const PAD = 0.56;       // 80px padding

// Chart data
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

function addFooter(slide: PptxGenJS.Slide, dark: boolean, num: number, total: number) {
  // Slide number
  slide.addText(`${num} / ${total}`, {
    x: SLIDE_W - PAD - 1, y: SLIDE_H - 0.35, w: 1, h: 0.25,
    fontSize: 8, fontFace: "JetBrains Mono, Courier New",
    color: dark ? "FFFFFF66" : GREY_TEXT, align: "right",
  });
}

function addLabel(slide: PptxGenJS.Slide, text: string, y: number = PAD) {
  slide.addText(text.toUpperCase(), {
    x: PAD, y, w: 8, h: 0.2,
    fontSize: 8, fontFace: "JetBrains Mono, Courier New",
    color: ORANGE, bold: false, charSpacing: 3,
  });
}

// ─── Slide Builders ───

function slideCover(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: CHARCOAL };
  
  // Logo placeholder
  slide.addText("STORM JARVIE", {
    x: PAD, y: 1.2, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: WHITE, bold: true,
  });
  
  // Client logo placeholder
  slide.addShape(pptx.ShapeType.rect, {
    x: 3.8, y: 1.2, w: 1.8, h: 0.4,
    line: { color: "FFFFFF33", dashType: "dash", width: 1 },
  });
  slide.addText("Client Logo", {
    x: 3.8, y: 1.2, w: 1.8, h: 0.4,
    fontSize: 7, fontFace: "JetBrains Mono, Courier New", color: "FFFFFF44", align: "center",
  });
  
  slide.addText("Monthly Performance\nReview", {
    x: PAD, y: 2.4, w: 9, h: 2,
    fontSize: 42, fontFace: "Arial", color: WHITE, bold: true, lineSpacingMultiple: 1.1,
  });
  
  slide.addText("Digital Strategy & Growth Report", {
    x: PAD, y: 4.4, w: 8, h: 0.5,
    fontSize: 16, fontFace: "Arial", color: "FFFFFFB3",
  });
  
  slide.addText("March 2026", {
    x: PAD, y: 5.5, w: 2, h: 0.3,
    fontSize: 9, fontFace: "JetBrains Mono, Courier New", color: "FFFFFF80",
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 2.6, y: 5.56, w: 0.28, h: 0.015, fill: { color: ORANGE },
  });
  slide.addText("Storm Jarvie", {
    x: 3.1, y: 5.5, w: 2, h: 0.3,
    fontSize: 9, fontFace: "JetBrains Mono, Courier New", color: "FFFFFF80",
  });
  
  addFooter(slide, true, n, t);
}

function slideAgenda(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "Agenda");
  slide.addText("Today's Discussion", {
    x: PAD, y: PAD + 0.25, w: 10, h: 0.8,
    fontSize: 30, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  
  const items = ["Performance Overview", "Channel Analysis", "Experiment Results", "Key Insights", "Recommendations", "Next Steps"];
  items.forEach((item, i) => {
    const y = 1.8 + i * 0.55;
    slide.addText(String(i + 1).padStart(2, "0"), {
      x: PAD, y, w: 0.5, h: 0.4,
      fontSize: 18, fontFace: "JetBrains Mono, Courier New", color: ORANGE, bold: true,
    });
    slide.addText(item, {
      x: PAD + 0.7, y, w: 6, h: 0.4,
      fontSize: 18, fontFace: "Arial", color: CHARCOAL,
    });
  });
  addFooter(slide, false, n, t);
}

function slideFullText(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "Section Title");
  slide.addText("Strategic positioning drives\nsustainable growth", {
    x: PAD, y: PAD + 0.25, w: 10, h: 1.2,
    fontSize: 32, fontFace: "Arial", color: CHARCOAL, bold: true, lineSpacingMultiple: 1.15,
  });
  slide.addText(
    "A well-defined digital strategy doesn't just increase traffic — it fundamentally transforms how your business acquires, engages, and retains customers. By aligning your online presence with your core value proposition, every touchpoint becomes an opportunity to build trust and drive conversions.\n\nThe data consistently shows that businesses investing in strategic digital foundations see 3–5× returns within the first 12 months, compared to those taking ad-hoc approaches.",
    {
      x: PAD, y: 2.2, w: 9, h: 3,
      fontSize: 15, fontFace: "Georgia", color: GREY_TEXT, lineSpacingMultiple: 1.7,
    }
  );
  addFooter(slide, false, n, t);
}

function slideHalfCallout(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  
  // Left text
  addLabel(slide, "Key Finding", 1.5);
  slide.addText("Organic search now drives the majority of qualified leads", {
    x: PAD, y: 1.8, w: 5.8, h: 1.5,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true, lineSpacingMultiple: 1.15,
  });
  slide.addText("After implementing the revised content strategy in Q1, organic search traffic increased by 147% while cost per acquisition dropped to its lowest point in 18 months.", {
    x: PAD, y: 3.5, w: 5.8, h: 1.5,
    fontSize: 13, fontFace: "Georgia", color: GREY_TEXT, lineSpacingMultiple: 1.7,
  });
  
  // Right callout block
  slide.addShape(pptx.ShapeType.rect, {
    x: SLIDE_W / 2, y: 0, w: SLIDE_W / 2, h: SLIDE_H,
    fill: { color: FOREST },
  });
  slide.addText("ORGANIC GROWTH", {
    x: SLIDE_W / 2, y: 2.2, w: SLIDE_W / 2, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: "FFFFFF80", align: "center", charSpacing: 3,
  });
  slide.addText("147%", {
    x: SLIDE_W / 2, y: 2.8, w: SLIDE_W / 2, h: 1.5,
    fontSize: 80, fontFace: "Arial", color: WHITE, bold: true, align: "center",
  });
  slide.addText("increase in qualified traffic", {
    x: SLIDE_W / 2, y: 4.3, w: SLIDE_W / 2, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: "FFFFFFB3", align: "center",
  });
  
  addFooter(slide, false, n, t);
}

function slideHalfImage(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  
  addLabel(slide, "Visual Context", 1.5);
  slide.addText("Supporting visual goes here with context", {
    x: PAD, y: 1.8, w: 5.8, h: 1.2,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true, lineSpacingMultiple: 1.15,
  });
  slide.addText("Use this layout when you need to pair an explanation with a relevant image, diagram, or visual asset that reinforces the point.", {
    x: PAD, y: 3.2, w: 5.8, h: 1.5,
    fontSize: 13, fontFace: "Georgia", color: GREY_TEXT, lineSpacingMultiple: 1.7,
  });
  
  // Image placeholder
  slide.addShape(pptx.ShapeType.rect, {
    x: SLIDE_W / 2 + 0.3, y: 0.8, w: SLIDE_W / 2 - 0.8, h: 5.5,
    fill: { color: "EFF1EF" },
    line: { color: GREY_LIGHT, dashType: "dash", width: 1 },
  });
  slide.addText("🖼  Image Placeholder\n960 × 1080 recommended", {
    x: SLIDE_W / 2 + 0.3, y: 2.8, w: SLIDE_W / 2 - 0.8, h: 1,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, align: "center",
  });
  
  addFooter(slide, false, n, t);
}

function slideHalfDesktop(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  
  addLabel(slide, "Desktop View", 1.5);
  slide.addText("Homepage redesign improves first impressions", {
    x: PAD, y: 1.8, w: 5, h: 1.2,
    fontSize: 26, fontFace: "Arial", color: CHARCOAL, bold: true, lineSpacingMultiple: 1.15,
  });
  slide.addText("The new hero section clearly communicates the value proposition within 3 seconds, resulting in a 34% reduction in bounce rate.", {
    x: PAD, y: 3.2, w: 5, h: 1.2,
    fontSize: 12, fontFace: "Georgia", color: GREY_TEXT, lineSpacingMultiple: 1.7,
  });
  
  // Browser frame placeholder
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 6.2, y: 0.8, w: 6.5, h: 5.5,
    fill: { color: WHITE }, line: { color: GREY_LIGHT, width: 1 }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 6.2, y: 0.8, w: 6.5, h: 0.35,
    fill: { color: "F0F2F4" },
  });
  // Browser dots
  [0, 0.12, 0.24].forEach((offset, i) => {
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 6.35 + offset, y: 0.9, w: 0.08, h: 0.08,
      fill: { color: ["CC6666", "CCAA66", "66AA77"][i] },
    });
  });
  slide.addText("stormjarvie.com.au", {
    x: 7.2, y: 0.85, w: 3, h: 0.25,
    fontSize: 7, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT,
  });
  slide.addText("1440 × 900", {
    x: 6.2, y: 3.2, w: 6.5, h: 0.5,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, align: "center",
  });
  
  addFooter(slide, false, n, t);
}

function slideHalfMobile(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  
  addLabel(slide, "Mobile Experience", 1.5);
  slide.addText("Mobile-first design drives 68% of all conversions", {
    x: PAD, y: 1.8, w: 6.5, h: 1.2,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true, lineSpacingMultiple: 1.15,
  });
  slide.addText("With the majority of traffic coming from mobile devices, the responsive experience is now the primary conversion pathway.", {
    x: PAD, y: 3.2, w: 6.5, h: 1.2,
    fontSize: 13, fontFace: "Georgia", color: GREY_TEXT, lineSpacingMultiple: 1.7,
  });
  
  // Phone frame
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 9.5, y: 0.8, w: 2.5, h: 5, fill: { color: SAGE_BG },
    line: { color: CHARCOAL, width: 2 }, rectRadius: 0.25,
  });
  // Notch
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 10.15, y: 0.8, w: 1.2, h: 0.22, fill: { color: CHARCOAL }, rectRadius: 0.1,
  });
  slide.addText("375 × 812", {
    x: 9.5, y: 3, w: 2.5, h: 0.3,
    fontSize: 8, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, align: "center",
  });
  
  addFooter(slide, false, n, t);
}

function slideABTest(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "A/B Test");
  slide.addText("CTA Button Redesign", {
    x: PAD, y: PAD + 0.25, w: 10, h: 0.7,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  slide.addText("Comparing current design against proposed variant", {
    x: PAD, y: PAD + 0.95, w: 10, h: 0.4,
    fontSize: 13, fontFace: "Arial", color: GREY_TEXT,
  });
  
  // Control (A) phone
  slide.addText("CONTROL (A)", {
    x: 2.5, y: 1.8, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, align: "center", charSpacing: 3,
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 2.8, y: 2.2, w: 2.2, h: 4.4, fill: { color: WHITE },
    line: { color: CHARCOAL, width: 2 }, rectRadius: 0.25,
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 3.35, y: 4, w: 1.1, h: 0.3, fill: { color: FOREST }, rectRadius: 0.04,
  });
  slide.addText("Get Started", {
    x: 3.35, y: 4, w: 1.1, h: 0.3,
    fontSize: 8, fontFace: "Arial", color: WHITE, bold: true, align: "center",
  });
  
  // VS
  slide.addText("VS", {
    x: 5.5, y: 3.5, w: 1, h: 0.3,
    fontSize: 8, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, align: "center",
  });
  
  // Variant (B) phone
  slide.addText("VARIANT (B)", {
    x: 7.5, y: 1.8, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, align: "center", charSpacing: 3,
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 7.8, y: 2.2, w: 2.2, h: 4.4, fill: { color: WHITE },
    line: { color: CHARCOAL, width: 2 }, rectRadius: 0.25,
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 8.15, y: 4, w: 1.5, h: 0.35, fill: { color: ORANGE }, rectRadius: 0.06,
  });
  slide.addText("Start Free Trial →", {
    x: 8.15, y: 4, w: 1.5, h: 0.35,
    fontSize: 9, fontFace: "Arial", color: WHITE, bold: true, align: "center",
  });
  
  addFooter(slide, false, n, t);
}

function slideExperimentResults(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "Experiment Results");
  slide.addText("CTA Button Redesign — Results", {
    x: PAD, y: PAD + 0.25, w: 10, h: 0.7,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  
  // Column 1: Hypothesis
  const col1X = PAD;
  slide.addText("HYPOTHESIS", {
    x: col1X, y: 1.5, w: 3.5, h: 0.3,
    fontSize: 9, fontFace: "JetBrains Mono, Courier New", color: FOREST, bold: true, charSpacing: 2,
  });
  const hyp = [
    { label: "WE HAVE OBSERVED", text: "The current CTA button has a low click-through rate of 2.1% on the sign-up page." },
    { label: "WHICH WE BELIEVE", text: "Is caused by the button being too small and using generic copy." },
    { label: "IF WE", text: "Increase size by 20%, change to orange, and use action-oriented copy." },
    { label: "WE WILL", text: "See a ≥15% increase in sign-up conversion rate within 14 days." },
    { label: "BECAUSE", text: "A more prominent, action-driven CTA reduces friction." },
  ];
  hyp.forEach((h, i) => {
    const y = 1.9 + i * 0.85;
    slide.addText(h.label, { x: col1X, y, w: 3.5, h: 0.15, fontSize: 7, fontFace: "JetBrains Mono, Courier New", color: ORANGE, charSpacing: 2 });
    slide.addText(h.text, { x: col1X, y: y + 0.18, w: 3.5, h: 0.6, fontSize: 10, fontFace: "Arial", color: CHARCOAL, lineSpacingMultiple: 1.4 });
  });
  
  // Column 2: Results
  const col2X = 4.8;
  slide.addText("RESULTS", {
    x: col2X, y: 1.5, w: 3.5, h: 0.3,
    fontSize: 9, fontFace: "JetBrains Mono, Courier New", color: FOREST, bold: true, charSpacing: 2,
  });
  const results = [
    { label: "Conversion Rate", value: "+61.9%", sub: "2.1% → 3.4%" },
    { label: "Statistical Sig.", value: "98.2%", sub: "p = 0.018" },
    { label: "Sample Size", value: "12,400", sub: "per variant" },
  ];
  results.forEach((r, i) => {
    const y = 1.9 + i * 1.4;
    slide.addShape(pptx.ShapeType.roundRect, { x: col2X, y, w: 3.5, h: 1.2, fill: { color: "EFF1EF" }, rectRadius: 0.08 });
    slide.addText(r.label.toUpperCase(), { x: col2X + 0.2, y: y + 0.1, w: 3, h: 0.2, fontSize: 7, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, charSpacing: 2 });
    slide.addText(r.value, { x: col2X + 0.2, y: y + 0.3, w: 3, h: 0.5, fontSize: 26, fontFace: "Arial", color: CHARCOAL, bold: true });
    slide.addText(r.sub, { x: col2X + 0.2, y: y + 0.85, w: 3, h: 0.2, fontSize: 8, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT });
  });
  
  // Column 3: Verdict
  const col3X = 9;
  slide.addText("VERDICT", {
    x: col3X, y: 1.5, w: 3.5, h: 0.3,
    fontSize: 9, fontFace: "JetBrains Mono, Courier New", color: FOREST, bold: true, charSpacing: 2,
  });
  slide.addShape(pptx.ShapeType.roundRect, { x: col3X, y: 1.9, w: 3.8, h: 1.2, fill: { color: GREEN_WIN }, rectRadius: 0.12 });
  slide.addText("RESULT", { x: col3X, y: 2, w: 3.8, h: 0.2, fontSize: 8, fontFace: "JetBrains Mono, Courier New", color: "FFFFFFB3", align: "center", charSpacing: 3 });
  slide.addText("WIN", { x: col3X, y: 2.2, w: 3.8, h: 0.6, fontSize: 32, fontFace: "Arial", color: WHITE, bold: true, align: "center" });
  slide.addText("Ship to 100%", { x: col3X, y: 2.8, w: 3.8, h: 0.25, fontSize: 10, fontFace: "Arial", color: "FFFFFFCC", align: "center" });
  
  // Next steps
  slide.addText("INSIGHTS & NEXT STEPS", {
    x: col3X, y: 3.4, w: 3.8, h: 0.2,
    fontSize: 8, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT, charSpacing: 2,
  });
  const steps = [
    "Roll out variant B to 100% of traffic.",
    "Apply learnings to secondary CTAs.",
    "Run follow-up test on copy variations.",
    "Monitor for novelty effect over 30 days.",
  ];
  steps.forEach((s, i) => {
    slide.addText(`•  ${s}`, {
      x: col3X, y: 3.7 + i * 0.35, w: 3.8, h: 0.3,
      fontSize: 10, fontFace: "Arial", color: CHARCOAL, lineSpacingMultiple: 1.4,
    });
  });
  
  addFooter(slide, false, n, t);
}

function slideDataSingle(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "Performance Data");
  slide.addText("Revenue Growth — H1 2026", {
    x: PAD, y: PAD + 0.25, w: 10, h: 0.7,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  
  // Insight box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: PAD, y: 1.4, w: 12, h: 0.6, fill: { color: "EFF3EF" }, rectRadius: 0.08,
  });
  slide.addText("💡 Revenue acceleration in Q2 correlates with the new content strategy launch in March. Organic channel drove 68% of net-new revenue.", {
    x: PAD + 0.15, y: 1.4, w: 11.6, h: 0.6,
    fontSize: 11, fontFace: "Georgia", color: GREY_TEXT,
  });
  
  // Chart
  slide.addChart(pptx.ChartType.bar, [
    { name: "Revenue", labels: chartData.map(d => d.month), values: chartData.map(d => d.value) },
  ], {
    x: PAD, y: 2.2, w: 12, h: 4.8,
    showTitle: false,
    showValue: false,
    chartColors: [FOREST],
    catAxisLabelFontSize: 10,
    valAxisLabelFontSize: 9,
    catAxisLabelFontFace: "JetBrains Mono, Courier New",
    valAxisLabelFontFace: "JetBrains Mono, Courier New",
    valAxisLabelColor: GREY_TEXT,
    catAxisLabelColor: GREY_TEXT,
    showLegend: false,
    barGapWidthPct: 80,
  });
  
  addFooter(slide, false, n, t);
}

function slideDataDouble(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "Comparison");
  slide.addText("Revenue vs. Benchmark", {
    x: PAD, y: PAD + 0.25, w: 10, h: 0.7,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  
  // Insight
  slide.addShape(pptx.ShapeType.roundRect, {
    x: PAD, y: 1.4, w: 12, h: 0.6, fill: { color: "EFF3EF" }, rectRadius: 0.08,
  });
  slide.addText("💡 We outperformed industry benchmarks by 34% in Q2, with the gap widening each month.", {
    x: PAD + 0.15, y: 1.4, w: 11.6, h: 0.6,
    fontSize: 11, fontFace: "Georgia", color: GREY_TEXT,
  });
  
  // Left chart: bar
  slide.addText("Actual Revenue", {
    x: PAD, y: 2.2, w: 5.5, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT,
  });
  slide.addChart(pptx.ChartType.bar, [
    { name: "Revenue", labels: chartData.map(d => d.month), values: chartData.map(d => d.value) },
  ], {
    x: PAD, y: 2.5, w: 5.5, h: 4.5,
    showTitle: false, chartColors: [FOREST], showLegend: false, barGapWidthPct: 80,
    catAxisLabelFontSize: 9, valAxisLabelFontSize: 8,
    catAxisLabelColor: GREY_TEXT, valAxisLabelColor: GREY_TEXT,
  });
  
  // Right chart: line
  slide.addText("Industry Benchmark", {
    x: 7, y: 2.2, w: 5.5, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT,
  });
  slide.addChart(pptx.ChartType.line, [
    { name: "Benchmark", labels: chartData.map(d => d.month), values: chartData.map(d => d.compare) },
  ], {
    x: 7, y: 2.5, w: 5.5, h: 4.5,
    showTitle: false, chartColors: ["3B82F6"], showLegend: false,
    lineDataSymbol: "circle", lineDataSymbolSize: 6,
    catAxisLabelFontSize: 9, valAxisLabelFontSize: 8,
    catAxisLabelColor: GREY_TEXT, valAxisLabelColor: GREY_TEXT,
  });
  
  addFooter(slide, false, n, t);
}

function slideDataTable(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "Detailed Results");
  slide.addText("Experiment Metrics Breakdown", {
    x: PAD, y: PAD + 0.25, w: 10, h: 0.7,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  
  // Insight
  slide.addShape(pptx.ShapeType.roundRect, {
    x: PAD, y: 1.4, w: 12, h: 0.6, fill: { color: "EFF3EF" }, rectRadius: 0.08,
  });
  slide.addText("💡 Conversion rate and revenue per visitor both showed statistically significant lifts at 98% confidence.", {
    x: PAD + 0.15, y: 1.4, w: 11.6, h: 0.6,
    fontSize: 11, fontFace: "Georgia", color: GREY_TEXT,
  });
  
  // Table
  const rows: PptxGenJS.TableRow[] = [
    [
      { text: "Metric", options: { bold: true, fontFace: "JetBrains Mono, Courier New", fontSize: 10, color: GREY_TEXT } },
      { text: "Baseline", options: { bold: true, fontFace: "JetBrains Mono, Courier New", fontSize: 10, color: GREY_TEXT } },
      { text: "Variant", options: { bold: true, fontFace: "JetBrains Mono, Courier New", fontSize: 10, color: GREY_TEXT } },
      { text: "Change", options: { bold: true, fontFace: "JetBrains Mono, Courier New", fontSize: 10, color: GREY_TEXT } },
      { text: "Significant", options: { bold: true, fontFace: "JetBrains Mono, Courier New", fontSize: 10, color: GREY_TEXT } },
    ],
    ...tableData.map(row => [
      { text: row.metric, options: { fontSize: 13, bold: true, fontFace: "Arial", color: CHARCOAL } },
      { text: row.baseline, options: { fontSize: 13, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT } },
      { text: row.variant, options: { fontSize: 13, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT } },
      { text: row.change, options: { fontSize: 13, fontFace: "JetBrains Mono, Courier New", color: GREEN_WIN, bold: true } },
      { text: row.sig, options: { fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: row.sig === "Yes" ? GREEN_WIN : GREY_TEXT } },
    ] as PptxGenJS.TableRow),
  ];
  
  slide.addTable(rows, {
    x: PAD, y: 2.3, w: 12, h: 4,
    border: { type: "solid", pt: 0.5, color: GREY_LIGHT },
    colW: [3, 2, 2, 2, 3],
    rowH: [0.5, 0.7, 0.7, 0.7, 0.7],
    margin: [0.08, 0.15, 0.08, 0.15],
  });
  
  addFooter(slide, false, n, t);
}

function slideKeyInsight(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  
  slide.addText("KEY INSIGHT", {
    x: 0, y: 2, w: SLIDE_W, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: ORANGE, align: "center", charSpacing: 3,
  });
  slide.addText([
    { text: "Every $1 invested in SEO returned " },
    { text: "$4.30", options: { color: ORANGE } },
    { text: " in qualified pipeline" },
  ], {
    x: 1.5, y: 2.5, w: SLIDE_W - 3, h: 2.5,
    fontSize: 46, fontFace: "Arial", color: CHARCOAL, bold: true, align: "center", lineSpacingMultiple: 1.1,
  });
  slide.addText("Based on 6-month trailing data, Jan–Jun 2026", {
    x: 2, y: 5.2, w: SLIDE_W - 4, h: 0.5,
    fontSize: 14, fontFace: "Georgia", color: GREY_TEXT, align: "center",
  });
  
  addFooter(slide, false, n, t);
}

function slideSubDivider(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: CHARCOAL };
  
  slide.addText("03", {
    x: PAD, y: 2, w: 3, h: 1,
    fontSize: 48, fontFace: "Arial", color: ORANGE, bold: true,
  });
  slide.addText("Experiment\nResults", {
    x: PAD, y: 3, w: 8, h: 1.5,
    fontSize: 38, fontFace: "Arial", color: WHITE, bold: true, lineSpacingMultiple: 1.1,
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: PAD, y: 4.7, w: 0.56, h: 0.03, fill: { color: ORANGE },
  });
  
  addFooter(slide, true, n, t);
}

function slideThankYou(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: CHARCOAL };
  
  slide.addText("STORM JARVIE", {
    x: 0, y: 2, w: SLIDE_W, h: 0.5,
    fontSize: 18, fontFace: "Arial", color: WHITE, bold: true, align: "center",
  });
  slide.addText("Thank You", {
    x: 0, y: 2.8, w: SLIDE_W, h: 1,
    fontSize: 42, fontFace: "Arial", color: WHITE, bold: true, align: "center",
  });
  slide.addText("Let's keep the momentum going.", {
    x: 0, y: 3.8, w: SLIDE_W, h: 0.5,
    fontSize: 16, fontFace: "Arial", color: "FFFFFF99", align: "center",
  });
  
  slide.addText("storm@stormjarvie.com.au   •   stormjarvie.com.au   •   LinkedIn", {
    x: 1, y: 5, w: SLIDE_W - 2, h: 0.4,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: "FFFFFF80", align: "center",
  });
  
  addFooter(slide, true, n, t);
}

function slideTimeline(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  addLabel(slide, "Process");
  slide.addText("Project Timeline", {
    x: PAD, y: PAD + 0.25, w: 10, h: 0.7,
    fontSize: 28, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  
  const steps = [
    { phase: "Discovery", weeks: "Weeks 1–2", desc: "Audit, research, stakeholder interviews" },
    { phase: "Strategy", weeks: "Weeks 3–4", desc: "Roadmap, KPIs, channel plan" },
    { phase: "Build", weeks: "Weeks 5–8", desc: "Design, development, content creation" },
    { phase: "Launch", weeks: "Week 9", desc: "Go-live, monitoring, optimization" },
  ];
  
  // Connection line
  slide.addShape(pptx.ShapeType.rect, {
    x: 2, y: 3.5, w: 9, h: 0.02, fill: { color: "E0E4E0" },
  });
  
  steps.forEach((step, i) => {
    const x = 1.8 + i * 2.8;
    const isLast = i === 3;
    // Circle
    slide.addShape(pptx.ShapeType.ellipse, {
      x: x + 0.6, y: 3.15, w: 0.4, h: 0.4, fill: { color: isLast ? ORANGE : FOREST },
    });
    slide.addText(String(i + 1), {
      x: x + 0.6, y: 3.15, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "JetBrains Mono, Courier New", color: WHITE, bold: true, align: "center", valign: "middle",
    });
    slide.addText(step.phase, {
      x: x, y: 3.7, w: 1.6, h: 0.3,
      fontSize: 14, fontFace: "Arial", color: CHARCOAL, bold: true, align: "center",
    });
    slide.addText(step.weeks, {
      x: x, y: 4, w: 1.6, h: 0.25,
      fontSize: 9, fontFace: "JetBrains Mono, Courier New", color: ORANGE, align: "center",
    });
    slide.addText(step.desc, {
      x: x - 0.2, y: 4.3, w: 2, h: 0.5,
      fontSize: 10, fontFace: "Arial", color: GREY_TEXT, align: "center",
    });
  });
  
  addFooter(slide, false, n, t);
}

function slideBeforeAfter(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  
  // Divider line
  slide.addShape(pptx.ShapeType.rect, {
    x: SLIDE_W / 2 - 0.005, y: 0, w: 0.01, h: SLIDE_H, fill: { color: GREY_LIGHT },
  });
  
  // Before
  slide.addText("BEFORE", {
    x: PAD, y: 1.5, w: 5.5, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: RED, charSpacing: 3,
  });
  slide.addText("Previous Approach", {
    x: PAD, y: 2, w: 5.5, h: 0.5,
    fontSize: 22, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  ["No tracking or analytics", "Ad-hoc social posting", "Generic website copy", "No conversion funnel"].forEach((item, i) => {
    slide.addShape(pptx.ShapeType.ellipse, { x: PAD, y: 2.9 + i * 0.45, w: 0.06, h: 0.06, fill: { color: RED } });
    slide.addText(item, { x: PAD + 0.2, y: 2.8 + i * 0.45, w: 5, h: 0.35, fontSize: 13, fontFace: "Arial", color: GREY_TEXT });
  });
  
  // After
  const rightX = SLIDE_W / 2 + 0.3;
  slide.addText("AFTER", {
    x: rightX, y: 1.5, w: 5.5, h: 0.3,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: GREEN_WIN, charSpacing: 3,
  });
  slide.addText("Strategic Framework", {
    x: rightX, y: 2, w: 5.5, h: 0.5,
    fontSize: 22, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  ["Full GA4 + GTM implementation", "Content calendar with KPIs", "Conversion-optimized copy", "3-stage nurture funnel"].forEach((item, i) => {
    slide.addShape(pptx.ShapeType.ellipse, { x: rightX, y: 2.9 + i * 0.45, w: 0.06, h: 0.06, fill: { color: GREEN_WIN } });
    slide.addText(item, { x: rightX + 0.2, y: 2.8 + i * 0.45, w: 5, h: 0.35, fontSize: 13, fontFace: "Arial", color: GREY_TEXT });
  });
  
  addFooter(slide, false, n, t);
}

function slideTeamBio(pptx: PptxGenJS, n: number, t: number) {
  const slide = pptx.addSlide();
  slide.background = { color: SAGE_BG };
  
  // Left green panel
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W * 0.4, h: SLIDE_H, fill: { color: FOREST },
  });
  // Photo placeholder circle
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 1.2, y: 2.2, w: 2.8, h: 2.8, fill: { color: "2D6B4A" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 1.35, y: 2.35, w: 2.5, h: 2.5,
    line: { color: "FFFFFF33", dashType: "dash", width: 1 },
  });
  slide.addText("👤\nPhoto", {
    x: 1.35, y: 2.9, w: 2.5, h: 1.5,
    fontSize: 10, fontFace: "JetBrains Mono, Courier New", color: "FFFFFF80", align: "center",
  });
  
  // Right content
  const rx = SLIDE_W * 0.4 + 0.6;
  slide.addText("YOUR STRATEGIST", {
    x: rx, y: 1.8, w: 6, h: 0.2,
    fontSize: 8, fontFace: "JetBrains Mono, Courier New", color: ORANGE, charSpacing: 3,
  });
  slide.addText("Storm Jarvie", {
    x: rx, y: 2.2, w: 6, h: 0.7,
    fontSize: 32, fontFace: "Arial", color: CHARCOAL, bold: true,
  });
  slide.addText("Digital Strategy & Growth", {
    x: rx, y: 2.9, w: 6, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: GREY_TEXT,
  });
  slide.addText("10+ years helping businesses transform their digital presence into a predictable growth engine. Specialising in data-driven strategy, conversion optimisation, and sustainable organic growth.", {
    x: rx, y: 3.6, w: 6.5, h: 1.5,
    fontSize: 12, fontFace: "Georgia", color: GREY_TEXT, lineSpacingMultiple: 1.7,
  });
  slide.addText("storm@stormjarvie.com.au     stormjarvie.com.au", {
    x: rx, y: 5.2, w: 6, h: 0.3,
    fontSize: 9, fontFace: "JetBrains Mono, Courier New", color: GREY_TEXT,
  });
  
  addFooter(slide, false, n, t);
}

// ─── Main Export Function ───
export async function exportAllSlides() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "WIDESCREEN", width: SLIDE_W, height: SLIDE_H });
  pptx.layout = "WIDESCREEN";
  pptx.author = "Storm Jarvie";
  pptx.company = "Storm Jarvie";
  pptx.title = "Monthly Performance Review";
  
  const total = 18;
  const builders = [
    slideCover, slideAgenda, slideFullText, slideHalfCallout,
    slideHalfImage, slideHalfDesktop, slideHalfMobile, slideABTest,
    slideExperimentResults, slideDataSingle, slideDataDouble, slideDataTable,
    slideKeyInsight, slideSubDivider, slideThankYou, slideTimeline,
    slideBeforeAfter, slideTeamBio,
  ];
  
  builders.forEach((build, i) => build(pptx, i + 1, total));
  
  await pptx.writeFile({ fileName: "StormJarvie-SlideTemplates.pptx" });
}
