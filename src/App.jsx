import { Route, Routes } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import Layout from './layout/Layout'
import './App.css'
import Error from './pages/error/Error'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="user/:userId" element={<Profile />}/>
        <Route path='*' element={<Error />}/>
      </Route>
    </Routes>
  )
}

export default App
