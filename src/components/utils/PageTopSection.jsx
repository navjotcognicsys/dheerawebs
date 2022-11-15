import React, {useState, useEffect} from 'react'
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser'
import { FaUpload } from '@react-icons/all-files/fa/FaUpload'
import {Container,Form,Button,Modal, Col, Spinner, Alert} from 'react-bootstrap';
import DatePicker from "react-datepicker"
import axios from 'axios';

export default function PageTopSection(props) {



  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredTotal, setFilteredTotal] = useState(props.totalReg)
  const [uploadLoading, setUploadLoading] = useState(false)

  const [loaded, setLoaded] = useState('0');


  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  function changeChartWithDate(){
    if(startDate && endDate){
      
      let sD = startDate.toISOString()
      let eD = endDate.toISOString()

      console.log(sD, eD)

      let url = `${props.dateFilterUrl}/${sD}/${eD}/`
    
    axios.get(url)
    .then(res => {
      console.log('API Response',  res.data)
      setFilteredTotal(res.data.items)
      props.setTotalReg(res.data.items)
    })
    .catch(err => {
      console.log(err)
    })

    }else{
      alert('Please select start and end date')
    }
    
  }

  return (
    <>
      <div className='page-title text-center p-3 mt-3 rounded-2 '>
        <h2>{props.pageTitle}</h2>
      </div>

      <div className='date-card'>
      <div>
          <Form.Group>
            <Form.Select onChange={e => props.selectCSVNameToUpload(e.target.value)} value={props.csvfilename}>
            <option value={props.options[0].value}>{props.options[0].name}</option>
            <option value={props.options[1].value}>{props.options[1].name}</option>
            </Form.Select>
          </Form.Group>
      </div>

        <div className='calendar'>
          <div className='date'>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText='Choose Date'
              style={{paddingRight: '0px'}}
            />
            <button className='bg-greenblue' 
            style={{marginInline: '10px'}}
            onClick={changeChartWithDate}
            >Go</button>
            <button 
          className='bg-red'
          style={{marginInline: '5px'}}
          onClick={() => { setStartDate(null); setEndDate(null); props.setTotalReg(props.savedTotal)  }}>Reset</button>
          </div>
        </div>        
      </div>


      <div className='upload-card rounded-2'>

          <div className='file-name'>
         {
            props.file ? <p>{props.file.name}</p> : null
          }
          </div>
          <div className='button'>
            <div>
              <Form.Label htmlFor='file'>
              <FaUpload />
              Choose CSV</Form.Label>
              <Form.Control type="file" accept='.csv' id="file" className='upload-csv'
                onChange={(e) => props.setFile(e.target.files[0])}
              />
            </div>

            <div>
                <button className='bg-blue' disabled={props.file ? false : true}
                  onClick={() => {
                    if(!props.file || !props.csvfilename){
                      alert("please choose a file")
                    }else{
                      props.setShow(true)
                    }
                  }}
                >Upload</button>
            </div>
          </div>
      </div>
    
      <div className="info-box-container">
      <div className='info-box'>
      <div className="info-box-icon bg-greenblue">
      <FaRegUser />
      </div>
      <div className="info-box-content">
            <span className="info-box-text bold">Total Registration</span>
            <span className="info-box-number bold">{
              props.initialLoad ? 
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                : props.totalReg
                }
              </span>
            </div>
      </div>
      </div>

      
    {/* <Modal show={show} 
    onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm</Modal.Title>
    </Modal.Header>

    {
      !uploadLoading && !props.uploadERR ? null : uploadLoading && !props.props.uploadERR ? <div className='loader-container'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> 
      </div> : props.uploadERR ? <Alert variant='danger'>{
        props.uploadERR.response?.data.error.code === 11000 ? "Content of file is already there!" : props.uploadERRMSG
      }</Alert> : <Alert variant='success'>{props.uploadERRMSG}</Alert>
    }
    
      <Modal.Body>
        <p style={{color: 'black', fontWeight: 'bold'}}>{file?.name}</p>
        <p> will upload as </p>
        <p style={{color: 'green', fontWeight: 'bold'}}>{props.csvfilename}</p>
      </Modal.Body>
    
    <Modal.Footer>
        {
          props.uploadERR ? null : <Button variant="primary" onClick={() => {
            setUploadLoading(true)
            const data = new FormData()

            data.append(props.csvfilename, file)
            axios.post(props.uploadUrl, data, {
                  onUploadProgress: ProgressEvent => {
                    setLoaded((ProgressEvent.loaded / ProgressEvent.total*100))
              },
            }).then(res => {
              // console.log(res)
              props.setUploadErrMSG("Successfully Uploaded!")
              setUploadLoading(false)
              setShow(false)
            }).catch(err => {
              // console.log(err)
              props.setUploadErr(err)
              props.setUploadErrMSG("Some Error!")
              setUploadLoading(false)
            })
            }}>
              Yes
            </Button>
            }
            <Button variant="secondary" onClick={() => {
              setShow(false);
              props.setUploadErrMSG(null)
              props.setUploadErr(null)
              }}>
              { props.uploadERR ? <>Close</> : <>No</> }
            </Button>
      </Modal.Footer>
    </Modal> */}
    </>
  )
}
