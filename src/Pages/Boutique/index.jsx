import React from "react";
import PropTypes from "prop-types";

// Components
import Header from '../../Components/Header/Index';
import WorkInProgress from '../../Components/WorkInProgress/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Boutique({ basename }) {

    return (
        <>
            <Header basename={basename} />
            <main>
                <WorkInProgress basename={basename} />
                <p>Boutique</p>
            </main>
            <Footer />
        </>
    );
}

Boutique.propTypes = {
    basename: PropTypes.string
};

export default Boutique;