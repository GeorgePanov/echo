import type { FC } from 'react';

import { Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

export const Case: FC = () => {
  return (
    <Stack>
      <Stack spacing={1}>
        <Typography sx={{ color: green[200] }} variant='h4'>
          Дело
        </Typography>
      </Stack>

      <Stack
        sx={{
          mt: '2.5rem',
          padding: '1rem',
          height: '50vh',
          backgroundColor: green[800],
          borderRadius: '1rem',
        }}
      >
        s
      </Stack>
    </Stack>
  );
};
