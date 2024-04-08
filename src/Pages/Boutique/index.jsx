import React from "react";
import PropTypes from "prop-types";

// Components
import Header from '../../Components/Header/Index';
import Section from "../../Components/Section/Index";
import Footer from '../../Components/Footer/Index';

const pageTitle = "Boutique";

function Boutique({ basename }) {

    return (
        <>
            <Header basename={basename} />
            <main>
                <Section basename={basename} pageTitle={pageTitle} />
            </main>
            <Footer />
        </>
    );
}

Boutique.propTypes = {
    basename: PropTypes.string
};

export default Boutique;