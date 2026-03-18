import { motion } from "framer-motion";

interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
}

const entrance = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
};

const SectionHeader = ({ id, number, title, subtitle }: SectionHeaderProps) => (
  <motion.div id={id} className="pt-24 pb-12" {...entrance}>
    <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{number}</span>
    <h2 className="text-3xl font-semibold text-foreground mt-2">{title}</h2>
    <p className="text-muted-foreground mt-2 max-w-[65ch]">{subtitle}</p>
  </motion.div>
);

export default SectionHeader;
