import React from "react";
import imagemBaleia from "../imagens/imageBaleia.webp";
import imagemCachorro from "../imagens/imagemCachorro.jpg";
import imagemGato from "../imagens/imagemGato.jpg";
import imagemLobo from "../imagens/imageLobo.webp"
import imagemAguia from "../imagens/imageAguia.webp"

import styles from "./cardAnimal.module.css"

export default function CardAnimal(props) {
  return (
    <div className={styles.cardAnimalContainer}>
      <img
        src={
          props.tipoAnimal === "cachorro"
            ? imagemCachorro
            : props.tipoAnimal === "baleia"
            ? imagemBaleia
            : props.tipoAnimal === "lobo"
            ? imagemLobo
            : props.tipoAnimal === "aguia"
            ? imagemAguia : imagemGato
        }
        alt="animal"
      />
    </div>
  );
}
