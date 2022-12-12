import { useState, React } from 'react';
import { IconButton, Grid, Container, Stack, Chip, Fade, Snackbar, Alert } from '@mui/material';
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
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PopupDialog from '../component/PopupDialog';
import ownershipcard from '../img/owner.png';
import CustomTypo from '../component/CustomTypo';

const ProductInfo = () => {

    // QR Code Status in footer
    // 1. success
    // 2. fail
    // 3. verify

    const setting = useSelector((state)=>state.setting)
    
    const theme = useTheme();
    const [header] = useState({
        Item : [
            {   
                language: true,
                languagecolor: "primary.main",
                rightcontent: 
                    <IconButton size="large" edge="end" sx={{color:"primary.main"}} 
                        component={Link} to={`/Help`}
                    >
                        <HelpIcon />
                    </IconButton>
                
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
                image: ownershipcard,
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
        title: "Ownership Certification",
        desc: <Image info={body.OwnershipImage} />,
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

    return(
        <> 
            <Header info={header}/>
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
                        <CustomTypo variant="h4" mVariant="h5" color={body.TimelineTitle[0].color} content="Lashaddict Major Extensions Mascara"/>
                        {
                            setting.productInfo === "verify" ? null :
                            <Stack direction="row" spacing={1} sx={{paddingTop:'1%'}}>
                                <VerifiedUserIcon fontSize="small" color="authenticated"/>
                                <CustomTypo variant="h5" mVariant="body1" color={body.TimelineTitle[0].color} content="Authenticated on 21 June 2022"/>
                            </Stack>
                        }
                        <Stack direction="row" spacing={2} sx={{paddingTop:'2%',paddingBottom:'5%'}}>
                            <Chip icon={<CodeOutlinedIcon />} size="small" label="QR0000001" onClick={handleClick(Fade)}/>
                            <Chip icon={<DeveloperModeOutlinedIcon />} size="small" label="12341234" onClick={handleClick(Fade)}/>
                            {
                                setting.productInfo === "success" ?
                                    <Chip icon={<CloudDownloadIcon />} size="small" label="Download" onClick={handleOpenOwner}/>
                                :  null
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
               
            {
                body.Timeline != null ? 
                    <CustomList info={body.Timeline}/>
                : null
            }

            {/* Popup Ownership Card */}
            <PopupDialog
                keepMounted
                open={openOwner}
                onClose={handleCloseOwner}
                value={owner}
            />
            <Footer info={body.Footer[0]} />
        </>
    );
}

export default ProductInfo;