import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

export const PublicNeighborhoodModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editModal">Edit</button>
            {/* Edit Modal form */}
            <div class="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
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
                                    <label htmlFor="phone">Phone</label>
                                    <Input
                                        type="tel"
                                        className="form-control"
                                        name="password"
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
export const PublicMeetingModal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editMeetingModal">Edit</button>
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