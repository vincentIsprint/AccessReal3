import { useState, React } from 'react';
import { Grid, Container, Snackbar, Alert, TextField, Stack, Avatar, Button, Checkbox, FormControlLabel, Divider, Chip  } from '@mui/material';
import Header from '../component/Header';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import discount from '../img/freepik/discount.jpg';
import GoogleImg from '../img/flaticon/google.png';
import FacebookImg from '../img/flaticon/facebook.png';
import LineImg from '../img/flaticon/line.png';
import WechatImg from '../img/flaticon/wechat.png';
import InstaImg from '../img/flaticon/instagram.png';
import { Link } from 'react-router-dom';
import Image from '../component/Image';
import CustomTypo from '../component/CustomTypo';
import CustomIcon from '../component/CustomIcon';

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
                    <CustomIcon size="large" mSize="small" edge="start" icon={<ArrowBackIosNewIcon />} sx={{color:"primary.main"}} 
                        component={Link} to={`/Login`}/>
            }
        ]
    })

    const [body] = useState({
        Images : [
            {
                image: discount,
                imageText: 'main image description',
                marginTop: '10%'
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
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Image info={body.Images} />
                            </Grid>
                        </Grid>
                        <CustomTypo variant="h3" mVariant="h5" color="primary.main" content="Sign Up" align="center"/>
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
                                Request OTP
                            </Button>
                        </Stack>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="I acknowledge that I have read, consent and agree to AccessReal Terms of Service and Privacy Policy"
                        />
                        <Button fullWidth variant="contained" onClick={handleClick(Fade)}>
                            Sign Up
                        </Button>
                        <Divider>
                            <Chip label="Or" sx={{backgroundColor:'transparent', width:'50px', height:'50px', '& .MuiChip-label': { fontSize: 18, fontWeight:'bold' }}}/>
                        </Divider>
                       
                        <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Grid item>
                                <CustomIcon size="large" mSize="small" icon={<Avatar src={GoogleImg} sx={{width:'50px', height:'50px'}}/>} />
                                <CustomIcon size="large" mSize="small" icon={<Avatar src={FacebookImg} sx={{width:'50px', height:'50px'}}/>} />
                                <CustomIcon size="large" mSize="small" icon={<Avatar src={LineImg} sx={{width:'50px', height:'50px'}}/>} />
                                <CustomIcon size="large" mSize="small" icon={<Avatar src={WechatImg} sx={{width:'50px', height:'50px'}}/>} />
                                <CustomIcon size="large" mSize="small" icon={<Avatar src={InstaImg} sx={{width:'50px', height:'50px'}}/>} />
                            </Grid>
                            <Grid item sx={{padding: '5%'}}>
                                <CustomTypo variant="body1" mVariant="body1" color="primary.main" content="Sign up for an account before? Login" size="1.1rem" component={Link} to={`/Login`}/>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Grid>
        </>
    );
}

export default SignUp;