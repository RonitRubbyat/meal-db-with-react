import React, { useRef, useState } from 'react';
import './Search.css'
const Search = ({searchItem}) => {
    const [val, setVal] = useState('');

    const change = event => {
        setVal(event.target.value);
        // console.log(event.target.value);
    }

    return (
        <div className='search-container'>
            <input id='search-input' type="text" value={val} onChange={change} />
            <button onClick={()=> searchItem(val)}>Search</button>
        </div>
    );
};

export default Search;