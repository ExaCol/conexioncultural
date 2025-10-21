/*
Developed by EXA
Version 1.0
Map Component
*/
"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import Target, { Place } from "./Target";

export type Punto = Place & { position: google.maps.LatLngLiteral };

const puntos: Punto[] = [
  {
    id: "1",
    nombre: "Plaza",
    description: "La plaza principal de Gualanday, punto de encuentro.",
    imageUrl: "/lugar.jpg",
    position: { lat: 4.283, lng: -75.03075 },
  },
  {
    id: "2",
    nombre: "Museo",
    description: "Pequeño museo con historia local y artesanías.",
    imageUrl: "/lugar.jpg",
    position: { lat: 4.28306, lng: -75.030755 },
  },
  {
    id: "3",
    nombre: "Parque",
    description: "Zona verde ideal para paseos y fotografías.",
    imageUrl: "/lugar.jpg",
    position: { lat: 4.28306, lng: -75.03076 },
  },
];

export default function Mapa() {
  const divRef = useRef<HTMLDivElement>(null);
  const [seleccionado, setSeleccionado] = useState<Punto | null>(null);

  useEffect(() => {
    let map: google.maps.Map | null = null;

    const init = async () => {
      if (!divRef.current) return;

      setOptions({ key: process.env.NEXT_PUBLIC_API_KEY! });
      const mapId = process.env.NEXT_PUBLIC_GMP_MAP_ID;

      const { Map } = (await importLibrary("maps")) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } =
        (await importLibrary("marker")) as google.maps.MarkerLibrary;

      map = new Map(divRef.current, {
        center: { lat: 4.28307, lng: -75.030759 },
        zoom: 13,
        mapId,
      });

      const bounds = new google.maps.LatLngBounds();

      puntos.forEach((p) => {
        const marker = new AdvancedMarkerElement({
          map,
          position: p.position,
          title: p.nombre,
        });

        bounds.extend(p.position);
        marker.addListener("click", () => setSeleccionado(p));
      });

      if (!bounds.isEmpty()) map.fitBounds(bounds);
    };

    init();
    return () => {
      map = null;
    };
  }, []);

  return (
    <>
      <div ref={divRef} style={{ width: "100%", height: 500 }} />
      <Target place={seleccionado} onClose={() => setSeleccionado(null)} />
    </>
  );
}
