import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import Card from '../../Cards/Card'


const ItemListContainer = (props) => {

  return (
    <Fragment>
    <Typography variant="h5" color="secondary" align='center'>
      {props.greeting}
    </Typography>
    <Card/>
    </Fragment>

  )
}

export default ItemListContainer