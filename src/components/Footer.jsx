import React from 'react';
import { Box, Container, Typography, Paper, AppBar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar>
      <Paper
        sx={{
          marginTop: 'calc(10% + 60px)',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
        component='footer'
        square
        variant='outlined'>
        <Container maxWidth='xl'>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              my: 1,
            }}></Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              mb: 2,
            }}>
            <Typography variant='caption' color='initial'>
              Copyright ©2023 Wojciech Bielawa, Jakub Jankowski | Terms of
              Service | Privacy Policy
            </Typography>
          </Box>
        </Container>
      </Paper>
    </AppBar>
  );
};

export default Footer;
