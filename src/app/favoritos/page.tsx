import React from "react";
import styles from "@/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

//datos quemados de favoritos
const favoritosData = [
  {
    id: 1,
    title: "Iglesia Principal",
    description: "Hermosa iglesia del pueblo",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis ullamcorper nisl et dignissim.",
    imageUrl: "/iglesia.png",
  },
  {
    id: 2,
    title: "Gastronomía",
    description: "Gastronomía del pueblo",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis ullamcorper nisl et dignissim.",
    imageUrl: "/gastronomia.png",
  },
  {
    id: 3,
    title: "Río",
    description: "Río cercano al pueblo",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis ullamcorper nisl et dignissim.",
    imageUrl: "/rio.png",
  },
];

export default function Favoritos() {
  return (
    <div>
      <h1>Favoritos</h1>
      <section className={styles.list}>
        {favoritosData.map((favorito) => (
          <Link
            key={favorito.id}
            href={`/favoritos/${favorito.id}`}
            aria-label={`Ver detalle de ${favorito.title}`}
          >
            <div className={styles.body}>
              <h2 className={styles.title}>{favorito.title}</h2>
            </div>
            <Image
              className={styles.media}
              src={favorito.imageUrl}
              alt={favorito.title}
              width={800}
              height={500}
              priority={false}
            />
            <div className={styles.body}>
              <p className={styles.short}>{favorito.description}</p>
            </div>
            {/*
                <h2>{favorito.title}</h2>
                <img src={favorito.imageUrl} alt={favorito.title} width={300} />
                <p>{favorito.description}</p>
                */}
          </Link>
        ))}
      </section>
    </div>
  );
}
