import { useState, React } from 'react';
import { AppBar, Toolbar, Box, IconButton, MenuItem, Menu, ListItemIcon, Divider } from '@mui/material';
import PopupDialog from './PopupDialog';
import LanguageIcon from '@mui/icons-material/Language';
import { Logout, Settings } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { setLoginInfo } from '../redux/setting';
import CustomTypo from './CustomTypo';

const Header = (props) => {

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

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(setLoginInfo({loginInfo: 'logout'}))
        navigate("/Login");
    }
      
    return(
        <>
            {props.info.Item.map((info,index) => 
                <AppBar key={index} position="static" sx={{ background: 'transparent', boxShadow: 'none'}}>
                    <Toolbar>
                        <Box display='flex' flexGrow={1}>
                            {
                                info.language ?
                                    <IconButton size="large" edge="start" sx={{color:info.languagecolor}} onClick={handleOpenLanguage}>
                                        <LanguageIcon/>
                                    </IconButton>
                                : info.leftcontent ? info.leftcontent
                                : null
                            }
                        </Box>
                        <Box sx={{flexGrow:1}}>
                            <CustomTypo variant="h6" mVariant="button" color="primary.main" content={info.title}/>
                        </Box>
                        {
                            info.rightcontent ?
                                info.rightcontent
                            : info.login ?
                                <IconButton 
                                    onClick={handleOpenMenu}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={openMenu ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenu ? 'true' : undefined}
                                >
                                    <AccountCircleIcon sx={{ width: 32, height: 32 }} />
                                </IconButton>
                            : null
                        }
                    </Toolbar>
                    {   
                        info.title2?
                            <Toolbar>
                                <Box sx={{flexGrow:1}}>
                                    <CustomTypo variant="h5" mVariant="h6" color="primary.main" content={info.title2}/>
                                </Box>
                            </Toolbar>
                        :null
                    }
                </AppBar>
            )}

            <PopupDialog
                keepMounted
                open={open}
                onClose={handleCloseLanguage}
                value={value}
            />

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >   
                <MenuItem
                    component={Link}
                    to={`/Setting`}
                >
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Account Setting
                </MenuItem>
                <Divider />
                <MenuItem
                    onClick={handleLogOut}
                    // component={Link}
                    // to={`/Login`}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default Header;