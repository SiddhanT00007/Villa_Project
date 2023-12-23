import React from 'react';
import "./Cards.css";

const Cards = (props) => {
  return (
    <>
    
<div className="card cardss">
  <img className="card-img-top card-img" src={props.img}   alt="Card image cap"/>
  <div className="card-body">
    <div className='d-flex my-3'>
    <h5 className="card-title me-3 p-1 fw-bold lux">{props.villa_type}</h5>
    <h5 className="dollar fw-bold">{props.rent}</h5>
    </div>
    <p className="card-text fw-bold">{props.address}</p>
  </div>
  
  <div className="card-body">
    <div className='d-flex my-1'>
        <div className='ms-3 me-3'>Bedroom : {props.bedroom}</div>
        <div>Bathroom : {props.bathroom}</div>
    </div>
    <div className='d-flex my-1'>
        <div className='ms-3 me-3'>Area : {props.area}</div>
        <div>Floor : {props.floor}</div>
    </div>
    <div className='park'>Parking : {props.parking}</div>
    <button className=" btn btn-dark text-light my-3 mx-5 btn1">Schedule A Visit</button>
  </div>
  
</div>
    
    </>
  )
}

export default Cards;