import React from 'react'
import Head from 'next/head'
import Navbar from '../navbar/Navbar'

const App = (props) => (
  <div>
    <Navbar />
    <div>
      {props.children}
    </div>
  </div>
)

export default App
