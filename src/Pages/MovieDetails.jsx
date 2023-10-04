import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader";
import NotFound from "./NotFound";

const API_URL = "https://www.omdbapi.com/?apikey=78a9e749";

function MovieDetails() {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}&i=${id}`);
                const data = await response.json();

                if (data.Response === "True") {
                    setMovieData(data);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!movieData) {
        return <NotFound />;
    }

    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6 text-center">
                            <img width="320" className="mb-5 mb-md-0 img-fluid" src={movieData.Poster !== "N/A" ? movieData.Poster : "https://placehold.co/600x600@2x.png"} alt={movieData.Title} />
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bolder text-white">{movieData.Title}</h1>
                            <div className="fs-5 my-3">
                                <span className="m-1 badge bg-secondary text-white">{movieData.Type}</span>
                                <span className="m-1 badge bg-warning text-dark">IMDB: {movieData.Ratings[0].Value}</span>
                                <span className="m-1 badge bg-info text-dark">{movieData.Runtime}</span>
                            </div>

                            <h4 className="text-white">Overview:</h4>
                            <p className="lead text-white">{movieData.Plot}</p>

                            <div className="fs-5 my-3">
                                <span className="m-1 text-white">Genres : {movieData.Genre}</span>
                                <br />
                                <span className="m-1 text-white">Actors : {movieData.Actors}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MovieDetails;
