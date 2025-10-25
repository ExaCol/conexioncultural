"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import s from "@/styles/Header.module.css";
import { MenuHamburguesa } from "./MenuHamburguesa";
import Portal from "./Portal";

type Item =
  | { type: "route"; label: string; href: string }
  | { type: "hash"; label: string; targetId: string };

const nav: Item[] = [
  { type: "hash", targetId: "home", label: "Home" },
  { type: "route", href: "/mapa", label: "Map" },
  { type: "route", href: "/favoritos", label: "Favorites" },
  { type: "hash", targetId: "about-us", label: "About Us" },
  { type: "hash", targetId: "footer", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [activeId, setActiveId] = useState<string>("home");
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH =
      Number(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--header-h")
          .replace("px", "")
      ) || 64;
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
    <header className={`${s.header} ${atTop ? s.glass : s.solid}`}>
      <div className={`${s.container} ${s.row}`}>
        <Link
          href="/"
          className={s.logo}
          onClick={() => setOpen(false)}
          aria-label="Ir al inicio — Conexión Cultural"
        >
          <Image
            src="/LogoConexiónCulturalSinFondo.png"
            alt="Conexión Cultural"
            width={160}
            height={40}
            priority
            className={s.logoImg}
          />
        </Link>
        <nav className={s.desktopNav} aria-label="Principal">
          {nav.map((item) => {
            const key = item.type === "route" ? item.href : item.targetId;
            const isActive =
              item.type === "hash"
                ? activeId === item.targetId
                : pathname === item.href;
            return item.type === "route" ? (
              <Link
                key={key}
                href={item.href}
                className={`${s.link} ${isActive ? s.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={key}
                href={`#${item.targetId}`}
                onClick={handleNav(item)}
                className={`${s.link} ${isActive ? s.active : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <MenuHamburguesa open={open} onToggle={() => setOpen((v) => !v)} />
      </div>
      <Portal>
        <div
          className={`${s.scrim} ${open ? s.scrimVisible : ""}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
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
            return item.type === "route" ? (
              <Link
                key={key}
                href={item.href}
                className={`${s.mobileLink} ${isActive ? s.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={key}
                href={`#${item.targetId}`}
                onClick={handleNav(item)}
                className={`${s.mobileLink} ${isActive ? s.active : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </Portal>
    </header>
  );
}
