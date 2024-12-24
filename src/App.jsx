import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Layout from './layout/Layout'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path="/user/:userId" element={<Profile />}/>
      </Route>
    </Routes>
  )
}

export default App
