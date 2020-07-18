import React, { Component } from 'react';
import { useForm } from "react-hook-form";

class Login extends Component {
    render() {
        //const { login, handleSubmit, watch, errors } = useForm();
        //const onSubmit = data => console.log(data);

        //console.log(watch("username"));
        return (
            <div className="container pt-2">
                <h2>Log-in</h2>
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <form>
                            <div className="form-group">
                                <label for="userName">UserName</label>
                                <input type="text" className="form-control" name="username" />
                                {/*{errors.usernameRequired && <span className="errors">Username is Required</span>}*/}
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" name="password" />
                                {/*{errors.passwordRequired && <span className="errors">Password is required</span>}*/}
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;