import React, { useContext } from "react";
import css from "./main-menu.module.css";
import { TabsContext } from "../../contexts/TabsContext";
import { MenuIcon } from "../../assets/icons";

const menuItems = [{
        name: "Home",
        tab: 0
    },{
        name: "Desenvolvimento",
        tab: 1
    },{
        name: "Contato",
        tab: 2
    }
];

export const MainMenu = () => {
    const { currentTab, changeTab } = useContext(TabsContext);

    const onMenuItemClicked = (event: any) =>{
        const new_tab: number = event?.target?.value;
        changeTab(new_tab);
    };

    const onSelection = (event: any) =>{
        const new_tab: number = event?.target?.value;
        console.log(Number(new_tab));
        changeTab(Number(new_tab));
    }

    return(
        <>
            <nav className={`${css.mainMenu} desk-only`}>
                <ul>
                    { menuItems.map( item =>{
                        return(
                            <li 
                                className={currentTab === item?.tab  ? css.selected : ''}
                                key={`main-menu-item-${item?.name}-${item?.tab}`}
                                value={item.tab}
                                onClick={onMenuItemClicked}
                            >
                                {item?.name}
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className={`${css.selectContainer} mobile-only`}>
                <MenuIcon styleClass={css.mobileMenuIcon}/>
                <select onChange={onSelection} className={css.mobileMenu}>
                    {menuItems?.map(item =>{
                        return(
                            <option value={item.tab} key={`option-item-${item?.name}`}>
                                {item?.name}
                            </option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}