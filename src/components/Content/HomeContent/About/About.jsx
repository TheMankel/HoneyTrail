import { Typography } from '@mui/material';
import ShowCase from '../ShowCase/ShowCase';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import Heading from '../Heading/Heading';

const About = () => {
  return (
    <SectionWrapper
      id='about'
      sx={{
        backgroundColor: 'background.olive',
      }}>
      <Typography
        component='h1'
        fontSize={96}
        fontWeight={700}
        color='text.primary'
        textAlign='center'
        gutterBottom
        sx={{
          textShadow: '#162315 0 0 8px',
          fontSize: {
            xs: 56,
            md: 76,
            lg: 96,
          },
        }}>
        About
      </Typography>
      <ShowCase
        image='/assets/TreeCinematic.png'
        alt='View from the game.'
        imageStyles={{ boxShadow: 20 }}></ShowCase>
      <Heading
        title='NOW AVAILABLE'
        subtitle='You are playing as a running bear. Run as long as possible, collect Honey and avoid logs and tree stumps! Get the highest score now!'
        headingStyles={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
          borderRadius: 1,
        }}
      />
    </SectionWrapper>
  );
};

export default About;
