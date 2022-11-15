import React, {useState} from 'react';
import {Container,Form,Button,Col,Row, Alert, Spinner, InputGroup} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';
import { FaEye } from '@react-icons/all-files/fa/FaEye'
import { FaEyeSlash } from '@react-icons/all-files/fa/FaEyeSlash'

const Signin = (props) => {
  
  const { login, authError, loading, setAuthError } = useAuth();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [viewPass, setViewPass] = useState(false)
  
  function handleLogin(e){

    e.preventDefault()

    console.log('will login', email, password)
    if(email && password){
      login(email, password)
    }else{
      console.log('credentials not valid')
    }

  }

  

  return (
    <>
    <Container>
    <Row>
    <Col lg={5} md={6} sm={8} className="px-4 py-3 m-auto shadow rounded-2 mt-5">

  {
    authError &&
    <Alert variant="danger">
     { authError}
    </Alert> 
  }

   {
    loading ? 
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> 
    :
    <Form onSubmit={handleLogin}>
    <h1 className='shadow-sm p-3 text-center rounded-2'>Login</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
          onChange={(e) => {
            setAuthError(null)
            setEmail(e.target.value)
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
        <Form.Label className='bold'>Password</Form.Label>
        <InputGroup>
        <Form.Control type={viewPass ? "text" : "password"} placeholder="Password" 
          onChange={(e) => {
            setAuthError(null)
            setPassword(e.target.value)
          }}
        />
        <InputGroup.Text className='bold' onClick={() => {
          setViewPass(!viewPass)

          setTimeout(() => {
            setViewPass(false)
          },2000)
        }}>
          { viewPass ? <FaEye /> : <FaEyeSlash /> }
        </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      

      <Button variant="dark" type="submit" className='bold'>
        Login
      </Button>
      <Link to="/forgot-password" className='m-3'>Forgot Your Password?</Link>
    </Form>

   }

    </Col>
    </Row>
    
</Container>
    
    </>
  )
}

export default Signin