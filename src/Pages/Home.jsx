import React from "react";
import Header from "./../Components/Header/Header";
import Movies from "./../Components/Movies/Movies";

function Home({ searchQuery, searchMovies, handleSearch }) {
    return (
        <div>
            <Header textHeader="Watch Movies Online Free" textP="LFRAJA is one of the best free sites to watch movies online for free" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <Movies searchQuery={searchQuery} searchMovies={handleSearch} />
                </div>
            </section>
        </div>
    );
}

export default Home;
