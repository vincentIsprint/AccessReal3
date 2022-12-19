import { useState, React } from 'react';
import { Grid, Container, Snackbar, Alert, TextField, Stack, Button } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import CustomIcon from '../component/CustomIcon';

const Profile = () => {

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
                    <CustomIcon size="large" mSize="small" edge="start" icon={<ArrowBackIosNewIcon />} sx={{color:"primary.main"}}  component={Link} to={`/Setting`}/>,
                title2: 'Profile Setting',
                login: true
            }
        ]
    })

    const [body] = useState({
        Footer: [
            {   
                content: null
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
                <Container>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Stack 
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'left',
                                    mt: 1
                                }}
                                direction="column"
                                spacing={2}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField fullWidth disabled defaultValue="isprint_001 (System Generated)" label="User Id" variant="filled" sx={{backgroundColor:"white"}}/>
                                {/* Note: Username will be auto generated to reduce the textfield required to be field. Example: userID + random Number */}
                                <TextField fullWidth defaultValue="82726172" label="Mobile Number" variant="filled" sx={{backgroundColor:"white"}}/>
                                <TextField fullWidth defaultValue="support@i-sprint.com" required label="Email" variant="filled" sx={{backgroundColor:"white"}}/>
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
                                <Button fullWidth variant="outlined" onClick={handleClick(Fade)}>
                                    Submit
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
                <Footer info={body.Footer[0]} />
        </>
    );
}

export default Profile;