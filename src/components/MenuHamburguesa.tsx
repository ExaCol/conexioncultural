"use client";
import React from "react";
import s from "@/styles/Header.module.css";

export function MenuHamburguesa({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      className={s.toggle}
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      aria-controls="mobile-nav"
      onClick={onToggle}
    >
      <span className={s.bar} />
      <span className={s.bar} />
      <span className={s.bar} />
    </button>
  );
}
