import React from "react";
import css from "./footer.module.css";

export const Footer = () => {
    return(
        <footer className={css.footer}>
            by patrickrios - {new Date().getFullYear()}
        </footer>
    )
}