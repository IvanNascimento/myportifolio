/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";
const image = "https://web-static.wrike.com/blog/content/uploads/2017/03/PREVIEW-project-portfolio-manager.jpg?av=06c2601eebb032c3b0a3529b2f8ba8e7";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Trabalhando Atualmente",
    description: `GM Tech Digital: Desenvolvimento de tecnologias para Mídia Programática.`,
    url: "https://github.com/gmtechdigital",
  },
  {
    title: "Códigos Feitos em Sala de Aula",
    description: `Repositório de alguns códigos desenvolvidos em ambiente escolar`,
    url: "https://github.com/IvanNascimento/class-codes",
  },
  {
    title: "Sequelize Module",
    description: `Demonstração do código que desenvolvi para gerar endpoints automaticamente, recebendo o Model desejado.`,
    url: "https://github.com/IvanNascimento/sequelize-school-example",
  },
  {
    title: "Perfil no GitHub",
    description: `Meu Repositório padrão.`,
    url: "https://github.com/IvanNascimento",
  },
  {
    title: "Perfil na Beecrowd",
    description: `Juiz Online onde treinei e resolvi códigos durante meu primeiro ano do ensino médio.`,
    url: "https://www.beecrowd.com.br/judge/pt/profile/131686",
  },
  {
    title: "Perfil no Replit",
    description: `Repositório que utilizei durante algum tempo.`,
    url: "https://replit.com/@ivannascimento",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
