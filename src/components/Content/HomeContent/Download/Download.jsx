import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ShowCase from '../ShowCase/ShowCase';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

const Download = () => {
  return (
    // <Box component='section' bgcolor='background.default'>
    //   <Container maxWidth='xl'>
    <SectionWrapper>
      <ShowCase
        title='Download our game'
        subtitle='You can install our game on Android devices'
        image='/assets/Download.png'
        alt='Laying bear'
        imageStyles={{ boxShadow: 'none', background: 'transparent' }}>
        <Button
          href='https://drive.google.com/uc?export=download&id=1mJ0WWzRNf5J-lXkR1XTiZhnpCPz3mX9v'
          variant='contained'
          startIcon={<DownloadIcon />}
          sx={{
            color: 'text.primary',
          }}>
          Download
        </Button>
      </ShowCase>
      {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Box padding={1} bgcolor='background.default'>
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
            </Box> */}
    </SectionWrapper>
    //   </Container>
    // </Box>
  );
};

export default Download;
