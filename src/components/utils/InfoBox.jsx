import React from 'react'
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser'

const title = [ "Total Registered", "Registration Pre Test", "Post Test Feedback"]

export default function InfoBox(props) {
  // send data in props 

  

  return (
    <div className='row'>
      <div className="col-12 col-sm-6 col-md-4 mt-5 d-flex ">
       <div className='info-box'>
       <span className="info-box-icon bg-info elevation-1">
        <FaRegUser />
       </span>
       <div className="info-box-content">

              <span className="info-box-text">Total Registered</span>

              <span className="info-box-number bold">{props.infoData.reg}</span>

            </div>
       </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mt-5 d-flex">
       <div className='info-box'>
       <span className="info-box-icon bg-danger elevation-1">
       <FaRegUser />
       </span>
       <div className="info-box-content">

              <span className="info-box-text">Registration Pre Test</span>

              <span className="info-box-number bold">{props.infoData.preTest}</span>

            </div>
       </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mt-5">
       <div className='info-box'>
       <span className="info-box-icon bg-success elevation-1">
       <FaRegUser />
       </span>
       <div className="info-box-content">
              <span className="info-box-text">Post Test Feedback</span>
                <span style={{fontSize:"11px"}}>(Number Displayed of only those records which are registered)</span>
              <span className="info-box-number bold">{props.infoData.postTest}</span>
            </div>
       </div>
      </div>
    </div>
  )
}
