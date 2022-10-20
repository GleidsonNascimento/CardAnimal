import React from "react";

import styles from"./cardinfoAnimal.module.css"           

export default function CardInfo(props) {
  let nomeAnimalCachorro = "Cachorro";
  let nomeAnimalGato = "Gato";
  let nomeAnimalBaleia = "Baleia";
  let nomeAnimalLobo = "Lobo"
  let nomeAnimalAguia = "Águia"

  let informacaoAnimalCachorro =
    "O cão, no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. Teorias postulam que surgiu do lobo cinzento no continente asiático há mais de 100 000 anos.";
  let informacaoAnimalGato =
    "O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos";
  let informacaoAnimalBaleia =
    "A baleia-azul é um mamífero marinho pertencente à subordem dos misticetos dos cetáceos. Com até 30 metros de comprimento e mais de 180 t de peso, são os maiores animais que já existiram.";

    let informacaoAnimalAguia = "A águia é o nome comum dado algumas aves de rapina da família Accipitridae, geralmente de grande porte, carnívoras, de grande acuidade visual. O nome é atribuído a animais pertencentes a gêneros diversos e não corresponde a nenhum clade taxonômico."

    let informacaoAnimalLobo = "O lobo é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae."

  let expectativaCachorro = "10 – 13 anos";
  let expectativaBaleia = "80 – 90 anos";
  let expectativaGato = "12 – 18 anos";
  let expectativaAguia = " 20 – 30 anos"
  let expectativaLobo = "16 anos (Macho, em cativeiro), 14 anos (Fêmea, na natureza)"

  let alturaCachorro = "15 – 110 cm";
  let alturaGato = "23 – 25 cm";
  let alturaBaleia = "Comprimento: 23 – 24 m";
  let alturaLobo = " 1 – 1,6 m (Adulto)"
  let alturaAguia = "Comprimento: Águia-real: 66 – 100 cm"
  return (
    <div className={styles.containerInfo}>
      <h3>
        {props.tipoAnimal === "cachorro"
          ? nomeAnimalCachorro
          : props.tipoAnimal === "baleia"
          ? nomeAnimalBaleia
          : props.tipoAnimal === "lobo"
          ? nomeAnimalLobo
          : props.tipoAnimal === "aguia"
          ? nomeAnimalAguia : nomeAnimalGato
          }
      </h3>
      <p className={styles.text}>
        {props.tipoAnimal === "cachorro"
          ? informacaoAnimalCachorro
          : props.tipoAnimal === "baleia"
          ? informacaoAnimalBaleia
          : props.tipoAnimal === "lobo"
          ? informacaoAnimalLobo
          : props.tipoAnimal === "aguia"
          ? informacaoAnimalAguia : informacaoAnimalGato }
      </p>
      <p>
        <span>Expectativa:</span>
        &nbsp;&nbsp;
        {props.tipoAnimal === "cachorro"
          ? expectativaCachorro
          : props.tipoAnimal === "baleia"
          ? expectativaBaleia
          : props.tipoAnimal === "lobo"
          ? expectativaLobo
          : props.tipoAnimal === "aguia"
          ? expectativaAguia : expectativaGato}
      </p>
      <p>
        <span>Altura:</span>
        &nbsp;
        {props.tipoAnimal === "cachorro"
          ? alturaCachorro
          : props.tipoAnimal === "baleia"
          ? alturaBaleia
          : props.tipoAnimal === "lobo"
          ? alturaLobo
          : props.tipoAnimal === "aguia"
          ? alturaAguia : alturaGato}
      </p>
    </div>
  );
}
