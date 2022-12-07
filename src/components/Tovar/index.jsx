import React from 'react';
import styles from './Tovar.module.css';

function Tovar({product}) {
    return (
        <tr>
            <td><span className={product.stocked ? '' : styles.product_none}>{product.name}</span></td>
            <td>{product.price}</td>
        </tr>
    );
}

export default Tovar;