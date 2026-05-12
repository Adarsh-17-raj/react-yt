import React from 'react'
import Card from './assets/component/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age = {18} img='https://images.unsplash.com/photo-1775531994622-9c7ec9f017c9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Adarsh' age = {21} img='https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> 
      <Card user='Aditya' age = {24} img='https://images.unsplash.com/photo-1704975986930-0c09f513c985?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> 
    </div>
    
    
  )
}

export default App