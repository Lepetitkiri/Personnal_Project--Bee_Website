import React from "react";
import PropTypes from "prop-types";

// Components
import Header from '../../Components/Header/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

const pageTitle = "Home";

function Home({ basename }) {

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

Home.propTypes = {
    basename: PropTypes.string
};

export default Home;