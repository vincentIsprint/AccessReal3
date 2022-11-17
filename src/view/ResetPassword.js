import { useState, React } from 'react';
import { IconButton, Grid, Container, Typography, Box, Snackbar, Alert, TextField, Stack, Avatar, Button, Divider  } from '@mui/material';
import Header from '../component/Header';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link } from 'react-router-dom';
import { setLoginInfo } from '../redux/setting';
import { useSelector } from 'react-redux';

const ResetPassword = () => {

    const setting = useSelector((state)=>state.setting)

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
                        component={Link} to={ setting.loginInfo === "login" ? '/Setting': '/Login'}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>,
                title2: setting.loginInfo === "login" ? 'Reset Password' : null,
                login: setting.loginInfo === "login" ? true : null,
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
                <Alert severity="error">Password reset failed! Incorrect email OTP code.</Alert>
                {/* <Alert severity="warning">This is a warning message!</Alert> */}
                {/* <Alert severity="info">Move closer to the product.</Alert> */}
                {/* <Alert severity="success">This is a success message!</Alert> */}
            </Snackbar>

            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" >
                <Container maxWidth="xs">
                    {
                        setting.loginInfo != "login" ?
                            <Stack
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                direction="column"
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockResetIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Reset Password
                                </Typography>
                            </Stack>
                        : null
                    }
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
                        {
                            setting.loginInfo != "login" ?
                                <TextField fullWidth required label="Email / User Id" variant="filled" sx={{backgroundColor:"white"}}/>
                            : null
                        }
                        {/* Note: Username will be auto generated to reduce the textfield required to be field. Example: userID + random Number */}
                        <TextField fullWidth required label="New Password" type="password" variant="filled" sx={{backgroundColor:"white"}}/>
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
                                Email OTP Request
                            </Button>
                        </Stack>
                        <Button fullWidth variant="outlined" onClick={handleClick(Fade)}>
                            Reset Password
                        </Button>
                    </Stack>
                </Container>
            </Grid>
        </>
    );
}

export default ResetPassword;