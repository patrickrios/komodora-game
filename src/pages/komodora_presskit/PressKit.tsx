import React, { useContext } from "react";
import { Header } from "../../comps/header/header";
import { Home } from "../../comps/home/home";
import { TabsContext } from "../../contexts/TabsContext";
import { Development } from "../../comps/dev/development";
import { Footer } from "../../comps/footer/footer";
import { ContactForm } from "../../comps/contact-form/ContactForm";
import { WhatsAppButton } from "../../comps/whatsapp-btn/Whatsapp";

export const KomodoraPresskit = () => {
    const { currentTab } = useContext(TabsContext);
    return(
        <main id="wrapper">
            <Header/>
            { currentTab === 0 && <Home/>}
            { currentTab === 1 && <Development/>}
            { currentTab == 2 && <ContactForm/>}
            <Footer/>
            <WhatsAppButton/>
        </main>
    )
}