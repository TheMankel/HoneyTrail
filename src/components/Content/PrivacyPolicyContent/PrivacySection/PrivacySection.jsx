import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PrivacySection = () => {
  const data = [
    {
      title: '1. What information do we collect?',
      description: `When you use our game, we may collect the following types of personal information: Device information: We may collect information about the device you use to access our game, such as your device type, operating system, and device identifiers. Usage information: We may collect information about how you use our game, such as the actions you take within the game and the time and date of your activity. Location information: If you enable location services for our game, we may collect information about your location. Other information: We may collect any other information that you voluntarily provide to us, such as your email address or other contact information.`,
    },
    {
      title: '2. How do we use your information?',
      description:
        'We may use your personal information for the following purposes: To provide and improve our game: We may use your information to operate our game, develop new features, and improve the user experience. To communicate with you: We may use your information to respond to your inquiries, provide customer support, and send you updates and promotional messages. To comply with legal obligations: We may use your information to comply with applicable laws, regulations, and legal process.',
    },
    {
      title: '3. Will your information be shared with anyone?',
      description:
        'We may share your personal information with the following third parties: Service providers: We may share your information with third-party service providers who help us operate our game, such as hosting providers, analytics providers, and advertising networks. Business partners: We may share your information with our business partners for their own marketing purposes. Legal purposes: We may disclose your information to law enforcement authorities, government officials, or other third parties when we are required to do so by law or in response to a subpoena, court order, or other legal process.',
    },
    {
      title: '4. Choice',
      description:
        'You may choose not to provide us with certain personal information, but this may limit your ability to use certain features of our game. You may also opt out of receiving promotional messages from us by following the instructions in those messages.',
    },
    {
      title: '5. Security',
      description:
        'We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.',
    },
    {
      title: '6. Childrens privacy',
      description:
        'We do not knowingly collect personal information from children under the age of 13.',
    },
    {
      title: '7. Changes to this policy',
      description:
        'We may update this privacy policy from time to time, and the updated policy will be posted on this page. If we make significant changes to the policy, we will notify you by email or by posting a notice in our game.',
    },
  ];

  return (
    <Box>
      {data.map((item, i) => (
        <Box key={i} marginBottom={4}>
          <Box>
            <Typography
              variant={'h6'}
              gutterBottom
              sx={{
                fontWeight: 'medium',
              }}>
              {item.title}
            </Typography>
            <Typography
              component={'p'}
              color={'textSecondary'}
              textAlign='justify'>
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PrivacySection;
