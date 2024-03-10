import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate  } from 'react-router-dom';
export default function AddressForm() {
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
  let Navi = useNavigate();
  return (
    
    <div data-theme="emerald" className='container mx-auto p-4 mt-20'>
    <div className='snap-center'>
      <Typography variant="h6" gutterBottom >
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={memberDetail.Name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={memberDetail.Surname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={memberDetail.Address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="tel"
            name="tel"
            label="phonenumber"
            fullWidth
            autoComplete="phonenumber"
            variant="standard"
            value={memberDetail.tel}
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <button className="btn btn-outline btn-success "  onClick={()=> Navi("/payment")} >Next</button> 
      </Grid>
      </div>
      </div>
    
  );
}