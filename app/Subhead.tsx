"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/ThemeContext";

export default function Subhead({ children }: { children: React.ReactNode }) {
  const active = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: active !== "left" ? "center" : "center",
        minWidth: active !== "left" ? "100%" : "65vw",
        color: "#fff",
        position: "fixed",
        top: active !== "left" ? 100 : 100,
        // right: active !== "left" ? 200 : "auto",
        left: active !== "left" ? "-50vw" : "100%",
        transform: active !== "left" ? "translateX(0%)" : "translateX(100px)",
      }}
    >
      {children}
    </div>
  );
}
