import React from 'react'
import {Box, Grid, Button, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
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
    <Grid container class="flex justify-center p-2 -mt-7">
      <Grid item xs={10}>
        <Box className={classes.wrapper}>
          <Select class = "text-white" disableUnderline variant='filled' defaultValue="Full Time">
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            <MenuItem value= "Contract">Contract</MenuItem>
          </Select>
          <Select class = "text-white" disableUnderline variant='filled' defaultValue="Remote">
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="HyBrid">Hybrid</MenuItem>
          </Select>
          <Button variant='contained' class="normal-case text-2xl border-4 border-indigo-100/100 text-black" >Search</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SearchBar