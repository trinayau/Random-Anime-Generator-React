import React from "react";
import { Hero } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return<>
    <Hero/>
    <Outlet/>
        <footer style={{textAlign: 'center'}}>Made with ❤️ by <a href="https://trinayau.io" target="_blank">Trina</a>, <a href="https://github.com/trinayau/Random-Anime-Generator-React" target="_blabk">open-source project on GitHub</a></footer>
    </>
}

export default Layout
