import React from "react";
import PropTypes from "prop-types";

// Components
import Header from '../../Components/Header/Index';
import StickyNav from '../../Components/StickyNav/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Home({ basename }) {

    return (
        <>
            <Header basename={basename} />
            <main>
                <StickyNav />
                <Section />
            </main>
            <Footer />
        </>
    );
}

Home.propTypes = {
    basename: PropTypes.string
};

export default Home;