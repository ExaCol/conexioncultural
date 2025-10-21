/*
Developed by EXA
Version 1.0
Header Component
*/
"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import s from "@/styles/Header.module.css";
import { MenuHamburguesa } from "./MenuHamburguesa";

type Item =
  | { type: "route"; label: string; href: string }            
  | { type: "hash";  label: string; targetId: string };         

const nav: Item[] = [
  { type: "hash",  targetId: "home",      label: "Home" },
  { type: "route", href:  "/mapa",        label: "Map" },
  { type: "route", href:  "/favoritos",   label: "Favorites" },
  { type: "hash",  targetId: "about-us",  label: "About Us" },
  { type: "hash",  targetId: "footer", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const pathname = usePathname();
  const router = useRouter();

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

  const handleNav = (item: Item) => (e: React.MouseEvent) => {
    if (item.type === "route") {
      setOpen(false);
      return; 
    }
    e.preventDefault();
    if (pathname !== "/") {
      setOpen(false);
      router.push(`/#${item.targetId}`);
      return;
    }
    scrollToId(item.targetId);
  };

  return (
    <header className={s.header}>
      <div className={`container ${s.row}`}>
        <Link href="/" className={s.logo} onClick={() => setOpen(false)}>
          Conexión Cultural
        </Link>

        <nav className={s.desktopNav} aria-label="Principal">
          {nav.map((item) => {
            const key = item.type === "route" ? item.href : item.targetId;
            const isActive =
              item.type === "hash" ? activeId === item.targetId : pathname === item.href;

            if (item.type === "route") {
              return (
                <Link
                  key={key}
                  href={item.href}
                  className={`${s.link} ${isActive ? s.active : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }

            const href = `#${item.targetId}`;
            return (
              <a
                key={key}
                href={href}
                onClick={handleNav(item)}
                aria-current={isActive ? "true" : undefined}
                className={`${s.link} ${isActive ? s.active : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          className={s.toggle}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
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
        {nav.map((item) => {
          const key = item.type === "route" ? item.href : item.targetId;
          const isActive =
            item.type === "route"
              ? pathname === item.href
              : activeId === item.targetId;

          if (item.type === "route") {
            return (
              <Link
                key={key}
                href={item.href}
                className={`${s.mobileLink} ${isActive ? s.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          }

          const href = `#${item.targetId}`;
          return (
            <a
              key={key}
              href={href}
              onClick={handleNav(item)}
              className={`${s.mobileLink} ${isActive ? s.active : ""}`}
            >
              {item.label}
            </a>
          );
        })}
        <MenuHamburguesa open={open} onToggle={() => setOpen(v => !v)} />
      </nav>
    </header>
  );
}
