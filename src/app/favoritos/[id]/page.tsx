interface PageProps {
  params: { id: string };
}

export default function FavoritoPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div>
      <h1>Detalle del Favorito #{id}</h1>
      <p>Iglesia de yo no se quiensito {id}</p>
    </div>
  );
}