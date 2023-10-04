import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <div className="col mb-5">
            <div className="card h-100 bg-dark text-white shadow">
                <Link to={`/movie/${movie.imdbID}`} className="text-decoration-none">
                    <img className="card-img-top img-fluid" src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/600x400@2x.png"} alt={movie.Title} />
                </Link>
                <div className="card-body p-4">
                    <div className="text-left">
                        <h5 className="fw-bolder">
                            <Link to={`/movie/${movie.imdbID}`} className="text-decoration-none" style={{ color: "#ffffff", textDecoration: "none" }}>
                                {movie.Title}
                            </Link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
