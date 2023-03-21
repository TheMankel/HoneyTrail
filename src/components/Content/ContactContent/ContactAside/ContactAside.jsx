import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import Heading from '../../../UI/Heading/Heading';

const ContactAside = () => {
  const subsection = {
    textAlign: {
      xs: 'center',
      md: 'justify',
    },
    margin: {
      xs: '0 auto',
      md: '0',
    },
    fontSize: {
      xs: 14,
      md: 18,
    },
  };

  return (
    <Box height={'100%'} width={'100%'} maxWidth={{ xs: 500, md: '100%' }}>
      <Heading
        title='Contact Us'
        subtitle='We would love to talk about how we can help you.'>
        <Card sx={{ boxShadow: 'none', background: 'transparent' }}>
          <CardMedia
            component='img'
            image='/assets/Contact.png'
            alt='Waving Bear'
            sx={{
              padding: 4,
              objectFit: 'scale-down',
              maxHeight: 600,
            }}
          />
        </Card>
        <Typography
          color='text.secondary'
          fontWeight={500}
          maxWidth={800}
          sx={subsection}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Heading>
    </Box>
  );
};

export default ContactAside;
