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
    nombre: "Viaducto de Gualanday",
    description:
      "Es la carretera que conecta a Girardot con Ibagué, para no pasar por la carretera antigua donde se encuentra Gualanday. Este viaducto ha permitido conectar a los territorios pero ha dejado de lado a Gualanday y a lo que tiene para ofrecer.",
    imageUrl: "/viaducto.jpeg",
    position: { lat: 4.291650678078798, lng: -75.03432882140002 },
  },
  {
    id: "2",
    nombre: "Plazoleta principal de Gualanday",
    description:
      "Aquí encontrarás la iglesia de Gualanday, y principales locales comerciales de algunos habitantes del pueblo.",
    imageUrl: "/plazoleta.jpg",
    position: { lat: 4.284733623989195, lng: -75.0329783252922 },
  },
  {
    id: "3",
    nombre: "Hacienda Castilla Real",
    description:
      "Es una hacienda con más de 200 hectáreas que ofrece hospedaje y turismo a la vez. En el territorio de esta hacienda se encuentra el desierto y las cascadas de Gualanday. En este lugar se grabó parte de la serie de “Cien Años de Soledad” de Netflix como parte de la Ruta Macondo.",
    imageUrl: "/hacienda.jpg",
    position: { lat: 4.282082580113469, lng: -75.01435403286057 },
  },
  {
    id: "4",
    nombre: "Río Coello",
    description:
      "¡Refréscate en este espectacular río natural! Puedes planear igualmente el famoso paseo de olla para pasar un buen rato en familia y/o amigos.",
    imageUrl: "/rio.jpg",
    position: { lat: 4.281521170490781, lng: -75.03448761504414 },
  },
  {
    id: "5",
    nombre: "Desierto de Gualanday",
    description:
      "El Desierto de Gualanday es un área árida ubicada en la Hacienda Castilla Real. Se encuentra a unos 25 minutos de Ibagué. Este desierto es único por su proximidad a un nacedero de agua cristalina con cascada.",
    imageUrl: "/desierto.jpg",
    position: { lat: 4.280857880562128, lng: -75.02337825609354 },
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
      const { AdvancedMarkerElement } = (await importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

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
