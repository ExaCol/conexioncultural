/*
Developed by EXA
Version 1.0
Map Component
*/
/*
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
*/
/*
Developed by EXA
Version 1.0
Map Component (Leaflet + OSM, sin APIs de Google)
*/
"use client";

import { useEffect, useRef, useState } from "react";
import type { Place } from "./Target";
import Target from "./Target";

// ✅ Tipo compatible con tu Place y con Leaflet
export type Punto = Place & { position: { lat: number; lng: number } };

// 👉 Mismos puntos que ya tenías
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
    // Importamos Leaflet sólo en cliente para evitar SSR issues
    let map: any = null;
    let layerGroup: any = null;

    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (!divRef.current) return;

      // Crea el mapa centrado cerca del área
      map = L.map(divRef.current, {
        center: [4.28307, -75.030759],
        zoom: 13,
      });

      // Capa base de OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Agrupamos marcadores para poder ajustar bounds
      layerGroup = L.layerGroup().addTo(map);

      const bounds = L.latLngBounds([]);

      // Marcadores: uso circleMarker para evitar problemas de iconos en Next.js
      puntos.forEach((p) => {
        const marker = L.circleMarker([p.position.lat, p.position.lng], {
          radius: 8,
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8,
        }).addTo(layerGroup);

        marker.bindTooltip(p.nombre);

        marker.on("click", () => {
          setSeleccionado(p);
          // Opcional: centrar al seleccionar
          map.setView([p.position.lat, p.position.lng], Math.max(map.getZoom(), 14), { animate: true });
        });

        bounds.extend([p.position.lat, p.position.lng]);
      });

      if (bounds.isValid()) map.fitBounds(bounds.pad(0.2));
    })();

    // Cleanup
    return () => {
      // destruimos el mapa correctamente si existe
      if (map && map.remove) {
        map.remove();
      }
      map = null;
      layerGroup = null;
    };
  }, []);

  return (
    <>
      <div ref={divRef} style={{ width: "100%", height: 500 }} />
      <Target place={seleccionado} onClose={() => setSeleccionado(null)} />
    </>
  );
}
