import React from "react";

const Header = (props) => {
    const { textHeader, textP } = props;
    return (
        <div>
            <header className="py-5 header-home">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">{textHeader}</h1>
                        <p className="lead fw-normal text-white mb-0">{textP}</p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
