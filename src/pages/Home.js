import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../components/Items/ItemListContainer'


const Home = () => {
  return (
    <Fragment >
        <Navbar/>
        <ItemListContainer />
    
    </Fragment>
  )
}

export default Home