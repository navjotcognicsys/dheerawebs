import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import DheeraMaster from './components/pages/Training/DheeraMaster';
import DheeraSchoolStudent from './components/pages/Training/DheeraSchoolStudent';
import DheeraSchoolTeacher from './components/pages/Training/DheeraSchoolTeacher';
import RacPre from './components/pages/Training/RacPre';
import ObgynPre from './components/pages/Training/ObgynPre';
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Dashboard from './components/pages/Dashboard';
import ForgotPassword from './components/pages/ForgotPassword';
import ApproveUser from './components/Admin/ApproveUser';
import ManageUsers from './components/Admin/ManageUsers';
import NavigationBar from './components/utils/NavigationBar';
import PageNotFound from './components/pages/PageNotFound';
import AuthContextProvider, { useAuth } from './components/Authentication/AuthContext';


export default function App(){


  return (
    <AuthContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={
            <RequireAuth>
              <Login />
            </RequireAuth>
          } />
          <Route path='/register' element={
            <RequireAuth>
              <Register />
            </RequireAuth>
          } />
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
          } />
          <Route path='/forgot-password' element={
            <WhenUserNotLoggedIN>
              <ForgotPassword />
            </WhenUserNotLoggedIN>
          } />
          
          {/* Training paths */}
          <Route path='/dashboard/DheeraMaster' element={
            <RequireAuth>
              <DheeraMaster/>
            </RequireAuth>
          } />
          <Route path='/dashboard/DheeraSchoolTeacher' element={
            <RequireAuth>
              <DheeraSchoolTeacher/>
            </RequireAuth>
          } />
          <Route path='/dashboard/DheeraSchoolStudent' element={
            <RequireAuth>
              <ThisPathNeedPermission>
                <DheeraSchoolStudent/>
              </ThisPathNeedPermission>
            </RequireAuth>
          } />
          <Route path='/dashboard/RacPre' element={
            <RequireAuth>
              <ThisPathNeedPermission>
                <RacPre/>
              </ThisPathNeedPermission>
            </RequireAuth>
          } />
          <Route path='/dashboard/ObgynPre' element={
            <RequireAuth>
              <ThisPathNeedPermission>
                <ObgynPre/>
              </ThisPathNeedPermission>
            </RequireAuth>
          } />
          <Route path='/admin/approve' element={
            <RequireAuth>
              <ThisPathNeedPermission>
                <ApproveUser/>
              </ThisPathNeedPermission>
            </RequireAuth>
          } />
          <Route path='/admin/manage' element={
            <RequireAuth>
              <ThisPathNeedPermission>
                <ManageUsers/>
              </ThisPathNeedPermission>
            </RequireAuth>
          } />
           <Route path='*' element={
             <PageNotFound />
          } />
        </Routes>
        </main>
      </BrowserRouter>
    </AuthContextProvider>
  )
}


function RequireAuth(props){
  // check users permission for provided routes
  const { currentUser } = useAuth();

  const location = useLocation();

  if(
    location.pathname === '/login' || 
    location.pathname === '/register' || 
    location.pathname === '/forgot-password' || 
    location.pathname === '/reset'
  ){
    return currentUser ? <Navigate to={location.state?.from ?? '/dashboard'} />
    : props.children
  }

  return currentUser ? 
  props.children : 
  <Navigate to='/login' state={{ from: location.pathname }} replace />;
}


function WhenUserNotLoggedIN(props){
  const { currentUser } = useAuth();

  return !currentUser ? props.children : null
}

function ThisPathNeedPermission(props){
  const { currentUser } = useAuth()

  console.log('this is coming after checking permission')

  return props.children

}