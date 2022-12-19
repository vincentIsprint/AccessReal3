import { useState, React } from 'react';
import { Grid, Container, Stack, Chip, Fade, Snackbar, Alert, Button, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import QrCodeSharpIcon from '@mui/icons-material/QrCodeSharp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../component/Image';
import CustomList from '../component/CustomList';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import similac from '../img/similac.png';
import magic from '../img/magic.jpg';
import lus2 from '../img/lus2.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PopupDialog from '../component/PopupDialog';
import qr from '../img/qr.jpg';
import CustomTypo from '../component/CustomTypo';
import CustomChip from '../component/CustomChip';
import CustomIcon from '../component/CustomIcon';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PolicyIcon from '@mui/icons-material/Policy';
import { setLoginInfo } from '../redux/setting';

const ProductInfo = (props) => {

    // QR Code Status in footer
    // 1. success
    // 2. fail
    // 3. verify

    const setting = useSelector((state)=>state.setting)
    
    const [header] = useState({
        Item : [
            {   
                language: setting.loginInfo === "login" ?  false : true,
                login: setting.loginInfo === "login" ?  true : false,
                languagecolor: "primary.main",
                leftcontent:
                    setting.loginInfo === "login" ?  
                        <CustomIcon size="large" mSize="small" edge="end" icon={<HelpIcon />} sx={{color:"primary.main"}}  component={Link} to={`/Help`}/>
                        : null,
                rightcontent:
                    setting.loginInfo !== "login" ?  
                        <CustomIcon size="large" mSize="small" edge="end" icon={<HelpIcon />} sx={{color:"primary.main"}}  component={Link} to={`/Help`}/>
                        : null
                
            }
        ]
    })
    function createTimeline(subtitle, description) {
        return { subtitle, description };
    }
    const [body] = useState({
        Timeline : [
            {
                title: 'Product Information'
            },
            createTimeline('Company Name','i-Sprint'),
            createTimeline('Company Address','750D Chai Chee Rd, Singapore 469004'),
            createTimeline('Website','www.i-sprint.com'),
            createTimeline('Links','Q&A Link'),
            createTimeline('Distribution Country','USA')
        ],
        Images : [
            {
                image: similac,
                imageText: 'main image description 1',
                authenticated : true,
            },
            {
                image: magic,
                imageText: 'main image description 2',
                authenticated : true,
            },
            {
                image: lus2,
                imageText: 'main image description 3',
                authenticated : true,
            }
        ],
        OwnershipImage : [
            {
                image: qr,
                height: '150px',
                weight: '150px',
                imageText: 'main image description',
                marginTop: '0%'
            }
        ],
        TimelineTitle : [
            {
                Ltitle: 'Product Name',
                Ldescription:'Lashaddict Major Extensions Mascara',
                Rtitle: 'QR Code',
                Rdescription:'abcdefghijkl (T10001234)',
                icon: <QrCodeSharpIcon />,
                color: 'primary.main'
            }
        ],
        Footer: [
            {   
                content: null,
                scanner: false,
            }
        ]
    })

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

    // Popup Ownership Card
    const [openOwner, setOpenOwner] = useState(false); 
    
    const [owner, setOwner] = useState({
        title: "Download Ownership Cert",
        desc: 
        <Box>
            <Stack direction="column" spacing={2}>
                <CustomTypo variant="body1" mVariant="subtitle1" content="Save this ownership card by clicking on the Download button below" align="center"/>
            </Stack>
            <Box sx={{padding:'5%'}}>
                <Image info={body.OwnershipImage}/>
            </Box>
        </Box>
        ,
        buttonName: "Download"
    })

    const handleOpenOwner = () => {
        setOpenOwner(true);
    };

    const handleCloseOwner = (newOwner) => {
        setOpenOwner(false);

        if (newOwner) {
            setOwner(newOwner);
        }
    };
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleScan = () => {
        dispatch(setLoginInfo({loginInfo: 'none'}))
        navigate("/Scan");
    };

    return(
        <> 
            {
                props.type != "popup" ?
                    <Header info={header}/>
                : null
            }
            <Snackbar
                sx={{padding: '5vh'}}
                autoHideDuration={1500}
                open={state.open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                key={state.Transition.name}
            >
                <Alert severity="success">Copied To Clipboard</Alert>
            </Snackbar>    
            <Container>
                <Grid container justifyContent="left" spacing={2}>
                    <Grid item xs={12} md={12}>
                        {   body.Images != null ?  <Image info={body.Images} /> : null }
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <List dense disablePadding>
                            <ListItem disablePadding>
                                <CustomTypo variant="h4" mVariant="h5" color={body.TimelineTitle[0].color} content="Lashaddict Major Extensions Mascara"/>
                            </ListItem>
                            {
                                setting.productInfo === "verify" ? null :
                                    <ListItem disablePadding>
                                        <Stack direction="row" spacing={2} sx={{paddingTop:'2%'}}>
                                            <VerifiedUserIcon  sx={{width:'25px', height:'25px', color:'authenticated.main'}}/>
                                            <CustomTypo variant="h5" mVariant="body1" color={body.TimelineTitle[0].color} content="Last authenticated on 21 June 2022"/>
                                        </Stack>
                                    </ListItem>
                            }
                            <ListItem disablePadding>
                                <Stack direction="row" spacing={2} sx={{paddingTop:'2%',paddingBottom:'5%'}}>
                                    <CustomChip icon={<CodeOutlinedIcon />} size="medium" mSize="small" label="QR0000001" onClick={handleClick(Fade)} />
                                    <CustomChip icon={<DeveloperModeOutlinedIcon />} size="medium" mSize="small" label="AB123412-4" onClick={handleClick(Fade)} />
                                    {
                                        setting.productInfo === "success" ?
                                            <CustomChip icon={<CloudDownloadIcon />} size="medium" mSize="small" label="Download" onClick={handleOpenOwner} />
                                        :  null
                                    }
                                </Stack>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
               
            {
                body.Timeline != null ? 
                    <CustomList info={body.Timeline}/>
                : null
            }

            <Container sx={{paddingTop:"5%"}}>
            <Box sx={{backgroundColor:"#F4F6F6", boxShadow: "1px -1px 10px 10px rgb(12 12 12 / 5%)", borderRadius: "15px 15px 15px 15px"}}>
                {   
                    setting.productInfo === "success" ? 
                        <Button variant="contained" sx={{minWidth:'100%'}} startIcon={<VerifiedUserIcon />} color="success">
                            <CustomTypo variant="h6" mVariant="body1" content="Product Authenticated" />
                        </Button> :
                    setting.productInfo === "verify" ? 
                        <Button variant="contained" sx={{minWidth:'100%'}} startIcon={<PolicyIcon />} color="warning" onClick={handleScan}>
                            <CustomTypo variant="h6" mVariant="body1" content="Verify Product Authenticity" />
                        </Button> :
                    setting.productInfo === "failed" ? 
                        <Button variant="contained" sx={{minWidth:'100%'}} startIcon={<PrivacyTipIcon />} color="info">
                            <CustomTypo variant="h6" mVariant="body1" content="Product Previously Scanned" />
                        </Button>
                    : null
                }
            </Box>
            </Container>
            
            
            {/* Popup Ownership Card */}
            <PopupDialog
                keepMounted
                open={openOwner}
                onClose={handleCloseOwner}
                value={owner}
            />

            {
                props.type != "popup" ?
                    <Footer info={body.Footer[0]} />
                : null
            }
            
        </>
    );
}

export default ProductInfo;