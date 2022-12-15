import { useState, React } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PolicyIcon from '@mui/icons-material/Policy';
import { Link } from 'react-router-dom';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import GroupIcon from '@mui/icons-material/Group';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HistoryIcon from '@mui/icons-material/History';
import RedeemIcon from '@mui/icons-material/Redeem';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { setLoginInfo } from '../redux/setting';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomTypo from '../component/CustomTypo';

const Footer = (props) => {

    const setting = useSelector((state)=>state.setting)
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleScan = () => {
        dispatch(setLoginInfo({loginInfo: 'none'}))
        navigate("/Scan");
    };

    return(
        <>
            <Box component="footer"
                sx={{
                    position: 'fixed',
                    width: setting.innerWidth,
                    bottom: 0,
                    backgroundColor:"primary.main",
                    boxShadow: "1px -1px 10px 10px rgb(12 12 12 / 5%)",
                    borderRadius: "15px 15px 0px 0px",
                }}
            >
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
                {
                    props.info.content !== undefined ? 
                        props.info.content 
                    : null
                }
            </Box>
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
                        <BottomNavigationAction label="Scan History" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<HistoryIcon />}
                            component={Link}
                            to={`/Scan_History`}
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