import React from 'react';

function Tovar({product}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default Tovar;