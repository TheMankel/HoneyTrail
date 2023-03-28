import { Box, Grid, Container } from '@mui/material';
import ContactAside from './ContactAside/ContactAside';
import ContactForm from './ContactForm/ContactForm';

const ContactContent = () => {
  return (
    <Box bgcolor='background.olive'>
      <Container>
        <Grid
          container
          spacing={8}
          sx={{
            py: {
              xs: 2,
              md: 4,
            },
          }}>
          <Grid item container justifyContent={'center'} xs={12} md={6}>
            <ContactAside />
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactContent;
