import React from 'react'
import {Grid} from "@material-ui/core"
import JobCard from '../components/Job/JobCard';
import Header from '../components/Job/Header'
import SearchBar from '../components/Job/SearchBar'

const Jobs = () => {
  return (
    <div>
        <Header/>
        <Grid container justify="center">
          <Grid item xs={10}>
            <SearchBar/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </Grid>
        </Grid>
        
    </div>
  )
}

export default Jobs