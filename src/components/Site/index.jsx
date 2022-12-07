import React, {useState} from 'react';
import Search from '../Search';
import ListCat from '../ListCat';

function Site({products}) {
    const [isStockOnly, setisStockOnly] = useState(false);
    const [filterStr, setfilterStr] = useState('');

    //фильтрация товаров в зависимости от состояний
    const sortedProducts = products.filter(el =>{
        //проверка на наличие
        const stock = !(isStockOnly) || el.stocked; 

        //проверка по поиску
        const str = el.name.includes(filterStr);

        return stock && str;
    });


    return (
        <div>
            <Search onChangeInput={setfilterStr} onChangeCheckbox={setisStockOnly}></Search>
            <ListCat products={sortedProducts}></ListCat>
        </div>
    );
}

export default Site;