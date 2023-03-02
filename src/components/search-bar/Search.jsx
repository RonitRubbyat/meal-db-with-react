import React, { useRef, useState } from 'react';
import './Search.css'
const Search = () => {
    const [val, setVal] = useState('');
    const input = useRef('');

    const change = event => {
        setVal(event.target.val)
    }

    return (
        <div className='search-container'>
            <input id='search-input' type="text" onChange={change} value={val} ref={input} />
            <button>Search</button>
        </div>
    );
};

export default Search;