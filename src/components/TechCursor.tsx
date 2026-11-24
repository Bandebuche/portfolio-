"use client";

import React, { useEffect, useState } from "react";

export function TechCursor() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden transition-opacity duration-300"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(99, 102, 241, 0.05), rgba(59, 130, 246, 0.025) 45%, transparent 75%)`,
      }}
    />
  );
}
