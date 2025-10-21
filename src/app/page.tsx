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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
          dolore tenetur. Dolores qui distinctio error, excepturi beatae in
          maiores repudiandae blanditiis nobis odio odit hic suscipit neque iste
          explicabo officia?
        </p>
      </section>
      <section id="about-us">
        <h2>Nuestro Equipo</h2>
        <div id = "team-members">
          <div>
            <img src="/Santiago.jpg" alt="Santiago Huerfano" />
            <h3>Santiago Huerfano</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              totam nihil neque nam. Dolorem, cupiditate? Ratione sit dolorum
              recusandae in amet quos, pariatur magni fugit error iure accusamus
              consectetur maiores?
            </p>
          </div>
          <div>
            <img src="/imagen.png" alt="María José Bermeo" />
            <h3>María José Bermeo</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              totam nihil neque nam. Dolorem, cupiditate? Ratione sit dolorum
              recusandae in amet quos, pariatur magni fugit error iure accusamus
              consectetur maiores?
            </p>
          </div>
          <div>
            <img src="/Nicolas.png" alt="Nicolás Barreto" />
            <h3>Nicolás Barreto</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              totam nihil neque nam. Dolorem, cupiditate? Ratione sit dolorum
              recusandae in amet quos, pariatur magni fugit error iure accusamus
              consectetur maiores?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
