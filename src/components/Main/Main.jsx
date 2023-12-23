import React from "react";
import Home from "../Home/Home";
import Properties from "../Properties/Properties";
import Contact from "../Contact/Contact";
import Cards from "../Cards/Cards";

const Main = () => {

  const Cards_Data=[
    {
      img:"images/property-01.jpg",
      villa_type:'Luxury Villa',
      rent:'$2.264.000',
      address:'18 New Street Miami, 97212',
      bedroom:'8',
      bathroom:'8',
      area:'656m2',
      floor:'3',
      parking:'6 spots'
    },
    {
      img:"images/property-02.jpg",
      villa_type:'Apartment',
      rent:'$2.614.000',
      address:'18 New Street Miami, 97212',
      bedroom:'8',
      bathroom:'8',
      area:'656m2',
      floor:'3',
      parking:'6 spots'
    },
    {
      img:"images/property-03.jpg",
      villa_type:'Penthouse',
      rent:'$4.234.000',
      address:'18 New Street Miami, 97212',
      bedroom:'8',
      bathroom:'8',
      area:'656m2',
      floor:'3',
      parking:'6 spots'
    },
    {
      img:"images/property-04.jpg",
      villa_type:'Apartment',
      rent:'$1.264.000',
      address:'18 New Street Miami, 97212',
      bedroom:'8',
      bathroom:'8',
      area:'656m2',
      floor:'3',
      parking:'6 spots'
    },
    {
      img:"images/property-05.jpg",
      villa_type:'Penthouse',
      rent:'$3.124.000',
      address:'18 New Street Miami, 97212',
      bedroom:'8',
      bathroom:'8',
      area:'656m2',
      floor:'3',
      parking:'6 spots'
    },
    {
      img:"images/property-06.jpg",
      villa_type:'Luxury Villa',
      rent:'$1.269.000',
      address:'18 New Street Miami, 97212',
      bedroom:'8',
      bathroom:'8',
      area:'656m2',
      floor:'3',
      parking:'6 spots'
    }
  ]

  return (
    <>
      <Home id="home" />
      <Properties id="properties" />
      

      <div className="container-fluid">
        <div className="row ps-5">
          {/* <div className="col-md-3"> */}
          {/* <div className="col-md-4"> */}
            {
              Cards_Data.map((val)=>{
                return(
                  <>
                  
                  <Cards

img={val.img}
villa_type={val.villa_type}
rent={val.rent}
address={val.address}
bedroom={val.bedroom}
bathroom={val.bathroom}
area={val.area}
floor={val.floor}
parking={val.parking}
                  
                  />
                  
                  </>
                )
              })
            }

          {/* </div> */}
          {/* <div className="col-md-4">
            
          </div>
          <div className="col-md-4">
            
          </div> */}
        </div>
        {/* <div className="row">
          <div className="col-md-4">

          </div>
          <div className="col-md-4">
            
          </div>
          <div className="col-md-4">
            
          </div>
        </div> */}
      </div>
      {/* </div> */}


      <Contact id="contact" />
    </>
  );
};

export default Main;
