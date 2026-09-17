import type { FC } from 'react';

import { Email, FolderCopy, Person } from '@mui/icons-material';
import {
  Badge,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router';

import { ROUTE_PATH } from '~/shared/types';

const buttonSx = {
  border: 0,
  borderRadius: '1.5rem',
  minWidth: 100,
  minHeight: 50,
  transition: 'all 0.3s ease',

  '&.Mui-selected': {
    backgroundColor: green[800],
    color: green[100],
  },

  '&.Mui-selected:hover': {
    backgroundColor: green[800],
  },
};

export const ButtonGroup: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <ToggleButtonGroup
      value={pathname}
      exclusive
      onChange={(_, value) => value && navigate(value)}
      sx={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '2rem',

        bgcolor: green[700],

        '& .MuiToggleButton-root': buttonSx,
      }}
    >
      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: '0.5rem',
          padding: '10px',
        }}
      >
        <ToggleButton value={ROUTE_PATH.MAIN}>
          <Badge
            // badgeContent={true}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: green[400],
              },
            }}
          >
            <Email />
          </Badge>
        </ToggleButton>

        <ToggleButton value={ROUTE_PATH.CASE}>
          <FolderCopy />
        </ToggleButton>

        <ToggleButton value={ROUTE_PATH.PROFILE}>
          <Person />
        </ToggleButton>
      </Stack>
    </ToggleButtonGroup>
  );
};
