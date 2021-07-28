import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">Becca Wyland</a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <span>About Me</span>
                    </li>

                    <li classname="mx-2">
                        <span>Contact Me</span>
                    </li>

                    <li classname="mx-2">
                        <span>Portfolio</span>
                    </li>

                    <li classname="mx-2">
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;