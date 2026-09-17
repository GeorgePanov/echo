import { Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { type FC, useState } from 'react';

import { EmailList, InputClueButton, SelectedEmailDrawer } from './ui';

export const Email: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Stack spacing={1}>
        <Typography sx={{ color: green[200] }} variant='h4'>
          Почта
        </Typography>
        <Typography sx={{ color: green[200] }} variant='body1'>
          Входящие
        </Typography>
      </Stack>

      <EmailList setOpen={setOpen} />

      <InputClueButton />

      <SelectedEmailDrawer open={open} setOpen={setOpen} />
    </Stack>
  );
};
