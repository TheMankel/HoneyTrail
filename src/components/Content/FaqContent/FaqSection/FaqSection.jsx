import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FaqSection = () => {
  const data = [
    {
      title: 'Who are we?',
      description: 'We are young developers looking for fame!',
    },
    {
      title: 'How much does it cost? How long is the game?',
      description:
        'It is totally free! The length of each game is absolutely up to you.',
    },
    {
      title: 'Do we use cookies or other tracking technologies?',
      description:
        'No. Our site does not use any cookies or any other tracking technologies.',
    },
    {
      title: 'What languages will the game be localized in?',
      description: 'Everything is written in English.',
    },
    {
      title: 'Did you make everything in the game yourself?',
      description:
        'Not everything, since We license assets from talented artists to speed up production. We modified models in Blender and created the game in Unreal Engine 4.',
    },
    {
      title: 'Will you bring the game to IOS?',
      description:
        'Maybe one day. For now you can only play it on Android devices.',
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
