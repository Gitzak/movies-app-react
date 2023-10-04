import React, { useState, useEffect } from "react";
import MovieCard from "./../MovieCard/MovieCard";
import Pagination from "./../Pagination/Pagination";
import { Loader } from "../Loader/Loader";

const API_URL = "https://www.omdbapi.com/?apikey=78a9e749";

function Movies({ searchQuery }) {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovies = async (title, page) => {
        setIsLoading(true);
        const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
        const data = await response.json();

        if (data.Response === "True") {
            setMovies(data.Search);
            setTotalResults(data.totalResults);
        } else {
            setMovies([]);
            setTotalResults(0);
        }

        setIsLoading(false);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.history.pushState(null, null, `/home?page=${newPage}`);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const pageParam = params.get("page");
        const page = pageParam ? parseInt(pageParam) : 1;
        setCurrentPage(page);
        fetchMovies(searchQuery, currentPage);
    }, [searchQuery, currentPage]);

    const renderMovies = () => {
        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (movies.length === 0) {
            return <p>No movies found.</p>;
        }

        return (
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        );
    };

    const totalPages = Math.ceil(totalResults / 10);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {renderMovies()}
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            )}
        </div>
    );
}

export default Movies;
