import React from "react";
import Banner from "./Banner.jsx";
import {TopSellers} from "./TopSellers.jsx";
import {Recommended} from "./Recommended.jsx";

const Home = () => {
    return (
        <>
            <Banner/>
            <TopSellers/>
            <Recommended/>
        </>
    )
}

export default Home