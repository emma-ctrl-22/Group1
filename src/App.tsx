import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Room, Services, Home, Guests,Booking } from './pages'
import { DefaultLayout } from "./components"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      </Routes>
      <Routes>
        <Route path="/rooms" element={<DefaultLayout><Room /></DefaultLayout>} />
      </Routes>
      <Routes>
        <Route path="/bookings" element={<DefaultLayout><Booking /></DefaultLayout>} />
      </Routes>
      <Routes>
        <Route path="/services" element={<DefaultLayout><Services /></DefaultLayout>} />
      </Routes>
      <Routes>
        <Route path="/guests" element={<DefaultLayout><Guests /></DefaultLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
