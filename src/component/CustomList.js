import * as React from 'react';
import { Avatar, Box, Container, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import CustomTypo from './CustomTypo';

export default function CustomList(props) {
  return (
    <Container>
      <Box sx={{
                  backgroundColor:"#F4F6F6",
                  boxShadow: "1px -1px 10px 10px rgb(12 12 12 / 5%)",
                  borderRadius: "15px 15px 15px 15px",
              }}
      >
          {props.info.map((row, index) => (
              <Grid key={index} justifyContent="center">
                  <Grid item xs={12} md={12}>
                    <List sx={{ width: '100%'}}>
                      {
                        row.title ? 
                          <ListItem dense>
                            <ListItemAvatar sx={{justifyContent: "center", display: "flex"}}>
                              <Avatar sx={{ backgroundColor: "primary.main" }}>
                                <NotesOutlinedIcon  sx={{width:'25px', height:'25px'}}/>
                              </Avatar>
                              {/* <Avatar src={square} sx={{width:'50px', height:'50px'}}/> */}
                            </ListItemAvatar>
                            <ListItemText 
                              primary={<CustomTypo variant="h6" mVariant="body1" color="primary.main" content={row.title}/>} 
                              sx={{paddingLeft:'5%'}}
                            />
                          </ListItem>
                        : 
                          <ListItem dense>
                            <ListItemAvatar sx={{justifyContent: "center", display: "flex"}}>
                              <BlurOnIcon sx={{color: "primary.main", width:'35px', height:'35px', transform: 'rotate(90deg)' }}/>
                            </ListItemAvatar>
                            <ListItemText 
                              primary={<CustomTypo variant="h6" mVariant="subtitle2" color="primary.main" content={row.subtitle}/>} 
                              secondary={<CustomTypo variant="body1" mVariant="body2" color="primary.main" content={row.description}/>} 
                              sx={{paddingLeft:'5%'}}
                            />
                          </ListItem>
                      }
                    </List>
                  </Grid>
              </Grid>
          ))}
      </Box>
  </Container>
  );
}