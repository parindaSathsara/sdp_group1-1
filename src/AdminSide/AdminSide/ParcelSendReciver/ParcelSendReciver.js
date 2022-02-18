import React from 'react'
import './ParcelSendReciver.css';

function ParcelSendReciver() {
  return (
    <>
        <div className="container-fluid" id="updateuser__Container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Packages to deliver to reciver</h4>

                            
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

                            
                        </div>      
                        

                        <div className="updateuser__Table">
                            <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th>DR-ID</th>
                                        <th>R-ID</th>
                                        <th>R-Address</th>
                                        <th>R-Service Area</th>
                                        <th>R-Contact</th>
                                        <th>Recived Date</th>
                                        <th>Recived Time</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RP00001</td>
                                        <td>R0001</td>
                                        
                                        <td>Galle road Baddegama</td>
                                        <td>Baddegama</td>
                                        <td>0770000000</td>
                                        <td>2000-01-20</td>
                                        <td>07.20</td>
                                        
                                        
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

export default ParcelSendReciver