import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setBodyTable } from '../features/tableSlice';
import Header from '../modelisations/Header';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
    const dispatch = useDispatch();
    const { header, initialBody } = useSelector((state: RootState) => state.table);

    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        setSearchTerm('');
    }, [initialBody]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const toSearch = e.target.value.toLowerCase();
        setSearchTerm(toSearch);

        if (toSearch === '') {
            dispatch(setBodyTable(initialBody));
        } else {
            const results = initialBody
                ? initialBody.filter((item: any) =>
                      header.some((column: Header) =>
                          item[column.id].toString().toLowerCase().includes(toSearch)
                      )
                  )
                : null;
            dispatch(setBodyTable(results));
        }
    };

    return (
        <div>
            <input
                className={'inputSearch'}
                type={'text'}
                id={'search'}
                placeholder={'Rechercher'}
                value={searchTerm}
                onChange={handleSearch}
            ></input>
        </div>
    );
};

export default Search;
