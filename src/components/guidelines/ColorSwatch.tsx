import { motion } from "framer-motion";
import { useState } from "react";

interface ColorSwatchProps {
  name: string;
  token: string;
  hex: string;
  hsl: string;
  className: string;
  textClass?: string;
}

const ColorSwatch = ({ name, token, hex, hsl, className, textClass = "text-primary-foreground" }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.button
      onClick={copy}
      className="text-left group"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={`${className} rounded-lg h-28 flex items-end p-4 shadow-card group-hover:shadow-card-hover transition-shadow duration-200`}>
        <span className={`font-mono text-xs ${textClass} opacity-80`}>{copied ? "Copied!" : hex}</span>
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground mt-0.5">{token}</p>
        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{hsl}</p>
      </div>
    </motion.button>
  );
};

export default ColorSwatch;
