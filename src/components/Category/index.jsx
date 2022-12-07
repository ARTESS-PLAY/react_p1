import React from 'react';
import Tovar from '../Tovar';


function Category({products, catName}) {
    return (
        <>
            <tr><th colSpan={2}>{catName}</th></tr>
            {products.map(product =>{
                return <Tovar product={product}></Tovar>
            })}

        </>
    );
}

export default Category;