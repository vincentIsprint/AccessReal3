import { useState, React } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import GroupIcon from '@mui/icons-material/Group';
import RedeemIcon from '@mui/icons-material/Redeem';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const Footer = (props) => {

    const setting = useSelector((state)=>state.setting)
    const [value, setValue] = useState(0);

    return(
        <>
            <Box sx={{padding:'5%'}} />
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
                        <BottomNavigationAction label="Scan" 
                            sx={{color:theme => theme.palette.info.main}} 
                            icon={<QrCodeScannerIcon />}
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