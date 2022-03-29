import React from 'react';
import './ParcelSendCenter.css';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { useEffect, useState } from 'react';
import fireDb from '../../firebase'
import { addDoc, collection, getDocs } from "firebase/firestore";

const optionss = [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
];


function ParcelSendCenter() {

    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);
    const [centers, setCenters] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    const [parcels, setParcels] = useState({
        endCenter: '',
        sendDate: '',
        sendTime: '',
        path: '',
        vehicle: '',
    });

    var x=0;

    const onChange = (val) => {
        setSelected(val);
    }


    const handleInput = (e) => {
        console.log(e.target.name)

        setParcels({ ...parcels, [e.target.name]: e.target.value })
    }

    const FetchDeliveryData = () => {
        fireDb.collection("delivery_req").where('reqStatus', '==', 'InSortingCenter').get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();

                var arr = { 'value': element['id'], label: element['id'] + ' | To ' + data['recServiceArea'] }
                setOptions(prevArray => [...prevArray, arr])
            });
        })
    }


    

    const parcelSendSubmit = async (e) => {
        e.preventDefault();
        
        // var modeledDataArr=[]

        // selected.forEach(element => {
        //     var arr = {'orderId': element,'orderStatus':'NotDelivered'}

        //     modeledDataArr.push(arr)
        // });

        if (selected.length > 0) {
        
            const dataset = {
                endCenter: parcels.endCenter,
                sendDate: parcels.sendDate,
                sendTime: parcels.sendTime,
                path: parcels.path,
                vehicle:parcels.vehicle,
                orderNumbers: selected,
                status:'NotDelivered',
            };


            await addDoc(collection(fireDb, "sendtocenter"), dataset)
                .then((user) => {
                    console.log("success")

                    selected.forEach(element => {
                        var delivery_reqStUpdate = fireDb.collection("delivery_req").doc(element);

                        return delivery_reqStUpdate.update({
                            reqStatus: "OutForDelivery"
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                                setSelected([]);
                                setOptions([]);
                                FetchDeliveryData();
                            })
                    });
                })
                .catch((err) => {

                });


        }
    }


    useEffect(() => {

        FetchDeliveryData();

        const FetchCentersData = () => {
            fireDb.collection("areas").get().then((querySnapshot) => {
                querySnapshot.forEach(element => {
                    var data = element.data();

                    setCenters(prevArray => [...prevArray, data])
                });

            })
        }
        FetchCentersData();



        const FetchVehicleData = () => {
            fireDb.collection("vehicle_details").get().then((querySnapshot) => {
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setVehicles(prevArray => [...prevArray, data['vehiNo']])
                });

            })
        }
        FetchVehicleData();

    }, []);


    return (
        <>
            <div className="container-fluid" id="updateuser__Container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Assign Vehicles</h4>


                        </div>

                        <div className="col-md-12 dualListBoxContainer">
                            <DualListBox
                                options={options}
                                selected={selected}
                                onChange={onChange}
                                canFilter
                                filterCallback={(option, filterInput) => {
                                    if (filterInput === '') {
                                        return true;
                                    }

                                    return (new RegExp(filterInput, 'i')).test(option.label);
                                }}
                            />
                            <br></br>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-danger assignvehbutton">Assign Vehicle</button>
                        </div>


                        <div className="updateuser__Header">
                            <h4 className="updateuser__Heading">Parcels to sent to another Center</h4>


                        </div>
                        <div className='searchmain'>
                            <div className='searchtop'>
                                <input class="form-control me-2" type="search" id='usersearch' placeholder="Search by Request ID" />
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* , , , , */}
                                        <td>SP00001</td>
                                        <td>R-00002</td>
                                        <td>Matara</td>
                                        <td>02-18-2022</td>
                                        <td>07.12</td>
                                        <td> LA-9876</td>
                                        <td>Galle-Matara</td>
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
                            <form className="row g-3" onSubmit={parcelSendSubmit}>

                                <div className="form-group col-md-3">
                                    <label for="slectpath" className="form-label">
                                        End Center
                                    </label>

                                    <select
                                        className="form-select"
                                        name="endCenter"
                                        id="slectpath"
                                        onChange={handleInput}
                                    >
                                        {centers.map((center) => (
                                            <option value={center['area_name']}>{center['area_name']}</option>
                                        ))}
                                    </select>


                                    <span className="error"></span>
                                </div>

                                <div className="form-group col-md-3 div__Birth">
                                    <label for="coldate" className="form-label">
                                        Send Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        onChange={handleInput}
                                        name="sendDate"
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
                                        onChange={handleInput}
                                        name="sendTime"
                                        id="coltime"
                                    />
                                    <span className="error"></span>
                                </div>

                                <div className="form-group col-md-3">
                                    <label for="slectpath" className="form-label">
                                        Select Path
                                    </label>
                                    <select
                                        className="form-select"
                                        name="path"
                                        onChange={handleInput}
                                        id="slectpath"
                                    >
                                        <option selected disabled>
                                            -- Select Path --
                                        </option>
                                        <option value="Galle-Matara">Gale-Matara</option>
                                        <option value="Colombo-Nuwara">Colombo-Nuwara</option>
                                        <option value="Hambanthota-Ampara">Hambanthota-Ampara</option>
                                    </select>
                                    <span className="error"></span>
                                </div>

                                <div className="form-group col-md-3">
                                    <label for="slectvehicle" className="form-label">
                                        Select Vehicle
                                    </label>
                                    <select
                                        className="form-select"
                                        name="vehicle"
                                        onChange={handleInput}
                                        id="slectvehicle"
                                    >
                                        <option selected disabled>
                                            -- Select Vehicle --
                                        </option>
                                        {vehicles.map((vehicle) => (
                                            <option value={vehicle}>{vehicle}</option>
                                        ))}
                                    </select>
                                    <span className="error"></span>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" id="btn__UpdateClose" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                    <button type="submit" class="btn btn-primary" id="btn__UpdateUpdate" aria-label="Close" data-bs-dismiss="modal">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ParcelSendCenter;
