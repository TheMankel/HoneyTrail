import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Download = () => {
  return (
    <Box component='section' style={{ backgroundColor: '#593a0e' }}>
      <Container maxWidth='xl'>
        <Box
          sx={{
            // position: 'absolute',
            // right: 50,
            // bottom: 100,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Box>
            <Typography
              component='h2'
              fontSize={48}
              fontWeight={700}
              color='#ff9f10'>
              Download our game
            </Typography>
            <Typography
              color='#ff9f10'
              fontSize={24}
              fontWeight={500}
              maxWidth={400}
              gutterBottom>
              You can install our game on Android devices
            </Typography>
            <Button
              href='https://drive.google.com/uc?export=download&id=1mJ0WWzRNf5J-lXkR1XTiZhnpCPz3mX9v'
              variant='contained'
              startIcon={<DownloadIcon />}>
              Download
            </Button>
          </Box>
          {/* <Card sx={{ boxShadow: '0px 0px 4px 4px rgba(255, 255, 255, 0.25)' }}> */}
          <Card sx={{ boxShadow: 'none', background: 'transparent' }}>
            <CardMedia
              component='img'
              height='250'
              image='/assets/Download.png'
              alt='Laying bear'
            />
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Download;
