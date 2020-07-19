import React, {/*{ useState, useEffect }*/ } from 'react';
import { Link } from 'react-router-dom';
{/* Un comment when backend is added in */ }
{/*import AuthService from '../services/auth.services';*/ }

const AppHeader = () => {
    {/*const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logout = () => {
        AuthService.logout();
    };*/}
    return (
        <div>
            <div className="heading">
                <h1>City of Knoxville, <br /> Neighborhood Directory</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Neighborhood Directory</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        {/*{currentUser && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout" onClick={logout}>Logout</a>
                            </li>
                        )}*/}
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default AppHeader;