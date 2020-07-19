import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

export const PrivateNeighborhoodModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addModal">Add</button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editModal">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
            {/* Add Modal form */}
            <div class="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addModalLabel">Add Neighborhood</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Type</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <Input
                                        type="radio"
                                        name="name"
                                        value="Active"
                                    />
                                    <label htmlFor="active" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>Active</label>
                                    <Input
                                        type="radio"
                                        name="name"
                                        value="Non-Active"
                                    />
                                    <label htmlFor="non-active" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>Non-Active</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email</label>
                                    <Input
                                        type="Email"
                                        className="form-control"
                                        name="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <Input
                                        type="tel"
                                        className="form-control"
                                        name="password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="district">District</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="district"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <Input
                                        type="url"
                                        className="form-control"
                                        name="website"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="facebook">Facebook</label>
                                    <Input
                                        type="url"
                                        className="form-control"
                                        name="facebook"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Modal form */}
            <div class="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Neighborhood</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Type</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <Input
                                        type="radio"
                                        name="name"
                                        value="Active"
                                    />
                                    <label htmlFor="active" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>Active</label>
                                    <Input
                                        type="radio"
                                        name="name"
                                        value="Non-Active"
                                    />
                                    <label htmlFor="non-active" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>Non-Active</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email</label>
                                    <Input
                                        type="Email"
                                        className="form-control"
                                        name="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <Input
                                        type="tel"
                                        className="form-control"
                                        name="password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="district">District</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="district"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <Input
                                        type="url"
                                        className="form-control"
                                        name="website"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="facebook">Facebook</label>
                                    <Input
                                        type="url"
                                        className="form-control"
                                        name="facebook"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const PrivateMeetingModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addMeetingModal">Add</button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editMeetingModal">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
            {/* Add Modal form */}
            <div class="modal fade" id="addMeetingModal" tabIndex="-1" role="dialog" aria-labelledby="addMeetingModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Contact info and meeting times</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="nhName">Neighborhood Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="nhName"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="day">Meeting Day</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        name="day"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="month">Meeting Month</label>
                                    <Input
                                        type="month"
                                        className="form-control"
                                        name="month"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="frequency">Meeting Frequency</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="frequency"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Meeting Time</label>
                                    <Input
                                        type="time"
                                        className="form-control"
                                        name="time"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Modal form */}
            <div class="modal fade" id="editMeetingModal" tabIndex="-1" role="dialog" aria-labelledby="editMeetingModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Contact info and meeting times</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="nhName">Neighborhood Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="nhName"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="day">Meeting Day</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        name="day"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="month">Meeting Month</label>
                                    <Input
                                        type="month"
                                        className="form-control"
                                        name="month"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="frequency">Meeting Frequency</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="frequency"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Meeting Time</label>
                                    <Input
                                        type="time"
                                        className="form-control"
                                        name="time"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const PrivateUserModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addUserModal">Add</button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editUserModal">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
            {/* Edit Modal form */}
            <div class="modal fade" id="AddUserModal" tabIndex="-1" role="dialog" aria-labelledby="editUserModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="fname">First Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="fname"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="lname"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Position</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="position"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact">Contact</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="contact"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <Input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address1">Address one</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="address1"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address2">Address Two</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="address2"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="state"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip">Zip</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        name="zip"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newsletter">Newsletter</label>
                                    <Input
                                        type="radio"
                                        name="name"
                                        value="yes"
                                    />
                                    <label htmlFor="yes" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>Yes</label>
                                    <Input
                                        type="radio"
                                        name="newsletter"
                                        value="No"
                                    />
                                    <label htmlFor="no" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>No</label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Modal form */}
            <div class="modal fade" id="editUserModal" tabIndex="-1" role="dialog" aria-labelledby="editUserModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="fname">First Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="fname"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="lname"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Position</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="position"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact">Contact</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="contact"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <Input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address1">Address one</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="address1"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address2">Address Two</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="address2"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="state"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip">Zip</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        name="zip"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newsletter">Newsletter</label>
                                    <Input
                                        type="radio"
                                        name="name"
                                        value="yes"
                                    />
                                    <label htmlFor="yes" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>Yes</label>
                                    <Input
                                        type="radio"
                                        name="newsletter"
                                        value="No"
                                    />
                                    <label htmlFor="no" className="text-center" style={{ position: "relative", bottom: "20px", left: "20px" }}>No</label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}