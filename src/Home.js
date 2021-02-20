import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  Tabs,
  Tab,
  Box,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import SwipeableViews from "react-swipeable-views";
import Login from "./Login";
import { useAuth } from "./contexts/AuthContext";
import Signup from "./Signup";
import SliderImage from "./components/SliderImage";
import Footer from "./components/Footer";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {console.log(value, index)}
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    background: "#f1f1f1",
  },
  typoclass: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleApp: {
    fontWeight: "bold",
    marginBottom: "15px",
    fontFamily: "Cookie",
    color: "#000",
    fontSize: "60px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(true);

  //   const  { login }  = useAuth

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Paper elevation={0} className={classes.paper}>
          <SliderImage />
        </Paper>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="h4" className={classes.titleApp}>
              Application
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </Paper>
        </Grid>
        <Paper
          elevation={0}
          className={`${classes.paper} ${classes.typoclass}`}
        >
          <Tabs
            value={value}
            onChange={handleChangeTabs}
            aria-label="simple tabs example"
          >
            <Tab label="Sign In" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          {message && (
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleCloseAlert}
            >
              <Alert onClose={handleCloseAlert} severity="success">
                {message}
              </Alert>
            </Snackbar>
          )}
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup
            handleChangeTabs={handleChangeTabs}
            handleChangeIndex={handleChangeIndex}
            setMessage={setMessage}
          />
        </TabPanel>
        <Footer />
      </Grid>
    </Grid>
  );
}
