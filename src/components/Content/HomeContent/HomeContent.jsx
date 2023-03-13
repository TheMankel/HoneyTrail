import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundImage: `url(${'public/assets/Cinematic.png'})`,
        height: '100vh',
      }}>
      <Container maxWidth='xl' sx={{ height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
          }}>
          <Typography fontSize={96} fontWeight={700} color='#ffd50f'>
            Honey Trail
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
