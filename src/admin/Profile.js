// REACT_APP_FIREBASE_API =AIzaSyAPXbo4vdyKEUBRHf5WN1jmGGBTdR0iiBA
// REACT_APP_FIREBASE_DOMAIN =auth-dev-50406.firebaseapp.com
// REACT_APP_FIREBASE_DATABASE =https://auth-dev-50406-default-rtdb.firebaseio.com 
// REACT_APP_FIREBASE_PROJECT =auth-dev-50406
// REACT_APP_FIREBASE_STORAGE =auth-dev-50406.appspot.com
// REACT_APP_FIREBASE_MESSAGIN =311415817224 
// REACT_APP_FIREBASE_APPID =1:311415817224:web:583659087a30dd74c7bdbd 

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
