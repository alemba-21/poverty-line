import React from 'react'
// import {useState, useEffect} from 'react'
import {Box, Grid, Button, makeStyles} from '@material-ui/core';

const skills = [ "JavaScript", "React.js", "Node.js"];

 const useStyles = makeStyles({
   wrapper: {
     border: "1px solid green",
     cursor: "pointer",

     "&:hover": {
      BoxShadow: "0px 5px 25px rgba(0, 0, 0,0.1)",
      borderLeft: "6px solid green",
     }
   },

   companyName: {
     fontSize: "13px",
     backgroundColor: "green",
     padding: "6px",
     borderRadius: "5px",
     display: "inline-block",
     fontWeight: 600,
   },

   skills:{
    margin: "4px",
    padding: "6px",
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight: "600",
    backgroundColor: "green",
    color: "white",
   },

  });

const JobCard = () => {
//   const [jobs, setJobs] = useState([])


//   useEffect(() => {    
//     const getJobs = async () => {
//       const jobsFromserver = await fetchJobs()
//       setJobs(jobsFromserver)
//     }

//     getJobs()
//   }, [])

//   // fetch Jobs

//   const fetchJobs = async () => {
//     const res = await fetch('http://localhost:5000/jobs')
//     const data = await res.json()

//     return data
//   }
  
  const classes = useStyles()
  return (
    <Box p={2} className={classes.wrapper}>
        <Grid container alignItems='center'>
            <Grid item xs>
                <h5 class="text-2xl">Frontend</h5>
                <p class="text-sm" className={classes.companyName}>Moringa School</p>
            </Grid>
            <Grid item container xs>
              {skills.map((skill) =>( 
                <Grid key={skill} className={classes.skills} item>{skill}</Grid>
              ))}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
                <Grid item>
                <p variant= "caption" class="text-sm">1237 min ago | Full time | Remote</p>
                </Grid>
                <Grid item>
                  <Box mt={2}>
                    <Button variant="outlined" class="normal-case text-s border-4 border-black-40/100 text-black">More Details</Button>
                  </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default JobCard