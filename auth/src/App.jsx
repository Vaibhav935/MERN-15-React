import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/login'

const App = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}
    </div>
  )
}

export default App
