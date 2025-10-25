import React from "react";
import styles from "@/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

interface PageProps {
  params: Promise <{ id: string }>;
}

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

export default async function FavoritoPage({ params }: PageProps) {
  const {id} = await params;
  const idNumber = Number(id);

  if (!Number.isFinite(idNumber)) notFound();

  const favorito = favoritosData.find((f) => f.id === idNumber);
  if (!favorito) notFound();

  return (
    <div>
      <article className={styles.card}>
        <Image
          className={styles.media}
          src={favorito.imageUrl}
          alt={favorito.title}
          width={300}
          height={350}
        />
        <div className={styles.body}>
          <h1 className={styles.title}>{favorito.title}</h1>
          <p className={styles.short}>{favorito.description}</p>
          <p className={styles.long}>{favorito.details}</p>
        </div>
      </article>
    </div>
  );
}
