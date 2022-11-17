import { useState, useEffect, React } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton, Grid, Container, Box, Snackbar, Alert, TextField  } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Scan = () => {

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
                        component={Link} to={ setting.loginInfo != "login" ? '/ProductInfo' : '/Redeem'}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>,
                rightcontent: 
                    <IconButton size="large" edge="end" sx={{color:"primary.main"}}
                        component={Link} to={`/Help_Scan`}
                    >
                        <HelpIcon />
                    </IconButton>
            }
        ]
    })

    const [body] = useState({
        Button: true,
        Footer: [
            {   
                scanner: true
            }
        ]
    })

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
    
        return () => {
          clearInterval(timer);
        };
    }, []);

    return(
        <>
            <Header info={header}/>
            <Snackbar
                sx={{padding: '5vh'}}
                // autoHideDuration={1500}
                open={state.open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                key={state.Transition.name}
            >
                <Alert severity="error">Invalid QR code submitted, please try again.</Alert>
                
                {/* <Alert severity="warning">This is a warning message!</Alert> */}
                {/* <Alert severity="info">Move closer to the product.</Alert> */}
                {/* <Alert severity="success">This is a success message!</Alert> */}
            </Snackbar>
            <Box sx={{padding:'15%'}} />
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={3}>
                    <Box
                        sx={{
                            width: 200,
                            height: 200,
                            borderColor: 'green',
                            borderWidth: '10px',
                            borderStyle: 'solid',
                            '&:hover': {
                                borderColor: 'error.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                        onClick={handleClick(Fade)}
                    />
                </Grid>   
            </Grid> 
            {
                body.Button == true ?
                    <Container sx={{paddingTop:'10%'}}>
                        <Box textAlign='center'>
                            <TextField label="Enter QR Code Manually" variant="filled" sx={{backgroundColor:"white"}}/>
                        </Box>
                    </Container>
                : null
            }
            {
                body.Footer != null ?
                    <Footer info={body.Footer[0]} />
                :null
            }
        </>
    );
}

export default Scan;