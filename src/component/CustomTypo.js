import * as React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

// Automatic scale width according to innerWidth
// component: "p" is required when align is defined
const CustomTypo = (props) => {
    const setting = useSelector((state)=>state.setting)
    return(
        <Typography variant={ setting.innerWidth > 400 ? props.variant : props.mVariant} sx={{color: props.color, fontWeight: props.bold ? 500 : 0, fontSize: props.size }} align={props.align}
            component={props.component !== undefined ? props.component : 'span'} to={props.to}
        >
            {props.content}
        </Typography>
    )
}

export default CustomTypo;