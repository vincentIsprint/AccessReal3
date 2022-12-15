import { useState, useEffect, React } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton, Grid, Container, Button, Box, Stack } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../component/Image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CircularProgress from '@mui/material/CircularProgress';
import CachedIcon from '@mui/icons-material/Cached';
import AR_Img from '../img/AR.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomTypo from '../component/CustomTypo';

const Loading = () => {
    const setting = useSelector((state)=>state.setting)

    const [header] = useState({
        Item : [
            {   
                language: true,
                languagecolor: "primary.main",
                rightcontent: 
                    <IconButton size="large" edge="end" sx={{color:"primary.main"}}
                        component={Link} to={`/FAQ`}
                    >
                        <HelpIcon />
                    </IconButton>
                
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
        Footer: [
            {   
                content: <CustomTypo variant="subtitle1" mVariant="body2" component="p" color="primary.inverted" content="Powered by i-Sprint" align="center"/>
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
                    setting.preAuth === "loading" ?
                    <Stack direction="column" spacing={2} alignItems="center" justifyContent="center" style={{ paddingTop:'10%'}}>
                        <Box sx={{ position: 'relative', display: 'inline-flex'}}>
                            <CircularProgress variant="determinate" value={progress} sx={{color:"primary.main"}}/>
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <CustomTypo variant="subtitle1" mVariant="caption" color="primary.main" content={`${Math.round(progress)}%`}/>
                            </Box>
                        </Box>
                        <Button component={Link} to={`/ProductInfo`}> Manual Proceed </Button>
                    </Stack>
                    : null
                }

                {
                    setting.preAuth === "auth" ?
                        <Container sx={{paddingTop:'10%'}}>
                            <Box textAlign='center'>
                                <Button variant="outlined" startIcon={<CameraAltIcon />}>
                                    Scan Again
                                </Button>
                            </Box>
                        </Container>
                    : null
                }

                {
                    setting.preAuth === "timeout" ?
                        <Container sx={{paddingTop:'10%'}}>
                            <Box textAlign='center'>
                                <Button variant="outlined" startIcon={<CachedIcon />}>
                                    Try Again
                                </Button>
                            </Box>
                        </Container>
                    : null
                }

                <Container sx={{paddingTop:'10%'}}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12} md={12}>
                            <CustomTypo variant="subtitle1" mVariant="body1" component="p" color="primary.main" 
                                content={
                                    setting.preAuth === "loading" ? `System is loading required files. Please wait.` :
                                    setting.preAuth === "auth" ? `Failed to authenticate the product. The QR code you have scanned is not activated.` :
                                    setting.preAuth === "timeout" ? `There seems to be a problem with your internet connection. Please to reload the browser again.` :
                                    setting.preAuth === "browser" ? `This device or browser does not support the online web authentication. Please use safari (13.x or above) on iPhone or chrome (70.x or above) on Android` : null
                                } 
                                align="center"
                            />
                        </Grid>
                    </Grid>
                </Container>
                {
                    body.Footer != null ?
                        <Footer info={body.Footer[0]} />
                    :null
                }
        </>
    );
}

export default Loading;