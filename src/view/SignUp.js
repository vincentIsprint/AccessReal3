import { useState, React } from 'react';
import { IconButton, Grid, Container, Typography, Box, Snackbar, Alert, TextField, Stack, Avatar, Button, Checkbox, FormControlLabel, Divider, Chip  } from '@mui/material';
import Header from '../component/Header';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

const SignUp = () => {

    // Sign Up Type
    // 1. email
    // 2. mobile number
    // 3. google / facebook

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

    const [header] = useState({
        Item : [
            {   
                leftcontent:
                    <IconButton size="large" edge="start" sx={{color:"primary.main"}}
                        component={Link} to={`/Login`}
                    >
                        <ArrowBackIosNewIcon />
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
                <Alert severity="error">Username already been used by others. Please use a different username</Alert>
                {/* <Alert severity="warning">This is a warning message!</Alert> */}
                {/* <Alert severity="info">Move closer to the product.</Alert> */}
                {/* <Alert severity="success">This is a success message!</Alert> */}
            </Snackbar>

            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" >
                <Container maxWidth="xs">
                    <Stack
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        direction="column"
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <PersonAddIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                    </Stack>
                    <Stack 
                        component="form"
                        sx={{
                            display: 'flex',
                            alignItems: 'left',
                            paddingTop:'5%',
                            mt: 1
                        }}
                        direction="column"
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField fullWidth required label="Email" variant="filled" sx={{backgroundColor:"white"}}/>
                        {/* Note: Username will be auto generated to reduce the textfield required to be field. Example: userID + random Number */}
                        <TextField fullWidth required label="Mobile Number" variant="filled" sx={{backgroundColor:"white"}}/>
                        <TextField fullWidth required label="Email" variant="filled" sx={{backgroundColor:"white"}}/>
                        <TextField fullWidth required label="Password" type="password" variant="filled" sx={{backgroundColor:"white"}}/>
                        <TextField fullWidth required label="Repeat Password" type="password" variant="filled" sx={{backgroundColor:"white"}}/>
                        
                        <Stack 
                            container spacing={2}
                            direction="row"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                label="OTP Code"
                                required
                                id="firstName"
                                autoFocus
                                />
                            <Button variant="outlined" onClick={handleClick(Fade)}>
                                OTP Request
                            </Button>
                        </Stack>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="I acknowledge that I have read, consent and agree to AccessReal Terms of Service and Privacy Policy"
                        />
                        <Button fullWidth variant="outlined" onClick={handleClick(Fade)}>
                            Sign Up
                        </Button>
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

export default SignUp;