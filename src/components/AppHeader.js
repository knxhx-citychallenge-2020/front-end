import React, { Component } from 'react';

class AppHeader extends Component {
    render() {
        return (
            <div>
                <div className="heading bg-light">
                    <h1>City of Knoxville, <br /> Neighborhood Directory</h1>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a href="#" className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign-Up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default AppHeader;