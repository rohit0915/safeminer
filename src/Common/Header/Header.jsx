import React, { useState } from 'react';

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


//used logo
//import logo from "./logo.png";

//css file
import "./Header.css";

const Header = (props) => {

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div>
                        {/* <img src={logo} alt="" className="header_logoformating hover_cursor" /> */}
                        <span className="logo_text">SafeMiners</span>
                    </div>
                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="header_link_color" onClick={() => props.history.push("/home")}>Home</span>
                        <span className="header_link_color" onClick={() => props.history.push("/investment-packages")}>Packages</span>
                        <span className="header_link_color" onClick={() => props.history.push("/about-us")}>About</span>
                        <span className="header_link_color" onClick={() => props.history.push("/referrals")}>Referral</span>
                        <span className="header_link_color" onClick={() => props.history.push("/faq")}>Review & FAQ</span>
                        <span className="header_link_color" onClick={() => props.history.push("/login")}>Login</span>
                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i className="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    className="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/home")}>
                                Home
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/investment-packages")}>
                                Packages
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/about-us")}>
                                About
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/referrals")}>
                                Referral
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/faq")}>
                                Review & FAQ
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/login")}>
                                Login
                            </span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
