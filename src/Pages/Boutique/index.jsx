import React from "react";

// Components
import Header from '../../Components/Header/Index';
import WorkInProgress from '../../Components/WorkInProgress/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Boutique() {

    return (
        <>
            <Header />
            <main>
                <WorkInProgress />
                <p>Boutique</p>
            </main>
            <Footer />
        </>
    );
}

export default Boutique;