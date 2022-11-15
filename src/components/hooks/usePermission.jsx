import React, {useState, useEffect} from 'react'
import { useAuth } from '../Authentication/AuthContext'

export default function usePermission() {

  const { currentUser } = useAuth()

  const [trainingOptions, setTrainingOptions] = useState([])
  const [adminOptions, setAdminOptions] = useState([])

  function setOptionsForUser(){

    const labelForName = {
      permission_dheera_master : 'Dheera Master Training',
      permission_dheera_school_teacher: 'Dheera School Teacher Training',
      permission_dheera_school_student : 'Dheera School Student Training',
      permission_rac : 'RAC Training',
      permission_obygn : 'Dheera OBGYN Training',
      permission_approve_user : 'Approve Users',
      permission_manage_user : 'Manage Users'
    }


    
    let trainignArr = [
      {
        name : 'Dheera Master Training',
        value : currentUser.permission_dheera_master
      },
      {
        name : 'Dheera School Teacher Training',
        value : currentUser.permission_dheera_school_teacher
      },
      {
        name : 'Dheera School Student Training',
        value : currentUser.permission_dheera_school_student
      },
      {
        name : 'Dheera OBGYN Training',
        value : currentUser.permission_obygn
      },
      {
        name : 'RAC Training',
        value : currentUser.permission_rac
      }
    ]

    setTrainingOptions(trainignArr)

    let adminArr = [
      {
        name : 'Approve Users',
        path: 'approve',
        value : currentUser.permission_approve_user
      },
      {
        name : 'Manage Users',
        path: 'manage',
        value : currentUser.permission_manage_user
      },
    ]
    
    setAdminOptions(adminArr)

  }

  useEffect(() => {
    console.log('hooks useeffect')
    if(currentUser){
      setOptionsForUser()
    }
    return () => {
      
    }
  }, [currentUser])
  

  return {trainingOptions, adminOptions}
}
