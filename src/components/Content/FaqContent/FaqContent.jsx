import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FaqSection from './FaqSection/FaqSection';

const FaqContent = () => {
  const theme = useTheme();
  return (
    <Box p={4}>
      <Container>
        <Box boxShadow={4} borderRadius={2} bgcolor='background.paper' pb={1}>
          <Box bgcolor='primary.main' borderRadius={2}>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              textAlign='center'
              pt={4}>
              <Typography variant={'h3'} gutterBottom fontWeight={700}>
                Frequently asked questions
              </Typography>
            </Box>
            <Box
              component={'svg'}
              preserveAspectRatio='none'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 1920 100.1'
              width={'100%'}
              marginBottom={-1.5}>
              <path
                fill={theme.palette.background.paper}
                d='M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z'></path>
            </Box>
          </Box>
          <Container position={'relative'} top={0}>
            <Box flexDirection={{ xs: 'column-reverse', md: 'row' }}>
              <FaqSection />
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqContent;
