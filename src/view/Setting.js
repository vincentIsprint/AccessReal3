import { useState, React } from 'react';
import { Container, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { Book, BookOnline, Feedback, LanguageOutlined, Password } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PopupDialog from '../component/PopupDialog';
import CustomTypo from '../component/CustomTypo';

const Setting = () => {

    const [header] = useState({
        Item : [
            {   
                title2: 'Account Setting',
                login: true
            }
        ]
    })

    const [body] = useState({
        Footer: [
            {   
                content: null
            }
        ]
    })

    // Language
    const [open, setOpen] = useState(false); 
    const [value, setValue] = useState({
        title: "Language",
        current: 'Chinese',
        options: [
            'Chinese',
            'Malay',
            'Spanish',
            'French',
            'Bengali',
            'Russian',
            'Portuguese',
            'Urdu',
            'Japanese',
            'Hausa',
            'Swahili',
            'Thai',
            'Polish',
            'Lingala',
        ],
    })

    const handleOpenLanguage = () => {
        setOpen(true);
    };

    const handleCloseLanguage = (newValue) => {
        setOpen(false);
    
        if (newValue) {
          setValue(newValue);
        }
    };

    return(
        <>
            <Header info={header}/>
                <Container>
                    <List sx={{ width: '100%'}}>
                        <ListItem component={Link} to={`/Profile`}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={<CustomTypo variant="h6" mVariant="body2" color="primary.main" content="Personal Information" align="left"/>} />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem component={Link} onClick={handleOpenLanguage}>
                            <ListItemIcon>
                                <LanguageOutlined />
                            </ListItemIcon>
                            <ListItemText primary={<CustomTypo variant="h6" mVariant="body2" color="primary.main" content="Language Translation" align="left"/>} />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem component={Link} to={`/ResetPassword`}>
                            <ListItemIcon>
                                <Password />
                            </ListItemIcon>
                            <ListItemText primary={<CustomTypo variant="h6" mVariant="body2" color="primary.main" content="Reset Password" align="left"/>} />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <Feedback />
                            </ListItemIcon>
                            <ListItemText primary={<CustomTypo variant="h6" mVariant="body2" color="primary.main" content="Write Us An Feedback" align="left"/>} />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <BookOnline />
                            </ListItemIcon>
                            <ListItemText primary={<CustomTypo variant="h6" mVariant="body2" color="primary.main" content="Term of Service" align="left"/>} />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <Book />
                            </ListItemIcon>
                            <ListItemText primary={<CustomTypo variant="h6" mVariant="body2" color="primary.main" content="Privacy Policy" align="left"/>} />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <Book />
                            </ListItemIcon>
                            <ListItemText primary={<CustomTypo variant="h6" mVariant="body2" color="primary.main" content="Licenses" align="left"/>} />
                               {/* Image by <a href="https://www.freepik.com/free-vector/local-tourism-illustration_8934044.htm?query=surfing%20sea#from_view=detail_alsolike">Freepik</a> */}
                               {/* <a href="https://www.freepik.com/free-vector/shrug-concept-illustration_24237566.htm#query=confused&position=3&from_view=search&track=sph">Image by storyset</a> on Freepik */}
                               {/* <a href="https://www.freepik.com/free-vector/tiny-male-female-characters-standing-near-arrow-down-showing-percentage-decrease-financial-reduction-flat-vector-illustration-low-rate-special-offer-loan-discount-price-concept_23548198.htm#query=interested&position=17&from_view=search&track=sph">Image by pch.vector</a> on Freepik */}
                               {/* <a href="https://www.freepik.com/free-vector/dizzy-face-concept-illustration_24237641.htm?query=reset#from_view=detail_alsolike">Image by storyset</a> on Freepik */}
                               
                               {/* <a href="https://www.flaticon.com/free-icons/times-square" title="times-square icons">Times-square icons created by Bharat Icons - Flaticon</a> */}
                               {/* <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Icon Hubs - Flaticon</a> */}
                               {/* <a href="https://www.flaticon.com/free-icons/google" title="google icons">Google icons created by Freepik - Flaticon</a> */}
                               {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}
                               {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Pixel perfect - Flaticon</a> */}
                               {/* <a href="https://www.flaticon.com/free-icons/wechat" title="wechat icons">Wechat icons created by Rakib Hassan Rahim - Flaticon</a> */}
                               {/* <a href="https://www.flaticon.com/free-icons/line" title="line icons">Line icons created by riajulislam - Flaticon</a> */}
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                    </List>
                </Container>

                <PopupDialog
                    keepMounted
                    open={open}
                    onClose={handleCloseLanguage}
                    value={value}
                />

                <Footer info={body.Footer[0]} />
        </>
    );
}

export default Setting;