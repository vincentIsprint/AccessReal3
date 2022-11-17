import { useState, React, useEffect } from 'react';
import { IconButton, Grid, Container, Typography, Box, Snackbar, Alert, TextField, Fab, styled, Stack, Avatar, Button, Checkbox, FormControlLabel, Divider, Chip  } from '@mui/material';
import Header from '../component/Header';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import qrcode from '../img/qr.jpg';
import HelpIcon from '@mui/icons-material/Help';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginInfo } from '../redux/setting';

const Login = () => {

    // Sign Up Type
    // 1. ownership card login (promoting)
    // 2. email
    // 3. phone number
    // 3. google / facebook
    let navigate = useNavigate();
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    });
    
    const handleClick = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
    };
    
    const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
    };

    const dispatch = useDispatch();

    const handleQRLogin = () => {
        dispatch(setLoginInfo({loginInfo: 'login'}))
        navigate("/Scan");
    }

    const handleLogin = () => {
        dispatch(setLoginInfo({loginInfo: 'login'}))
        navigate("/Voucher");
    }
    
    const [header] = useState({
        Item : [
            {   
                rightcontent: 
                    <IconButton size="large" edge="end" sx={{color:"primary.main"}} 
                        component={Link} to={`/Help_Login`}
                    >
                        <HelpIcon />
                    </IconButton>
            }
        ]
    })

    return(
        <>
            <Header info={header}/>
            <Snackbar
                sx={{padding: '5vh'}}
                open={state.open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                key={state.Transition.name}
            >
                <Alert severity="error">Username or password does not match.</Alert>
                {/* <Alert severity="warning">This is a warning message!</Alert> */}
                {/* <Alert severity="info">Move closer to the product.</Alert> */}
                {/* <Alert severity="success">This is a success message!</Alert> */}
            </Snackbar>

            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" >
                <Container maxWidth="xs">
                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                    </Stack>
                    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{paddingTop:'5%'}}>
                        <Grid item xs={3}>
                            <Button  
                                sx={{
                                        backgroundImage: `url(${qrcode})`,
                                        backgroundRepeat: 'no-repeat', 
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        width: 200,
                                        height: 200,
                                        borderColor: 'primary.main',
                                        borderWidth: '5px',
                                        borderStyle: 'solid',
                                        '&:hover': {
                                            borderColor: 'secondary.main',
                                            opacity: [0.9, 0.8, 0.7],
                                        }, 
                                    }}
                                    onClick={handleQRLogin}
                            />
                        </Grid>   
                    </Grid> 
                    <Stack 
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            paddingTop:'5%',
                            mt: 1
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField fullWidth required label="Email / User Id" variant="filled" sx={{backgroundColor:"white"}}/>
                        <TextField fullWidth required label="Password" type="password" variant="filled" sx={{backgroundColor:"white"}}/>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button fullWidth variant="outlined" 
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Button href="#" variant="body2" 
                                    component={Link} to={`/ResetPassword`}
                                >
                                    Forgot password?
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button href="#" variant="body2"
                                    component={Link} to={`/SignUp`}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider>
                            <Chip label="Or" />
                        </Divider>

                        <Grid container 
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item>
                                <IconButton color="primary" aria-label="upload picture" component="span" sx={{padding:'10px'}}>
                                    <GoogleIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="span" sx={{padding:'10px'}}>
                                    <FacebookIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Grid> 
        </>
    );
}

export default Login;