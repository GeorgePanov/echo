import type { FC } from 'react';

import { LockClock } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

import { appColors } from '~/shared/colors';

export const Restricted: FC = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        minHeight: '70vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: appColors.sage,
      }}
    >
      <LockClock sx={{ fontSize: '5rem' }} />

      <Typography variant='h5'>Доступ ограничен</Typography>

      <Typography>
        Раздел откроется после
        <br />
        <strong>09:00 03.10.2026</strong>
      </Typography>
    </Stack>
  );
};
