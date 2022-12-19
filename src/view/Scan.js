import { useState, useEffect, React } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { Grid, Container, Box, Snackbar, Alert, TextField  } from '@mui/material';
import Header from '../component/Header';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductInfo } from '../redux/setting';
import CustomIcon from '../component/CustomIcon';

const Scan = () => {

    const setting = useSelector((state)=>state.setting)

    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
        dispatch(setProductInfo({
            productInfo: 'success'
        }));
        navigate("/ProductInfo");
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
                        component={Link} to={ setting.loginInfo !== "login" ? '/ProductInfo' : '/Scan_History'}/>,
                rightcontent: 
                    setting.loginInfo !== "login" ?
                        <CustomIcon size="large" mSize="small" edge="end" icon={<HelpIcon />} sx={{color:"primary.main"}} 
                            component={Link} to={`/Help_Scan`}/>
                    : null,
                login: setting.loginInfo !== "login" ? false : true
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
        </>
    );
}

export default Scan;