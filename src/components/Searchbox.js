import React from 'react'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { search, searchCompleted, searchFailed } from '../features/newspaper';
import '../styles/Searchbox.css';

const { Search } = Input;

function Searchbox() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.newspaper.loading);
    const pagination = useSelector((state) => state.newspaper.pagination);

    async function onSearch(searchValue) {

        const searchParams = {
            term: searchValue,
            page: 1,
        }
        dispatch(search(searchParams));
        try {
            const response = await fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchValue}&format=json&rows=${pagination.itemsPerPage}&page=${pagination.page}`);
            if (response.ok) {
                const data = await response.json();
                dispatch(searchCompleted(data));
               (data.items.length < 1) ? dispatch(searchFailed(true)) : dispatch(searchFailed(false));
            } else {
                dispatch(searchFailed(true))
            }
        } catch (err) {
            dispatch(searchFailed(true))
        }
    }

    return (
        <div className='searchbox' data-testid='searchbox'>
            <Search placeholder="type a United States state/city/county/..." enterButton onSearch={onSearch} loading={loading} />
        </div>
    )
}

export default Searchbox
