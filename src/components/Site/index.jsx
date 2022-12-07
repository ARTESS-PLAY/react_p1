import React from 'react';
import Search from '../Search';
import ListCat from '../ListCat';

function Site({products}) {
    return (
        <div>
            <Search></Search>
            <ListCat products={products}></ListCat>
        </div>
    );
}

export default Site;