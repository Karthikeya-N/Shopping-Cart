import React from'react';
import List from '../data.js';
import Cards from './Cards.js';
import '../style/Amazon.css';

const Amazon = ({handleClick}) =>{

    return(
        <section>
            {List.map((item)=> (<Cards key={item.id} item={item} handleClick= {handleClick} />))}
        </section>
    );
}
export default Amazon;