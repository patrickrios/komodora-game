import React from "react";
import css from "./header.module.css";
import logo286 from "./assets/komodora_logo_286_35-min.png";
import logo370 from "./assets/komodora_logotype_370_45-min.png";
import logo500 from "./assets/komodora_logotype_500_61-min.png";
import logo643 from "./assets/komodora_logotype-min.png";
import { MainMenu } from "../main-menu/main-menu";

export const Header = () => {
    return(
        <header className={css.header}>
            <div className={css.headerImage}/>
            <picture className={css.headerLogo}>
                <source srcSet={logo286} media="(max-width: 269px)"/>
                <source srcSet={logo370} media="(min-width: 370px) and (max-width: 499px)"/>
                <source srcSet={logo500} media="(min-width: 500px) and (max-width: 642px)"/>
                <img src={logo643} title="Komodora"/>
            </picture>
            <MainMenu/>
        </header>
    )
}