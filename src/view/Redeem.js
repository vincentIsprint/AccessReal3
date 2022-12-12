import { useState, React } from 'react';
import { Box, Container, Grid, Fade, Snackbar, Alert, Chip, Stack, Paper, Avatar  } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../component/Image';
import similac from '../img/similac.png';
import magic from '../img/magic.jpg';
import lus2 from '../img/lus2.png';
import AddIcon from '@mui/icons-material/Add';
import { grey, green } from '@mui/material/colors';
import VerifiedIcon from '@mui/icons-material/Verified';
import { setLoginInfo } from '../redux/setting';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomTypo from '../component/CustomTypo';

const Redeem = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [header] = useState({
        Item : [{ 
            title2: 'Redeem Freebies',
            login: true
        }]
    })

    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    });

    const handleClickCopy = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
    };
    
    const handleCloseCopy = () => {
        setState({
          ...state,
          open: false,
        });
    };

    const [body] = useState({
        Images : [
            {
                image: similac,
                imageText:`Similac Gain Kid GOLD (2'-FL) 3KG BIB`,
                authenticated : true,
            }
        ],
        List:[
            {
                img : lus2,
                desc: `Similac Gain Kid GOLD (2'-FL) 3KG BIB`
            },
            {
                img : magic,
                desc : `Magic Powder 1.5kg`
            },
            {
                img : lus2,
                desc: `Similac Gain Kid GOLD (2'-FL) 3KG BIB`
            },
            {
                img : magic,
                desc : `Magic Powder 1.5kg`
            }
        ],
        Footer: [
            {   
                content: null
            }
        ]
    })

    const [chipData, setChipData] = useState([
        { key: 0, label: 'Similac' },
        { key: 1, label: 'Glucerna Vanilla' },
        { key: 3, label: 'Glucerna Wheat' },
        { key: 2, label: 'Ensure' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleScan = () => {
        dispatch(setLoginInfo({loginInfo: 'login'}))
        navigate("/Scan");
    };

    return(
        <>
            <Header info={header}/>
            <Snackbar
                    sx={{padding: '5vh'}}
                    autoHideDuration={1500}
                    open={state.open}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    onClose={handleCloseCopy}
                    TransitionComponent={state.Transition}
                    key={state.Transition.name}
            >
                <Alert severity="success">Copied To Clipboard</Alert>
            </Snackbar>
            {
                body.Images != null ? 
                    <Container>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Paper sx={{borderRadius: "10px 10px 10px 10px"}}>
                                    <Box sx={{padding:'5%'}}>
                                        <CustomTypo variant="h5" mVariant="h6" bold color="primary.main" content="Collect 10 stamps to get 1 FREE voucher" align="center"/>
                                    </Box>
                                    <Stack sx={{padding:'2%'}} direction="row" spacing={1} alignItems="center" justifyContent="center">
                                        {Array.from(Array(3)).map((_, index) => (
                                            <Avatar key={index} sx={{ bgcolor: green[800] }}>
                                                <VerifiedIcon />
                                            </Avatar>
                                        ))}
                                        {Array.from(Array(2)).map((_, index) => (
                                            <div key={index} onClick={handleScan}>
                                                <Avatar  key={index} sx={{ bgcolor: grey[500] }}>
                                                    <AddIcon />
                                                </Avatar>
                                            </div>
                                        ))}
                                    </Stack>
                                    <Stack sx={{padding:'2%'}}direction="row" spacing={1} alignItems="center" justifyContent="center">
                                        {Array.from(Array(5)).map((_, index) => (
                                            <Avatar key={index} sx={{ bgcolor: grey[500] }}>
                                                <AddIcon />
                                            </Avatar>
                                        ))}
                                    </Stack>
                                    <Image info={body.Images} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Box sx={{paddingTop:'5%', paddingBottom:'3%'}}>
                                    <CustomTypo variant="h6" mVariant="body2" bold color="primary.main" content="Products eligible for freebies:" align="left"/>
                                </Box>

                                {chipData.map((data) => {
                                    return (
                                        <Box key={data.key} sx={{ position: 'relative', display: 'inline-flex', padding: '1%'}}>
                                            <Chip
                                                label={data.label}
                                                onDelete={handleDelete(data)}
                                            />
                                        </Box>
                                    );
                                })}

                            </Grid>
                            {body.List.map((item,index) => (
                                <Grid key={index} item xs={6} md={6}>
                                    <Paper sx={{borderRadius: "10px 10px 10px 10px"}} >
                                        <Stack spacing={2} sx={{alignItems:'center', paddingTop:'5%'}}>
                                            <Paper elevation={0}
                                                sx={{
                                                    backgroundImage: `url(${item.img})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    backgroundColor: 'transparent',
                                                    height: '150px', width: '150px',
                                                }}
                                            />
                                            <Box sx={{paddingBottom:'3%'}}>
                                                <CustomTypo variant="h6" mVariant="body2" bold color="primary.main" content={item.desc} align="center"/>
                                            </Box>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                : null
            }
            <Box sx={{padding:'5%'}} />
            <Footer info={body.Footer[0]} />
        </>
    );
}

export default Redeem;