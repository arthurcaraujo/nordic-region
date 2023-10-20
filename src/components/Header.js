import "./Header.css";
import hamburgerMenuIcon from "../assets/icon-hamburgermenu.svg";
import { useEffect, useState } from "react";
import websiteLogo from "../assets/website-logo.png";

export default function Header() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    useEffect(() => {
        function handleWindowResize() {
            if (mediaQuery.matches) {
                setExpandNavbar(true);
            } else {
                setExpandNavbar(false);
            }
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, []);

    return (
        <header>
            <nav>
                <div id="navbar">
                    <a
                        href="https://arthurcaraujo.github.io/"
                        id="main-website-link"
                    >
                        <img alt="Website logo" src={websiteLogo} />
                    </a>
                    <h1>Nordic Region</h1>
                    <img
                        alt="Hamburger menu icon"
                        id="menu-icon"
                        onClick={() => setExpandNavbar(!expandNavbar)}
                        src={hamburgerMenuIcon}
                        style={{
                            backgroundColor: expandNavbar ? "rgb(100, 0, 0)" : "rgb(200, 0, 0)",
                            boxShadow: expandNavbar ? "0 0 0 2px #200" : "none",
                            transform: expandNavbar ? "scale(0.9)" : "none"
                        }}
                    />
                </div>
                <ul
                    id="nav-list"
                    onClick={() => setExpandNavbar(!expandNavbar)}
                    style={{
                        border: (expandNavbar && !mediaQuery.matches) ||
                                (mediaQuery.matches) ? "3px solid #300"
                                : "0 solid #300",
                        height: (expandNavbar && !mediaQuery.matches) ? "50vh"
                                : (mediaQuery.matches) ? "100%"
                                : "0"
                    }}
                >
                    <li><a className="nav-link" href="#introduction">Introduction</a></li>
                    <li><a className="nav-link" href="#denmark">Denmark</a></li>
                    <li><a className="nav-link" href="#faroe-islands">Faroe Islands</a></li>
                    <li><a className="nav-link" href="#finland">Finland</a></li>
                    <li><a className="nav-link" href="#greenland">Greenland</a></li>
                    <li><a className="nav-link" href="#iceland">Iceland</a></li>
                    <li><a className="nav-link" href="#norway">Norway</a></li>
                    <li><a className="nav-link" href="#sweden">Sweden</a></li>
                    <li><a className="nav-link" href="#aland">Åland</a></li>
                    <li><a className="nav-link" href="#iso-country-codes">ISO Country Codes</a></li>
                    <li><a className="nav-link" href="#references">References</a></li>
                </ul>
            </nav>
        </header>
    )
}