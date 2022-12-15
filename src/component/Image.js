import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Paper, MobileStepper, Stack } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

function Image(props) {

  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.info.length;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const Item = styled(Paper)(({ theme }) => ({
    background:'transparent',
    padding: theme.spacing(1),
    boxShadow: 'none'
  }));

  return (
    <>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      > 
        {props.info.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Paper
                elevation={0}
                key={index}
                sx={{
                  position: 'relative',
                  [theme.breakpoints.between(200,399)]: { 
                    maxWidth: step.width !== undefined ? step.width : '200px',
                    height: step.height !== undefined ? step.height : '200px',
                  },
                  [theme.breakpoints.between(400,'sm')]: { 
                    maxWidth: step.width !== undefined ? step.width : '350px',
                    height: step.height !== undefined ? step.height : '350px',
                  },
                  [theme.breakpoints.between('sm','xl')]: { 
                    maxWidth: step.width !== undefined ? step.width : '400px',
                    height: step.height !== undefined ? step.height : '400px',
                  },
                  [theme.breakpoints.up('xl')]: { 
                    maxWidth: step.width !== undefined ? step.width : '400px',
                    height: step.height !== undefined ? step.height : '400px',
                  },
                  height: step.height !== undefined ? step.height : '100%',
                  backgroundImage: `url(${step.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundColor: 'transparent',
                  marginBottom: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  zIndex: '1',
                }}
              >
              </Paper>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      {maxSteps > 1 ?
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Item><MobileStepper steps={maxSteps} position="static" activeStep={activeStep} sx={{background:'transparent'}} /></Item>
          </Stack>
      : null}
    </>
  );
}

export default Image;