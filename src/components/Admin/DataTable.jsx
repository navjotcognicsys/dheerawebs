import React,{useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import {data} from "./data"
import FormModal from './FormModal';

const DataTable = (props) => {

  const [users, setUsers] = useState({})
  const [selectedUser, setSelectedUser] = useState(null);
  const [userId, setUserId] = useState(null)
  const [show, setShow] = useState(false);
  
  function handleEdit(name, id){
    console.log('editing', name)
    setSelectedUser(id)
    setShow(true)
  }

  function dele(name, id){
    console.log('deleting', name)
  }

  function addButtonsToData(dataObj){
    setUsers(dataObj)
  }


  useEffect(() => {
    
    const dataObj = data()

    dataObj.rows.forEach((row,index) => {
      row.action = <>
        {
          <Button 
            variant="secondary"
            size="sm"
            onClick={() => handleEdit(row,index)}>Edit</Button>
        } 
        {
          <Button 
            variant="danger"
            size="sm"
            onClick={() => dele(row,index)}>Delete</Button>
        }
      </>
    })

    addButtonsToData(dataObj)
  
    return () => {
      
    }
  }, [])
  
  
  return (
    <div className='table-container'>
      <CDBContainer>
        <CDBCard>
          <CDBCardBody>
            <CDBDataTable
              striped
              bordered
              hover
              scrollY
              maxHeight="50vh"
              data={users}
              materialSearch
            />
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>

      {/* permission update form modal  */}
      <FormModal id={userId} show={show} setShow={setShow}/>

    </div>
  );
};

export default DataTable;