import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";
import logo from "./../images/c.gif";




const Navbar = ({ name }) => {
  
  const dispatch=useDispatch();

  
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);
  
   
  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    document.getElementById("habitName").value="";
  }

  return (
    <>
      <div className="navbar">
      <img src={logo}></img>
        <h3>Welcome to Debanshu Habit-Tracker</h3>
        <h3>
          {/*Here It Shows the Shifting*/}
          {hour <= 12
            ? "Morning"
            : hour <= 17
            ? "Afternoon"
            : hour <= 21
            ? "Evening"
            : "Night"}
        </h3>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Add New Habits
          </button>
        </div>
      </div>

      {}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
            <img src={logo}></img>


              <h5 className="modal-title" id="staticBackdropLabel">
                Add New Habits
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Habit Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter Your Habits name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancle
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;