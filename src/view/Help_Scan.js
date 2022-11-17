import { useState, React } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, Typography, Box, Container, Grid, Stack, Button } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../component/Image';
import AR_Img from '../img/AR.png';
import IOS_Img from '../img/as.png';
import APK_Img from '../img/gp.png';
import GooglePlay_Img from '../img/playstore.png';
import { Link } from 'react-router-dom';

const Help_Scan = () => {
    const [header] = useState({
        Item : [
            {   
                leftcontent:
                    <IconButton size="large" edge="start" sx={{color:"primary.main"}}
                        component={Link} to={`/Scan`}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>,
                title: 'QR Code Scanning'
            }
        ]
    })

    const [body] = useState({
        Images : [
            {
                image: AR_Img,
                imageText: 'main image description',
                marginTop: '10%'
            }
        ],
        Text: [
            'Start scanning by positioning the QR code within the scanning frame. Tap to focus and tilt slightly to avoid reflection.',
            'If you encountered any issues, try to install our mobile app and authenticate the qr code using our mobile app.',
            'If you still cannot authenticate the product using our web / mobile app, the product you have purchased might not be a genuine product.'
        ],
        Footer: [
            {   
                content: 
                    <Typography sx={{color:"primary.inverted", flexGrow: 1}} variant="caption" display="block" align="center">Powered by i-Sprint</Typography>
            }
        ]
    })

    return(
        <>
            <Header info={header}/>
            
            {
                body.Images != null ? 
                <Container>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Image info={body.Images} />
                        </Grid>
                    </Grid>
                </Container>
                : null
            }
            {
                body.Text != null ? 
                    <Container sx={{paddingTop:'10%'}}>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Typography sx={{ color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >{body.Text[0]}</Typography>
                                <Typography sx={{ color:"primary.main",flexGrow: 1, paddingTop:'5%'}} align='left' variant="body1" display="block" >{body.Text[1]}</Typography>

                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{padding:'5%'}}>
                                    <Button sx={{
                                                    backgroundImage: `url(${IOS_Img})`,
                                                    backgroundRepeat: 'no-repeat', 
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    width: "150px",
                                                    height: "49px",
                                                }}
                                    /> 
                                    <Button sx={{   
                                                    backgroundImage: `url(${APK_Img})`,
                                                    backgroundRepeat: 'no-repeat', 
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    width: "150px",
                                                    height: "49px",
                                                }}
                                    />
                                    <Button sx={{   
                                                    backgroundImage: `url(${GooglePlay_Img})`,
                                                    backgroundRepeat: 'no-repeat', 
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    width: "150px",
                                                    height: "49px",
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

export default Help_Scan;