import { Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ShowCase from '../ShowCase/ShowCase';
import SectionWrapper from '../../../UI/SectionWrapper/SectionWrapper';
import Heading from '../../../UI/Heading/Heading';

const Download = () => {
  return (
    <SectionWrapper id='download' sx={{ backgroundColor: 'background.paper' }}>
      <ShowCase
        title='Download our game'
        subtitle='You can install our game on Android devices'
        image='/assets/Download.png'
        alt='Laying bear'
        imageStyles={{ boxShadow: 'none', background: 'transparent' }}>
        <Heading
          title='Download our game'
          subtitle='You can install our game on Android devices'>
          <Box
            display='flex'
            marginTop={2}
            sx={{
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
            }}>
            <Button
              // href='https://drive.google.com/uc?export=download&id=1mJ0WWzRNf5J-lXkR1XTiZhnpCPz3mX9v'
              href='https://store7.gofile.io/download/af4d8be5-141a-4e64-aac2-cb89ac5de236/HoneyTrail_GTI_Jankowski_Bielawa.apk'
              variant='contained'
              startIcon={<DownloadIcon />}>
              Download
            </Button>
          </Box>
        </Heading>
      </ShowCase>
    </SectionWrapper>
  );
};

export default Download;
