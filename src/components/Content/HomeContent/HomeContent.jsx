import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundImage: `url(${'public/assets/TreeCinematic.png'})`,
          height: '100vh',
          opacity: 0.8,
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

      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundImage: `url(${'public/assets/RightCam.png'})`,
          height: '100vh',
          opacity: 0.8,
        }}>
        <Container maxWidth='xl' sx={{ height: '100vh' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              flexDirection: 'row',
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography varaiant='h1'>Hey</Typography>
            </Box>
            <Box
              component='img'
              sx={{
                height: '30%',
                width: '40%',
                boxShadow: 20,
              }}
              alt='Ingame camera.'
              src='assets/Cinematic.png'
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
