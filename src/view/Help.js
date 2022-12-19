import { useState, React } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Container, Grid, Stack } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../component/Image';
import AR_Img from '../img/AR.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomTable from '../component/CustomTable';
import CustomTypo from '../component/CustomTypo';
import CustomIcon from '../component/CustomIcon';

const Help = () => {

    const setting = useSelector((state)=>state.setting)

    const [header] = useState({
        Item : [
            {   
                leftcontent:
                    <CustomIcon size="large" edge="start" sx={{color:"primary.main"}}
                        component={Link} to={`/ProductInfo`} icon={<ArrowBackIosNewIcon />} />,
                title: 'Product Authentication'
            }
        ]
    })

    function createData(name, value) {
        return { name, value };
    }

    const [body] = useState({
        Images : [
            {
                image: AR_Img,
                imageText: 'main image description',
                marginTop: '10%'
            }
        ],
        AuthDetails : [
            createData('No', 'LastScan'),
            createData('1', '01 Jan 2021 12:12:12 GMT'),
            createData('2', '31 Jan 2021 12:12:12 GMT')
        ],
        Footer: [
            {   
                content: null
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

            <Stack direction="column" spacing={2} sx={{paddingLeft:'5%', paddingRight:'5%'}}>
                {
                    setting.productInfo === "success" ? 
                        <>
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content="This product has been successfully authenticated and its verified that this is a genuine product"
                            />
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content="Authenticated detail:"
                            />
                            <CustomTable info={body.AuthDetails} />
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content="Please note that product authentication is strictly an one-time verification process to check the product authenticity."
                            />
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content='You are adviced to click on the "download" button to download a copy of the ownership card for reward claiming purposes.'
                            />
                        </>
                    : setting.productInfo === "verify" ? 
                        <>
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content='Click on the "Verify Product Authenticity" button and scan the product hidden code to verify the product authenticity.'
                            />
                           <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content='Please note that product verification is only a one-time verification process to check the product authenticity.'
                            />
                        </>
                    : setting.productInfo === "failed" || setting.productInfo === "history" ? 
                        <>
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content='This product has been previously scanned and authenticated as a genuine product. If you have scanned this product previously then you do not have to worry about the product authenticity.'
                            />
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content='Authenticated detail:'
                            />
                            <CustomTable info={body.AuthDetails} />
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left"
                                content='However, if this is your first time opening and authenticating using the hidden QR code, there is a chance that this is not a genuine product.'
                            />
                        </>
                    : null
                }
            </Stack>
            {
                body.Footer != null ?
                    <Footer info={body.Footer[0]} />
                :null
            }
        </>
    );
}

export default Help;