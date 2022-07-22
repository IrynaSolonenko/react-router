import React from 'react';

import notFound from './notFound.jpeg'

const NotFound = () => {
    return (
        <>
            <h1>Page was not found</h1>
            <img src={notFound} alt={'notFound'}/>

        </>
    );
}

export default NotFound