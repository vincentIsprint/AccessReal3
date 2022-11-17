import { useState, React } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, Typography, Box, Container, Grid, Stack, Button } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import qr_Img from '../img/qr.jpg';
import { Link } from 'react-router-dom';

const Help_Login = () => {
    const [header] = useState({
        Item : [
            {   
                leftcontent:
                    <IconButton size="large" edge="start" sx={{color:"primary.main"}}
                        component={Link} to={`/Login`}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>,
                title: 'Login To AccessReal'
            }
        ]
    })

    const [body] = useState({
        Text: [
            'Ownership Card Login',
            'If you have an ownership card, you may click on the QR Code and scan / upload an ownership card to login without the password.',
        ],
        Footer: [
            {   
                content:  <Typography sx={{color:"primary.inverted", flexGrow: 1}} variant="caption" display="block" align="center">Powered by i-Sprint</Typography>
            }
        ]
    })

    return(
        <>
            <Header info={header}/>
            
            {
                body.Text != null ? 
                    <Container sx={{paddingTop:'10%'}}>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Typography sx={{ color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >{body.Text[0]}</Typography>
                                <Typography sx={{ color:"primary.main",flexGrow: 1, paddingTop:'5%'}} align='left' variant="body1" display="block" >{body.Text[1]}</Typography>

                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{padding:'5%'}}>
                                    <Button sx={{
                                                    backgroundImage: `url(${qr_Img})`,
                                                    backgroundRepeat: 'no-repeat', 
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    width: "150px",
                                                    height: "150px",
                                                }}
                                    /> 
                                </Stack>

                                <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >{body.Text[2]}</Typography>

                                <Stack direction="column" spacing={2} sx={{paddingTop:'15%'}}>
                                    <Button component="button" variant="body1">
                                        FAQ
                                    </Button>
                                    <Button component="button" variant="body1">
                                        Licenses
                                    </Button>
                                </Stack>

                                
                            </Grid>
                        </Grid>
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

export default Help_Login;