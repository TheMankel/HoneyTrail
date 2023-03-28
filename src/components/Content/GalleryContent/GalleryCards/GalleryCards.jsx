import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Fade } from '@mui/material';

const GalleryCards = () => {
  const cards = [
    {
      id: 1,
      path: 'assets/Gallery/ForestView.jpg',
      heading: 'The Forest',
      content: 'Bear running through the forest',
    },
    {
      id: 2,
      path: 'assets/Gallery/BearRun.jpg',
      heading: 'Gameplay',
      content: 'Third person view of the bear',
    },
    {
      id: 3,
      path: 'assets/Gallery/TopView.jpg',
      heading: 'From the sky',
      content: 'Overall look at the generated map',
    },
    {
      id: 4,
      path: 'assets/Gallery/BearJump.jpg',
      heading: 'Jumping Bear',
      content: 'User interface and ability to jump',
    },
    {
      id: 5,
      path: 'assets/Gallery/FrontView.jpg',
      heading: 'Shadow run',
      content: 'The darker part of the map',
    },
    {
      id: 6,
      path: 'assets/Gallery/GameOver.jpg',
      heading: 'Game Over',
      content: 'End of the game',
    },
  ];

  return (
    <Fade in={true} timeout={1500}>
      <Box py={2}>
        <Grid container spacing={4} sx={{ height: '100%' }}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component='img'
                  image={card.path}
                  alt='Gallery image'
                  loading='lazy'
                  sx={{
                    height: {
                      sm: '60%',
                      lg: '70%',
                    },
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {card.heading}
                  </Typography>
                  <Typography>{card.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
};

export default GalleryCards;
