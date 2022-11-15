import React, {useState, useEffect} from 'react'
import { Modal, Spinner, Alert, Button} from 'react-bootstrap'
import axios from 'axios'

export default function UploadWindow([props]) {

  const [loading, setLoading] = useState(true)
  const [uploadLoading, setUploadLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true);

  const [loaded, setLoaded] = useState('0');

  const [uploadERR, setUploadErr] = useState(null);
  const [uploadERRMSG, setUploadErrMSG] = useState(null)


  // props.filename 
  // props.uploadUrl 


  return (
    <>
    <Modal show={props.show} onHide={() => props.setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm</Modal.Title>
    </Modal.Header>

    {
      !uploadLoading && !uploadERR ? null : uploadLoading && !uploadERR ? <div className='loader-container'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> 
      </div> : uploadERR ? <Alert variant='danger'>{
        uploadERR.response.data.error.code === 11000 ? "Content of file is already there!" : uploadERRMSG
      }</Alert> : <Alert variant='success'>{uploadERRMSG}</Alert>
    }
    
      <Modal.Body>
        <p style={{color: 'black', fontWeight: 'bold'}}>{props.file?.name}</p>
        <p> will upload as </p>
        <p style={{color: 'green', fontWeight: 'bold'}}>{props.csvfilename}</p>
      </Modal.Body>
    
    <Modal.Footer>
        {
          uploadERR ? null : <Button variant="primary" onClick={() => {
            setUploadLoading(true)
            const data = new FormData()

            data.append(props.fileName, props.file)
            axios.post("https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPre", data, {
                  onUploadProgress: ProgressEvent => {
                    setLoaded((ProgressEvent.loaded / ProgressEvent.total*100))
              },
            }).then(res => {
              console.log(res)
              setUploadErrMSG("Successfully Uploaded!")
              setUploadLoading(false)
              props.setShow(false)
            }).catch(err => {
              console.log(err)
              setUploadErr(err)
              setUploadErrMSG("Some Error!")
              setUploadLoading(false)
            })
            }}>
              Yes
            </Button>
            }
            <Button variant="secondary" onClick={() => {
              props.setShow(false);
              setUploadErrMSG(null)
              setUploadErr(null)
              }}>
              { uploadERR ? <>Close</> : <>No</> }
            </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
