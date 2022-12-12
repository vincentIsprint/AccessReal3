import { useState, React } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, Box, Container, Grid, List,ListItem,ListItemText,Button, TextField, InputAdornment } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/setting';
import SearchIcon from '@mui/icons-material/Search';

const Scan_History = () => {
    
    const [header] = useState({
        Item : [
            {   
                leftcontent:
                    <IconButton size="large" edge="start" sx={{color:"primary.main"}}
                        component={Link} to={`/Scan`}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>,
                title: 'Scan History',
                rightcontent:
                    <IconButton size="large" edge="start" sx={{color:"primary.main"}}>
                        <FileDownloadIcon />
                    </IconButton>
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

    const dispatch = useDispatch();

    const handleChangePreAuth = (event) => {
        dispatch(setAuth({
            preAuth: 'history'
        }))
    };

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
                                        '& > :not(style)': { m: 1, width: '100%' },
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
                                {body.List.map((info,index) => (
                                    <List key={index}>
                                        <ListItem
                                            key={index}
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            }
                                        > 
                                            <Button variant="outlined" sx={{ width: "100%"}}
                                                onClick={handleChangePreAuth}
                                                component={Link} to={`/ProductInfo`}
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
                            </Grid>
                        </Grid>
                    </Container>
                : null
            }
            <Footer info={body.Footer[0]} />
        </>
    );
}

export default Scan_History;