import React from 'react'

const Filter = () => {
    return (
        <div>

            <nav className="navbar ">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-12 w-500" type="search" placeholder="Search for a country" aria-label="Search" />
                    </form>
                <select name="" id="">
                    <option value="">Filter by Region</option>
                    <option value="">Amerika</option>
                    <option value="">Afrika</option>
                    <option value="">Asia</option>
                    <option value="">Europe</option>
                </select>
                </div>

            </nav>
        </div>
    )
}

export default Filter