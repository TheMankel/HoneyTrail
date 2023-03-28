import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FaqSection = () => {
  const data = [
    {
      title: 'Who are we?',
      description: 'We are young developers doing what we love!',
    },
    {
      title: 'How much does the game cost? How long is it?',
      description:
        'It is totally free! The length of each game is absolutely up to you.',
    },
    {
      title: 'Do we use cookies or other tracking technologies?',
      description:
        'No. Our site does not use any cookies or any other tracking technologies.',
    },
    {
      title: 'In what languages is the game available?',
      description: 'Everything is in English.',
    },
    {
      title: 'Did you make everything in the game yourself?',
      description:
        'Not everything, since We license assets from talented artists to speed up production. We modified some models in Blender and created the game in Unreal Engine 4.',
    },
    {
      title: 'Will you bring the game to IOS?',
      description:
        'Hopefully one day. For now, it can only be played on Android devices.',
    },
  ];

  return (
    <Box>
      {data.map((item, i) => (
        <Box key={i} marginBottom={4}>
          <Typography
            variant={'h6'}
            gutterBottom
            sx={{
              fontWeight: 'medium',
            }}>
            {i + 1}. {item.title}
          </Typography>
          <Typography
            component={'p'}
            color={'textSecondary'}
            textAlign='justify'>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FaqSection;
