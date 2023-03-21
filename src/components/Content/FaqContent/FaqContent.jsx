import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FaqSection from './FaqSection/FaqSection';

const FaqContent = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Box
          boxShadow={4}
          borderRadius={2}
          my={5}
          bgcolor={theme.palette.background.olive}>
          <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2,
              }}>
              <Typography
                variant={'h3'}
                gutterBottom
                color='white'
                fontWeight={700}>
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
                fill={theme.palette.background.olive}
                d='M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z'></path>
            </Box>
          </Box>
          <Container position={'relative'} top={0}>
            <Box
              mt={1}
              container
              spacing={4}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}>
              <FaqSection />
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqContent;
