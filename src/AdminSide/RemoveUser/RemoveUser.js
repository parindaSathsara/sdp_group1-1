import React from 'react'

function RemoveUser() {
    return (
        <>
            <div className="container-fluid" id="updateuser__Container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Activate & Deactivate User Accounts</h4>

                            <div className="emp__Searching">
                                <form class="d-flex emp__SearchData">
                                    <input class="form-control me-2" type="search" placeholder="Search by Employee No"/>
                                    <button class="btn btn-outline-success" type="submit">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="updateuser__Table">
                            <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th>E-ID</th>
                                        <th>Employee Name</th>
                                        <th>Contact No</th>
                                        <th>Email Address</th>
                                        <th>Center Name</th>
                                        <th>Permanent Address</th>
                                        <th>NIC</th>
                                        <th>Employee Type</th>
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
                                        <td>900000900V</td>
                                        <td>Rider</td>
                                        <td>
                                            <button type="button" className="btn btn-danger updateuser__Btn" 
                                            name="empBtn__Update" id="empBtn__Update"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <i class="bi bi-trash"></i>
                                            </button>

                                            <button type="button" className="btn btn-active updateuser__Btn" 
                                            name="empBtn__activate" id="empBtn__Update"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <i class="bi bi-check2-circle"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RemoveUser
