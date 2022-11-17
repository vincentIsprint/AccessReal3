import * as React from 'react';
import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import {TimelineOppositeContent, TimelineItem as MuiTimelineItem, TimelineContent, TimelineSeparator, TimelineConnector, TimelineDot} from '@mui/lab';

function ProductTimeline(props) {
  
  const TimelineItem = withStyles({
    missingOppositeContent: {
      "&:before": {
        display: "none"
      }
    }
  })(MuiTimelineItem);

  return (
        <TimelineItem>
            {props.info.Ltitle !=null && props.info.Ldescription != null ?
              <TimelineOppositeContent sx={{ py: '12px', textAlign:'right'}}>
                  <Typography variant="subtitle" sx={{color: props.info.color }}>
                      { props.info.Ltitle != null ? props.info.Ltitle : null }
                  </Typography>
                  <Typography variant="subtitle2" sx={{color:props.info.color}}>
                      { props.info.Ldescription != null ? props.info.Ldescription : null }
                  </Typography>
              </TimelineOppositeContent> 
            :null}
            <TimelineSeparator>
                <TimelineConnector />
                    { props.info.icon != null ? <TimelineDot sx={{backgroundColor:"secondary.main"}}> { props.info.icon }</TimelineDot> : 
                      <TimelineDot variant="outlined" sx={{color:props.info.color}} /> 
                    }
                <TimelineConnector />
            </TimelineSeparator>
            {props.info.Rtitle !=null && props.info.Rdescription != null ?
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="subtitle" sx={{color:props.info.color}}>
                      { props.info.Rtitle != null ? props.info.Rtitle : null }
                  </Typography>
                  <Typography variant="subtitle2" sx={{color:props.info.color}}>
                      { props.info.Rdescription != null ? props.info.Rdescription : null }
                  </Typography>
              </TimelineContent> 
            :null}
        </TimelineItem>
  );
}

export default ProductTimeline;