import { useState, React } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, Typography, Box, Container, Grid, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../component/Image';
import AR_Img from '../img/AR.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Help = () => {

    const setting = useSelector((state)=>state.setting)

    const [header] = useState({
        Item : [
            {   
                leftcontent:
                    <IconButton size="large" edge="start" sx={{color:"primary.main"}}
                        component={Link} to={`/ProductInfo`} 
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>,
                title: 'Product Authentication'
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

            <Container sx={{paddingTop:'10%'}}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={12}>
                        {
                            setting.productInfo === "success" ? 
                                <>
                                    <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                        This product has been successfully authenticated and its verified that this is a genuine product
                                    </Typography><br/>
                                    <Typography sx={{color:"primary.main",flexGrow: 1,paddingBottom:'2%'}} align='left' variant="body1" display="block" >
                                        Authentication Details
                                    </Typography>

                                    <TableContainer component={Paper}>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{width:'5%'}}>No.</TableCell>
                                                    <TableCell align="left">Last Scan DateTime</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">1</TableCell>
                                                    <TableCell>01 Jan 2021 12:12:12 GMT</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>2</TableCell>
                                                    <TableCell>31 Jan 2021 12:12:12 GMT</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                        DateTime: 01 Jan 2021 12:12:12 GMT
                                    </Typography><br/> */}
                                    <Typography sx={{color:"primary.main",flexGrow: 1, paddingTop:'2%'}} align='left' variant="body1" display="block" >
                                        Please note that product authentication is strictly an one-time verification process to check the product authenticity.
                                    </Typography><br/>
                                    <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                        You are adviced to click on the "download" button to download a copy of the ownership card for reward claiming purposes.
                                    </Typography>
                                </>
                            : setting.productInfo === "verify" ? 
                                <>
                                    <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                        Click on the "Verify Product Authenticity" button and scan the product hidden code to verify the product authenticity.
                                    </Typography><br/>
                                    <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                        Please note that product verification is only a one-time verification process to check the product authenticity.
                                    </Typography>
                                </>
                            : setting.productInfo === "failed" || setting.productInfo === "history" ? 
                            <>
                                <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                    This product has been previously scanned and authenticated as a genuine product. If you have scanned this product previously then you do not have to worry about the product authenticity.
                                </Typography><br/>
                                <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                    Last authenticated detail:
                                </Typography>
                                <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                    DateTime: 01 Jan 2021 12:12:12 GMT
                                </Typography><br/>
                                <Typography sx={{color:"primary.main",flexGrow: 1}} align='left' variant="body1" display="block" >
                                    However, if this is your first time opening and authenticating using the hidden QR code, there is a chance that this is not a genuine product.
                                </Typography>
                            </>
                            : null
                        }
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

export default Help;