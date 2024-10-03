import React from "react";
import css from "./dev.module.css";
import gamejam from "./assets/clecio_game_jam-min.png";

export const Development = () => {
    return(
        <article className={css.dev}>
            <h2>Nascido de uma game jam</h2>
            <div className={css.jamSection}>
                <div>
                    <p><i>Komodora</i> foi criado em sete dias para a <i>ClécoGameDev Jam #2</i>. O tema era <i>DRAGÃO</i>, e para fugir do óbvio (um animal místico e castelos medievais), nos veio a ideia de um jogo sobre esses <i>animais ínicríveis</i> que habitam a ilha de <i>Komodo</i>, na <i>Indonésia</i>.</p>
                    <p>O jogo foi implementado na <i>Godot Engine</i>. As artes foram produzidas usando o <i>LibreSprite</i> e os sons foram mixados no <i>Audacity</i>.</p>
                    <p>O ideia deu muito certo, e Komodora foi <i>campeão</i> da GameJam. Após o término da jam, decidimos continuar o projeto e nossa intenção é criar uma <i>versão comercial</i> do jogo.</p>
                </div>
                <img src={gamejam} title="ClecioGameDev Jam #2"/>
            </div>
        </article>
    )
}