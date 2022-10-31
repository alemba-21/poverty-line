import React from 'react'
import {Box, Grid, Button} from '@material-ui/core'

const JobListing_page = () => {
  return (
    <Box class="py-14 bg-green-600" style ={{marginBottom: "-15px"}}>
        <Grid container class="flex justify-center">
                <Box class="flex items-center flex justify-between">
                    <h1 class="text-5xl font-bold">Job Entries</h1>
                    <Button class="normal-case text-2xl text-green-600">Post a Job</Button>
                </Box>
        </Grid>
    </Box>
  )
}

export default JobListing_page