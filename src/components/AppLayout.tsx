import { Email, FolderCopy } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import {
  Container,
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { useNavigate, useLocation, Outlet } from 'react-router';

import { ROUTE_PATH } from '../shared/types';

export const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

        <ToggleButtonGroup
          value={location.pathname}
          exclusive
          onChange={(_, value) => {
            navigate(value);
          }}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            borderTop: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',

            '& .MuiToggleButton-root': {
              borderRadius: 5,
              transition: 'all 0.3s ease',
            },
          }}
        >
          <ToggleButton
            value={ROUTE_PATH.EMAIL}
            sx={{
              border: 0,
              borderRadius: 2,
              minWidth: 56,
              minHeight: 56,

              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              },

              '&.Mui-selected:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <Email />
          </ToggleButton>

          <ToggleButton
            value={ROUTE_PATH.CASE}
            sx={{
              border: 0,
              borderRadius: '50%',
              minWidth: 56,
              minHeight: 56,

              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              },

              '&.Mui-selected:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <FolderCopy />
          </ToggleButton>

          <ToggleButton
            value={ROUTE_PATH.PROFILE}
            sx={{
              border: 0,
              borderRadius: '50%',
              minWidth: 56,
              minHeight: 56,

              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              },

              '&.Mui-selected:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <PersonIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Container>
  );
};
