"use client";
import React from "react";
import styles from "@/styles/Header.module.css";

type Props = {
  open: boolean;
  onToggle: () => void;
};

export function MenuHamburguesa({ open, onToggle }: Props) {
  return (
    <button
      className={styles.toggle}
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      aria-controls="mobile-nav"
      onClick={onToggle}
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  );
}
