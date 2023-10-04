import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <section id="about">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center align-items-center vh-100">
                        <div className="col-lg-8 text-white">
                            <h2 className="text-danger">Page not found</h2>
                            <Link className="btn btn-md btn-danger" to="/home">Back to home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;
