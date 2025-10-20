import React from "react";
import Image from "next/image";
import Link from "next/link";

//datos quemados de favoritos
const favoritosData = [
  {
    id: 1,
    title: "Iglesia Principal",
    description: "Hermosa iglesia del pueblo",
    imageUrl: "/iglesia.png",
  },
  {
    id: 2,
    title: "Gastronomía",
    description: "Gastronomía del pueblo",
    imageUrl: "/gastronomia.png",
  },
  {
    id: 3,
    title: "Río",
    description: "Río cercano al pueblo",
    imageUrl: "/rio.png",
  },
];

export default function Favoritos() {
  return (
    <div>
      <h1>Favoritos</h1>

      <div>
        {favoritosData.map((favorito) => (
          <Link
            key={favorito.id}
            href={`/favoritos/${favorito.id}`}
            aria-label={`Ver detalle de ${favorito.title}`}
          >
            <h2>{favorito.title}</h2>
            <img src={favorito.imageUrl} alt={favorito.title} width={300} />
            <p>{favorito.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
