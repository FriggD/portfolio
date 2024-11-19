import React from "react";

import styles from "./AboutMe.module.css";
import Image from "next/image";
import me from "../../../assets/me.jpeg";
import autism from "../../../assets/autism.png";

export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.texto}>
        <div className={styles.title}>Sobre mim</div>
        <div className={styles.glow}></div>
        <p>
          Podem me chamar de <spam style={{ color: "#f381c5" }}>Frigg</spam>,
          sou Engenheira de Computação pela UEPG.
        </p>
        <p>
          Tenho conhecimento em frameworks como Angular, React, Laravel e
          Node.js, e em linguagens como Python, C# e .NET.
        </p>
        <p>
          Trabalho no desenvolvimento de{" "}
          <spam style={{ color: "#f381c5" }}>soluções tecnológicas</spam>,
          aplicações web, modelagem de dados e gestão de processos ágeis com
          Scrum e Kanban e qualidade de software, focando em testes, resolução
          de bugs e melhoria contínua.
        </p>
        <p>
          Meu objetivo é contribuir para{" "}
          <spam style={{ color: "#f381c5" }}>projetos inovadores</spam>, fazendo
          diferença na vida das{" "}
          <spam style={{ color: "#f381c5" }}>pessoas</spam>.
        </p>
      </div>
      <div className={styles.minhaFoto}>
        <div className={styles.image}>
          <Image
            src={me}
            alt="Picture of the author"
            // width={500}
            height={350}
            placeholder="blur" // Optional blur-up while loading
          />
          <div className={styles.autismImage}>
            <Image
              src={autism}
              alt="Picture of the author"
              // width={500}
              height={70}
              style={{ paddingLeft: "22px", paddingTop: "5px" }}
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      </div>
    </div>
  );
}
