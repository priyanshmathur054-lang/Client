import React from 'react'

const Staffscreen = () => {
    const [isAppReady,updateStaff] = React.useState(false)

    setTimeout(() => {
        updateStaff(true)
    }, 1.5 * 1000);

    if(!isAppReady)
    {
        return(
     <div>
        Staff Page
     </div>
      )
    }
  return (
    <div>Staffscreen</div>
  )
}

export default Staffscreen
