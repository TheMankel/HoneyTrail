import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GalleryCards from './GalleryCards/GalleryCards';

const GalleryContent = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}>
        <Container maxWidth='md'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom>
            Gallery
          </Typography>
          <Typography
            variant='h4'
            align='center'
            color='text.secondary'
            paragraph>
            Get a glimpse of the fast-paced action and stunning graphics in our
            game gallery. Join the fun and show off your bear skills today!
          </Typography>
        </Container>
      </Box>
      <GalleryCards />
    </>
  );
};

export default GalleryContent;
