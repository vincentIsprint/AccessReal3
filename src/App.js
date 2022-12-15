import { useState, React, useCallback } from 'react';
import { Container } from '@mui/system';
import ProductInfo from './view/ProductInfo';
import PreAuth from './view/PreAuth';
import FAQ from './view/FAQ';
import Help_Scan from './view/Help_Scan';
import Help from './view/Help';
import Scan from './view/Scan';
import Scan_History from './view/Scan_History';
import Texture from './img/texture/texture2.png'
import Login from './view/Login';
import SignUp from './view/SignUp';
import Profile from './view/Profile';
import ResetPassword from './view/ResetPassword';
import { Route, Routes } from 'react-router-dom';
import { Fab } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PopupDialog from './component/PopupDialog';
import { useDispatch } from 'react-redux';
import { setMeasure } from './redux/setting';
import Friend from './view/Friend';
import Redeem from './view/Redeem';
import Voucher from './view/Voucher';
import Setting from './view/Setting';

const App = () => {

    const [open, setOpen] = useState(false); 

    const [value, setValue] = useState({
        title: "Developer Option",
        devOption: true
    })

    const handleOpenDevSetting = () => {
        setOpen(true);
    };

    const handleCloseDevSetting = (newValue) => {
        setOpen(false);
    
        if (newValue) {
          setValue(newValue);
        }
    };

    const dispatch = useDispatch();

    // function to calculate height and width of a component using redux
    const measuredRef = useCallback(node => {
        if (node !== null) {
            dispatch(setMeasure({
                innerHeight : node.getBoundingClientRect().height,
                innerWidth : node.getBoundingClientRect().width
            }))
        }
    }, []);

    return(
        <Container 
            maxWidth="sm"
            disableGutters 
            sx={{
                    backgroundColor:"background.main",
                    backgroundImage: `url(${Texture})`,
                    backgroundRepeat: 'repeat',
                    minHeight: '100vh',
                }}
            ref={measuredRef}
        >
            <Routes>
                <Route path="/ProductInfo" element={<ProductInfo/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/ResetPassword" element={<ResetPassword/>}/>
                <Route path="/PreAuth" element={<PreAuth/>}/>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route path="/" element={<PreAuth/>}/>
                <Route path="/Help" element={<Help/>}/>
                <Route path="/Scan" element={<Scan/>}/>
                <Route path="/Help_Scan" element={<Help_Scan/>}/>
                <Route path="/Scan_History" element={<Scan_History/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Voucher" element={<Voucher/>}/>
                <Route path="/Friend" element={<Friend/>}/>
                <Route path="/Redeem" element={<Redeem/>}/>
                <Route path="/Setting" element={<Setting/>}/>
            </Routes>

            {/* Developer Option - Testing Use ONLY */}
            <Fab sx={{position: 'absolute', top: 16, right: 16,}} size="small" color="secondary" aria-label="add" onClick={handleOpenDevSetting}>
                <SettingsIcon />
            </Fab>
            <PopupDialog
                keepMounted
                open={open}
                onClose={handleCloseDevSetting}
                value={value}
            />
        </Container>
    );
}

export default App;