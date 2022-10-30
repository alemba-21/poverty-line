import React from 'react'
import {Box, Button, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {    
    marginBottom: "20px",
    backgroundColor: "fff",
    display: "flex",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.7)",
    borderRadius: "5px",
    "& > *":{
      flex: 1,
      height: "45px",
      margin: "20px",
    },
  },
});

const SearchBar = () => {
  const classes = useStyles();
  return (
      <Box p={2} mt={-4.5} mb={5} className={classes.wrapper}>
        <Select disableUnderline variant='filled' defaultValue="Full Time">
          <MenuItem value="Full Time">Software Development</MenuItem>
          <MenuItem value="Part Time">Teaching</MenuItem>
          <MenuItem value= "Contract">Building and construction</MenuItem>
          <MenuItem value= "Contract">Accountant</MenuItem>
          <MenuItem value= "Contract">Graphics designer</MenuItem>
          <MenuItem value= "Contract">Mpesa Agent</MenuItem>
          <MenuItem value= "Contract">Waiter</MenuItem>
          <MenuItem value= "Contract">Security guard</MenuItem>
          <MenuItem value= "Contract">Hotel Manager</MenuItem>
          <MenuItem value= "Contract">Real Estate</MenuItem>          
        </Select>
        <Button variant='contained' class="normal-case text-2xl border-4 border-indigo-100/100 text-black" >Search</Button>
      </Box>
  )
}

export default SearchBar

