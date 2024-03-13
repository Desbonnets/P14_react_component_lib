import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setBodyTable } from '../features/tableSlice';

interface SearchProps {
}

const Search: React.FC<SearchProps> = () => {

    const dispatch = useDispatch();
    const {header, initialBody} = useSelector((state: RootState)=>state.table)

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const toSearch = e.target.value.toLowerCase();
        if(toSearch === ''){
            dispatch(setBodyTable(initialBody));
        }else{
            const results = initialBody ? initialBody.filter((item: any) =>
            header.some((column:{id:string;label:string;type:string}) =>
                    item[column.id].toString().toLowerCase().includes(toSearch)
                )
            ) : null;
            dispatch(setBodyTable(results));
        }
    };

    return (
        <div>
            <input
                className={"inputSearch"}
                type={"texte"}
                id={'search'}
                placeholder={'Rechercher'}
                onChange={handleSearch}
            ></input>
        </div>
    )
};

export default Search;