import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container pt-2">
                <h2>Sign-Up</h2>
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="userName">UserName</label>
                                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                                {/* validate username */}
                            </div>
                            <div className="form-group">
                                <label for="userName">Email</label>
                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                {/* validate username */}
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                                {/* Validate password and min, max, and unique password requirements */}
                            </div>
                            <div className="form-group">
                                <label for="confirm-password">Confirm Password</label>
                                <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
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