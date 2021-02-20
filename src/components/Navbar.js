import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import { Link } from "react-router-dom";
import {
  AppBar,
  Modal,
  Divider,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Button,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoText: {
    flexGrow: 1,
    fontFamily:'Cookie',
    fontWeight:"bold",
    fontSize:"40px",
  },
  logoIcon:{
    fontSize:"50px",
    display:"inline-block",
    float:"left",
    marginTop:"5px"
  },
  media: {
    height: "60px",
    width: "180px", // 16:9
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    width: "450px",
    marginLeft:"10px",
    marginRight:"10px",
    borderRadius:"8px"
  },
  btnMedia: {
    width: "200px",
    height: "60px",
  },
  divider:{
    marginBottom:"10px",
    marginTop:"10px",
  },
  downloadDesc:{
    fontSize:"15px",
    marginBottom:"13px",
    textAlign:"center"
  },
  downloadTitle:{
    textAlign:"center",
    fontFamily:"Roboto",
  },
  logoLink:{
    textDecoration:"none",
    color:"#000"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="relative" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.logoText}>
            <Link to="/" className={classes.logoLink}><SentimentSatisfiedIcon className={classes.logoIcon}/> Application</Link>
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            <CloudDownloadIcon />
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
          >
            <div className={classes.paper}>
            <Typography variant="h4" className={classes.downloadTitle}>
              Download Our App
            </Typography>
              <Divider className={ classes.divider}/>
              <Typography variant="h6" className={classes.downloadDesc}>
              Select your OS and click to start downloading
            </Typography>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item lg={6} md={6} sm={12}>
                  <Link
                    to="#"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    <CardMedia
                      className={classes.btnMedia}
                      image="./images/appstore.png"
                      title="Paella dish"
                    />
                  </Link>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Link
                    to="#"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    <CardMedia
                      className={classes.btnMedia}
                      image="./images/googleplay.png"
                      title="Paella dish"
                    />
                  </Link>
                </Grid>
               

              </Grid>
              <Divider className={ classes.divider}/>
            </div>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}
