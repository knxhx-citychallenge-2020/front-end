import React, { Component } from 'react';
import { PrivateNeighborhoodModal, PrivateMeetingModal, PrivateUserModal } from '../components/Private.modal.js'

class Admin extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan="11" className="text-center">NeighborHood</th>
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
                                    <th scope="col">Action</th>
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
                                        <PrivateNeighborhoodModal />
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
                                    <th colSpan="8" className="text-center">Meetings</th>
                                </tr>
                                <tr>
                                    <th scope="col">Neighborhood Name</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Month</th>
                                    <th scope="col">Frequency</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Last Updated</th>
                                    <th scope="col">Action</th>
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
                                        <PrivateMeetingModal />
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
                                    <th colSpan="12" className="text-center">Users</th>
                                </tr>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address 1</th>
                                    <th scope="col">Address 2</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Zip</th>
                                    <th scope="col">NewsLetter</th>
                                    <th scope="col">Action</th>
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
                                    <td></td>
                                    <td>
                                        <PrivateUserModal />
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

export default Admin;