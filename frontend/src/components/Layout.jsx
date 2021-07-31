import React from 'react';
import Header from './layout/Header';

const Layout = ({apis, children}) => {
    return (
        <>
            <Header apis={apis} />
            {children}
        </>
    )
}

export default Layout;