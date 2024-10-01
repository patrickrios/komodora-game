import React from "react";
import css from "./home.module.css";
import KomodoraCover from "./assets/komdora_vertical_cover_min.png";
import puzzle2D from "./assets/puzzle_plataforma_2D-min.png";
import fasesFeitas from "./assets/fases_feitas_a_mao-min.png";
import graficosPixels from "./assets/lindos_graficos_pixel_art-min.png";
import personagemFofa from "./assets/personagem_fofa_carismatica-min.png";
import { ExternalLink } from "../../assets/icons";

export const Home = () => {
    return(
        <article className={css.content}>
            <section className={css.contentSection}>
                <div>
                    <h2>Descrição</h2>
                    <p><i>Komodora</i> é um jogo especial para <i>pessoas especiais</i>. Uma jornada de <i>aventura</i>, o objetivo é alcançar o outro lado de uma <i>ilha</i> onde a condição de vida é melhor para nossa <i>heroína</i>.</p>
                    <p>Mas o caminho até lá é repleto de <i>desafios</i>, e para superá-los, você pode contar com ajuda de <i>objetos mágicos</i> que te fornecem <i>habilidades</i> especiais.</p>
                </div>
                <div>
                    <h3>Features:</h3>
                    <ul className={css.featureGrid}>
                        <li className={css.feature}>
                            <img src={puzzle2D} title="Puzzle no Komodora"/>
                            <span><i>Puzzle</i> em plataforma 2D</span>
                        </li>
                        <li className={css.feature}>
                            <img src={fasesFeitas} title="Fase no Komodora"/>
                            <span>Fases <i>feitas à mão</i></span>
                        </li>
                        <li className={css.feature}>
                            <img src={graficosPixels} title="Pixel arte"/>
                            <span>Lindos gráficos em <i>pixel art</i></span>
                        </li>
                        <li className={css.feature}>
                            <img src={personagemFofa} title="Komodora linda"/>
                            <span>Personagem <i>fofa</i> e <i>carismática</i></span>
                        </li>
                    </ul>
                </div>
            </section>
            <aside className={css.sideContent}>
                <h2 className={css.gameTitleHead}>
                    Komodora
                </h2>
                <img src={KomodoraCover} title="Capa do Jogo Komodora"/>
                <p className={css.firstPlace}>
                    🥇🏆 1º lugar na <a href="https://itch.io/jam/clecio-gamedev-jam-02" target="_blank" rel="noreferrer">Clecio Gamedev JAM #02</a>
                </p>
                <ul className={css.gameInfo}>
                    <li><p><b>Gênero:</b> Aventura, Plataforma</p></li>
                    <li><p><b>Ano:</b> 2024</p></li>
                    <li><p><b>Status:</b> Em desenvolvimento</p></li>
                </ul>
                <a href="https://patrickrios.itch.io/komodora" target="_blank" rel="noreferrer" className={css.playButton}>
                    Jogar a demo no Itch.io <ExternalLink/>
                </a>
            </aside>
        </article>
    )
    
}