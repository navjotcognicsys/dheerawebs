import Table from 'react-bootstrap/Table';
import { Container, Modal, Button, Alert } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import FormModal from './FormModal';

function UsersTable(props) {


  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null)

  const handleEditUser = (event, user) => {
    setSelectedUser(user)
    setShow(true)
  };

  function handleDelete(id) {

      axios
      .delete(`https://dheeratest8.azurewebsites.net/api/v1/registration/${id}`)
      .then(function (response) {
      // handle success
        alert("User has been deleted");
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  
  }

  const handleApprove = (id)=>{
    console.log('hello',id)
    axios
    .put(`https://dheeratest8.azurewebsites.net/api/v1/registration/${id}` ,{
      approve:true
    })
   
    .then(function (response) {
      // handle success
      alert("User has been approved");
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    });
}
  return (
   <>
    
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          {
            props.listFrom === "approve" ? <td>Email varified</td> : null
          }
          <th>Action</th> 
        </tr>
      </thead>
      <tbody>
      {
        props.usersList.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.program}</td>
            {props.listFrom === "approve" ? <td>
            {
              user.emailVerified ? "Verified" : "Not Verified"
            }</td> : null}
            <td className='action-btn'>
            {
              props.listFrom === "manage" ? 
              <>
              <Button
              onClick={(e) => handleEditUser(e,user)}
                >Edit</Button>
                <Button onClick={() => handleDelete(user._id)}>Delete</Button>
              </> : 
              <Button onClick={()=>handleApprove(user._id)}>Approve</Button>
            }
            </td>
          </tr>
        ))
      }
      </tbody>
    </Table>

    <FormModal  
      user={selectedUser}
      show={show}
      setShow={setShow}
    />
   </>
  );
}

export default UsersTable;