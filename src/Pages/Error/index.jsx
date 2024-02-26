import React from "react";
import PropTypes from "prop-types";

// Components
import Header from '../../Components/Header/Index';
import ErrorComponent from "../../Components/ErrorComponent/Index";
import Footer from '../../Components/Footer/Index';

// Provider

function Error({ basename }) {

    return (
        <>
            <Header basename={basename} />
            <main>
                <ErrorComponent basename={basename} />
            </main>
            <Footer />
        </>
    );
}

Error.propTypes = {
    basename: PropTypes.string
};

export default Error;