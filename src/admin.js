import React, { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StoreIcon from '@material-ui/icons/Store';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import UsersTab from './admin/users';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { Divider } from "@material-ui/core";
import Profile from "./admin/Profile";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function Dashboard() {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { currentUser, logout,getProfile } = useAuth();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClickLogoutAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseLogoutAlert = () => {
    setOpenAlert(false);
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  async function handleLogout(e) {
    e.preventDefault();
    setError("");
    try {
      await logout();
      history.push("/");
    } catch (e) {
      setError("Failed to log out" + e);
    }
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleOpenAlert = ()=>{
    setOpen(true)
  }


  return (
    <>
     <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"rgb(228 228 228)", marginTop:"20px"}} elevation={0} >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Dashboard" icon={<DashboardIcon />} {...a11yProps(0)} />
          <Tab label="Users" icon={<PeopleAltIcon />} {...a11yProps(1)} />
          <Tab label="Commands" icon={<StoreIcon />} {...a11yProps(2)} />
          <Tab label="Products" icon={<StorefrontIcon />} {...a11yProps(3)} />
          <Tab label="Settings" icon={<SettingsRoundedIcon />} {...a11yProps(4)} />
          <Tab label="Profile" icon={<AccountCircleRoundedIcon />} {...a11yProps(5)} onClick={getProfile} />
          <Tab label="Sign Out" icon={<ExitToAppIcon />} {...a11yProps(6)} onClick={ handleClickLogoutAlert }/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}  >
        
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UsersTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        sda
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Profile/>
      </TabPanel>
    </div>
    <Dialog
        open={openAlert}
        onClose={handleCloseLogoutAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
      
            <ReportProblemIcon/> {"Logout Confirmation"}
         
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Your About to sign out from application confirm to sign out or cancel this action
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCloseLogoutAlert} color="primary">
            Cancel
          </Button>
          <Button onClick={ handleLogout } color="primary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Card>
        <CardContent>
          <h2 className="">Profile</h2>
          {error && <Alert severity="error">{error}</Alert>}
          <strong>Email:</strong> {currentUser && currentUser.email}
          
          <Link href="/update-profile">
          Update Profile
          </Link>
        </CardContent>
      </Card>
      <div className="">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
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
    </>
  );
}
