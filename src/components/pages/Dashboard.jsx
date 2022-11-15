import React,{useState, useEffect} from 'react';
import {Container,Form,Button,Row,Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';
import usePermission from '../hooks/usePermission';

const Dashboard = () => {
  let navigate= useNavigate();
  const  { trainingOptions }  = usePermission()
  const [dashboard, setDashboard] = useState('')
  // const [permittedOptions, setOption] = useState([])


  const onGo = () => {
    if(dashboard === 'Dheera Master Training'){
      navigate('/dashboard/DheeraMaster');
    }else if(dashboard==='Dheera School Teacher Training'){
      navigate('/dashboard/DheeraSchoolTeacher');
    }else if(dashboard === 'Dheera School Student Training'){
      navigate('/dashboard/DheeraSchoolStudent');
    }else if(dashboard==='RAC Training'){
      navigate('/dashboard/RacPre');
    }else if(dashboard==='Dheera OBGYN Training'){
      navigate('/dashboard/ObgynPre');
    }

  }

 

  

  return (
    <Container className='dashboard'>


    <Form onSubmit={onGo}>
      <Row>
        <Col lg={5} md={6} sm={8} className="p-5 m-auto mt-5 shadow rounded-3 bg-light">
        
      <h2 className='shadow-sm p-1 text-center rounded-2 outline'>Select Dashboard</h2>
        <Form.Group>
        <Form.Select 
          className='mb-3 mt-5'
          value={dashboard} 
          onChange={e =>setDashboard(e.target.value)}>
            <option>--Select--</option>
          {
            trainingOptions.map((option, index ) => {
              if(option.value){
                return(
                  <option key={index} value={option.name}>{option.name}</option>
                )
              }else return null

              
            })
          }
          </Form.Select>
          </Form.Group>
          <Button variant="dark" type='submit' >Go!</Button>
          </Col>
      </Row>
    </Form>

</Container>
  )
  
}

export default Dashboard