import React from "react";

export const ExternalLink = () => {
    return(
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 8.5V3.5M18.5 3.5H13.5M18.5 3.5L11.5 10.5M10.5 3.5H5.5C4.96957 3.5 4.46086 3.71071 4.08579 4.08579C3.71071 4.46086 3.5 4.96957 3.5 5.5V15.5C3.5 16.0304 3.71071 16.5391 4.08579 16.9142C4.46086 17.2893 4.96957 17.5 5.5 17.5H16.5C17.0304 17.5 17.5391 17.2893 17.9142 16.9142C18.2893 16.5391 18.5 16.0304 18.5 15.5V11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};

interface MenuIconProps{
    styleClass: string;
}
export const MenuIcon = ({ styleClass } : MenuIconProps) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" className={styleClass}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8H18M6 12H18M6 16H18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};