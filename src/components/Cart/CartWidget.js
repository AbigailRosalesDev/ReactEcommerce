import {React, Fragment} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'

const CartWidget = (props) => {
  return (
    <Fragment>
    <Badge badgeContent={4} color="error">
      <ShoppingCartIcon/> 
    </Badge>         

   
</Fragment>
  )
}

export default CartWidget