import { useEffect, useState } from "react";

const FRAMES = ["⢌⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉","⢎⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉","⢎⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉","⢎⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉"];
const INTERVAL = 80;

interface HelixSpinnerProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export function HelixSpinner({ size = 24, color = "#fff", style }: HelixSpinnerProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((i) => (i + 1) % FRAMES.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", ...style }}>
      <span style={{ fontSize: size, color, textAlign: "center", lineHeight: `${size * 1.3}px`, fontFamily: "monospace" }}>
        {FRAMES[frame]}
      </span>
    </div>
  );
}
