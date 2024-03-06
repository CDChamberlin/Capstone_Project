"use client";

import { useUser } from "@/context/UserContext";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AccountInfo() {
  const {user, deleteUser} = useUser(); 
  const handleDelete = () =>{
    deleteUser(user.email)
  }
  console.log(JSON.stringify(user))
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5">Current Account Information</Typography>
      <Typography>
        Name: {user.firstName} {user.lastName}
      </Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>
        Address: {user.street}, {user.aptnumber}, {user.city}, {user.state},{" "}
        {user.zipcode}
      </Typography>
      <Button variant="contained" color="error" size="large" startIcon={<DeleteForeverIcon />} onClick={handleDelete}>Delete Account</Button>
    </Paper>
  );
}

function AccountForm() {
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    street: user.street || "",
    aptnumber: user.aptnumber || "",
    city: user.city || "",
    state: user.state || "",
    zipcode: user.zipcode || "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateUser = () => {
    updateUser({ ...user, ...formData });
  };

  

  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5">Change Account Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Apartment Number"
            name="aptnumber"
            value={formData.aptnumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleUpdateUser}
            variant="contained"
            color="primary"
            endIcon={<SaveIcon />}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
      
    </Paper>
  );
}

export default function Settings() {
  const router = useRouter()
  const user = useUser()
  if (user === null){router.push("/login")} 
  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AccountInfo />
        </Grid>
        <Grid item xs={12} md={6}>
          <AccountForm />
        </Grid>
      </Grid>
    </div>
  );
}
