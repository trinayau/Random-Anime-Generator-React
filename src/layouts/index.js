import React from "react";
import { Hero } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return<>
    <Hero/>
    <Outlet/>
        <footer style={{textAlign: 'center'}}>Made with ❤️ by Trina</footer>
    </>
}

export default Layout
