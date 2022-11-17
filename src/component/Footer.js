import { useState, React } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Box, Button, Fab, styled, IconButton, Typography, Container, Grid, AppBar, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PolicyIcon from '@mui/icons-material/Policy';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import GroupIcon from '@mui/icons-material/Group';
import Fade from '@mui/material/Fade';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HistoryIcon from '@mui/icons-material/History';
import RedeemIcon from '@mui/icons-material/Redeem';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { setLoginInfo } from '../redux/setting';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {

    const setting = useSelector((state)=>state.setting)
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleScan = () => {
        dispatch(setLoginInfo({loginInfo: 'none'}))
        navigate("/Scan");
    };
    const handleScanHistory = () => {
        dispatch(setLoginInfo({loginInfo: 'none'}))
        navigate("/Scan_History");
    };
    return(
        <>
            <Box component="footer"
                sx={{
                    position: 'fixed',
                    width: '100%',
                    maxWidth:'sm',
                    bottom: 0,
                    backgroundColor:"primary.main",
                }}
            >
                {   
                    setting.productInfo === "success" ? 
                        <Button variant="contained" sx={{minWidth:'100%'}} startIcon={<VerifiedUserIcon />} color="success">
                            Product Authenticated
                        </Button> :
                    setting.productInfo === "verify" ? 
                        <Button variant="contained" sx={{minWidth:'100%'}} startIcon={<PolicyIcon />} color="warning" 
                            onClick={handleScan}
                        >
                            Verify Product Authenticity
                        </Button> :
                    setting.productInfo === "failed" ? 
                        <Button variant="contained" sx={{minWidth:'100%'}} startIcon={<PrivacyTipIcon />} color="info">
                            Product Previously Scanned
                        </Button>:
                    setting.productInfo === "history" ? 
                        <Button variant="contained" sx={{minWidth:'100%'}} startIcon={<KeyboardBackspaceIcon />} color="info"
                            component={Link}
                            to={`/Scan_History`}
                        >
                            Back To History
                        </Button>
                    : null
                }
                {
                    props.info.content !== undefined ? 
                        props.info.content 
                    : null
                }
            </Box>
            {
                props.info.scanner !== undefined && props.info.scanner ?
                    <BottomNavigation
                        sx={{
                            zIndex: 2,
                            position: 'fixed',
                            width: '100%',
                            maxWidth:'sm',
                            bottom: 0,
                            backgroundColor:"primary.main",
                            '& .Mui-selected': {
                                '& .MuiBottomNavigationAction-label': {
                                    fontSize: theme => theme.typography.caption,
                                    transition: 'none',
                                    fontWeight: 'bold',
                                    lineHeight: '20px'
                                },
                                '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                                    color: theme => theme.palette.primary.inverted
                                }
                            },
                        }}
                        showLabels
                    >
                        <BottomNavigationAction label="Switch" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<FlipCameraIosIcon />}
                        />
                        {   
                            setting.loginInfo != "login" ?
                                <BottomNavigationAction label="Scan History" 
                                    sx={{color:theme => theme.palette.info.main}} 
                                    icon={<HistoryIcon />}
                                    onClick={handleScanHistory}
                                />
                            : null
                        }
                        <BottomNavigationAction label="Upload" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<FileUploadIcon />}
                        />
                        <BottomNavigationAction label="Flash" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<FlashOnIcon />} 
                        />
                    </ BottomNavigation>
                : null
            }
            {
                setting.loginInfo === "login" ?
                    <BottomNavigation
                        sx={{
                            zIndex: 1,
                            backgroundColor:"primary.main",
                            position: 'fixed',
                            width: '100%',
                            maxWidth:'sm',
                            bottom: 0,
                            '& .Mui-selected': {
                                '& .MuiBottomNavigationAction-label': {
                                fontSize: theme => theme.typography.caption,
                                transition: 'none',
                                fontWeight: 'bold',
                                lineHeight: '20px'
                                },
                                '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                                color: theme => theme.palette.primary.inverted
                                }
                            },
                        }}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Voucher" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<PercentRoundedIcon />} 
                            component={Link}
                            to={`/Voucher`}
                        />
                        <BottomNavigationAction label="Redeem" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<RedeemIcon />} 
                            component={Link}
                            to={`/Redeem`}
                        />
                        <BottomNavigationAction label="Friend" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<GroupIcon />}
                            component={Link}
                            to={`/Friend`}
                        />
                    </BottomNavigation>
                : null
            }
        </>
    );
}

export default Footer;