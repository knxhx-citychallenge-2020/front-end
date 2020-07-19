import React, { Component } from 'react';
import { PublicNeighborhoodModal, PublicMeetingModal } from '../components/Public.modal'

class Home extends Component {
    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan="10" className="text-center">NeighborHood</th>
                                </tr>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Active or Non-Active</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">City Council District</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Facebook Page</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Last Updated</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <PublicNeighborhoodModal />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan="8" className="text-center">Neighborhood Meetings</th>
                                </tr>
                                <tr>
                                    <th scope="col">Neighborhood Name</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Month</th>
                                    <th scope="col">Frequency</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Last Updated</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <PublicMeetingModal />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;