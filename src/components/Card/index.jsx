import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const  Item = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 300, margin: '5px',  textDecoration: 'none'}}>
       <Link to={'/product/'+ data.id} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                    alt={data.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color='black' component="div" >
                        {data.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        ${data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
         
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default Item