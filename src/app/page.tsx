/*
Developed by EXA
Version 1.0
Home Page
*/

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conexión Cultural",
  description:
    "Plataforma para la promoción y difusión de la cultura local de Gualanday",
};

export default function Home() {
  return (
    <main>
      <section id="home">
        <h1>Conexión Cultural</h1>
        <p>
          "Conexión Cultural" es una plataforma interactiva que utiliza mapas y
          herramientas gráficas para revitalizar pueblos olvidados en Colombia,
          afectados por la construcción de viaductos. Conectamos a estas
          comunidades con el turismo y el comercio, fomentando su desarrollo
          económico y cultural.
        </p>
      </section>
      <section id="about-us">
        <h2>Nuestro Equipo</h2>
        <div id="team-members">
          <div>
            <img src="/Santiago.jpg" alt="Santiago Huerfano" />
            <h3>Santiago Huerfano</h3>
            <p>
              Especialista en gamificación y creación de contenido educativo,
              responsable del diseño de la estructura digital.
            </p>
          </div>
          <div>
            <img src="/imagen.png" alt="María José Bermeo" />
            <h3>María José Bermeo</h3>
            <p>
              Directora de arte y marketing, a cargo de la identidad visual y
              estrategias de comunicación.
            </p>
          </div>
          <div>
            <img src="/Nicolas.png" alt="Nicolás Barreto" />
            <h3>Nicolás Barreto</h3>
            <p>
              Especialista en animación, aportando experiencias interactivas
              dinámicas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
