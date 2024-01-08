import React from 'react'
import s from './index.module.scss'

export const SearchForm = ({ search, setSearch }) => {
    const onSearchInputChange = (e) => setSearch(e.target.value)
    return (
        <form className={s.searchForm} onSubmit={(e) => e.preventDefault()} >
            <label htmlFor="search">Search</label>
            <input
                type="text"
                id="search"
                placeholder='Search...'
                autoComplete='off'
                value={search}
                onChange={onSearchInputChange}
            />
        </form>
    )
}
