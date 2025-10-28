/*
Developed by EXA
Version 1.0
Maps Page
*/
import React from "react";
import type { Metadata } from "next";
import Mapa from "@/components/Mapa";
import s from "@/styles/MapDesc.module.css";

export const metadata: Metadata = {
  title: "Mapa de Gualanday",
  description: "Navega por el mapa interactivo de Gualanday",
};

export default function MapaGualanday() {
  return (
    <main className="page">
      <div>
        <h2>Mapa de Gualanday</h2>
        <Mapa />
        <h3 className={`${s.title}`}>Ubicación en el Mapa</h3>
        <p className={`${s.txt}`}>
          Aquí puedes ver la localización exacta de Gualanday, Coello Tolima en
          el mapa. click en el botón de navegación para ver la descripción del
          destino.
        </p>
      </div>
    </main>
  );
}
