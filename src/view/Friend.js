import { useState, React } from 'react';
import { Box, Container, Grid, List, ListItem, ListItemText, Fade, TextField, InputAdornment, ListItemAvatar, Snackbar, Alert, Stack, Pagination, Paper, Avatar, IconButton  } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import similac from '../img/similac.png';
import magic from '../img/magic.jpg';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import PopupDialog from '../component/PopupDialog';
import CustomChip from '../component/CustomChip';
import CustomTypo from '../component/CustomTypo';

const Friend = () => {

    const open = false;

    const [header] = useState({
        Item : [{ 
            title2: 'My Friend',
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

    const [body] = useState({
        List: [
                {
                    image: similac,
                    title: 'Jacob Maqsood',
                },
                {
                    image: magic,
                    title: 'Chloë Nida',
                },
                {
                    image: similac,
                    title: 'Jun Kaulana',
                },
                {
                    image: similac,
                    title: 'Tiriaq Karabo',
                },
                {
                    image: similac,
                    title: 'Schuyler Ayanda',
                },
        ],
        Footer: [
            {   
                content: null
            }
        ]
    })

    const [openAddFriend, setOpenAddFriend] = useState(false); 

    const [addFriend, setAddFriend] = useState({
        title: "Enter Friend ID or Email Address",
        desc: 
            <Box sx={{ width: 500, maxWidth: '100%'}}>
                <TextField fullWidth label="Example: daniel96@yahoo.com" />
            </Box>,
        buttonName: "Add"
    })

    const handleOpenAddFriend = () => {
        setOpenAddFriend(true);
    };

    const handleCloseAddFriend = (newFriend) => {
        setOpenAddFriend(false);

        if (newFriend) {
            setAddFriend(newFriend);
        }
    };

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
                <Alert severity="success">Copied To Clipboard</Alert>
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
                                <List key='add'>
                                    <Paper sx={{borderRadius: "10px 10px 10px 10px"}}>
                                        <ListItem>
                                            <ListItemAvatar sx={{padding:'2%'}}>
                                                <div onClick={handleOpenAddFriend}>
                                                    <Avatar sx={{ bgcolor: blue[500] }}>
                                                        <AddIcon />
                                                    </Avatar>
                                                </div>
                                            </ListItemAvatar>
                                            <Stack direction="row">
                                                <Box>
                                                    <ListItemText primary="Add a friend"/>
                                                </Box>
                                            </Stack>
                                        </ListItem>
                                    </Paper>
                                </List>
                                {body.List.map((item,index) => (
                                    <List key={index}>
                                        <Paper sx={{borderRadius: "10px 10px 10px 10px"}}>
                                            <ListItem key={index}
                                                secondaryAction={
                                                    <IconButton>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }
                                            > 
                                                <ListItemAvatar sx={{padding:'2%'}}>
                                                    <Avatar src={item.image} />
                                                </ListItemAvatar>
                                                <Stack direction="row">
                                                    <Box>
                                                        <ListItemText primary={<CustomTypo variant="subtitle1" mVariant="body2" bold color="primary.main" content={item.title} />}/>
                                                        <CustomChip icon={<ContentCopyIcon />} size="medium" mSize="small" label="ID: 1234567" onClick={handleClickCopy(Fade)} />
                                                    </Box>
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
                open={openAddFriend}
                onClose={handleCloseAddFriend}
                value={addFriend}
            />
        
            <Footer info={body.Footer[0]} />
        </>
    );
}

export default Friend;