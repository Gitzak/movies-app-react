import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const Navigate = useNavigate()

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
        setSearchQuery('')
        Navigate('/home')
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/home">
                    <img className="img-fluid" width="100" src="/assets/images/Netflix_2015_logo.png" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Movies
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Series
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                TV Shows
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Top IMDB
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="search-box-container">
                            <div className="search-box mt-1">
                                <form onSubmit={handleSearchSubmit}>
                                    <input type="text" name="q" placeholder="Search anything" className="search-input" value={searchQuery} onChange={handleSearchInputChange} />
                                    <button type="submit" onClick={handleSearchSubmit} className="search-btn">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </li>
                        <li id="btn-sign-in" className="nav-item">
                            <Link className="nav-link mt-1" to="#">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
