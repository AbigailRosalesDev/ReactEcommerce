import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { AppContext } from '../context/Context'

const  Item = ({ data }) => {
   
    const{id,title,imageURL,available_quantity,price}=data
    const{addProductToCart}=React.useContext(AppContext);

    const addToCart=(quantity)=>{
      addProductToCart({
        id:id,
        title:title,
        pricePerUnit:price,
        quantity:quantity,
        image:{imageURL}
      })
    }
    
    return (
        <Card sx={{ maxWidth: 300, margin: '5px',  textDecoration: 'none'}}>
       <Link to={'/product/'+ id} style={{ textDecoration: 'none'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={imageURL}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color='black' component="div" >
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        ${price}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Stock:{available_quantity}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
                 <ItemCount stock={available_quantity} addToCart={addToCart}/>

            </CardActions>
        </Card>
    );
}

export default Item