import React, {useState, createContext} from 'react';

export const SiteContext = createContext();

export const SiteContextProvider = props => {
    const [page, setPage] = useState('About Me');

    return (<SiteContext.Provider value = {{page, setPage}}>{props.children}</SiteContext.Provider>)
}

