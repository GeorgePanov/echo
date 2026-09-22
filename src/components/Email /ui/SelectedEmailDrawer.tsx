import { ArrowBack } from '@mui/icons-material';
import { SwipeableDrawer, Stack, Typography, IconButton } from '@mui/material';
import { green } from '@mui/material/colors';
import { type FC } from 'react';

import { mocksEmails } from '~/shared/api/mocksEmails';
import type { emailType } from '~/shared/types';

type DrawerProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
  selectedEmailId: emailType['emailId'] | null;
};

export const SelectedEmailDrawer: FC<DrawerProps> = (props) => {
  const { open, setOpen, selectedEmailId } = props;

  const { author, title, message } =
    mocksEmails.find((e) => e.emailId === selectedEmailId) || {};

  return (
    <SwipeableDrawer
      anchor='right'
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: green[900],
            width: '100%',
            maxWidth: '40rem',
          },
        },
      }}
    >
      <Stack sx={{ gap: '1rem', padding: 3 }}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem',
            margin: '0 0 1rem 0',
          }}
        >
          <IconButton
            size='large'
            onClick={() => setOpen(false)}
            sx={{
              backgroundColor: green[100],
              color: green[900],
            }}
          >
            <ArrowBack />
          </IconButton>

          <Typography sx={{ color: green[100] }} variant='h5'>
            {title}
          </Typography>
        </Stack>

        <Typography
          sx={{ color: green[200] }}
          variant='body2'
          color='text.secondary'
        >
          От: {author}
        </Typography>

        <Typography
          sx={{ color: green[200], whiteSpace: 'pre-line' }}
          variant='body1'
        >
          {message}
        </Typography>
      </Stack>
    </SwipeableDrawer>
  );
};
