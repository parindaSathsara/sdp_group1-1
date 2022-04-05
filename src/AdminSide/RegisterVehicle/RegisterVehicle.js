import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import './RegisterVehicle.css';
import Swal from "sweetalert2";
import fireDb from '../../firebase'

// import addNewVehicleValidate from './AddVehicleValidation'

function RegisterVehicle() {

    const [values, setValues] = useState({
        vehiNo: '',
        regCenter: sessionStorage.getItem("center"),
        vehiType: '',
        vehiAvailable: 'Available'
    })

    const handleInputChange = (e) => {
        e.persist();
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        fireDb.collection("vehicle_details").doc(values.vehiNo).set(values).then(res => {
            Swal.fire(
                'Vehicle Added',
                'Vehicle Added Successfully',
                'success'
              )
        });
    }


    useEffect(() => {

    }, [])



    return (
        <>
            <div className="container-fluid" id="updateuser__Container">

                <div className="row">
                    <div className="card mt-2 card__Vehicle">
                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Vehicle Registration</h4>
                        </div>
                        <hr></hr>
                        <div className="card__FormVehicle">
                            <form className="row g-4" onSubmit={handleSubmit} id="addVehicle">
                                <div className="form-group col-md-6">
                                    <label for="vehiNo">Vehicle Number</label>
                                    <input type="text" className="form-control" name="vehiNo"
                                        id="vehiNo" placeholder="AB-0000"
                                        value={values.vehiNo}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* <div className="form-group col-md-6">
                                    <label for="regCenter">Registerd Center</label>
                                    <select className="form-select" name="regCenter"
                                        id="regCenter"
                                        value={values.vehiNo}
                                        onChange={handleInputChange}
                                    >
                                        <option disabled selected>--Select Regional Center--</option>
                                        <option value="Kalutara">Kalutara</option>
                                        <option value="Gampaha">Gampaha</option>
                                        <option value="Colombo">Colombo</option>
                                    </select>
                                </div> */}

                                <div className="form-group col-md-6">
                                    <label for="vehiType">Vehicle Type</label>
                                    <select className="form-select" name="vehiType"
                                        id="vehiType"
                                        value={values.vehiType}
                                        onChange={handleInputChange}
                                    >
                                        <option disabled selected>--Select Vehicle Type--</option>
                                        <option value="Lorry">Lorry</option>
                                        <option value="Motor Bike">Motor Bike</option>
                                        <option value="Van">Van</option>
                                    </select>
                                </div>

                                {/* <div className="form-group col-md-6">
                                    <label for="vehiAvailable">Vehicle Availability</label>
                                    <select className="form-select" name="vehiAvailable"
                                        id="vehiAvailable"
                                        value={values.vehiAvailable}
                                        onChange={handleInputChange}
                                    >
                                        <option disabled selected>--Select Vehicle Availability--</option>
                                        <option value="Available">Available</option>
                                        <option value="NotAvailable">Not Available</option>
                                    </select>
                                </div> */}

                                <div className="col-md-6">
                                    <button type="button" className="btn btn-danger">Save Vehicle Details</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default RegisterVehicle