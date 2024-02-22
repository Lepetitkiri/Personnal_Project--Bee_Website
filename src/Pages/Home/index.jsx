import React from "react";

// Components
import Header from '../../Components/Header/Index';
import StickyNav from '../../Components/StickyNav/Index';
import Section from '../../Components/Section/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Home() {

    return (
        <>
            <Header />
            <main>
                <StickyNav />
                <Section />
            </main>
            <Footer />
        </>
    );
}

export default Home;