import type { FC } from 'react';

import { Email, FolderCopy, Person } from '@mui/icons-material';
import { Badge, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';

import { appColors } from '~/shared/colors';
import { ROUTE_PATH } from '~/shared/types';

const buttonSx = {
  border: 0,
  borderRadius: '1.5rem',
  minWidth: 100,
  minHeight: 50,
  transition: 'all 0.3s ease',
  color: appColors.sage,

  '&.Mui-selected': {
    backgroundColor: appColors.sage,
    color: appColors.pine,
  },

  '&.Mui-selected:hover': {
    backgroundColor: appColors.sage,
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

        bgcolor: appColors.pine,

        boxShadow: `0 0 1px 1px ${appColors.moss}80`,

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
                backgroundColor: appColors.moss,
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
