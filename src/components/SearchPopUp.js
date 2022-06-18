import React, { Component } from 'react'

const SearchPopUp = (props) => {
    return (
        <>
            {props.isSearchOpen ?
                <div className="search-popup visible">
                <button type="button" className="btn-close" aria-label="Close" onClick={() => props.setSearch(false)} />
                <div className="search-content">
                    <div className="text-center">
                        <h3 className="mb-4 mt-0">Press ESC to close</h3>
                    </div>
                    <form className="d-flex search-form">
                        <input className="form-control me-2" type="search" placeholder="Search and press enter ..." aria-label="Search" />
                        <button className="btn btn-default btn-lg" type="submit"><i className="icon-magnifier"></i></button>
                    </form>
                </div>
            </div> : null}
        </>
    )
}
export default SearchPopUp;