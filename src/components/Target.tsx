/*
Developed by EXA
Version 1.0
Target Component
*/

"use client";
import React, { useEffect } from "react";
import s from "@/styles/Target.module.css";

export type Place = {
  id: string;
  nombre: string;
  description: string;
  imageUrl: string;
};

type Props = {
  place: Place | null;
  onClose: () => void;
};

export default function PlacePopup({ place, onClose }: Props) {
  if (!place) return null;
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => { root.style.overflow = prev; };
  }, []);

  return (
    <div className={s.container} role="dialog" aria-modal="true" aria-label={place.nombre}>
      <button className={s.btnClose} onClick={onClose} aria-label="Cerrar" />
      <div className={s.infoContainer}>
        <div className={s.imgContainer}>
          <img
            src={place.imageUrl}
            alt={place.nombre}
            className={s.imgDestination}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/rio.png";
            }}
          />
        </div>

        <div className={s.titleContainer}>
          <h3 className={s.title}>{place.nombre}</h3>
          <p className={s.description}>{place.description}</p>
        </div>
      </div>
    </div>
  );
}
