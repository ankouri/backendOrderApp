import React from 'react'
import { Grid, Avatar,Box, makeStyles, Button, Paper, Chip} from "@material-ui/core";
import { useAuth } from '../contexts/AuthContext';
import FaceIcon from '@material-ui/icons/Face';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyle = makeStyles((theme)=>({
    avatar:{
        width:"80px !important",
        height:"80px !important",
    },
    updateAvatarBtn:{
        marginTop:"10px",
        marginBottom:"10px",
    }
}));

export default function Profile() {
    const classes = useStyle();
    const { currentUser, getProfile,UserInfromation } = useAuth();
    var data = getProfile(currentUser.uid);
    return (
        <Grid container spacing={2}>
            { UserInfromation.id }
            <Grid item lg={4} md={6} sm={12} xs={12} style={{"alignItems":"center","flexDirection":"column","display":"flex","justifyItems":"center"}}>
                 <Avatar alt={ currentUser.email } className={ classes.avatar } src="images/avatar.png" />
                 <Button variant="contained" color='secondary' className={ classes.updateAvatarBtn }>Update Avatar</Button>
     
                 <Chip
                    icon={<FaceIcon />}
                    label={`Username : ${ currentUser.email }`}
                    onClick={()=>{}}
                    variant="outlined"
                    size="medium"
                    style={{"width":"100%","marginTop":"8px"}}
                />
                   <Chip
                    icon={<AlternateEmailIcon />}
                    label="Email : ankouri@gmail.com"
                    onClick={()=>{}}
                    variant="outlined"
                    size="medium"
                    style={{"width":"100%","marginTop":"8px"}}
                />
                   <Chip
                    icon={<RoomIcon />}
                    label="Adress: Taznakhte-Ouarzazate"
                    onClick={()=>{}}
                    variant="outlined"
                    size="medium"
                    style={{"width":"100%","marginTop":"8px"}}
                />
                   <Chip
                    icon={<PhoneIcon />}
                    label="Phone :06 41 09 32 35"
                    onClick={()=>{}}
                    variant="outlined"
                    size="medium"
                    style={{"width":"100%","marginTop":"8px"}}
                />
                 

            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>Update</Grid>
        </Grid>
    )
}
