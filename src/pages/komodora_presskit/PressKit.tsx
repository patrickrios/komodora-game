import React, { useContext } from "react";
import { Header } from "../../comps/header/header";
import { MainMenu } from "../../comps/main-menu/main-menu";
import { Home } from "../../comps/home/home";
import { TabsContext } from "../../contexts/TabsContext";
import { Development } from "../../comps/dev/development";
import { Footer } from "../../comps/footer/footer";

export const KomodoraPresskit = () => {
    const { currentTab } = useContext(TabsContext);
    return(
        <main id="wrapper">
            <Header/>
            <MainMenu/>
            { currentTab === 0 && <Home/>}
            { currentTab === 1 && <Development/>}
            <Footer/>
        </main>
    )
}