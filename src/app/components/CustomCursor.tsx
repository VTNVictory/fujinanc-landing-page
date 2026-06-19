import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let currentX = pos.x;
    let currentY = pos.y;
    let targetX = pos.x;
    let targetY = pos.y;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };

    const updateTrail = () => {
      // Linear interpolation for smooth trailing
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrail({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hide cursor on touch devices to avoid issues
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        body { cursor: none !important; }
        a, button, input, select, textarea { cursor: none !important; }
      `}</style>
      
      {/* Main Cursor Dot */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          background: "#e60012",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          transition: hovered ? "transform 0.2s ease, width 0.2s, height 0.2s, background 0.2s" : "width 0.2s, height 0.2s",
          mixBlendMode: "difference",
          boxShadow: "0 0 10px rgba(230,0,18,0.8)",
        }}
      />
      
      {/* Trailing Aura / Magnetic Ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "60px" : "32px",
          height: hovered ? "60px" : "32px",
          border: hovered ? "1.5px solid #fff" : "1px solid rgba(230,0,18,0.3)",
          background: hovered ? "rgba(255,255,255,0.05)" : "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: `translate3d(${trail.x - (hovered ? 30 : 16)}px, ${trail.y - (hovered ? 30 : 16)}px, 0)`,
          transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border 0.3s, background 0.3s",
          mixBlendMode: hovered ? "difference" : "normal",
          backdropFilter: hovered ? "blur(4px)" : "none",
        }}
      />
    </>
  );
}
