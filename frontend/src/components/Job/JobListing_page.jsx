import React from 'react'
import {Box, Grid, Button} from '@material-ui/core'

const JobListing_page = () => {
  return (
    <Box class="py-20 bg-green-600">
        <Grid container class="flex justify-center">
            <Grid item xs={10}>
                <Box class="flex items-center flex justify-between">
                    <h1 class="text-5xl">Open Job Positions</h1>
                    <Button class="normal-case text-2xl border-4 border-indigo-100/100" >Post a Job</Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default JobListing_page