import { Typography, Box } from '@mui/material';
import ShowCase from '../ShowCase/ShowCase';
import SectionWrapper from '../../../UI/SectionWrapper/SectionWrapper';
import Heading from '../../../UI/Heading/Heading';

const About = () => {
  const subsection = {
    textAlign: {
      xs: 'center',
      md: 'justify',
    },
    margin: {
      xs: '0 auto',
      md: '0',
    },
    fontSize: {
      xs: 18,
      md: 24,
      lg: 30,
    },
  };
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
        // title='Now available'
        title='Welcome to Honey Trail!'
        // subtitle='You are playing as a running bear. Run as long as possible, collect Honey and avoid logs and tree stumps! Get the highest score now!'
        subtitle="Do you like honey? Do you like running? If you do, you'll love Honey Trail!"
        headingStyles={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
          borderRadius: 1,
          gap: 1,
        }}>
        <Typography
          color='text.secondary'
          fontWeight={500}
          maxWidth={800}
          sx={subsection}>
          In this fast-paced game, you'll traverse a woodland path collecting
          delicious, golden honey pots while avoiding stumps and logs.
        </Typography>
        <Typography
          color='text.secondary'
          fontWeight={500}
          maxWidth={800}
          sx={subsection}>
          You'll need to be quick and nimble to get the highest score and show
          off your mad bear skills.
        </Typography>
        <Typography
          color='text.secondary'
          fontWeight={500}
          maxWidth={800}
          sx={subsection}>
          So get ready to have a bear-y good time and start playing{' '}
          <Box component='span' borderBottom={4}>
            Honey Trail
          </Box>
          !
        </Typography>
      </Heading>
    </SectionWrapper>
  );
};

export default About;

//In this fast-paced game, you'll traverse a woodland path collecting delicious, golden honey while avoiding stumps and logs. You'll need to be quick and nimble to get the highest score and show off your mad bear skills. So get ready to have a bear-y good time and start playing Honey Trail!"
