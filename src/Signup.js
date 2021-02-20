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
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
  cardBottom: {
    padding: "12px",
    textAlign: "center",
    width: "100%",
  },
}));

export default function Signup({
  handleChangeTabs,
  handleChangeIndex,
  setMessage,
}) {
  const emailRef = useRef();
  const classes = useStyles();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, addUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    passwordConfirm: "",
    weightRange: "",
    showPassword: false,
    showPasswordConfirm: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm });
  };
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (
      passwordRef.current.value.length < 8 ||
      passwordConfirmRef.current.value.length < 8
    ) {
      return setError("Passwords too short! At least 8 charachters");
    }

    try {
      setError("");
      setLoading(true);
      var result = await signup(emailRef.current.value, passwordRef.current.value);
      if(result != null && result.additionalUserInfo.isNewUser){
      await addUser(result.user.uid,"", result.user.email,"","","",0 )
      //uid, username, email,adress ,phone, avatar, isadmin
      handleChangeTabs(0);
      handleChangeIndex(0);
      setMessage("Your Account Created Successfully. Please Log In now!");
     }
    } catch (error) {
      setError(`failed to create an account ${error}`);
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography className={classes.titleCard} gutterBottom>
            Sign Up
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit} autoComplete="off">
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
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              autoComplete="current-password"
              inputRef={passwordRef}
              onChange={handleChange("password")}
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
            <TextField
              color="secondary"
              variant="outlined"
              className={classes.inputText}
              id="passwordConfirm"
              label="Password Confirm"
              type={values.showPasswordConfirm ? "text" : "password"}
              value={values.passwordConfirm}
              autoComplete="current-password"
              inputRef={passwordConfirmRef}
              onChange={handleChange("passwordConfirm")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      edge="end"
                    >
                      {values.showPasswordConfirm ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />

            <Button
              variant="contained"
              color="secondary"
              disabled={loading}
              startIcon={<ExitToAppIcon />}
              className={classes.cardBottom}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
        </div> */}
    </>
  );
}
