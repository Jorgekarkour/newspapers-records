import React from 'react'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { search, searchCompleted, searchFailed } from '../features/newspaper';
import '../styles/Paginator.css';

function Paginator() {
    const pagination = useSelector((state) => state.newspaper.pagination);
    const searchValue = useSelector((state) => state.newspaper.term);
    const showPaginator = (pagination.totalItems >= 1) ? true : false;
    const dispatch = useDispatch();

    async function onNewPage(newPage) {
        const searchParams = {
            term: searchValue,
            page: newPage
        }
        dispatch(search(searchParams));
        try {
            const response = await fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchValue}&format=json&rows=${pagination.itemsPerPage}&page=${newPage}`);
            if (response.ok) {
                const data = await response.json();
                dispatch(searchCompleted(data));
            } else {
                dispatch(searchFailed(true))
            }
        } catch (err) {
            dispatch(searchFailed(true))
        }
    }
    return (
        <div className='paginator' id={showPaginator ? 'show' : 'hide'} data-testid='paginator'>
            <Pagination simple current={pagination.page} pageSize={pagination.itemsPerPage} total={pagination.totalItems}  onChange={onNewPage} />
        </div>
    )
}

export default Paginator
