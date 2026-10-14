import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Applayout from './layout/Applayout'
import Dashboardscreen from './screen/Dashboardscreen'
import Studentscreen from './screen/Studentscreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Dashboardscreen />} />
            <Route path='Student' element={<Studentscreen />} />
          </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App