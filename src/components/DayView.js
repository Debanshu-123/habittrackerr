import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

const DayView = ({day}) => {
  
  const today=new Date();
  //Here We Declare a Constant
  const todayDay=today.getDay();

  const dispatch=useDispatch();

  
  const date=new Date(day.yyyy,day.mm,day.dd);

  
  const markToDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    
    dispatch(habitDone(day.id));
  }
  

  
  const markToUnDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }

    dispatch(habitUnDone(day.id))
  }
  
  const markToNone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      //Here We use Alert To show The message!!
      return;
    }

    dispatch(habitNone(day.id));
  }
  


  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
    </div>
    //Here We Use Some Bootstarp Icons
  );
};

export default DayView;