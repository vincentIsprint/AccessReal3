import { useState, React } from 'react';
import { Box, Container, Grid, List, ListItem, ListItemText, Fade, TextField, InputAdornment, ListItemAvatar, Snackbar, Alert, Chip, Stack, Pagination, Paper  } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import similac from '../img/similac.png';
import magic from '../img/magic.jpg';
import lus2 from '../img/lus2.png';
import Image from '../component/Image';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import PopupDialog from '../component/PopupDialog';
import CustomTypo from '../component/CustomTypo';
import CustomChip from '../component/CustomChip';
import qr from '../img/qr.jpg';

const Voucher = () => {

    const [header] = useState({
        Item : [{ 
            title2: 'My Voucher',
            login: true
        }]
    })

    const [openTransfer, setOpenTransfer] = useState(false); 

    const [addTransfer, setTransfer] = useState({
        title: "Transfer Voucher To A Friend",
        desc: 
            <Box sx={{ width: 500, maxWidth: '100%'}}>
                <TextField fullWidth label="Example: 123456" />
            </Box>,
        buttonName: "Transfer"
    })

    const handleOpenTransfer = () => {
        setOpenTransfer(true);
    };

    const handleCloseTransfer = (newTransfer) => {
        setOpenTransfer(false);

        if (newTransfer) {
            setTransfer(newTransfer);
        }
    };
    const [body] = useState({
        List: [
                {
                    images: [{
                        image: similac,
                        height: '150px',
                        width: '150px',
                    }],
                    title: `Similac Gain Kid GOLD (2'-FL) 3KG BIB`,
                    desc: 'Abbott offers a $2 discount on new Similac products when you pay with an HSBC card! Paste the promo code in the dedicated box right away and unlock extra savings.',
                },
                {
                    images: [{
                        image: magic,
                        height: '150px',
                        width: '150px',
                    }],
                    title: 'Magic Powder 1.2Kg',
                    desc: 'Get S$10 off voucher when you purchase Magic Powder with Citibank Credit Card!'
                },
                {
                    images: [{
                        image: lus2,
                        height: '150px',
                        width: '150px',
                    }],
                    title: 'Similac Chocolate 100G',
                    desc: 'Save an extra 15% off, limited to 3 redemptions per user with selected merchants.',
                },
        ],
        CouponImage : [
            {
                image: qr,
                height: '150px',
                weight: '150px',
                imageText: 'main image description',
                marginTop: '0%'
            }
        ],
        Footer: [
            {   
                content: null
            }
        ]
    })

    // Popup Coupon
    const [openCoupon, setOpenCoupon] = useState(false); 
    
    const [coupon, setCoupon] = useState({
        title: "Redeem Coupon",
        desc: 
        <Box>
            <Stack direction="column" spacing={2}>
                <CustomTypo variant="body1" mVariant="subtitle1" content="Show this qr code to the cashier to redeem" align="center"/>
            </Stack>
            <Box sx={{padding:'5%'}}>
                <Image info={body.CouponImage}/>
            </Box>
            <Stack direction="column" spacing={2}>
                <CustomTypo variant="h6" bold mVariant="h6" content="Voucher code: A123456" align="center"/>
                <CustomTypo variant="body1" mVariant="subtitle1" content="Valid until 31 March 2022" align="center"/>
            </Stack>
        </Box>
        ,
        buttonName: "Copy Code"
    })

    const handleOpenCoupon = () => {
        setOpenCoupon(true);
    };

    const handleCloseCoupon = (newCoupon) => {
        setOpenCoupon(false);

        if (newCoupon) {
            setCoupon(newCoupon);
        }
    };

    return(
        <>
            <Header info={header}/>
            {/* Popup Coupon */}
            <PopupDialog
                keepMounted
                open={openCoupon}
                onClose={handleCloseCoupon}
                value={coupon}
            />

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
                                {body.List.map((item,index) => (
                                    <Box sx={{padding:"2%"}}>
                                        <Paper sx={{borderRadius: "10px 10px 10px 10px", padding:"2%"}} key={index}>
                                            <Grid item xs={12} md={12}>
                                                <Image info={item.images}/>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <Stack direction="column">
                                                    <ListItemText sx={{paddingLeft:'2%'}}
                                                        primary={<CustomTypo variant="h6" mVariant="body1" content={item.title} />}
                                                        secondary={<CustomTypo variant="h6" mVariant="body1" content={item.desc} />}
                                                    />
                                                    <Stack direction="row">
                                                        <Box sx={{padding:'2%'}}>
                                                            <CustomChip icon={<ContentCopyIcon />} size="medium" mSize="medium" label="Voucher Code" onClick={handleOpenCoupon} />
                                                        </Box>
                                                        <Box sx={{padding:'2%'}}>
                                                            <CustomChip icon={<TransferWithinAStationIcon />} size="medium" mSize="medium" label="Transfer" onClick={handleOpenTransfer} />
                                                        </Box>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Paper>
                                    </Box>
                                ))}
                                <Stack spacing={2} sx={{alignItems:'center', paddingTop:'5%'}}>
                                    <Pagination count={10} shape="rounded" />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                : null
            }
            {/* Popup Add Friend Dialog */}
            <PopupDialog
                keepMounted
                open={openTransfer}
                onClose={handleCloseTransfer}
                value={addTransfer}
            />
            <Footer info={body.Footer[0]} />
        </>
    );
}

export default Voucher;