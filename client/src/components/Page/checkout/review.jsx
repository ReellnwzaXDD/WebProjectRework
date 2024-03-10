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
  const [orderSummary, setOrderSummary] = useState([]);
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
  const getOrderSummary = async () => {
    try {
      const response = await fetch(`http://localhost:3001/getorder?Id=${Id}`);
      const data = await response.json();
      if (data && data.length > 0) {
        // Group products by order date
        const groupedOrders = {};
        data.forEach(product => {
          const date = new Date(product.DATE).toISOString().split('T')[0];
          if (!groupedOrders[date]) {
            groupedOrders[date] = [];
          }
          groupedOrders[date].push({
            number: groupedOrders[date].length + 1,
            productName: product.product_name,
            price: parseFloat(product.price)
          });
        });

        // Calculate total price for each group
        const summary = Object.entries(groupedOrders).map(([date, products]) => ({
          date,
          products,
          totalPrice: products.reduce((total, product) => total + product.price, 0)
        }));

        setOrderSummary(summary);
      }
    } catch (error) {
      console.error('Error fetching order summary:', error.message);
    }
  };
  useEffect(()=>{
    getproductdetail();
    getmemberdetail();
    getOrderSummary();
  },[])
  return (
    <div data-theme="emerald" className='container mx-auto p-4 mt-20'>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orderSummary.map((summary, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemText 
              primary={`Date: ${summary.date}`} 
              secondary={
                <div>
                  <Typography variant="body1" component="div">
                    Products:
                    <ul>
                      {summary.products.map((product, idx) => (
                        <li key={product.number}>
                        {product.number}. {product.productName} - ${product.price.toFixed(2)}
                      </li>
                      ))}
                    </ul>
                  </Typography>
                  <Typography variant="body" component="div">
                    Total Price: ${summary.totalPrice.toFixed(2)}
                  </Typography>
                </div>
              }
            />
          </ListItem>
        ))}
        
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