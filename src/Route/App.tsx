import { Routes, Route } from 'react-router-dom'
import Index from '../components/Index'
import Service from '../components/Service'
import Promotion from '../components/Promotion'
import Workmanship from '../components/Workmanship'

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Index/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/Promotion" element={<Promotion/>} />
        <Route path="/Workmanship" element={<Workmanship/>} />
      </Routes>
    </>
  )
}

export default App
