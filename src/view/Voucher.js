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

const Voucher = () => {

    const [header] = useState({
        Item : [{ 
            title2: 'My Voucher',
            login: true
        }]
    })

    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    });

    const handleClickCopy = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
    };
    
    const handleCloseCopy = () => {
        setState({
          ...state,
          open: false,
        });
    };

    const [openTransfer, setOpenTransfer] = useState(false); 

    const [addTransfer, setTransfer] = useState({
        title: "Enter Friend ID or Email Address",
        desc: 
            <Box sx={{ width: 500, maxWidth: '100%'}}>
                <TextField fullWidth label="Example: daniel96@yahoo.com" />
            </Box>,
        buttonName: "Transfer Gift"
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
                        height: '100px',
                        width: '100px',
                    }],
                    title: `Similac Gain Kid GOLD (2'-FL) 3KG BIB`,
                    desc: 'Abbott offers a $2 discount on new Similac products when you pay with an HSBC card! Paste the promo code in the dedicated box right away and unlock extra savings.',
                },
                {
                    images: [{
                        image: magic,
                        height: '100px',
                        width: '100px',
                    }],
                    title: 'Magic Powder 1.2Kg',
                    desc: 'Get S$10 off voucher when you purchase Magic Powder with Citibank Credit Card!'
                },
                {
                    images: [{
                        image: lus2,
                        height: '100px',
                        width: '100px',
                    }],
                    title: 'Similac Chocolate 100G',
                    desc: 'Save an extra 15% off, limited to 3 redemptions per user with selected merchants.',
                },
        ],
        Footer: [
            {   
                content: null
            }
        ]
    })

    return(
        <>
            <Header info={header}/>
            <Snackbar
                    sx={{padding: '5vh'}}
                    autoHideDuration={1500}
                    open={state.open}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    onClose={handleCloseCopy}
                    TransitionComponent={state.Transition}
                    key={state.Transition.name}
            >
                <Alert severity="warning">Collect 10 stamps to get a free voucher code</Alert>
            </Snackbar>
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
                                    <List key={index}>
                                        <Paper sx={{borderRadius: "10px 10px 10px 10px"}}>
                                            <ListItem key={index}> 
                                                <ListItemAvatar sx={{padding:'2%'}}>
                                                    <Image info={item.images}/>
                                                </ListItemAvatar>
                                                <Stack direction="column">
                                                    <ListItemText sx={{paddingLeft:'2%'}}
                                                        primary={item.title}
                                                        secondary={item.desc}
                                                    />
                                                    <Box sx={{padding:'2%'}}>
                                                        <Chip icon={<ContentCopyIcon />} size="small" label="Voucher Code" onClick={handleClickCopy(Fade)}/>
                                                    </Box>
                                                    {/* <Box sx={{padding:'2%'}}>
                                                        <Chip icon={<TransferWithinAStationIcon />} size="small" label="Transfer" onClick={handleOpenTransfer}/>
                                                    </Box> */}
                                                </Stack>
                                            </ListItem>
                                        </Paper>
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