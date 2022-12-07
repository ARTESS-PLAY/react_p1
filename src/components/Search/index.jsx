import React from 'react';


function Search(props) {
    return (
        <form>
            <input type="search" name="" placeholder='Search...' id="" onChange={(e) => {
                props.onChangeInput(e.target.value);
            }}/>
            <p>
                <input type="checkbox" name="" id=""  onChange={(e) =>{
                    props.onChangeCheckbox(e.target.checked);
                }}/>
                {" "}
                Only show products in stock
            </p>
        </form>
    );
}

export default Search;