import { useState, useRef, useEffect, React  } from 'react';
import { DialogTitle, DialogContent, DialogActions, Dialog, RadioGroup, Radio, Button, FormControlLabel, Stack} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAuth, setProductInfo, setLoginInfo } from '../redux/setting';
import { useNavigate } from 'react-router-dom';
import CustomTypo from './CustomTypo';

function PopupDialog(props) {
    
    const { onClose, value : valueProp, open, ...other } = props;
    const [value, setValue] = useState(valueProp.current);
    const radioGroupRef = useRef(null);

    useEffect(() => {
        if (!open) {
          setValue(valueProp.current);
        }
    }, [valueProp, open]);
    
    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };
    
    const handleCancel = () => {
        onClose();
    };
    
    const handleOk = () => {
        onClose();

        if(value!=undefined)
            valueProp.current=value
    };
    
    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const navigate = useNavigate();

    //start redux
    const [ preAuthValue, setPreAuthValue ] = useState('');
    const [ productInfoValue, setProductInfoValue ] = useState('');
    const [ loginValue, setLoginValue] = useState('')

    const dispatch = useDispatch();

    //redux tutorial: https://www.youtube.com/watch?v=iBUJVy8phqw
    function updatePreAuth(value) {
        setPreAuthValue(value)
        dispatch(setAuth({
            preAuth: value
        }))
        navigate('/');
    }

    function updateProductInfo(value) {
        setProductInfoValue(value)
        dispatch(setProductInfo({
            productInfo: value
        }))
        setLoginValue("logout")
        dispatch(setLoginInfo({
            loginInfo: "logout"
        }))
        navigate('/ProductInfo');
    }

    function updateProductInfoHelp(value) {
        setProductInfoValue(value)
        dispatch(setProductInfo({
            productInfo: value
        }))
        setLoginValue("logout")
        dispatch(setLoginInfo({
            loginInfo: "logout"
        }))
        navigate('/Help');
    }

    function updateLoginInfo(value) {
        setLoginValue(value)
        dispatch(setLoginInfo({
            loginInfo: value
        }))

        if(value == 'login')
            navigate('/Login')
        else if(value == "signup")
            navigate('/SignUp')
    }
    //end redux

    return (
        <Dialog sx={{ '& .MuiDialog-paper': { width: '100%'} }} maxWidth="xs" TransitionProps={{ onEntering: handleEntering }} onClose={handleCancel} open={open} {...other} >
            <DialogTitle>{valueProp.title != null ? valueProp.title : null}</DialogTitle>
            <DialogContent dividers>
                { valueProp.desc }
                { valueProp.options != null ?
                    <RadioGroup ref={radioGroupRef} name={valueProp.title != null ? valueProp.title : null} value={value} onChange={handleChange}>
                        {valueProp.options.map((option) => (
                            <FormControlLabel
                                value={option}
                                key={option}
                                control={<Radio />}
                                label={option}
                            />
                        ))}
                    </RadioGroup>
                    :null
                }
                
                {/* Developer Options */}
                { valueProp.devOption ?
                    <>
                        <Stack direction="column" spacing={2}>
                            <CustomTypo variant="body1" mVariant="body2" color="primary.main" content="PreAuth"/>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={() => updatePreAuth("timeout")}>
                                    Time Out
                                </Button>
                                <Button variant="contained" onClick={() => updatePreAuth("auth")}>
                                    Auth Fail
                                </Button>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={() => updatePreAuth("browser")}>
                                    Unsupport Browser
                                </Button>
                                <Button variant="contained" onClick={() => updatePreAuth("loading")}>
                                    Loading
                                </Button>
                            </Stack>

                            <CustomTypo variant="body1" mVariant="body2" color="primary.main" content="Product Info"/>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={() => updateProductInfo("success")}>
                                    Success
                                </Button>
                                <Button variant="contained" onClick={() => updateProductInfo("failed")}>
                                    Failed
                                </Button>
                                <Button variant="contained" onClick={() => updateProductInfo("verify")}>
                                    Verify
                                </Button>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={() => updateProductInfoHelp("success")}>
                                    Success_Help
                                </Button>
                                <Button variant="contained" onClick={() => updateProductInfoHelp("failed")}>
                                    Failed_Help
                                </Button>
                                <Button variant="contained" onClick={() => updateProductInfoHelp("verify")}>
                                    Verify_Help
                                </Button>
                            </Stack>

                            <CustomTypo variant="body1" mVariant="body2" color="primary.main" content="Login"/>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={() => updateLoginInfo("login")}>
                                    Login
                                </Button>
                                <Button variant="contained" onClick={() => updateLoginInfo("signup")}>
                                    Sign Up
                                </Button>
                            </Stack>
                        </Stack>
                    </>
                    : null
                }
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}> Cancel </Button>
                <Button onClick={handleOk}> {valueProp.buttonName != null ? valueProp.buttonName : "Ok"} </Button>
            </DialogActions>
        </Dialog>
    );
}

export default PopupDialog;