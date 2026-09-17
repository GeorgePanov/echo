import type { FC } from 'react';

import { SwipeableDrawer, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

import { mocksEmails } from '~/shared/api/mocksEmails';

type DrawerProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
  selectedEmail: string | null;
};

export const SelectedEmailDrawer: FC<DrawerProps> = (props) => {
  const { open, setOpen, selectedEmail } = props;

  const { author, title, message } =
    mocksEmails.find((e) => e.emailId === selectedEmail) || {};

  return (
    <SwipeableDrawer
      anchor='right'
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Stack
        spacing={2}
        sx={{
          height: '100%',
          padding: 3,
          backgroundColor: green[900],
        }}
      >
        <Typography sx={{ color: green[100] }} variant='h5'>
          {title}
        </Typography>

        <Typography
          sx={{ color: green[200] }}
          variant='body2'
          color='text.secondary'
        >
          От: {author}
        </Typography>

        <Typography sx={{ color: green[200] }} variant='body1'>
          {message}
        </Typography>
      </Stack>
    </SwipeableDrawer>
  );
};
