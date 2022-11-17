import { useState, React } from 'react';
import { IconButton, Grid, Container, Typography, Box, Snackbar, Alert, TextField, Stack, Avatar, Button, Paper, List, ListSubheader, ListItem, ListItemIcon, Switch, ListItemText, Divider } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fade from '@mui/material/Fade';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Book, BookOnline, DeveloperMode, Feedback, LanguageOutlined, Password, SupervisedUserCircleOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PopupDialog from '../component/PopupDialog';

const Setting = () => {

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
                            <ListItemText primary="Personal Information" />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem component={Link} onClick={handleOpenLanguage}>
                            <ListItemIcon>
                                <LanguageOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Language Translation" />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem component={Link} to={`/ResetPassword`}>
                            <ListItemIcon>
                                <Password />
                            </ListItemIcon>
                            <ListItemText primary="Reset Password" />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <Feedback />
                            </ListItemIcon>
                            <ListItemText primary="Write Us A Feedback" />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <BookOnline />
                            </ListItemIcon>
                            <ListItemText primary="Term Of Service" />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <Book />
                            </ListItemIcon>
                            <ListItemText primary="Privacy Policy" />
                            <ArrowForwardIosIcon />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <DeveloperMode />
                            </ListItemIcon>
                            <ListItemText primary="Demo Switch" />
                            <Switch
                                edge="end"
                                // onChange={handleToggle('wifi')}
                                // checked={checked.indexOf('wifi') !== -1}
                                inputProps={{
                                    'aria-labelledby': 'switch-list-label-wifi',
                                }}
                            />
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