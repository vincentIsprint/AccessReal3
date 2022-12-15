import * as React from 'react';
import { Chip, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

// Get innerHeight and innerWidth
const CustomChip = (props) => {
    const setting = useSelector((state)=>state.setting)
    return(
        <Chip icon={props.icon} size={ setting.innerWidth > 400 ? props.size : props.mSize} label={props.label} onClick={props.onClick}/>
    )
}

export default CustomChip;