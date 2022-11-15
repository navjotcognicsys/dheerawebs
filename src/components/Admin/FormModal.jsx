import React,{useState, useEffect} from 'react'
import { Modal, Button, Alert, Spinner, Form } from 'react-bootstrap'
import axios from 'axios'

export default function FormModal(props) {

  const [message, setMessage] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false);
  const [permission, setPermission] = useState({
      master : false,
      schoolTeacher: false,
      schoolStudent : false,
      RAC : false,
      OBGYN : false,
      approve : false, 
      manage : false
  })

  async function fetchPermissions(){
    console.log('getting clicked users permissions', props.user._id);
    setLoading(true);
    setMessage(null)
    try {
      const providers = await axios.get(`https://dheeratest8.azurewebsites.net/api/v1/registration/${props.user._id}`)
      const userData = providers.data

      console.log(userData)
      setPermission({
          master : userData.permission_dheera_master,
          schoolTeacher: userData.permission_dheera_school_teacher,
          schoolStudent : userData.permission_dheera_school_student,
          RAC : userData.permission_rac,
          OBGYN : userData.permission_obygn,
          approve : userData.permission_approve_user, 
          manage : userData.permission_manage_user
      })

      setLoading(false)
     
    } catch (error) {
      console.log(error)
    }
    
  }

  function updatePermissions(){
    console.log('updated', permission)
    axios
    .put(`https://dheeratest8.azurewebsites.net/api/v1/registration/permissions/${props.user._id}` ,{
        permission_dheera_master : permission.master,
        permission_dheera_school_teacher : permission.schoolTeacher,
        permission_dheera_school_student : permission.schoolStudent,
        permission_rac : permission.RAC,
        permission_obygn : permission.OBGYN,
        permission_approve_user : permission.approve, 
        permission_manage_user : permission.manage
      }
    )
   
    .then(function (response) {
      // handle success
      console.log("User premissions changed");
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    });
    

  }

  function handlePermission(e){
    setPermission((prevState) => ({...prevState, [e.target.name] : e.target.checked}))
  }




  return (
    <Modal show={props.show} 
    onShow={fetchPermissions}
    onHide={() => props.setShow(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Manage Users Permissions</Modal.Title>
      </Modal.Header>
    <Modal.Body>
      {
        loading && !message ? 
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> : message ? 
          <Alert variant="success">
            <p>{message}</p>
            <p>{user?.name}</p>
          </Alert>
        : <Form onSubmit={(e) => e.preventDefault()}>
          <h5>User : {user?._id}</h5>
              <Form.Group>
              <h5>Dashboard</h5>
              
                <Form.Check
                  type="checkbox"
                  label="Dheera Master"
                  name="master"
                  checked={permission.master}
                  onChange={handlePermission}
                />
                <Form.Check
                  type="checkbox"
                  label="Dheera School Teacher"
                  name="schoolTeacher"
                  checked={permission.schoolTeacher}
                  onChange={handlePermission}
                />
                <Form.Check 
                  type="checkbox"
                  label="Dheera School Student"
                  name="schoolStudent"
                  checked={permission.schoolStudent}
                  onChange={handlePermission}
                />
                <Form.Check 
                  type="checkbox"
                  label="RAC"
                  name="RAC"
                  checked={permission.RAC}
                  onChange={handlePermission}
                />
                <Form.Check 
                  type="checkbox"
                  label="OBGYN"
                  name="OBGYN"
                  checked={permission.OBGYN}
                  onChange={handlePermission}
                />
              </Form.Group>
              <Form.Group>
              <h5>Manage (Admin Permission)</h5>
                <Form.Check
                  type="checkbox"
                  label="Approve"
                  name="approve"
                  checked={permission.approve}
                  onChange={handlePermission}
                />
                <Form.Check
                  type="checkbox"
                  label="Manage"
                  name="manage"
                  checked={permission.manage}
                  onChange={handlePermission}
                />
              </Form.Group>
            </Form>
      }
    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShow(false)}>
          Close
        </Button>
        {
          message ? null : <Button variant="primary" onClick={updatePermissions}>
          Save Changes
        </Button>
        }
      </Modal.Footer>
    </Modal>
  )
}
