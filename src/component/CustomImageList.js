import { ImageList, ImageListItem,ImageListItemBar, IconButton, Paper, Stack, Typography, styled, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import * as React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useTheme } from '@mui/styles';

function CustomImageList(props) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const theme = useTheme();

  return (
    <List>
      {props.info.map((item, index) => (
        <ListItem button key={index + item}>
          <ListItemAvatar>
            <img width='100px' height='100px' alt="Profile Picture" src={item.image}/>
          </ListItemAvatar>
          <Stack direction="column" spacing={1} sx={{paddingTop:'1%'}}>
            <Typography variant='body1'>
              {item.title}
            </Typography>
            <Typography variant='body2'>
              <VerifiedUserIcon fontSize="small" color="authenticated"/>{item.date}
            </Typography>
          </Stack>
        </ListItem>
      ))}
    </List>
    // <Stack direction="row" spacing={1} sx={{paddingTop:'1%'}}>
    //   {console.log(props.info)}
    //   { 
    //     props.info.map((item) => {
    //       return (
    //         <>
    //           <Paper
    //             // src= {item.image}
    //             sx={{
    //               position: 'relative',
    //               [theme.breakpoints.between(200,399)]: { 
    //                 width: item.width !=null ? item.width : '100px',
    //                 height: item.height !=null ? item.height : '100px',
    //               },
    //               [theme.breakpoints.between(400,'sm')]: { 
    //                 width: item.width !=null ? item.width : '150px',
    //                 height: item.height !=null ? item.height : '150px',
    //               },
    //               [theme.breakpoints.between('sm','xl')]: { 
    //                 width: item.width !=null ? item.width : '200px',
    //                 height: item.height !=null ? item.height : '200px',
    //               },
    //               [theme.breakpoints.up('xl')]: { 
    //                 width: item.width !=null ? item.width : '300px',
    //                 height: item.height !=null ? item.height : '300px',
    //               },
    //               height: item.width !=null ? item.width : '100%',
    //               backgroundImage: `url(${item.image})`,
    //               backgroundRepeat: 'no-repeat',
    //               backgroundPosition: 'center',
    //               backgroundSize: 'contain',
    //               backgroundColor: 'transparent',
    //               marginBottom: 0,
    //               marginLeft: 'auto',
    //               marginRight: 'auto',
    //               zIndex: '1',
    //             }}
    //           />
    //             <VerifiedUserIcon fontSize="small" color="authenticated"/>
    //             <Typography variant='body2'>
    //               {item.title}
    //           </Typography>     
    //         </>
    //       );
    //     })
    //   }
    // </Stack>
  );
}

export default CustomImageList;