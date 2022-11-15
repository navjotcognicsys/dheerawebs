import { useState, useEffect } from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';

const states = [
{1: "All India"},
{2: "Andhra Pradesh"},
{3: "Arunachal Pradesh"},
{4: "Assam"},
{5: "Bihar"},
{6: "Chhattisgarh"},
{7: "Goa"},
{8: "Gujarat"},
{9: "Haryana"},
{10: "Himachal Pradesh"},
{11: "Jammu and Kashmir"},
{12: "Jharkhand"},
{13: "Karnataka"},
{14: "Kerala"},
{15: "Madhya Pradesh"},
{16: "Maharashtra"},
{17: "Manipur"},
{18: "Meghalaya"},
{19: "Mizoram"},
{20: "Nagaland"},
{21: "Odisha"},
{22 : "Punjab"},
{23 : "Rajasthan"},
{24 : "Sikkim"},
{25 : "Tamil Nadu"},
{26 : "Telangana"},
{27 : "Tripura"},
{28 : "Uttarakhand"},
{29 : "Uttar Pradesh"},
{30 : "West Bengal"},
{31 : "Andaman and Nicobar Islands"},
{32 : "Chandigarh"},
{33 : "Dadra and Nagar Haveli"},
{34 : "Daman and Diu"},
{35 : "Delhi"},
{36 : "Lakshadweep"},
{37 : "Puducherry"}]

export function MasterFilter(props){


  const [filter, setFilter] = useState({
    state: "",
    are_you_Master_Trainer_or_Trainee : ""
  })
  
  return(
    <>
      
      <div className='border rounded-2 p-3 d-flex  justify-content-around'>
        
      <Row className='p-3 mt-3 d-flex justify-content-between'>
       <Col className='d-flex justify-content-start'>
       <Form.Select name="state" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
        {
          states.map((state, index) => (
            <option key={index} value={state[index+1]}>{state[index+1]}</option>
          ))
        }
       </Form.Select>
       </Col>
       <Col>
       <Form.Select name="are_you_Master_Trainer_or_Trainee" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
        }}>
        <option value="">Select trainee or master trainer</option>
        <option value="Trainee">Trainee</option>
        <option value="Master Trainer">Master Trainer</option>
        </Form.Select>
       </Col>
       <Col>
       <Button className='bg-greenblue' onClick={() => {
        props.handleFilter(filter)
       }}>Search</Button>
       </Col>
       </Row>
      </div>
    </>
  )
}

export function TeacherFilter(props){
  
  const [filter, setFilter] = useState({
    select_One: "",
    select : "",
    state : "",
    school_type : ""
  })

  return(
    <>
      <div className='border rounded-2 p-3 d-flex justify-content-around'>
      <Row className='p-3 mt-3 d-flex justify-content-between'>
      <Col>
        <Form.Select name="select_One" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select type</option>
          <option value="Student">Student</option>
          <option value="FOGSI Doctor">FOGSI Doctor</option>
          <option value="Teacher">Teacher</option>
        </Form.Select>
      </Col>
      <Col>
        <Form.Select name="select" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </Form.Select>
      </Col>
       <Col className='d-flex justify-content-start'>
       <Form.Select name="state" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
        {
          states.map((state, index) => (
            <option key={index} value={state[index+1]}>{state[index+1]}</option>
          ))
        }
       </Form.Select>
       </Col>
       <Col>
        <Form.Select name="school_type" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select school type</option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
          <option value="Not Applicable for Trainers">Not Associated with school(trainer)</option>
        </Form.Select>
       </Col>
       <Col>
       <Button variant="info" onClick={() => {
        props.handleFilter(filter)
       }}>Search</Button>
       </Col>
       </Row>
      </div>
    </>
  )
}





export function StudentFilter(props){

 
  const [filter, setFilter] = useState({
    age: "",
    select : "",
    state : "",
    school_type : "",
    class : ""
  })


  return(
    <>
      <div className='border rounded-2 p-3 d-flex  justify-content-around'>
        
      <Row className='p-3 mt-3 d-flex justify-content-between'>
        <Col>
          <Form.Select name='age' onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>  
            <option value="">Select age</option>
            <option value="14-20 years">14-20 years</option>
            <option value="21-25 years">21-25 years</option>
            <option value="26-30 years">26-30 years</option>
            <option value="31-35 years">31-35 years</option>
            <option value="36-40 years">36-40 years</option>
            <option value="41-45 years">41-45 years</option>
            <option value="46-50 years">46-50 years</option>
            <option value="Greater than 51 years">Greater than 51 years</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select name="select" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </Form.Select>
        </Col>
       <Col className='d-flex justify-content-start'>
       <Form.Select name="state" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
        {
          states.map((state, index) => (
            <option key={index} value={state[index+1]}>{state[index+1]}</option>
          ))
        }
       </Form.Select>
       </Col>
       <Col>
        <Form.Select name="school_type" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select school type</option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
          <option value="Not Applicable for Trainers">Not Associated with school(trainer)</option>
        </Form.Select>
       </Col>
       <Col>
       <Form.Select name="class" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select class</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="Not Applicable for All Others">Not Applicable</option>
        </Form.Select>
       </Col>
       <Col>
       <Button className='bg-greenblue' onClick={() => {
        props.handleFilter(filter)
       }}>Search</Button>
       </Col>
       </Row>
      </div>
    </>
  )
}

export function OBGYNFilter(props){

  const [filter, setFilter] = useState({
    state : "",
    gender : "",
    age : "",
    type_of_Institution_where_you_are_currently_working : "",
    area_of_employment : "",
    are_you_Master_Trainer_or_Trainee : "",
  })

  return(
    <>
      <div className='border rounded-2 p-3 d-flex  justify-content-around'>
        
      <Row className='p-3 mt-3 d-flex justify-content-between flex-wrap'>
      <Col>
        <Form.Select name="age" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>  
          <option value="">Select age</option>
          <option value="21-25 years">21-25 years</option>
          <option value="25+ - 30 years">25+ - 30 years</option>
          <option value="30+ - 35 years">30+ - 35 years</option>
          <option value="35+ - 40 years">35+ - 40 years</option>
          <option value="40+ - 45 years">40+ - 45 years</option>
          <option value="45+ - 50 years">45+ - 50 years</option>
          <option value="50+ - 55 years">50+ - 55 years</option>
          <option value="55+ years">55+ years</option>
        </Form.Select>
       </Col>
       <Col>
        <Form.Select name="gender" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male" >Male</option>
        </Form.Select>
       </Col>
       <Col className='d-flex justify-content-start'>
       <Form.Select name="state" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
        {
          states.map((state, index) => {
            return(
            <option key={index} value={state[index+1]}>{state[index+1]}</option>
          )
          })
        }
       </Form.Select>
       </Col>
       <Col>
        <Form.Select name="type_of_Institution_where_you_are_currently_working" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select type of institution</option>
          <option value="Private Own Institution/Clinic">Private Own Institution/Clinic</option>
          <option value="Private Corporate Hospital">Private Corporate Hospital</option>
          <option value="Government Hospital">Government Hospital</option>
          <option value="Autonomous">Autonomous</option>
          <option value="Mission Hospital">Mission Hospital</option>
          <option value="Charity Hospital">Charity Hospital</option>
          <option value="Trust Hospital">Trust Hospital</option>
        </Form.Select>
       </Col>
       <Col>
       <Form.Select name="area_of_employment" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
        <option value="">Select area of employment</option>
          <option value="Clinical">Clinical</option>
          <option value="Teaching">Teaching</option>
          <option value="Public health">Public health</option>
        </Form.Select>
       </Col>
       <Col>
       <Form.Select name="are_you_Master_Trainer_or_Trainee" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
        <option value="">Select trainee or master trainer</option>
        <option value="Trainee">Trainee</option>
        <option value="Master Trainer">Master Trainer</option>
        </Form.Select>
       </Col>
       <Col>
       <Button variant="info" onClick={() => {
        props.handleFilter(filter)
       }}>Search</Button>
       </Col>
       </Row>
      </div>
    </>
  )
}

export function RACFilter(props){

  const [filter, setFilter] = useState({
    state : "",
    gender : "",
    age : "",
    type_of_Institution_where_you_are_currently_working : "",
    area_of_employment : "",
  })


  return(
    <>

      <div className='border rounded-2 p-3 d-flex  justify-content-around'>
        
      <Row className='p-3 mt-3 d-flex justify-content-between flex-wrap'>
      <Col>
        <Form.Select name="age" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>  
          <option value="">Select age</option>
          <option value="21-25 years">21-25 years</option>
          <option value="25+ - 30 years">25+ - 30 years</option>
          <option value="30+ - 35 years">30+ - 35 years</option>
          <option value="35+ - 40 years">35+ - 40 years</option>
          <option value="40+ - 45 years">40+ - 45 years</option>
          <option value="45+ - 50 years">45+ - 50 years</option>
          <option value="50+ - 55 years">50+ - 55 years</option>
          <option value="55+ years">55+ years</option>
        </Form.Select>
       </Col>
       <Col>
        <Form.Select name="gender" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male" >Male</option>
        </Form.Select>
       </Col>
       <Col className='d-flex justify-content-start'>
       <Form.Select name="state" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }} >
        {
          states.map((state, index) => (
            <option key={index} value={state[index+1]}>{state[index+1]}</option>
          ))
        }
       </Form.Select>
       </Col>
       <Col>
        <Form.Select name="type_of_Institution_where_you_are_currently_working" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
          <option value="">Select type of institution</option>
          <option value="Private Own Institution/Clinic">Private Own Institution/Clinic</option>
          <option value="Private Corporate Hospital">Private Corporate Hospital</option>
          <option value="Government Hospital">Government Hospital</option>
          <option value="Autonomous">Autonomous</option>
          <option value="Mission Hospital">Mission Hospital</option>
          <option value="Charity Hospital">Charity Hospital</option>
          <option value="Trust Hospital">Trust Hospital</option>
        </Form.Select>
       </Col>
       <Col>
       <Form.Select name="area_of_employment" onChange={(e) => {
            setFilter(preState => {
              return {...preState, [e.target.name] : e.target.value}
            })
          }}>
        <option value="">Select area of employment</option>
          <option value="Clinical">Clinical</option>
          <option value="Teaching">Teaching</option>
          <option value="Public health">Public health</option>
        </Form.Select>
       </Col>
       <Col>
       <Button variant="info" onClick={() => {
        props.handleFilter(filter)
       }}>Search</Button>
       </Col>
       </Row>
      </div>
    </>
  )
}