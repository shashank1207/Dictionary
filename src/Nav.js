import React, {useEffect, useState} from 'react';


function Nav({getApi, find}) {
    const [search, setSearch] = useState('');

    const [query, setQuery] = useState('Dictionary');

    const updateSearch = e => {
        setSearch(e.target.value)
    }
    
    const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    }

    useEffect(() => {
        getApi(query);
    },[query])

    return(
        <nav>
            <form className='searchForm' onSubmit={getSearch} >
                <input className='searchBar' type="text" value={search} onChange={updateSearch} placeholder= 'Search Dictionary'  />
                <button type='submit' className='submitButton'>
                    <img src={find} alt='search' className='find'/>
                </button>
            </form>
        </nav>
    )
}

export default Nav;
