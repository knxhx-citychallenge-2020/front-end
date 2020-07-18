import React, { Component } from 'react';
import CreateMeetings from '../components/CreateMeetings';

class Meetings extends Component {
    render() {
        return (
            <div className="container">
                <h2>Create a meeting</h2>
                <CreateMeetings />
            </div>
        )
    }
};

export default Meetings;