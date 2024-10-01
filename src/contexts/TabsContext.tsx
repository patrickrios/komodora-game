import React, { ReactNode, createContext, useState } from "react";

interface TabsContextProps{
    currentTab: number;
    changeTab: (newTab: number) => void;
}

interface PortfolioProviderProps{
    children: ReactNode;
}

export const TabsContext = createContext({} as TabsContextProps);

export const TabsProvider = ({ children } : PortfolioProviderProps) => {
    const[currentTab, setCurrentTab] = useState<number>(0);

    const changeTab = (newTab: number) =>{
        setCurrentTab(newTab);
    };

    return(
        <TabsContext.Provider
            value={{
                currentTab,
                changeTab
            }}
        >
            {children}
        </TabsContext.Provider>
    )
}