import React, { Component } from 'react';

class CreateMeetings extends Component {
    state = {
        day: '',
        month: '',
        frequency: '',
        meeting_time: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="row">
                <div className="offset-md-2 col-md-8">
                    <form>
                        <div className="form-group">
                            <label for="day">Day of the Week</label>
                            <input className="form-control" type="text" name="day" value={this.state.day} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="month">Week of the Month</label>
                            <input className="form-control" type="text" name="month" value={this.state.month} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="frequency">Frequency</label>
                            <input className="form-control" type="text" name="frequency" value={this.state.frequency} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="meeting_time">Meeting Time</label>
                            <input className="form-control" type="date" name="meeting_time" value={this.state.meeting_time} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-successful" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateMeetings;