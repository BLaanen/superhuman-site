"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Os = "mac" | "windows";

const OsContext = createContext<{
  os: Os;
  setOs: (os: Os) => void;
}>({ os: "mac", setOs: () => {} });

export function useOs() {
  return useContext(OsContext);
}

export function OsProvider({ children }: { children: ReactNode }) {
  const [os, setOs] = useState<Os>("mac");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("preferred-os");
    if (stored === "mac" || stored === "windows") {
      setOs(stored);
    }
    setMounted(true);
  }, []);

  const handleSetOs = (newOs: Os) => {
    setOs(newOs);
    localStorage.setItem("preferred-os", newOs);
  };

  if (!mounted) return null;

  return (
    <OsContext.Provider value={{ os, setOs: handleSetOs }}>
      {children}
    </OsContext.Provider>
  );
}

export function OsToggle() {
  const { os, setOs } = useOs();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setOs("mac")}
        className="cursor-pointer rounded-md px-4 py-2 font-[family-name:var(--font-mono)] text-[13px] font-semibold transition-all duration-200"
        style={{
          backgroundColor: os === "mac" ? "var(--accent-gold)" : "transparent",
          color: os === "mac" ? "var(--bg-primary)" : "var(--text-muted)",
          border:
            os === "mac"
              ? "1px solid var(--accent-gold)"
              : "1px solid var(--border-color)",
        }}
      >
        Mac
      </button>
      <button
        onClick={() => setOs("windows")}
        className="cursor-pointer rounded-md px-4 py-2 font-[family-name:var(--font-mono)] text-[13px] font-semibold transition-all duration-200"
        style={{
          backgroundColor:
            os === "windows" ? "var(--accent-gold)" : "transparent",
          color: os === "windows" ? "var(--bg-primary)" : "var(--text-muted)",
          border:
            os === "windows"
              ? "1px solid var(--accent-gold)"
              : "1px solid var(--border-color)",
        }}
      >
        Windows
      </button>
    </div>
  );
}

export function OsContent({
  mac,
  windows,
}: {
  mac: ReactNode;
  windows: ReactNode;
}) {
  const { os } = useOs();
  return <>{os === "mac" ? mac : windows}</>;
}
