/*
Developed by EXA
Version 1.0
Target Component
*/

"use client";
import React from "react";

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
    <div
      role="dialog"
      aria-modal
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <div className="relative w-[92%] max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="h-48 w-full overflow-hidden bg-gray-100">
          <img
            src={place.imageUrl}
            alt={place.nombre}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/fallback.jpg";
            }}
          />
        </div>

        <div className="p-5">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-semibold">{place.nombre}</h3>
            <button
              onClick={onClose}
              className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {place.description}
          </p>
        </div>
      </div>
    </div>
  );
}
