import React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const GalleryCards = () => {
  const theme = useTheme();

  const cards = [
    {
      id: 1,
      path: 'assets/Gallery/ForestView.png',
      heading: 'The Forest',
      content: 'Bear running through the forest',
    },
    {
      id: 2,
      path: 'assets/Gallery/BearRun.png',
      heading: 'Gameplay',
      content: 'Third person view of the bear',
    },
    {
      id: 3,
      path: 'assets/Gallery/TopView.png',
      heading: 'From the sky',
      content: 'Overall look at the generated map',
    },
    {
      id: 4,
      path: 'assets/Gallery/BearJump.png',
      heading: 'Jumping Bear',
      content: 'User interface and ability to jump',
    },
    {
      id: 5,
      path: 'assets/Gallery/FrontView.png',
      heading: 'Shadow run',
      content: 'The darker part of the map',
    },
    {
      id: 6,
      path: 'assets/Gallery/GameOver.png',
      heading: 'Game Over',
      content: 'End of the game',
    },
  ];

  return (
    <Box py={2}>
      <Grid container spacing={4} sx={{ height: '100%' }}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component='img'
                image={card.path}
                alt='Gallery image'
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
  );
};

export default GalleryCards;
