import React from 'react';
import Category from '../Category';


function ListCat({products}) {
    //делим на категории
    const sortedProducts= [];

    products.forEach(element => {
        let flagFind = false;
        sortedProducts.forEach(el => {
            //если совпали категории то добавляем в массим
            //иначе создаём новый
            if(el[0]['category'] == element['category']){
                flagFind = true;
                el.push(element);
                return;
            }
        });

        if(!flagFind){
            sortedProducts.push(Array(element));
        }
    });

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            {sortedProducts.map(products => {
                return <Category catName={products[0]['category']} products={products}></Category>
            })}
        </table>
    );
}

export default ListCat;