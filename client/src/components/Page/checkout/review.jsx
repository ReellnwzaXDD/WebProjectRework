import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import ShopCart from "../shopcart";
import { CartContext } from "../cartcontext";

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

//const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
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
  useEffect(()=>{
    getmemberdetail();
  },[])
  return (
    <div data-theme="emerald" className='container mx-auto p-4 mt-20'>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
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