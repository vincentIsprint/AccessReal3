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
import CustomChip from '../component/CustomChip';

const Redeem = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
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
                height: '250px',
                width: '250px',
                imageText:`Similac Gain Kid GOLD (2'-FL) 3KG BIB`,
                authenticated : true,
            }
        ],
        List:[
            {
                images : [{
                    image: lus2,
                    height: '150px',
                    width: '150px',
                }],
                title: `Similac Gain Kid GOLD (2'-FL) 3KG BIB`,

            },
            {
                images : [{
                    image: magic,
                    height: '150px',
                    width: '150px',
                }],
                title : `Magic Powder 1.5kg`
            },
            {
                images : [{
                    image: lus2,
                    height: '150px',
                    width: '150px',
                }],
                title: `Similac Gain Kid GOLD (2'-FL) 3KG BIB`
            },
            {
                images : [{
                    image: magic,
                    height: '150px',
                    width: '150px',
                }],
                title : `Magic Powder 1.5kg`
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
                                        <Image info={body.Images} />
                                        <Stack direction="column" spacing={1} alignItems="left">
                                            <Stack sx={{paddingTop:'2%', paddingBottom:'2%'}} direction="row" spacing={1}>
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
                                            <CustomTypo variant="h5" mVariant="h6" bold color="primary.main" content="Collect 5 stamps to get a $15 Similac E-voucher"/>
                                            <CustomTypo variant="subtitle1" mVariant="body1" content="Offer valid until 31 March 2025"/>
                                            <CustomTypo variant="body2" mVariant="body2" content="**Terms and conditions applies"/>
                                        </Stack>
                                    </Box>
 
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Box sx={{paddingTop:'5%', paddingBottom:'3%'}}>
                                    <CustomTypo variant="h6" mVariant="body2" bold color="primary.main" content="Products eligible for freebies:" align="left"/>
                                </Box>

                                {chipData.map((data) => {
                                    return (
                                        <Box key={data.key} sx={{ position: 'relative', display: 'inline-flex', padding: '1%'}}>
                                            <CustomChip size="medium" mSize="medium" label={<CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" content={data.label} />} />
                                        </Box>
                                    );
                                })}

                            </Grid>
                            {body.List.map((item,index) => (
                                <Grid key={index} item xs={6} md={6}>
                                    <Paper sx={{borderRadius: "10px 10px 10px 10px"}} >
                                        <Grid item xs={12} md={12}>
                                            <Image info={item.images}/>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Stack sx={{padding:'2%'}} direction="row" spacing={1} alignItems="center" justifyContent="center">
                                                <Box sx={{paddingBottom:'3%',alignContent:"center"}}>
                                                    <CustomTypo variant="h6" mVariant="body2" bold color="primary.main" content={item.title} align="center"/>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                : null
            }
            <Footer info={body.Footer[0]} />
        </>
    );
}

export default Redeem;