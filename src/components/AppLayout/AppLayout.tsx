import { Container, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router';

import { appColors } from '~/shared/colors';

import { ButtonGroup } from './ui/ButtonGroup';

export const AppLayout: React.FC = () => {
  return (
    <Container
      sx={{
        padding: '1rem',
        minHeight: '100vh',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'center',
        background: appColors.primary,
      }}
    >
      <Stack sx={{ width: '100%' }}>
        <Typography
          sx={{
            color: appColors.secondary,
            fontWeight: 'normal',
          }}
          variant='h2'
        >
          ECHO
        </Typography>

        <Stack sx={{ mt: '0.5rem', mb: '6rem' }}>
          <Outlet />
        </Stack>

        <ButtonGroup />
      </Stack>
    </Container>
  );
};
