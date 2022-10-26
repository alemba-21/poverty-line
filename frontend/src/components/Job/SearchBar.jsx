import React from 'react'
import {Box, Button, Select, MenuItem, makeStyles } from '@material-ui/core';

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
      <Box p={2} mt={-4.5} mb={5} className={classes.wrapper}>
        <Select disableUnderline variant='filled' defaultValue="Full Time">
          <MenuItem value="Full Time">Full Time</MenuItem>
          <MenuItem value="Part Time">Part Time</MenuItem>
          <MenuItem value= "Contract">Contract</MenuItem>
        </Select>
        <Select disableUnderline variant='filled' defaultValue="Remote">
          <MenuItem value="Remote" >Remote</MenuItem>
          <MenuItem value="HyBrid">Hybrid</MenuItem>
        </Select>
        <Button variant='contained' class="normal-case text-2xl border-4 border-indigo-100/100 text-black" >Search</Button>
      </Box>
  )
}

export default SearchBar

    // <Grid container class="flex justify-center p-2 -mt-7">
    //   <Grid item xs={10} >

        //   </Grid>
    // </Grid>