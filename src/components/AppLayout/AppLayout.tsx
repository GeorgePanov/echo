import { Container, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router';

import { ButtonGroup } from './ui/ButtonGroup';

export const AppLayout: React.FC = () => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack sx={{ width: '100%' }}>
        <Typography variant='h2'>ECHO</Typography>

        <Outlet />

        <ButtonGroup />
      </Stack>
    </Container>
  );
};
