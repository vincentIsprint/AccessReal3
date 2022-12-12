import { useState, React } from 'react';
import { IconButton, Grid, Container, Snackbar, Alert, TextField, Stack, Avatar, Button, Divider, Chip  } from '@mui/material';
import Header from '../component/Header';
import Fade from '@mui/material/Fade';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginInfo } from '../redux/setting';
import Image from '../component/Image';
import tourist from '../img/freepik/tourist.jpg';
import GoogleImg from '../img/flaticon/google.png';
import FacebookImg from '../img/flaticon/facebook.png';
import LineImg from '../img/flaticon/line.png';
import WechatImg from '../img/flaticon/wechat.png';
import InstaImg from '../img/flaticon/instagram.png';
import CustomTypo from '../component/CustomTypo';

const Login = () => {

    // Sign Up Type
    // 1. email
    // 2. phone number
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

    const handleLogin = () => {
        dispatch(setLoginInfo({loginInfo: 'login'}))
        navigate("/Voucher");
    }
    
    const [header] = useState({
        Item : [
            {   
                rightcontent: null
            }
        ]
    })
    const [body] = useState({
        Images : [
            {
                image: tourist,
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
                        
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Image info={body.Images} />
                            </Grid>
                        </Grid>
                        <CustomTypo variant="h3" mVariant="h5" color="primary.main" content="Login" align="center"/>
                    </Stack>
                    <Stack component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', paddingTop:'5%', mt: 1 }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField fullWidth required label="Email" variant="filled" sx={{backgroundColor:"white"}}/>
                        <TextField fullWidth required label="Password" type="password" variant="filled" sx={{backgroundColor:"white"}}/>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <CustomTypo variant="body1" mVariant="body1" color="primary.main" content="Forgot password?" size="1.1rem" component={Link} to={`/ResetPassword`}/>
                            </Grid>
                        </Grid>
                        <Button fullWidth variant="contained" onClick={handleLogin}>
                            Login
                        </Button>
                        <Divider>
                            <Chip label="Or" sx={{backgroundColor:'transparent', width:'50px', height:'50px', '& .MuiChip-label': { fontSize: 18, fontWeight:'bold' }}}/>
                        </Divider>
                       
                        <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Grid item>
                                <IconButton>
                                    <Avatar src={GoogleImg} sx={{width:'50px', height:'50px'}}/>
                                </IconButton>
                                <IconButton>
                                    <Avatar src={FacebookImg} sx={{width:'50px', height:'50px'}}/>
                                </IconButton>
                                <IconButton>
                                    <Avatar src={LineImg} sx={{width:'50px', height:'50px'}}/>
                                </IconButton>
                                <IconButton>
                                    <Avatar src={WechatImg} sx={{width:'50px', height:'50px'}}/>
                                </IconButton>
                                <IconButton>
                                    <Avatar src={InstaImg} sx={{width:'50px', height:'50px'}}/>
                                </IconButton>
                            </Grid>
                            <Grid item sx={{padding: '5%'}}>
                                <CustomTypo variant="body1" mVariant="body1" color="primary.main" content="New to AccessReal? Register" size="1.1rem" component={Link} to={`/SignUp`}/>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Grid> 
        </>
    );
}

export default Login;