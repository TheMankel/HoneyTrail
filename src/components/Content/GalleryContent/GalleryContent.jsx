import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6];

const GalleryContent = () => {
  const theme = useTheme();
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
      <Box bgcolor={theme.palette.background.olive}>
        <Container sx={{ py: 8 }} maxWidth='lg'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component='img'
                    image='https://source.unsplash.com/random'
                    alt='random'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GalleryContent;
