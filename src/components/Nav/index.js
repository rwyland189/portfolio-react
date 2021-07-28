import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        // portfolioSelected,
        // setPortfolioSelected
    } = props;

    return (
        <header>
            <h2>
                <a href="/">Becca Wyland</a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <span onClick={() => setContactSelected(false)}>About Me</span>
                    </li>

                    <li classname="mx-2">
                        <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>

                    <li classname="mx-2">
                        <span onClick={() => setContactSelected(false)}>Portfolio</span>
                    </li>

                    <li classname="mx-2">
                        <span onClick={() => setContactSelected(false)}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;