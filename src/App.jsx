import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Applayout from './layout/Applayout'
import Dashboardscreen from './screen/Dashboardscreen'
import Studentscreen from './screen/Studentscreen'
import Teacherscreen from './screen/Teacherscreen'
import Staffscreen from './screen/Staffscreen'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Dashboardscreen />} />
            <Route path='Student' element={<Studentscreen />} />
            <Route path='teacher' element={<Teacherscreen/>} />
            <Route path='Staff' element={<Staffscreen />} />
          </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App