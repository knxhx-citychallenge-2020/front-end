import React, { Component } from 'react';

class AppFooter extends Component {
    render() {
        return (
            <footer className="bg-dark text-white pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">
                                &copy; {(new Date().getFullYear())} City of Knoxville <br /> Neighborhood directory <br /> All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default AppFooter;