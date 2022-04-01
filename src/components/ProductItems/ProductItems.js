import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/cartSlice'; 

const ProductItems = ({item}) => {
  const dispatch = useDispatch()

  const addCartHandel = (item)=> {
    console.log('to cart',item)
    dispatch(addCart(item))
  }

  return (
    <Card sx={{ width: 245 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.cat}
        </Typography>
        <Typography variant="h4" color="text.secondary">
        {item.price} .ua
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button onClick={()=>addCartHandel(item)} variant="contained">Add cart3</Button>
    </CardActions>
  </Card>
  )
}

export default ProductItems