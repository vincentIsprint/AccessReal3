import { useState, React } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Box, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import CustomTypo from '../component/CustomTypo';
import CustomIcon from '../component/CustomIcon';

const FAQ = () => {
    const [header] = useState({
        Item : [
            {   
                leftcontent:
                    <CustomIcon size="large" mSize="large" edge="start" sx={{color:"primary.main"}}
                        component={Link} to={`/PreAuth`} icon={<ArrowBackIosNewIcon />} />,
                title: 'Frequent Asked Questions'
            }
        ]
    })

    const [body] = useState({
        Dropdown : [
            {
                title: 'Mobile Type',
                content:'iPhone',
            },
            {
                title: 'Mobile Type',
                content:'Android',
            }
        ],
        Accordion : [
            {
                title: 'App stuck in loading screen with a never ending spinner?',
                content:`If you have encountered the above issues. 
                You can try to clear the browser cache to resolve this issue. 
                This issue may be caused by internet connection issue.`,
            },
            {
                title: 'Getting timeout when scanning?',
                content:`If you have no problem authenticating the product before, 
                and only have problem this time round, it could mean this one is a fake. 
                Please be careful in purchasing. If you have been struggling to authenticate all the time, 
                it typically means your camera is unable to focus on objects very near the phone, or the image 
                quality is low. Please try the authentication on another phone.`
            }
        ],
        Footer: [
            {   
                content: <CustomTypo variant="subtitle1" mVariant="body2" color="primary.inverted" content="Powered by i-Sprint" align="center"/>
            }
        ]
    })

    const [value, setValue] = useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const [expanded, setExpanded] = useState('panel0');
    
    const handleChangePanel = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return(
        <>
            <Header info={header}/>
            <Container>
                {
                    body.Dropdown != null ? 
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{color:"primary.main"}} fullWidth>
                            <InputLabel>{body.Dropdown[0].title}</InputLabel>
                            <Select value={ value!= null ? value : body.Dropdown[0].content } label={body.Dropdown[0].title} onChange={handleChange} sx={{backgroundColor:"transparent"}}>
                                    {body.Dropdown.map((info,index) => (
                                        <MenuItem key={index} value={info.content} >{info.content}</MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Box>
                    : null
                }
                {
                    body.Accordion != null ? 
                    <Box sx={{paddingTop:'5%'}}>
                        {body.Accordion.map((info,index) => (
                            <Accordion key={index} expanded={expanded === 'panel' + index} onChange={handleChangePanel('panel'+index)} sx={{backgroundColor:"transparent"}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} id={index}>
                                    <CustomTypo variant="h6" mVariant="body2" bold color="primary.main" content={info.title} />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" content={info.content} />
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                    : null
                }
            </Container>
            {
                body.Footer != null ?
                    <Footer info={body.Footer[0]} />
                :null
            }
        </>
    );
}

export default FAQ;