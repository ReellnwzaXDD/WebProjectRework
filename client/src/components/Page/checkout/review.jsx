import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import ShopCart from "../shopcart";
import { CartContext } from "../cartcontext";


export default function Review() {
  const [products, setProducts] = useState([]);
  const [memberDetail, setMemberDetail] = useState({
    Name: '',
    Surname: '',
    Address: '',
    tel: ''
  });
  const Id = sessionStorage.getItem('id');
  const getmemberdetail = async () => {
    try{
        const response = await fetch(`http://localhost:3001/getmemberdetail?Id=${Id}`)
        const data = await response.json();
        if (data && data.length > 0) {
          setMemberDetail(data[0]);
      }
    } catch (error){
        console.error('Error', error.message);
    }
  };
  const getproductdetail = async () => {
    try{
        const response = await fetch(`http://localhost:3001/getorder?Id=${Id}`)
        const data = await response.json();
        if (data && data.length > 0) {
          setProducts(data);
      }
    } catch (error){
        console.error('Error', error.message);
    }
  };

  useEffect(()=>{
    getproductdetail();
    getmemberdetail();
  },[])
  return (
    <div data-theme="emerald" className='container mx-auto p-4 mt-20'>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.product_name} sx={{ py: 1, px: 0 }}>
            <ListItemText 
              primary={`Product: ${product.product_name}`} 
              secondary={`OrderDate: ${new Date(product.DATE).toISOString().split('T')[0]}`} 
            />
            <Typography variant="body2">{product.price} ฿</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {products.reduce((total, product) => total + parseFloat(product.price), 0) } ฿
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Name: {memberDetail.Name}  {memberDetail.Surname}</Typography>
          <Typography gutterBottom>Address: {memberDetail.Address}</Typography>
          <Typography gutterBottom>Tel: {memberDetail.tel}</Typography>
        </Grid>
     
      </Grid>
    </div>
  );
}