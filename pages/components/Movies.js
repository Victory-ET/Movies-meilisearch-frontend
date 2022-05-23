import React from 'react'
import Nav from './Nav'
import List from './List'

const Movies = () => {
  return (
    <div className=' h-screen overflow-x-hidden bg-gradient-to-tr from-slate-900 to-blue-400/100'>
        <Nav/>
        <List/>
    </div>
  )
}

export default Movies