// import React from "react";
// import {
//   Link,
//   Paper,
//   Grid,
//   Typography,
//   Checkbox,
//   Container,
//   FormControlLabel,
//   TextField,
//   CssBaseline,
//   Button,
//   Avatar,
// } from "@material-ui/core";
// import { LockOutlined } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";
// import bgImg from "../../assets/img/bg-login.jpg";

// export default function SignIn() {
//   const classes = useStyles();
//   return (
//     <Paper
//       style={{
//         backgroundImage: `url(${bgImg})`,
//         height: "100vh",
//         width: "100wh",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         alignContent: "center",
//         textAlign: "center",
//       }}
//     >
//       <Paper
//         style={{
//           width: "50%",
//         }}
//       >
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlined />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Paper>
//     </Paper>
//   );
// }

import React from "react";
import {
  Grid,
  Paper,
  Link,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-login.jpg";
import { PersonOutline, VpnKeyOutlined } from "@material-ui/icons/";
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "35%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    paddingTop: theme.spacing(25),
  },
  paper: {
    paddingTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));
export default function AddressForm() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
        width: "100wh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        alignContent: "center",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            SIE ATR BPN
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              placeholder="Username"
              name="username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              placeholder="Password"
              name="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button fullWidth variant="outlined" className={classes.submit}>
              Login
            </Button>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs>
                <Divider />
              </Grid>
              <Grid item>New to SIE ATRBPN ?</Grid>
              <Grid item xs>
                <Divider />
              </Grid>
            </Grid>
            <Button fullWidth variant="outlined" className={classes.submit}>
              Register
            </Button>
          </form>
        </Paper>
      </main>
    </div>
  );
}
