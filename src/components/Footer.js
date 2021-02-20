import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Button, Link } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles = makeStyles((theme) => ({
    centerContainer:{
        textAlign:"center",
    }
}))

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    className={ classes.centerContainer}
   >
       <Grid item lg={4} md={4} sm={12} xs={6}>
        <Button onClick={()=>{console.log('clicked')}}
        startIcon={<FacebookIcon />}>
                @app
        </Button>
       </Grid>
       <Grid item lg={4} md={4} sm={12} xs={6}>
        <Button onClick={()=>{console.log('clicked')}}
         startIcon={<TwitterIcon />}>
                @app
        </Button>
       </Grid>
       <Grid item lg={4} md={4} sm={12} xs={6}>
       <Button  onClick={()=>{console.log('clicked')}}
       startIcon={<InstagramIcon />}>
               @app
        </Button>
       </Grid>
    
    </Grid>
  );
}
