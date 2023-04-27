import React from 'react'
import NavBar from './components/navbar/NavBar'
import {orginals,action, romance, horror, documentaries} from './urls'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  )
}

export default App
