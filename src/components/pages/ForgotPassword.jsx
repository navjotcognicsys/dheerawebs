import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'




export default function ForgotPassword() {

  const [message, setMessage] = useState(false)
  const [email, setEmail] = useState('');

  function submitForm(){
    setMessage(true)
  }

  return (
    <Container className='d-flex flex-center full-height '>
      {
        message ? 
        <div>
          <p>password reset link is sent to the {email}, please check!</p>
        </div> :
       
       <Form onSubmit={submitForm}>
        <Form.Control
          className='mb-2 mt-4 text-center' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder='Enter Registered email' />
        <Button type="submit">send reset link</Button>
      </Form>

      }
    </Container>
  )
}
