import { React, Fragment } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'


const CartIcon = ({cartQuantity} ) => {
  return (
    <Fragment>
      <Badge badgeContent={cartQuantity} color="error">
        <ShoppingCartIcon />
      </Badge>
    </Fragment>
  )
}

export default CartIcon