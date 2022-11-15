import React,{useEffect} from 'react'
import UsersTable from './UsersTable'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'


export default function ApproveUser() {

  const [users,setUsers] = useState([])
  useEffect(()=>{
    async function getAllProvider(){
    try {
      const providers = await axios.get("https://dheeratest8.azurewebsites.net/api/v1/registration/")
      console.log(providers.data)
      const filtered = providers.data.filter((user)=>{
        console.log(user)
          if(!user.approve){
            return user
          }else return null
          
      })
      console.log(filtered,"filter value")
      setUsers(filtered)
    } catch (error) {
      console.log(error)
    }
    }
    getAllProvider()
  }, [])

 

  return (
    <Container>
      <h2>Approve Users</h2>
      <UsersTable listFrom="approve" usersList={users}/>
    </Container>
  )
}
