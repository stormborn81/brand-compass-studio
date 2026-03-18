import { useRef, useEffect, useState, ReactNode } from "react";
import logoMark from "@/assets/logo-mark.svg";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber?: number;
  totalSlides?: number;
  dark?: boolean;
  noFooter?: boolean;
  noPadding?: boolean;
  className?: string;
}

const SlideLayout = ({
  children,
  slideNumber,
  totalSlides,
  dark = false,
  noFooter = false,
  noPadding = false,
  className = "",
}: SlideLayoutProps) => {
  return (
    <div
      className={`w-[1920px] h-[1080px] relative overflow-hidden ${
        dark ? "bg-[hsl(150,50%,15%)] text-[hsl(0,0%,100%)]" : "bg-[hsl(210,20%,98%)] text-[hsl(150,50%,15%)]"
      } ${className}`}
    >
      <div className={noPadding ? "" : "absolute inset-0 p-[80px] flex flex-col"}>
        {children}
      </div>
      {!noFooter && (
        <div className="absolute bottom-[30px] left-[80px] right-[80px] flex items-center justify-between">
          <img src={logoMark} alt="Storm Jarvie" className="h-[28px] opacity-40" style={dark ? { filter: "brightness(0) invert(1)" } : {}} />
          {slideNumber && (
            <span className={`font-mono text-[14px] ${dark ? "text-[hsl(0,0%,100%)]/40" : "text-[hsl(210,10%,40%)]"}`}>
              {slideNumber}{totalSlides ? ` / ${totalSlides}` : ""}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

export const ScaledSlide = ({ children, className = "" }: ScaledSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setScale(Math.min(width / 1920, height / 1080));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 1920,
          height: 1080,
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
