import React, { Component } from 'react';

class CreateMeetings extends Component {
    state = {
        name: '',
        type: '',
        active: null,
        email: '',
        address: '',
        phone: '',
        sector: '',
        website: '',
        facebook: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <h2>Create Neighborhood</h2>
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <form>
                            <div className="form-group">
                                <label for="Name">Name</label>
                                <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="type">Type</label>
                                <input className="form-control" type="text" name="type" value={this.state.type} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="radio" name="active" value={this.state.active} onChange={this.handleChange} />
                                <label for="active">Active</label>
                                <input className="form-control" type="radio" name="non-active" value={this.state.active} onChange={this.handleChange} />
                                <label for="active">Non-Active</label>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input className="form-control" type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label for="sector">Sector</label>
                                <input className="form-control" type="text" name="sector" value={this.state.sector} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="website">WebSite</label>
                                <input className="form-control" type="url" name="website" value={this.state.website} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="facebook">Facebook Url</label>
                                <input className="form-control" type="url" name="facebook" value={this.state.facebook} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-successful" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateMeetings;