import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="container pt-2">
                <h2>Sign-Up</h2>
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <form>
                            <div className="form-group">
                                <label for="userName">UserName</label>
                                <input type="text" className="form-control" name="username" />
                                {/* validate username */}
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" name="password" />
                                {/* Validate password and min, max, and unique password requirements */}
                            </div>
                            <div className="form-group">
                                <label for="confirm-password">Confirm Password</label>
                                <input type="password" className="form-control" name="confirm-password" />
                                {/* Validate password and min, max, and unique password requirements */}
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Sign up" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp