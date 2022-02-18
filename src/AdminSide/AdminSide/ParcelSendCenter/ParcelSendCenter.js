import React from 'react';
import './ParcelSendCenter.css';

function ParcelSendCenter() {
  return (
      <>
        <div className="container-fluid" id="updateuser__Container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Parcels to sent to another Center</h4>

                           
                        </div>

                        <div className='searchmain'>
                            <div className='searchtop'>
                                <input class="form-control me-2" type="search" id='usersearch' placeholder="Search by Request ID"/>
                            </div>
                            <div className='searchmid'>
                                <button class="btn btn-outline-success" type="submit" id='btnsearch' >
                                <i class="bi bi-search" id='searchicon'></i>
                                </button>
                            </div>

                            <div className='searchbot'>
                                           
                            </div>
                        </div>
                        

                        <div className="updateuser__Table">
                            <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th>SP-ID</th>
                                        <th>R-ID</th>
                                        <th>End Center</th>
                                        <th>Sent Date</th>
                                        <th>Sent Time</th>
                                        <th>Vehicle-No</th>
                                        <th>Path</th>
                                        <th>control</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SP00001</td>
                                        <td>R-00001</td>
                                        <td>Colombo</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="button" className="add_request" name="empBtn__Update" id="empBtn__Update" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Assign Vehicle
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
                            <form className="row g-3">

                            <div className="form-group col-md-4">
                                    <label for="endcenter" className="form-label">
                                        End Center
                                    </label>
                                    <input
                                        value={"Galle"}
                                        type="text"
                                        className="form-control"
                                        name="endcenter"
                                        
                                        id="endcenter"
                                        disabled
                                    />
                                    <span className="error"></span>
                                </div>

                            <div className="form-group col-md-3 div__Birth">
                                    <label for="coldate" className="form-label">
                                        Send Date 
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        
                                        name="coldate"
                                        id="coldate"
                                    />
                                    <span className="error"></span>
                                </div>

                                <div className="form-group col-md-3 div__Birth">
                                    <label for="coltime" className="form-label">
                                        Send Time
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        
                                        name="coltime"
                                        id="coltime"
                                    />
                                    <span className="error"></span>
                                </div>
                            
                                

                                

                                <div className="form-group col-md-3">
                                    <label for="parcel status" className="form-label">
                                        Parcel Status
                                    </label>
                                    <select
                                        className="form-select"
                                        name="parcelstatus"
                                        
                                        id="parcelstatus"
                                    >
                                        <option selected disabled>
                                        -- Parcel Status --
                                        </option>
                                        <option>In Transit</option>
                                       
                                        
                                    </select>
                                </div>

                                <div className="form-group col-md-3">
                                    <label for="slectpath" className="form-label">
                                        Select Path
                                    </label>
                                    <select
                                        className="form-select"
                                        name="slectpath"
                                        
                                        id="slectpath"
                                    >
                                        <option selected disabled>
                                        -- Select Path --
                                        </option>
                                        <option>Gale-Matara</option>
                                        <option>Colombo-Nuwara</option>
                                        <option>Hambanthota_Ampara</option>
                                    </select>
                                    <span className="error"></span>
                                </div>

                                <div className="form-group col-md-3">
                                    <label for="slectvehicle" className="form-label">
                                        Select Vehicle
                                    </label>
                                    <select
                                        className="form-select"
                                        name="slectvehicle"
                                        
                                        id="slectvehicle"
                                    >
                                        <option selected disabled>
                                        -- Select Vehicle --
                                        </option>
                                        <option>LA-9876</option>
                                        <option>LB-5674</option>
                                    </select>
                                    <span className="error"></span>
                                </div>


                                

                                <div className="form-group col-md-3">
                                    <label for="officerid" className="form-label">
                                        My ID
                                    </label>
                                    <input
                                        value={"Sanju"}
                                        type="text"
                                        className="form-control"
                                        name="officerid"
                                        
                                        id="officerid"
                                        disabled
                                    />
                                    <span className="error"></span>
                                </div>
                        
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="btn__UpdateClose" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" id="btn__UpdateUpdate">Save</button>
                        </div>
                    </div>
                </div>
            </div>
      </>
  )
}

export default ParcelSendCenter;
