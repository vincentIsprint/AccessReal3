import { useState, React, useRef } from 'react';
import { Box, Container, Grid, List,ListItem,ListItemText,Button, TextField, InputAdornment, Divider, Stack, Pagination } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import PopupDialog from '../component/PopupDialog';
import { setProductInfo } from '../redux/setting';
import ProductInfo from './ProductInfo';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CustomTypo from '../component/CustomTypo';
import { useNavigate } from 'react-router-dom';
import BackupIcon from '@mui/icons-material/Backup';
import CustomIcon from '../component/CustomIcon';

const Scan_History = () => {
    
    const [header] = useState({
        Item : [
            {   
                title2: 'Scan History',
                login: true
            }
        ]
    })

    const [body] = useState({
        List: [
            {
                code: 'Zy3NqFU7k12h',
                date: '12 July 2022 10:00:00 GMT'
            },
            {
                code: 'Tmrn6i23459j',
                date: '11 July 2022 08:00:00 GMT'
            },
            {
                code: 'AhoY12235ynD',
                date: '9 July 2022 08:00:00 GMT'
            },
            {
                code: 'v0uQM12573ac',
                date: '1 July 2022 08:00:00 GMT'
            },
            {
                code: 'Tmrn6i23459j',
                date: '11 July 2022 08:00:00 GMT'
            },
            {
                code: 'AhoY12235ynD',
                date: '9 July 2022 08:00:00 GMT'
            },
            {
                code: 'v0uQM12573ac',
                date: '1 July 2022 08:00:00 GMT'
            },
        ], 
        Footer: [
            {   
                content: null
            }
        ]
    })

    const [openProductInfo, setOpenProductInfo] = useState(false); 

    const [productInfo, setProductInfo] = (
        useState({
            desc: <ProductInfo type="popup"/>
        })
    )

    const handleOpenProductInfo = () => {
        setOpenProductInfo(true);
    };

    const handleCloseProductInfo = (newProductInfo) => {
        setOpenProductInfo(false);

        if (newProductInfo) {
            setProductInfo(newProductInfo);
        }
    };
    let navigate = useNavigate();
    const handleScan = () => {
        navigate("/Scan");
    }
    const fileInput = useRef();
    return(
        <>
            <Header info={header}/>
            {
                body.List != null ? 
                    <Container>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Box
                                     component="form"
                                     sx={{
                                         '& > :not(style)': { width: '100%' },
                                     }}
                                     noValidate
                                     autoComplete="off"
                                >
                                    <TextField id="filled-basic" label="Search" variant="filled" 
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <List key='scan'>
                                    <ListItem>
                                        <Button variant="outlined" sx={{ width: "100%", padding:'5%', backgroundColor:'primary.inverted'}} startIcon={<QrCodeScannerIcon sx={{paddingRight:'5%'}}/>} onClick={handleScan}>
                                            <CustomTypo variant="subtitle1" mVariant="subtitle1" component="p" color="primary.main" content="Scan QR Code" size="1.1rem"/>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant="outlined" sx={{ width: "100%", padding:'5%', backgroundColor:'primary.inverted'}} startIcon={<BackupIcon sx={{paddingRight:'5%'}}/>} onClick={()=>fileInput.current.click()}>
                                            <CustomTypo variant="subtitle1" mVariant="subtitle1" component="p" color="primary.main" content="Upload Ownership Card" size="1.1rem"/>
                                        </Button>
                                        <input 
                                            ref={fileInput} 
                                            type="file" 
                                            style={{ display: 'none' }} 
                                        />
                                    </ListItem>
                                </List>
                                <Divider />
                                {body.List.map((info,index) => (
                                    <List key={index}>
                                        <ListItem
                                            key={index}
                                            secondaryAction={
                                                <CustomIcon size="large" mSize="small" edge="end" icon={<DeleteIcon />} />
                                            }
                                        > 
                                            <Button variant="outlined" sx={{ width: "100%", backgroundColor:'primary.inverted'}}
                                                onClick={handleOpenProductInfo}
                                            >
                                                <ListItemText
                                                        primary={info.code}
                                                        secondary={info.date}
                                                        sx={{ color: "primary.main"}}
                                                />
                                            </Button> 
                                        </ListItem>
                                    </List>
                                ))}
                                 <Stack spacing={2} sx={{alignItems:'center', paddingTop:'5%'}}>
                                    <Pagination count={10} shape="rounded" />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                : null
            }

            {/* Popup Product Info Dialog */}
            <PopupDialog
                keepMounted
                open={openProductInfo}
                onClose={handleCloseProductInfo}
                value={productInfo}
            />
            <Footer info={body.Footer[0]} />
        </>
    );
}

export default Scan_History;