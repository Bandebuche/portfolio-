"use client";

import React, { useEffect, useState } from "react";

export function AlephCursor() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [isPointer, setIsPointer] = useState(false);

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
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden transition-opacity duration-500"
      style={{
        background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, rgba(212, 181, 127, 0.045), rgba(111, 136, 143, 0.02) 40%, transparent 80%)`,
      }}
    />
  );
}

