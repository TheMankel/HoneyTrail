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
    <Box component='section' bgcolor='background.default'>
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Box>
            <Typography
              component='h2'
              fontSize={48}
              fontWeight={700}
              color='text.primary'>
              Download our game
            </Typography>
            <Typography
              color='text.secondary'
              fontSize={24}
              fontWeight={500}
              maxWidth={400}
              gutterBottom>
              You can install our game on Android devices
            </Typography>
            <Button
              href='https://drive.google.com/uc?export=download&id=1mJ0WWzRNf5J-lXkR1XTiZhnpCPz3mX9v'
              variant='contained'
              startIcon={<DownloadIcon />}
              sx={{
                color: 'text.primary',
              }}>
              Download
            </Button>
          </Box>
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
