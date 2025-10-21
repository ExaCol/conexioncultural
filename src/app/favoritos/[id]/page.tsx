interface PageProps {
  params: { id: string };
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

export default function FavoritoPage({ params }: PageProps) {
  const idNum = Number(params.id);
  const favorito = favoritosData.find((f) => f.id === idNum);

  return (
    <div>
      <h1>Detalle del Favorito #{favorito!.id}</h1>
      <h2>{favorito!.title}</h2>
      <p>{favorito!.description}</p>
      <p>{favorito!.details}</p>
      <img
        src={favorito!.imageUrl}
        alt={favorito!.title}
        style={{ maxWidth: 400, height: "auto" }}
      />
    </div>
  );
}
