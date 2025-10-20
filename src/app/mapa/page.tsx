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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        officia quibusdam sed ex numquam ea magnam exercitationem placeat,
        consequuntur sapiente perferendis maiores labore. Eos, sequi minus!
        Nihil suscipit doloremque error!
      </p>
    </div>
  );
}
