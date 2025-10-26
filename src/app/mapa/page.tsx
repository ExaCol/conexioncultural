/*
Developed by EXA
Version 1.0
Maps Page
*/
import React from "react";
import type { Metadata } from "next";
import Mapa from "@/components/Mapa";

export const metadata: Metadata = {
  title: "Mapa de Gualanday",
  description: "Navega por el mapa interactivo de Gualanday",
};

export default function MapaGualanday() {
  return (
    <div>
      <h1>Conexión Cultural</h1>
      <h2>Mapa de Gualanday</h2>
      <Mapa />
      <h3>Ubicación en el Mapa</h3>
      <p>
        Aquí puedes ver la localización exacta de Gualanday, Coello Tolima en el
        mapa. Da click en el botón de navegación para ver la descripción del
        destino.
      </p>
    </div>
  );
}
