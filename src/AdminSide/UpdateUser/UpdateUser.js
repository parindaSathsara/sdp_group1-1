import React from 'react';
import './UpdateUser.css';

function UpdateUser() {
    return (
        <>
            <div className="container-fluid" id="updateuser__Container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Update Exisiting User</h4>

                            <div className="emp__Searching">
                                <form class="d-flex emp__SearchData">
                                    <input class="form-control me-2" type="search" id='usersearch' placeholder="Search by Employee ID"/>
                                    <button class="btn btn-outline-success" type="submit" id='btnsearch'>
                                        <i class="bi bi-search" id='searchicon'></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="updateuser__Table">
                            <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th>#E-ID</th>
                                        <th>Employee Name</th>
                                        <th>Contact Number</th>
                                        <th>Email Address</th>
                                        <th>Service Area</th>
                                        <th>Permanent Address</th>
                                        <th>Distribution Center</th>
                                        <th>Gender</th>
                                        <th>DOB</th>
                                        <th>NIC</th>
                                        <th>Employee Type</th>
                                        <th>Health Issues</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>E00001</td>
                                        <td>Chathuna Samodya</td>
                                        <td>+(94) 773301672</td>
                                        <td>chathuna@gmail.com</td>
                                        <td>Colombo</td>
                                        <td>No: 206/36, Asgiriwalpola, Udugampola</td>
                                        <td>Colombo</td>
                                        <td>Male</td>
                                        <td>2000-01-20</td>
                                        <td>900000900V</td>
                                        <td>Rider</td>
                                        <td>No</td>
                                        <td>
                                            <button type="button" className="btn btn-warning updateuser__Btn" 
                                            name="empBtn__Update" id="empBtn__Update"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <i class="bi bi-pen-fill"></i>
                                            </button>
                                        </td>
                                    </tr>

                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content" id="modal__Update">
                        <div class="modal-body">
                        <form className="row g-4" onSubmit="" id="form">
                            <div className="form-group col-md-6">
                            <label for="empFullName" className="form-label">
                                Employee Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="empFullName"
                                
                                id="empFullName"
                            />
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-5">
                            <label for="empContactNo" className="form-label">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="empContactNo"
                                
                                id="empContactNo"
                            />
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-5">
                            <label for="empEmail" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="empEmail"
                                
                                id="empEmail"
                            />
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-3">
                            <label for="empPassword" className="form-label">
                                Password
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="empPassword"
                                
                                id="empPassword"
                            />
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-3">
                            <label for="serviceArea" className="form-label">
                                Service Area
                            </label>
                            <select
                                className="form-select"
                                name="serviceArea"
                                
                                id="serviceArea"
                            >
                                <option selected disabled>
                                -- Select Area --
                                </option>
                                <option>Colombo</option>
                                <option>Kalutara</option>
                                <option>Galle</option>
                                <option>Matara</option>
                                <option>Hambantota</option>
                            </select>
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-8">
                            <label for="empAddress" className="form-label">
                                Permanent Address
                            </label>
                            <textarea
                                className="form-control"
                                name="empAddress"
                                
                                id="empAddress"
                            ></textarea>
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-3">
                            <label for="empCenter" className="form-label">
                                Destribution Center
                            </label>
                            <select
                                className="form-select"
                                name="empCenter"
                                
                                id="empCenter"
                            >
                                <option selected disabled>
                                -- Select Center --
                                </option>
                                <option>Colombo</option>
                                <option>Kalutara</option>
                                <option>Galle</option>
                                <option>Matara</option>
                                <option>Hambantota</option>
                            </select>
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-4 div__Gender">
                            <label for="empGender" className="form-label">
                                Gender
                            </label>

                            <input
                                type="radio"
                                className="form-check-input"
                                name="empGender"
                                id="empGenderMale"
                                selected
                            />
                            <label className="form-label male">Male</label>

                            <input
                                type="radio"
                                className="form-check-input"
                                name="empGender"
                                id="empGenderFemale"
                            />
                            <label className="form-label female">Female</label>
                            </div>

                            <div className="form-group col-md-3 div__Birth">
                            <label for="empBday" className="form-label">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                
                                name="empBday"
                                id="empBday"
                            />
                            <span className="error"></span>
                            </div>

                            

                            <div className="form-group col-md-4">
                            <label for="empNic" className="form-label">
                                Employee NIC
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="empNic"
                                
                                id="empNic"
                            />
                            <span className="error"></span>
                            </div>

                            

                            <div className="form-group col-md-8">
                            <label for="healthissues" className="form-label">
                                Special Health Issues
                            </label>
                            <textarea
                                className="form-control"
                                name="healthissues"
                                
                                id="healthissues"
                            ></textarea>
                            <span className="error"></span>
                            </div>

                            <div className="form-group col-md-3">
                            <label for="empType" className="form-label">
                                Employee Type
                            </label>
                            <select
                                className="form-select"
                                name="empType"
                                
                                id="empType"
                            >
                                <option selected disabled>
                                -- Select Type --
                                </option>
                                <option>Rider</option>
                                <option>Driver</option>
                                <option>Customer Care</option>
                                <option>Center Manager</option>
                            </select>
                            <span className="error"></span>
                            </div>

                            
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="btn__UpdateClose" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" id="btn__UpdateUpdate">Update Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateUser
