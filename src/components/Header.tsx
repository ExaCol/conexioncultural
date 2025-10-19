/*
Developed by EXA
Version 1.0
Header Component
*/

"use client";

import { useCallback , useState } from "react";
import s from "@/styles/Header.module.css";

const nav = [
  { targetId: "home", label: "Home" },
  { targetId: "map", label: "Map" },
  { targetId: "about-us", label: "About Us" },
  { targetId: "contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(nav[0].targetId);
  const scrollToId = useCallback((id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector(`.${s.header}`) as HTMLElement | null;
  const headerH = header?.offsetHeight ?? 0;
  const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;

  window.scrollTo({ top: y, behavior: "smooth" });
  setActiveId(id);
  setOpen(false);
}, []);


  return (
    <header className={s.header}>
      <div className={`container ${s.row}`}>
        <a
          href="#home"
          className={s.logo}
          onClick={e => {
            e.preventDefault();
            scrollToId("home");
          }}
        >
          Conexión Cultural
        </a>

        <nav className={s.desktopNav} aria-label="Principal">
          {nav.map(({ targetId, label }) => {
            const href = `#${targetId}`;
            const isActive = activeId === targetId; 
            return (
              <a
                key={targetId}
                href={href}
                onClick={e => {
                  e.preventDefault();
                  scrollToId(targetId);
                }}
                aria-current={isActive ? "true" : undefined}
                className={`${s.link} ${isActive ? s.active : ""}`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <button
          className={s.toggle}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(v => !v)}
        >
          <span className={s.bar} />
          <span className={s.bar} />
          <span className={s.bar} />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`${s.mobileNav} ${open ? s.mobileNavOpen : ""}`}
        aria-label="Menú móvil"
      >
        {nav.map(({ targetId, label }) => {
          const href = `#${targetId}`;
          const isActive = activeId === targetId;
          return (
            <a
              key={targetId}
              href={href}
              onClick={e => {
                e.preventDefault();
                scrollToId(targetId);
              }}
              className={`${s.mobileLink} ${isActive ? s.active : ""}`}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
