import { useState, useRef, useEffect, React  } from 'react';
import { DialogTitle, DialogContent, DialogActions, Dialog, RadioGroup, Radio, Button, FormControlLabel, DialogContentText, FormControl, FormLabel, FormGroup, Checkbox, Select, MenuItem, InputLabel} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setProductInfo, setLoginInfo } from '../redux/setting';
import { Link } from 'react-router-dom';

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

    //start redux
    const [ preAuthValue, setPreAuthValue ] = useState('');
    const [ productInfoValue, setProductInfoValue ] = useState('');
    const [ loginValue, setLoginValue] = useState('')

    const dispatch = useDispatch();

    //redux tutorial: https://www.youtube.com/watch?v=iBUJVy8phqw
    const handleChangePreAuth = (event) => {
        setPreAuthValue(event.target.value)
        dispatch(setAuth({
            preAuth: event.target.value
        }))
    };

    const handleChangeProductInfo = (event) => {
        setProductInfoValue(event.target.value)
        dispatch(setProductInfo({
            productInfo: event.target.value
        }))
    };

    const handleChangeLoginInfo = (event) => {
        setLoginValue(event.target.value)
        dispatch(setLoginInfo({
            loginInfo: event.target.value
        }))
    };
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
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">PreAuth</FormLabel>
                            <Select value={preAuthValue} onChange={handleChangePreAuth}>
                                <MenuItem value={""}>None</MenuItem>
                                <MenuItem value={"timeout"}>Connection Timeout</MenuItem>
                                <MenuItem value={"auth"}>Authentication Failed</MenuItem>
                                <MenuItem value={"browser"}>Unsupported Browser</MenuItem>
                                <MenuItem value={"loading"}>Loading</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">Product Info</FormLabel>
                            <Select value={productInfoValue} onChange={handleChangeProductInfo}>
                                <MenuItem value={""}>None</MenuItem>
                                <MenuItem value={"success"}>Success</MenuItem>
                                <MenuItem value={"failed"}>Failed</MenuItem>
                                <MenuItem value={"verify"}>Verify</MenuItem>
                                <MenuItem value={"history"}>History</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">Login Status</FormLabel>
                            <Select value={loginValue} onChange={handleChangeLoginInfo}>
                                <MenuItem value={""}>None</MenuItem>
                                <MenuItem value={"login"}>Login</MenuItem>
                                <MenuItem value={"logout"}>Logout</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <Button component={Link} to={`/`}> Restart </Button>
                            <Button component={Link} to={`/Login`}> Login </Button>
                        </FormControl>
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