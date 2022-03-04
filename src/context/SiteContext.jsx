import { createContext, useState } from "react";

export const SiteContext = createContext(); 

export const SiteContextProvider = props => {
    const [location, setLocation] = useState({});


    return (
        <SiteContext.Provider value = {{location, setLocation}}>
            {props.children}
        </SiteContext.Provider>
    
    );
}

