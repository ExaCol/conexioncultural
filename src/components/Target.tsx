/*
Developed by EXA
Version 1.0
Target Component
*/

"use client";
import React from "react";
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

  return (
    <div className = {`${s.container}`}>
      <button
        className = {`${s.btnClose}`}
        onClick={onClose}
      />

      <div className={`${s.whiteBox}`}>
        <div className = {`${s.imgContainer}`}>
          <img
            src={place.imageUrl}
            alt={place.nombre}
            className={`${s.imgDestination}`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/rio.png";
            }}
          />
        </div>

        <div className = {`${s.infoContainer}`}>
          <div className = {`${s.titleContainer}`}>
            <h3 className={`${s.title}`}>{place.nombre}</h3>
            <button
              onClick={onClose}
              className={`${s.btnCloseText}`}
            >
              ✕
            </button>
          </div>

          <p className = {`${s.description}`}>
            {place.description}
          </p>
        </div>
      </div>
    </div>
  );
}
