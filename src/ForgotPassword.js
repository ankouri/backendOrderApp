import React, { useRef, useState } from "react";
import {
  Card,
  Grid,
  CardActions,
  Button,
  TextField,
  Container,
  Typography,
  Divider,
  CardContent,
} from "@material-ui/core";
import Footer from "./components/Footer";
import { Alert } from "@material-ui/lab";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";

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
  cardPassword: {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
  },
  paddingW4: {
    padding: "12px",
  },
  cardBottom: {
    padding: "12px",
    textAlign: "center",
    width: "100%",
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("failed to reset Password");
    }
    setLoading(false);
  }
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Card className={classes.cardPassword}>
          <CardContent>
            <h2>Password Reset</h2>
            <span className={classes.subTextDesc}>
              Forgot your password? No worries. Just enter the email you used to
              sign up and we'll send you a link to reset it.
            </span>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}
            <form onSubmit={handleSubmit}>
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
              <Button
                disabled={loading}
                startIcon={<ExitToAppIcon />}
                color="secondary"
                variant="contained"
                type="submit"
              >
                Reset Password
              </Button>
            </form>
          </CardContent>
          <CardActions>
            <div className={classes.cardBottom}>
              <Link to="/">Login</Link>
            </div>
          </CardActions>
        </Card>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
