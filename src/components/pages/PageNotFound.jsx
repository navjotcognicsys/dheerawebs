import React from 'react'
import {Container} from 'react-bootstrap'

export default function PageNotFound() {
  return (
    <Container>
      <div className="notfound">
      <h1>😔 404 Error - page not found</h1>
      <p>please check the url</p>
      </div>
    </Container>
  )
}
