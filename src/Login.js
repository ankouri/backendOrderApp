import React, { useRef, useState } from "react";
import {
  IconButton,
  Card,
  Button,
  TextField,
  Typography,
  CardContent,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  titleCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
  },
  inputText: {
    width: "100%",
    marginBottom: "10px",
    marginTop: "10px",
  },
  cardBottom:{
    padding:"12px",
    textAlign:"center",
    width:"100%"
}
}));

export default function Login() {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const   {login, currentUser}   = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };


  async function handleSubmit(e) {
    e.preventDefault();

    if(!passwordRef.current.value && !emailRef.current.value){
        return setError('All fields are requireds')
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard");
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  }
  return (
    <Card>
      <CardContent>
        <Typography className={classes.titleCard} gutterBottom>
          Log In
        </Typography>
         
         {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}  autoComplete="on">
          <TextField
            color="secondary"
            className={classes.inputText}
            variant="outlined"
            id="email"
            label="Email"
            type="email"
            autoComplete="current-email"
            inputRef={emailRef}
            required
          />

          <TextField
            color="secondary"
            variant="outlined"
            className={classes.inputText}
            id="password"
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            autoComplete="current-password"
            inputRef={passwordRef}
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />

          <Button
            className={ classes.cardBottom }
            disabled = { loading }
            startIcon={<ExitToAppIcon />}
            color="secondary"
            variant="contained"
            type="submit"
          >
            Sign In
          </Button>
        </form>
         <div className={ classes.cardBottom }>
           <Link to="/forgot-password">Forgot Password?</Link>
        </div>
       </CardContent>
      
 </Card>
  );
}
