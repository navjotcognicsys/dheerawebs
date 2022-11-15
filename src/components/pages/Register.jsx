import {Container,Form,Button,Col,Row} from 'react-bootstrap';
import React,{useState} from 'react';
// import axios from "axios";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Signin from './Login';

function Register() {
let navigate = useNavigate();
  const [program, setProgram] = useState('');
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');



// fetch api
const submitHandler = async(e) => {
  e.preventDefault();
  if(program == "" || name == "" || email=="" || password =="" || cpassword==""){
        alert("fill all the feilds")
  }else{
     if(password=== cpassword){
     axios
  .post('https://dheeratest8.azurewebsites.net/api/v1/registration/' ,{
    name: name,
    program: program,
    password: password,
    email: email,
  })
 
  .then(function (response) {
    // handle success
    alert(JSON.stringify("User Registered succesfully"));
    setPassword('')
    setCpassword('')
    setName('')
    setProgram('')
    setEmail('')
  })
  .catch(function (error) {
    // handle error
    alert(error.message);
  });
  }
  else{
    alert("password does not match")
  }

  }
 
  
 
}
  return (
    <>

<Container>


<Row>
<Col lg={5} md={6} sm={8} className="px-4 py-3 m-auto shadow rounded-lg mt-5 ">

<Form  method='POST' onSubmit={submitHandler}>
<h1 className='shadow-sm p-3 text-center rounded'>Register</h1>

      <Form.Group className="mb-3">
      <Form.Label className='bold'> Select Program</Form.Label>
      <Form.Select 
      value={program} 
      onChange={e =>setProgram(e.target.value)}>
        <option>Select Program</option>
        <option>Dheera Program</option>
        <option>RAC Program</option>
      </Form.Select>
       </Form.Group>
      
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='bold'>Name</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Enter name" 
         value={name}
         onChange={e=>setName(e.target.value)}/>
         </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='bold'>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
         value={email} 
         onChange={e=>setEmail(e.target.value)} />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='bold'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password} onChange={e =>setPassword(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='bold'>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" 
        value={cpassword}
        onChange={e=>setCpassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="dark" type="submit" className='bold'>
        Register
      </Button>
    </Form>

</Col>
</Row>


</Container>
    
   </>
  );
}

export default Register;