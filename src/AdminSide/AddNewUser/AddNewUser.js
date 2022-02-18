import React, { useState, useEffect } from "react";
import "./AddNewUser.css";

function AddNewUser() {
  const initialValues = {
    empFullName: "",
    empContactNo: "",
    empEmail: "",
    empPassword: "",
    serviceArea: "",
    empAddress: "",
    empCenter: "",
    empBday: "",
    empNic:"",
    empType: "",
  };
  
  const [fieldValues, setFieldValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(fieldValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(fieldValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.empFullName) {
      errors.empFullName = "Username cannot be Empty";
    }
    if (!values.empContactNo) {
      errors.empContactNo = "Contact Number is Required";
    }
    if (!values.empEmail) {
      errors.empEmail = "Email is Required";
    }
    if (!values.empPassword) {
      errors.empPassword = "Password is Required";
    }
    if (!values.serviceArea) {
      errors.serviceArea = "Service Area is Required";
    }
    if (!values.empAddress) {
      errors.empAddress = "Permenant Address is Required";
    }
    if (!values.empCenter) {
      errors.empCenter = "Please select a Center";
    }
    if (!values.empBday) {
      errors.empBday = "Date of Birth is Required";
    }
    if (!values.empNic) {
      errors.empNic = "Nic is Required";
    }
    if (!values.empType) {
      errors.empType = "Please Select Employee Type";
    }
   
    return errors;
  };

  return (
    <>
      <div className="container-fluid" id="addnewuser__Container">
        <div className="row">
          <div className="card mt-2 card__User">
            <div className="card__Header">
              <h4 className="card__Heading">New User Registration</h4>
            </div>
            <div className="card__Form">
              <form className="row g-4" onSubmit={handleSubmit} id="form">
                <div className="form-group col-md-6">
                  <label for="empFullName" className="form-label">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="empFullName"
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    value={fieldValues.empFullName}
                    onChange={handleChange}
                    id="empFullName"
                  />
                  <span className="error">{formErrors.empFullName}</span>
                </div>

                <div className="form-group col-md-5">
                  <label for="empContactNo" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="empContactNo"
                    value={fieldValues.empContactNo}
                    onChange={handleChange}
                    id="empContactNo"
                  />
                  <span className="error">{formErrors.empContactNo}</span>
                </div>

                <div className="form-group col-md-5">
                  <label for="empEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="empEmail"
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    value={fieldValues.empEmail}
                    onChange={handleChange}
                    id="empEmail"
                  />
                  <span className="error">{formErrors.empEmail}</span>
                </div>

                <div className="form-group col-md-3">
                  <label for="empPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="empPassword"
                    value={fieldValues.empPassword}
                    onChange={handleChange}
                    id="empPassword"
                  />
                  <span className="error">{formErrors.empPassword}</span>
                </div>

                <div className="form-group col-md-3">
                  <label for="serviceArea" className="form-label">
                    Service Area
                  </label>
                  <select
                    className="form-select"
                    name="serviceArea"
                    value={fieldValues.serviceArea}
                    onChange={handleChange}
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
                  <span className="error">{formErrors.serviceArea}</span>
                </div>

                <div className="form-group col-md-8">
                  <label for="empAddress" className="form-label">
                    Permanent Address
                  </label>
                  <textarea
                    className="form-control"
                    name="empAddress"
                    value={fieldValues.empAddress}
                    onChange={handleChange}
                    id="empAddress"
                  ></textarea>
                  <span className="error">{formErrors.empAddress}</span>
                </div>

                <div className="form-group col-md-3">
                  <label for="empCenter" className="form-label">
                    Destribution Center
                  </label>
                  <select
                    className="form-select"
                    name="empCenter"
                    value={fieldValues.empCenter}
                    onChange={handleChange}
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
                  <span className="error">{formErrors.empCenter}</span>
                </div>

                <div className="form-group col-md-2 div__Gender">
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
                    value={fieldValues.empBday}
                    onChange={handleChange}
                    name="empBday"
                    id="empBday"
                  />
                  <span className="error">{formErrors.empBday}</span>
                </div>

                

                <div className="form-group col-md-3">
                  <label for="empNic" className="form-label">
                    Employee NIC
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="empNic"
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    value={fieldValues.empNic}
                    onChange={handleChange}
                    id="empNic"
                  />
                  <span className="error">{formErrors.empNic}</span>
                </div>

                <div className="form-group col-md-3">
                  <label for="empType" className="form-label">
                    Employee Type
                  </label>
                  <select
                    className="form-select"
                    name="empType"
                    value={fieldValues.empType}
                    onChange={handleChange}
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
                  <span className="error">{formErrors.empType}</span>
                </div>

                <div className="form-group col-md-8">
                  <label for="healthissues" className="form-label">
                    Special Health Issues
                  </label>
                  <textarea
                    className="form-control"
                    name="healthissues"
                    value={fieldValues.healthissues}
                    onChange={handleChange}
                    id="healthissues"
                  ></textarea>
                  <span className="error">{formErrors.healthissues}</span>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  name="saveEmployee"
                  id="saveEmployee"
                >
                  Save New User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewUser;
