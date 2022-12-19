import * as React from 'react';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

// Get innerHeight and innerWidth
const CustomIcon = (props) => {
    const setting = useSelector((state)=>state.setting)
    return(
        <IconButton size={ setting.innerWidth > 400 ? props.size : props.mSize} edge={props.edge} sx={props.sx} onClick={props.onClick} component={props.component} to={props.to}>
            {props.icon}
        </IconButton>
    )
}

export default CustomIcon;